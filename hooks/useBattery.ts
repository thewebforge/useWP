// WordPress Dependencies
import { useEffect, useState } from "@wordpress/element";

// This hook is based on the Battery API, which is not yet widely supported
// https://w3c.github.io/battery/#examples

// Define our own types as the Battery API is not yet defined in TypeScript
// https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API
interface BatteryManager extends EventTarget {
  charging: boolean;
  chargingTime: number | null;
  dischargingTime: number | null;
  level: number | null;
  chargingchange: EventListener;
  chargingtimechange: EventListener;
  dischargingtimechange: EventListener;
  levelchange: EventListener;
}

interface NavigatorWithBattery extends Navigator {
  getBattery: () => Promise<BatteryManager>;
}

type UnsupportedBatteryHookState = {
  supported: false;
};
type SupportedBatteryHookState = {
  supported: true;
  loading: boolean;
  level: number | null;
  charging: boolean | null;
  chargingTime: number | null;
  dischargingTime: number | null;
};
type BatteryHookState =
  | SupportedBatteryHookState
  | UnsupportedBatteryHookState;

const useBattery = () => {
  const [state, setState] = useState<BatteryHookState>({
    supported: true,
    loading: true,
    level: null,
    charging: null,
    chargingTime: null,
    dischargingTime: null,
  });

  useEffect(() => {
    if (!(navigator as NavigatorWithBattery).getBattery) {
      setState({
        supported: false,
      });
      return;
    }

    let battery: BatteryManager | null = null;

    const handleChange = () => {
      setState({
        supported: true,
        loading: false,
        level: battery?.level ?? null,
        charging: battery?.charging ?? null,
        chargingTime: battery?.chargingTime ?? null,
        dischargingTime: battery?.dischargingTime ?? null,
      });
    };

    (navigator as NavigatorWithBattery)
      ?.getBattery()
      .then((navigatorBattery) => {
        battery = navigatorBattery;
        handleChange();

        navigatorBattery.addEventListener("levelchange", handleChange);
        navigatorBattery.addEventListener("chargingchange", handleChange);
        navigatorBattery.addEventListener("chargingtimechange", handleChange);
        navigatorBattery.addEventListener(
          "dischargingtimechange",
          handleChange
        );
      });

    return () => {
      if (battery) {
        battery.removeEventListener("levelchange", handleChange);
        battery.removeEventListener("chargingchange", handleChange);
        battery.removeEventListener("chargingtimechange", handleChange);
        battery.removeEventListener("dischargingtimechange", handleChange);
      }
    };
  }, []);

  return state;
};

export default useBattery;

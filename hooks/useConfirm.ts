import { useState } from "@wordpress/element";
import type { Dispatch, SetStateAction } from "react";
import useUpdateEffect from "./useUpdateEffect.js";

export type UseConfirmReturn = [boolean, Dispatch<SetStateAction<boolean>>];

export default function useConfirm(duration: number = 2000): UseConfirmReturn {
  const [confirm, setConfirm] = useState(false);

  useUpdateEffect(() => {
    if (confirm) {
      setTimeout(() => {
        setConfirm(false);
      }, duration);
    }
  }, [confirm]);

  return [confirm, setConfirm];
}

import type { SyntheticEvent } from "react";

declare global {
    interface Window {
        TouchEvent: any;
    }
}

const isTouchEvent = ({ nativeEvent }: SyntheticEvent) => {
        return window.TouchEvent
                ? nativeEvent instanceof TouchEvent
                : "touches" in nativeEvent;
};

export default isTouchEvent;

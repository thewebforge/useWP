import type { SyntheticEvent } from "react";

const isMouseEvent = (event: SyntheticEvent) => {
    return event.nativeEvent instanceof MouseEvent;
};

export default isMouseEvent;

import SwitchContext from "./SwitchContext";
import React from "react";

export function ToggleButton() {
    const { toggle, toggleValue } = React.useContext(SwitchContext)
    const buttonLabel = toggle ? "Hide Username" : "Show Username"
    return (
        <button onClick={toggleValue}>
            {buttonLabel}
        </button>
    )

}


export default ToggleButton
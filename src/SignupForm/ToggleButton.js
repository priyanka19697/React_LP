import SwitchContext from "./SwitchContext";
import React from "react";

export function ToggleButton() {
    const { toggle, setToggleValue } = React.useContext(SwitchContext)

    const buttonLabel = toggle ? "Hide Username" : "Show Username"
    return (
        <button onClick={setToggleValue}>
            {buttonLabel}
        </button>
    )

}


export default ToggleButton
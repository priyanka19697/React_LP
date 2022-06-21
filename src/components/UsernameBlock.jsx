import React from "react"

function UsernameBlock({toggle, values, handleInputChange}){
        if(toggle){
            return(
                <div>
                <label>Enter Username</label>
                <input required type="text" name="username" value={values.username} onChange={handleInputChange}></input>
            </div>
            )
        }
        return ""

    }

export default UsernameBlock
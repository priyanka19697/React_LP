import React, {useState} from 'react';
import SignupForm from './SignupForm';
import SwitchContext from '../context/SwitchContext';

function Parent(){

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        repassword: '',
        username: ''
    })
    const [errors, setErrors] = useState([])
    const [toggle, setToggle] = useState(true)

    const setToggleValue = () => {
        setToggle(!toggle)
    }

    return(
        <div>
             <SwitchContext.Provider value={{toggle,setToggleValue}}>
                 <SignupForm values={values} setValues={setValues} errors={errors} setErrors={setErrors}/>
             </SwitchContext.Provider>
        </div>
    )
}

export default Parent;
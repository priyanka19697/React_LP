import React, {useState, useContext} from 'react';
import Greeting from '../Greetings/Greetings';
import Counter from '../Counter/Counter'
import ListView  from '../ListView/ListView';
import SignupForm from '../SignupForm/SignupForm';
import SwitchContext from '../SignupForm/SwitchContext';

function Parent(){
    // const [count, setCount] = useState(0)
    // const numbers = [1,2,3,4,5]
    // const name = "Anya"
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        repassword: '',
        username: ''
    })
    const [errors, setErrors] = useState([])
    const [toggle, setToggle] = useState(true)

    const toggleValue = () => {
        setToggle(!toggle)
    }

    return(
        <div>
             {/* <Greeting name={name}/>
             <Counter count= {count} setCount={setCount} />
             <ListView numbers = {numbers}></ListView>  */}
             <SwitchContext.Provider value={{toggle,toggleValue}}>
                 <SignupForm values={values} setValues={setValues} errors={errors} setErrors={setErrors}/>
             </SwitchContext.Provider>


        </div>
    )
}

export default Parent;
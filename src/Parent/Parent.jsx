import React, {useState} from 'react';
import Greeting from '../Greetings/Greetings';
import Counter from '../Counter/Counter'
import ListView  from '../ListView/ListView';
import SignupForm from '../SignupForm/SignupForm';

function Parent(){
    const [count, setCount] = useState(0)
    const numbers = [1,2,3,4,5]
    const name = "Anya"
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: ''
    })
    const [errors, setErrors] = useState([])
    return(
        <div>
             <Greeting name={name}/>
             <Counter count= {count} setCount={setCount} />
             <ListView numbers = {numbers}></ListView> 
             <SignupForm values={values} setValues={setValues} errors={errors} setErrors={setErrors}/>
        </div>
    )
}

export default Parent;
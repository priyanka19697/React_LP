import React, {useState} from 'react'
import { validateData } from './helpers';

function SignupForm(){
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: ''
    })

    const [errors, setErrors] = useState([]);

    const handleInputChange = (event) => {
        event.persist();
        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateData(values);
        if (errors.length > 0){
            setErrors(errors);
            return;
        } else {
            setErrors([]);
        }
        console.log('success', values)
    }
    
    const errorItems = errors && errors.map((error, idx) => {
        return(<li key={idx}>{error}</li>)
    })

    return(
        <form onSubmit={handleSubmit} action>
            <div>
                <label>Enter Name</label>
                <input required type="text" name="name" value={values.name} onChange={handleInputChange}></input>
            </div>
            <div>
                <label> Enter Email</label>
                <input required type="text" name="email" value={values.email} onChange={handleInputChange}></input>
            </div>
            <div>
                <label> Enter Password</label>
                <input required type="password" name="password" value={values.password} onChange={handleInputChange}></input>
            </div>
            <div>
                <label> Re-Enter Password</label>
                <input required type="password" name="rePassword" value={values.rePassword} onChange={handleInputChange}></input>
            </div>   
            <button type='submit'> Submit </button> 
            <ul>
                {errors && errorItems}
            </ul>
        </form>
    )
}

export default SignupForm
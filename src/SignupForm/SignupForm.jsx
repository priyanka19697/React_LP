import React, {useContext} from 'react'
import { validateData } from './helpers';
import PropTypes from 'prop-types'
import SwitchContext from './SwitchContext';
import ToggleButton from './ToggleButton';
import UsernameBlock from './UsernameBlock';

function SignupForm({values, setValues, errors, setErrors}){
    // const [values, setValues] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    //     rePassword: ''
    // })

    // const [errors, setErrors] = useState([]);

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

    const {toggle, setToggleValue} = useContext(SwitchContext)
 

    return(
        <form onSubmit={handleSubmit} action>
            <ToggleButton/>
            <UsernameBlock toggle={toggle} values={values} handleInputChange={handleInputChange}></UsernameBlock>
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
                <input required type="password" name="repassword" value={values.rePassword} onChange={handleInputChange}></input>
            </div>   
            <button type='submit'> Submit </button> 
            <ul>
                {errors && errorItems}
            </ul>
        </form>
    )
}

SignupForm.propTypes = {
    values: PropTypes.object,
    errors: PropTypes.array
}

export default SignupForm


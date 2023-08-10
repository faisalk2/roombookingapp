
import { Button, Form } from 'react-bootstrap'
import styles from './style.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../Reducer/authReducer/action';
import { REGISTER_USER_SUCCESS } from '../Reducer/authReducer/type';
import { useNavigate } from 'react-router-dom';
import { MdAppRegistration } from 'react-icons/md'
import { toast } from 'react-toastify'

const getEmptyForm = () => {
    return {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
}

const Registration = () => {
    const [form, setForm] = useState(getEmptyForm())
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleChange = (key: string, value: string) => {
        setForm((pre) => {
            return {
                ...pre, [key]: value
            }
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()

        const { name, email, password } = form;

        if (form.password === form.confirmPassword) {
            if (Object.values(form).filter(Boolean).length === 4) {

                // @ts-ignore
                dispatch(registerUser({ name, email, password })).then(res => {
                    if (res.type === REGISTER_USER_SUCCESS) {
                        setForm(getEmptyForm)
                        toast.success("registration successful")
                        navigate('/login')
                    } else {
                        toast.error("something went wrong please try again")
                    }
                })

            } else {
                toast.error('All fields are required')
            }
        } else {
            toast.error('password and confirm password should be same')
        }
    }

    return (
        <div className={`${styles.loginContainer}`} >
            <h4>
                <div><MdAppRegistration size={50} style={{ color: "#fc8019" }} /></div>
                Registration Form
            </h4>
            <Form onSubmit={handleSubmit} >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className='text-left  d-block' >Name : </Form.Label>
                    <Form.Control value={form?.name} onChange={(e) => handleChange('name', e.target.value)} type="text" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className='text-left  d-block' >Email address</Form.Label>
                    <Form.Control value={form?.email} onChange={(e) => handleChange('email', e.target.value)} type="email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className='text-left  d-block' >Password</Form.Label>
                    <Form.Control value={form?.password} onChange={(e) => handleChange('password', e.target.value)} type="password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className='text-left  d-block' >Confirm Password</Form.Label>
                    <Form.Control value={form?.confirmPassword} onChange={(e) => handleChange('confirmPassword', e.target.value)} type="password" />
                </Form.Group>
                <Button variant="outline-warning" onClick={() => setForm(getEmptyForm())} className='mt-4 mx-2'>
                    Clear
                </Button>
                <Button style={{ background: '#fc8019', border: '1px solid #fc8019' }} className='mt-4' type={'submit'}>
                    Register
                </Button>
            </Form>
        </div>
    )
}

export default Registration
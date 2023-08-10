import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import styles from './style.module.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LOGIN_USER_SUCCESS } from '../Reducer/authReducer/type'
import { loginUser } from '../Reducer/authReducer/action'
import { AiOutlineUser } from 'react-icons/ai'
import { toast } from 'react-toastify'

const getEmptyForm = () => {
    return {
        email: '',
        password: '',
    }
}

const Login = () => {
    const [form, setForm] = useState(getEmptyForm())
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleChange = (key: string, value: string) => {
        setForm((pre: any) => {
            return {
                ...pre, [key]: value
            }
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()

        if (Object.values(form).filter(Boolean).length === 2) {
            // @ts-ignore
            dispatch(loginUser(form)).then(res => {
                if (res.type === LOGIN_USER_SUCCESS) {
                    setForm(getEmptyForm)
                    toast.success('Login successful')
                    navigate('/Home')
                }else{
                    toast.error('wrong user name or password')
                }
            })

        } else {
            alert('All fields are required')

        }
    }

    return (
        <div className={`${styles.loginContainer}`} >
            <h4>
                <div><AiOutlineUser size={50} style={{ color: "#fc8019" }} /></div>
                Login
            </h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className='text-left  d-block' >Email address</Form.Label>
                    <Form.Control value={form?.email} onChange={(e) => handleChange('email', e.target.value)} type="email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className='text-left  d-block' >Password</Form.Label>
                    <Form.Control value={form?.password} onChange={(e) => handleChange('password', e.target.value)} type="password" />
                </Form.Group>
                <Button style={{ background: '#fc8019', border: '1px solid #fc8019' }} className='mt-4' type='submit'>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Login
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useState } from 'react'
import { MdOutlineBedroomChild } from 'react-icons/md'
import { ADD_ROOM_SUCCESS, EDIT_ROOM_SUCCESS } from '../Reducer/userReducer/type'
import { useDispatch } from 'react-redux'
import { addRoom, editRoom, getRoom } from '../Reducer/userReducer/action'
import { toast } from 'react-toastify'

const getEmptyForm = () => {
    return {
        name: '',
        imageUrls: '',
        rentPerDay: "",
        type: "",
        noOfPerson: "",
        phone: "",
        description: "",
        booked: false

    }
}
const AddRoom = ({ width = 'w-50', data = null, isEdit = false, handleClose, id = null }: any) => {
    const [form, setForm] = useState(data ?? getEmptyForm())

    const dispatch = useDispatch()
    const handleChange = (key: string, value: string) => {
        setForm((pre: any) => {
            return {
                ...pre, [key]: value
            }
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
       

        if (form.phone.toString().length !== 10) {
            alert('please enter correct phone number');
            return

        }
        if (Object.values(form).filter(Boolean).length >= 7) {
            if (isEdit) {
                // @ts-ignore
                dispatch(editRoom({ form, id })).then(res => {
                    if (res.type === EDIT_ROOM_SUCCESS) {
                        toast.success('data save successfully')
                        setForm(getEmptyForm)
                        // @ts-ignore
                        dispatch(getRoom());
                        handleClose()
                    }
                })
            } else {
                // @ts-ignore
                dispatch(addRoom(form)).then(res => {
                    if (res.type === ADD_ROOM_SUCCESS) {
                        toast.success('data save successfully')
                        setForm(getEmptyForm)
                    }
                })
            }

        } else {
            alert('All fields are required')

        }
    }

    return (
        <Container className={`${width} mt-4`} >
            <h4>
                <div><MdOutlineBedroomChild size={50} style={{ color: "#fc8019" }} /></div>
                Add Rooms
            </h4>
            <Form onSubmit={handleSubmit}>
                <Row className='mt-4'  >
                    <Col sm={6} md={6}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className='text-left d-block m-0' >Name</Form.Label>
                            <Form.Control
                                value={form?.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={6} md={6}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className='text-left d-block m-0' >Image URL</Form.Label>
                            <Form.Control
                                type='url'
                                value={form?.imageUrls}
                                onChange={(e) => handleChange('imageUrls', e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col sm={6} md={6}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className='text-left d-block m-0' >Rent Per Day</Form.Label>
                            <Form.Control
                                type='number'
                                onWheel={(e) => e.currentTarget.blur()}
                                value={form?.rentPerDay}
                                onChange={(e) => handleChange('rentPerDay', e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={6} md={6}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className='text-left d-block m-0' >Type</Form.Label>
                            <div className='d-flex '>
                                <Form.Check
                                    className='mx-2'
                                    type={'radio'}
                                    label={'Delux'}
                                    value={'Delux'}
                                    checked={form.type === 'Delux'}
                                    name='type'
                                    onChange={(e) => handleChange('type', e.target.value)}
                                />
                                <Form.Check
                                    type={'radio'}
                                    label={'Non Delux'}
                                    value={'Non Delux'}
                                    checked={form.type === 'Non Delux'}
                                    name='type'
                                    onChange={(e) => handleChange('type', e.target.value)}
                                />
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col sm={6} md={6}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label
                                className='text-left d-block m-0'
                            >
                                No of Person
                            </Form.Label>
                            <Form.Control
                                type='number'
                                onWheel={(e) => e.currentTarget.blur()}
                                value={form?.noOfPerson}
                                onChange={(e) => handleChange('noOfPerson', e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={6} md={6}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className='text-left d-block m-0' >phone</Form.Label>
                            <Form.Control
                                type='number'
                                onWheel={(e) => e.currentTarget.blur()}
                                value={form?.phone}
                                onChange={(e) => handleChange('phone', e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className='mt-4'>
                    <Col sm={6} md={6}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className='text-left d-block m-0' >Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={form.description}
                                onChange={(e) => handleChange('description', e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
                <Button
                    variant="outline-warning"
                    onClick={() => setForm(getEmptyForm())}
                    className='mt-4 mx-2'
                >
                    Clear
                </Button>
                <Button
                    style={{ background: '#fc8019', border: '1px solid #fc8019' }}
                    className='mt-4'
                    type='submit'
                >
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default AddRoom
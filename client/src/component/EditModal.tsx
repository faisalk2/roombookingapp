import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddRoom from './AddRoom';
import { RxCross2 } from 'react-icons/rx'

const EditModal = ({ data, id }: any) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant="warning" onClick={() => setShow(true)}>
                Edit
            </Button>

            <Modal
                size='lg'
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className='ml-auto'>
                    <RxCross2
                        size={30}
                        onClick={() => setShow(false)}
                        style={{ cursor: 'pointer' }}
                    />
                </Modal.Header>
                <Modal.Body className='mb-4' >
                    <AddRoom
                        width='w-75'
                        data={data}
                        handleClose={() => setShow(false)}
                        id={id}
                        isEdit={true}
                    />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditModal;
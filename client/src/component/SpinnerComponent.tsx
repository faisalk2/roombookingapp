import React from 'react'
import { Spinner } from 'react-bootstrap'

const SpinnerComponent = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '70vh' }} >
            <Spinner animation="grow" variant="secondary" />
        </div>
    )
}

export default SpinnerComponent
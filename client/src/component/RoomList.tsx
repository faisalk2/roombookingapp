
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { deleteRoom, getRoom } from '../Reducer/userReducer/action'
import { DELETE_ROOM_SUCCESS } from '../Reducer/userReducer/type'
import EditModal from './EditModal'
import { toast } from 'react-toastify'
import SpinnerComponent from './SpinnerComponent'


const RoomList = () => {

    const dispatch = useDispatch();

    const { data, isLoading, isError } = useSelector((state: any) => state.user)

    const handleDelete = (id: string) => {
        //@ts-ignore
        dispatch(deleteRoom({ id })).then((res) => {
            if (res.type === DELETE_ROOM_SUCCESS) {
                toast.success("data deleted successfully")
                //@ts-ignore
                dispatch(getRoom());
            } else {
                toast.error("something went wrong")
            }
        })
    }

    useEffect(() => {
        //@ts-ignore
        dispatch(getRoom());
    }, [dispatch])

    if (isLoading) return   <SpinnerComponent/>
    if (isError) return <p>Error..</p>
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Rent Per Day</th>
                        <th>Type</th>
                        <th>No of Person</th>
                        <th>Phone No</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 && <tr>

                        <td colSpan={10}>
                            <h4>No rooms </h4>
                            <h4>Please add room</h4>
                        </td></tr>}
                    {data.map((item: any, ind: number) => {

                        let data = { ...item }
                        let id = data._id;
                        delete data['_id']
                        delete data['__v']

                        return <tr key={item._id}>
                            <td>{ind + 1}</td>
                            <td>{item.name}</td>
                            <td><img src={item.imageUrls} width={150} height={100} alt="img" /></td>
                            <td>{item.rentPerDay}</td>
                            <td>{item.type}</td>
                            <td>{item.noOfPerson}</td>
                            <td>{item.phone}</td>
                            <td>{item.description}</td>
                            <td>{item.booked ? 'Booked' : 'Available'}</td>
                            <td><EditModal data={data} id={id} /></td>
                            <td><Button variant='danger' onClick={() => handleDelete(item._id)} >Delete</Button></td>
                        </tr>
                    })}

                </tbody>
            </Table>
        </div>
    )
}

export default RoomList
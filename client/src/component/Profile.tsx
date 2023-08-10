import { useEffect } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styles from './style.module.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { Link as NavLink } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/profile/user')
    }, [navigate])

    return (
        <div>
            <Navbar style={{ borderBottom: "1px solid #919191" }}  >
                <Nav className={`${styles.linkColor}`} >
                    <Nav.Link as={NavLink} to="/profile/user">Profile</Nav.Link>
                    <Nav.Link as={NavLink} to="/profile/addRoom" >Add Room</Nav.Link>
                    <Nav.Link as={NavLink} to="/profile/roomList">Room List</Nav.Link>
                </Nav>
            </Navbar>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Profile
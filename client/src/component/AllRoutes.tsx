import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import NavbarComponent from './NavbarComponent'
import Login from './Login'
import Registration from './Registration'
import Home from './Home'
import Profile from './Profile'
import UserProfile from './UserProfile'
import AddRoom from './AddRoom'
import RoomList from './RoomList'

const AllRoutes = () => {
    return (
        <>
            <NavbarComponent />
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Registration />} />
                <Route path='/home' element={<Home />} />
                <Route path='/profile' element={<Profile />}>
                    <Route index path='/profile/user' element={<UserProfile/>}/>
                    <Route  path='/profile/addRoom' element={<AddRoom/>}/>
                    <Route  path='/profile/roomList' element={<RoomList/>}/>

                </Route>
            </Routes>
        </>
    )
}

export default AllRoutes
import { Navbar, Nav } from "react-bootstrap"
import styles from './style.module.css'
import { SiHotelsdotcom } from 'react-icons/si';
import { Link as NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import DropdownComponent from "./DropdownComponent";

const NavbarComponent = () => {
    const { token, name } = useSelector((state: any) => state.auth);

    return (
        <Navbar className={styles.navBG} >
            <SiHotelsdotcom style={{ color: '#FFFFFF' }} size={35} />
            <Navbar.Brand
                as={NavLink}
                to='/'
            >
                <span
                    className={styles.icon}
                >
                    ayatt
                </span>
            </Navbar.Brand>
            {token ? <>
                <Nav className="ml-auto">
                    <Nav.Link
                        as={NavLink}
                        className={styles.linkColor}
                        to="/home"
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        className={styles.linkColor}
                        to="profile"
                    >
                        Profile
                    </Nav.Link>
                </Nav>
                <DropdownComponent name={name} /> </> :
                <Nav className="ml-auto">
                    <Nav.Link
                        as={NavLink}
                        className={styles.linkColor}
                        to="login"
                    >
                        Login
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        className={styles.linkColor}
                        to='register'
                    >
                        Register
                    </Nav.Link>
                </Nav>}
        </Navbar>
    )
}

export default NavbarComponent

import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../Reducer/authReducer/action'
import { AiOutlineUser } from 'react-icons/ai'
import styles from './style.module.css'

const DropdownComponent = ({ name }: any) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (value: string | null) => {

    if (value) {
      //@ts-ignore
      dispatch(logoutUser());
      navigate('/')
    }
  }

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={<><AiOutlineUser size={25} />{name}</>}
      className={` ${styles.profileBtn}`}
      style={{ background: '#fc8019', border: '1px solid #fc8019' }}
      onSelect={(value) => handleChange(value)}>
      <Dropdown.Item eventKey='logout'>Logout</Dropdown.Item>
    </DropdownButton>
  )
}

export default DropdownComponent
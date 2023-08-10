import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import SpinnerComponent from './SpinnerComponent'

const UserProfile = () => {

    const { email, name, isLoading, isError } = useSelector((state: any) => state.auth)

    if (isLoading) return <SpinnerComponent />
    if (isError) return <p>Error...</p>
    return (
        <Container className='mt-4'  >
            <div  >
                <div className=' w-50 m-auto'>
                    <img src="http://cdn.onlinewebfonts.com/svg/img_208097.png" width={200} height={200} alt="" />
                </div>
                <div className=' w-50 m-auto h-50 '>
                    <h4> Name: {name}</h4>
                    <h4>Email: {email}</h4>
                </div>
            </div>
        </Container>
    )
}

export default UserProfile
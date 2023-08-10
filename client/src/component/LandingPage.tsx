import { Button } from 'react-bootstrap';
import styles from './style.module.css'
import { SiHotelsdotcom } from 'react-icons/si'
// @ts-ignore
import { TextLoop } from "react-text-loop-ts";

import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('/home')
  }


  return (
    <div>
      <div className={`d-flex`}>
       
        <div className={`w-75  ${styles.mainContent}`} >
        <div className={`text-center w-100 ${styles.logoZoomOut} `} >
          <SiHotelsdotcom style={{ color: '#fc8019' }} size={100} />
        </div>
          <div className='text-left' >
            <h1 className='m-4 p-4' >
              <TextLoop
                texts={["Book. Stay. Enjoy. Repeat.", "Stay with Us, Experience Bliss.", "Dream. Book. Relax. Repeat.", "Your Getaway, a Click Away", "Game Night?", 'Find Your Haven Here.']}
                interval={3000}
              />
            </h1>
          </div>
          <p className={`text-left px-4 py-2 mx-4 my-2 ${styles.orderFoodText}`} >
            Book Your Dream Getaway: Unwind and Relax in Our Luxurious Hotel.
          </p>
          <div>
            <Button
              style={{ background: '#fc8019', border: '1px solid #fc8019' }}
              onClick={handleStart}
            >
              Get Start
            </Button>
          </div>
        </div>

        <div className={`${styles.bgImg}`} >
        </div>
      </div>
      <div className={styles.footerImg} >
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" alt="" />
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" alt="" />
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" alt="" />
      </div>
    </div>
  )
}

export default LandingPage
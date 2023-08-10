import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editRoom, getRoom } from "../Reducer/userReducer/action";
import { Button } from "react-bootstrap";
import styles from './style.module.css'
import { EDIT_ROOM_SUCCESS } from "../Reducer/userReducer/type";
import SpinnerComponent from "./SpinnerComponent";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { isLoading: authLoading, isError: authError, token } = useSelector((state: any) => state.auth);
  const { isLoading: userLoading, isError: userError, data } = useSelector((state: any) => state.user)


  const handleBooRoom = (item: any, value: boolean) => {
    let form = { ...item, booked: value };
    let id = form._id

    delete form['_id'];
    delete form['__v'];

    // @ts-ignore
    dispatch(editRoom({ form, id })).then(res => {
      if (res.type === EDIT_ROOM_SUCCESS) {
        // @ts-ignore
        dispatch(getRoom());
      }
    })
  }

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token,navigate]);

  useEffect(() => {
    //@ts-ignore
    dispatch(getRoom());
  }, [dispatch])

  if (authLoading || userLoading) return <SpinnerComponent/>
  if (authError || userError) return <p>Error...</p>

  return <div>
    {
      data.map((item: any) => {
        return <div className={` ${styles.homeContainer} `} >
          <div className="w-50 d-flex align-items-center ">
            <img src={item.imageUrls} width={300} height={200} alt="" />
          </div>
          <div className={`w-75  p-3 ${styles.leftAlign}`}>
            <p  >
              Name :
              <span className={styles.roomText}> {item.name}</span>
            </p>
            <p >
              No of Person :
              <span className={styles.roomText}> {item.noOfPerson}</span>
            </p>
            <p >
              Phone no :
              <span className={styles.roomText}> {item.phone}</span>
            </p>
            <p >
              Room type :
              <span className={styles.roomText}> {item.type}</span>
            </p>
            <p >
              Rent per room :
              <span className={styles.roomText}> {item.rentPerDay}</span>
            </p>
            <p >
              Description :
              <span className={styles.roomText}> {item.description}</span>
            </p>

            <div className="text-right m-2">
              {item.booked ?
                <Button
                  variant="outline-warning"
                  className="mx-4"
                  onClick={() => handleBooRoom(item, false)}
                >
                  Cancel Room
                </Button> : ''}

              <Button
                disabled={item.booked}
                style={{ background: '#fc8019', border: '1px solid #fc8019' }}
                onClick={() => handleBooRoom(item, true)}
              >
                {item.booked ? 'Booked' : 'Book'}
              </Button>
            </div>
          </div>
        </div>
      })
    }

  </div>;
};

export default Home;

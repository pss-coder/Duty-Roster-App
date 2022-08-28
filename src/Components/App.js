import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../App.css';

import {useNavigate} from 'react-router-dom';
import { MDBCol, MDBRow, MDBInput, MDBBtn } from 'mdb-react-ui-kit';

function App() {
  const navigate = useNavigate();

  const navigateToRoster = () => {
    navigate("/roster");
  }


  return (
    <div className="d-flex align-items-center justify-content-center custom-height">
    <MDBRow >
      <MDBCol>
        <h1 className='mb-4'>Hello Kitchen Duty</h1>

        <MDBInput className='mt-4' label='Enter Floor no.' id='floorInput' type='text' aria-describedby='floorInput' />
        <div id='floorInput' className=' mb-4 form-text'>
          Enter 'F10' for now (this is feature is for other floors in the future)
        </div>


        <MDBBtn className='mb-4' rounded onClick={navigateToRoster}>Confirm</MDBBtn>
      </MDBCol>

      
    </MDBRow>
      
    </div>
  );
}

export default App;

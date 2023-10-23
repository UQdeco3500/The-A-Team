import { Link } from 'react-router-dom';
function UploadScreen(){
    console.log('LOadedUpload');
    return(
    <div className='centered-container' style={{position:'relative',top:'390px'}}>
    
    <p className="textHome" style={{background:'white',borderRadius:'15px'}}>Add your Free slots</p>
    <p className="textHome" style={{background:'white',borderRadius:'15px'}}>Let us take care of the rest!</p>
    <div>
    <button className="roundShapeButton" >
    <Link to="/Schedule" className="plus">+</Link>
    </button>
    </div>
    </div>
    
    )
}

export default UploadScreen;
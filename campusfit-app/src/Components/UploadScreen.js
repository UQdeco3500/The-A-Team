import { Link } from 'react-router-dom';
function UploadScreen(){
    console.log('LOadedUpload');
    return(
    <>
    <p className="textHome" style={{ position: "fixed", top: "24%", left: "33%" ,fontSize:'50px' }}>Add your Free slots</p>
    <p className="textHome" style={{ position: "fixed", top: "37%", left: "36%" }}>Let us take care of the rest!</p>
    <p className="roundShapeButton" style={{top: "57%", left: "41%",width:'150px',height:'150px'}}></p>
    <Link to="/Schedule" className="textHome" style={{ position: "fixed", top: "57.5%", left: "43%" ,fontSize:'150px',textDecoration: 'none' }}>+</Link>
    </>
    )
}

export default UploadScreen;
import { Link } from "react-router-dom";
import "../App.css";

function HomeScreen() {
  console.log("Loaded");
  return (
    // <div className="home-screen">
    <div className="centered-container" style={{position:'relative',top:'250px'}}>
      <p className="textHome" style={{background:'white',borderRadius:'15px'}}>Too busy to maintain your physical health?</p>
      <p className="textHome" style={{background:'white',borderRadius:'15px'}}>Welcome to</p>
      <p className="textHome" style={{background:'white',borderRadius:'15px'}}>CampusFit</p>
      <p className="textHome" style={{background:'white',borderRadius:'15px'}}>Start your fitness Journey now!</p>

      <div>
        <button className="roundShapeButton">
          <Link to="/Upload" className="logoCampusfit">GO</Link>
        </button>
      </div>
    </div>
    // </div>
  );
}
export default HomeScreen;
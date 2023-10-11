import { Link } from "react-router-dom";
import "../App.css";
function HomeScreen() {
  console.log("Loaded");
  return (
    <>
      <p className="textHome">Too busy to maintain your physical health?</p>
      <p
        className="logoCampusfit"
        style={{ position: "fixed", top: "25%", left: "40%", fontSize: "50px" }}
      >
        Welcome to
      </p>
      <p
        className="logoCampusfit"
        style={{ position: "fixed", top: "33%", left: "42%" }}
      >
        CampusFit
      </p>
      <p
        className="textHome"
        style={{ position: "fixed", top: "44%", left: "35%" }}
      >
        Start your fitness Journey now!
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="88"
        height="138"
        viewBox="0 0 88 138"
        fill="none"
        style={{position:'fixed',width:'56.891px', height: '137.174px',flexShrink: '0',top:'50%',left: '45%'}}
      >
        <path
          d="M2.42218 74.4099C2.99239 73.6381 3.67238 73.0239 4.42318 72.6025C5.17398 72.1811 5.98081 71.9607 6.79741 71.9541C7.614 71.9475 8.42429 72.1547 9.18182 72.5639C9.93935 72.9731 10.6292 73.5762 11.2119 74.3387L38.1203 109.43L37.3036 8.63081C37.2859 6.44848 37.9226 4.35023 39.0737 2.79766C40.2247 1.24508 41.7958 0.365351 43.4414 0.352019C45.0869 0.338686 46.672 1.19284 47.8481 2.72656C49.0242 4.26028 49.6948 6.34794 49.7125 8.53027L50.5292 109.33L76.8758 73.8066C78.0289 72.2514 79.6027 71.3701 81.2511 71.3568C82.8995 71.3434 84.4874 72.1991 85.6655 73.7354C86.8436 75.2718 87.5154 77.3631 87.5331 79.5492C87.5508 81.7353 86.913 83.8372 85.76 85.3925L48.9332 135.065C48.363 135.837 47.683 136.451 46.9322 136.873C46.1814 137.294 45.3745 137.514 44.5579 137.521C43.7413 137.528 42.931 137.32 42.1735 136.911C41.416 136.502 40.7261 135.899 40.1435 135.136L2.51664 86.067C1.93202 85.3072 1.46571 84.4026 1.14446 83.4049C0.823201 82.4072 0.653309 81.3362 0.644534 80.2532C0.635759 79.1702 0.788274 78.0966 1.09332 77.0939C1.39837 76.0911 1.84996 75.1791 2.42218 74.4099Z"
          fill="#F8F8F8"
        />
      </svg>
      <button className="roundShapeButton" style={{cursor:'pointer'}}></button>
      <Link to="/Upload" className="logoCampusfit" style={{ cursor:'pointer', position: "fixed", top: "72.5%", left: "45.2%",textDecoration: 'none' }}>GO</Link>
    </>
  );
}
export default HomeScreen;

import { Link } from "react-router-dom";

 
const LandingPage=()=>{
    return(
        <div className="landingPage">
            <div className="loginImage">
                <img src={"./images/lens.jpg"}  alt="lens"/>


            </div>
            <div className="content">
                <div>
                <h1>10x team 4</h1>
        
                <Link to="/postview"><button>Enter</button></Link>
                </div>
            </div>
        </div>

    )
}
export default LandingPage;
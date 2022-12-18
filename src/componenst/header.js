import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <div className="header">
            <div>
            <img src={"./images/images.png"}height="45px" alt="logo"/>
            </div>
            
            <div>
                <Link to={"/postview/upload"}><img src={"./images/camlogo.png"} height="30px" width="30px"alt="cam"/></Link>
            

            </div>
            
        </div>
    )
}
export default Header;
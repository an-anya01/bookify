import { useAuth } from "../../context/auth"
import Jumbotron from "../../components/cards/Jumbotron"
import {NavLink} from "react-router-dom";
import AdminMenu from "../../components/nav/AdminMenu";
import UserMenu from "../../components/nav/UserMenu";
export default function Dashboard()
{    const [auth,setAuth]=useAuth();


    return (
        <>
            <Jumbotron title={`Hello ${auth?.user?.name}`}
              subTitle="Dashboard"
            
            />
            <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
              <UserMenu />
              </div>
              <div className="col-md-9">
              <div className="p-3 mt-2 mb-2 h4 bg-light">User Information</div>
              <ul className="list-group">
                <li className="list-group-item">{auth?.user?.name}</li>
                <li className="list-group-item">{auth?.user?.email}</li>
                <li className="list-group-item">7018070181</li>
                <li className="list-group-item">MD-medicine</li>
                <li className="list-group-item">Manipal Hospital</li>





              </ul>



              </div>


            </div>


            </div>
        </>
    
        )
}
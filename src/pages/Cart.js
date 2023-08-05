import Jumbotron from "../components/cards/Jumbotron";
import {useAuth} from "../context/auth";
import { useCart } from "../context/cart";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import UseCartSideBar from "../components/cards/UserCartSidebar";
import ProductCardHorizontal from "../components/cards/ProductCardHorizontal";

export default function Cart() {
 const [cart,setCart]=useCart();



const navigate=useNavigate();
const [auth,setAuth]=useAuth();




    return (
      <>
      <Jumbotron title={`Hello ${auth.token && auth?.user?.name}`} 
      subTitle={cart?.length>0 ? 
        ` You have ${cart?.length} items in the cart. ${auth?.token ? "" : "please login to checkout"}`
       :"Your cart is empty"} />
       <div className="container-fluid">
         <div className="row">
            <div className="col-md-12">
            <div className="p-3 mt-2 mb-2 h4 bg-light text-center">
               {cart?.length>0? "My Cart": 
               <div className="text-center">
                  <button className="btn btn-primary"
                  onClick={()=>navigate("/")}>
                     Continue Shopping</button>
                     
            </div>
            }
            </div>
            </div>
         </div>
       </div>
       {cart?.length && (
         <div className="container">
            <div className="row">
               <div className="col-md-8">
                  <div className="row">
                  {cart?.map((c,index)=>(
                        <ProductCardHorizontal key={index} p={c}/>
               ))}
                  </div>
               

               </div>
            <UseCartSideBar/>


            </div>
            </div>

     
       )}
    </>
    
    );
  }
  
  
import {useNavigate} from "react-router-dom";
import { Badge} from "antd";
import { useCart } from "../../context/cart";
import { toast } from "react-hot-toast";
//import {Convert} from 'mongo-image-converter';

export default function ProductCard({p}){

    //context
    const [cart,setCart]=useCart();
    
    
    const navigate=useNavigate();
    return (
        <div className = "card mb-3 hoverable">
            <Badge.Ribbon text={`${p?.sold} sold`} color="red">
                <Badge.Ribbon text={`${p?.quantity>=1 ?`${p?.quantity-p?.sold} in stock`:'Out of Stock'}`} placement="start" color="green">
                <img className="card-img-top" src={`${process.env.REACT_APP_API}/product/photo/${p._id}`} 
            alt={p.name}
            style={{height:'200px' ,objectFit:'cover'}}/>
                </Badge.Ribbon>
            </Badge.Ribbon>
            <div className="card-body">
                <h5>{p?.name}</h5>
                <h4 className="fw-bold">
                    {p?.price?.toLocaleString("en-IN",{
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                    })}
                </h4>
                <p className="card-text">{p?.description?.substring(0,60)}..</p>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary col card-button" 
                    style={{borderBottomLeftRadius:"5px"}}
                    onClick={()=>navigate(`/product/${p.slug}`)}>
                        View Product
                    </button>
                    <button className="btn btn-outline-primary col card-button"
                     style={{borderBottomRightRadius:"5px"}}
                     onClick={()=>{
                        setCart([...cart,p]);
                        localStorage.setItem('cart',JSON.stringify([...cart,p]));
                        toast.success("Added to cart")
                        }}>
                        Add to Cart                    </button>
                </div>
          {/* <p>{moment(p.createdAt).fromNow()}</p>
          <p className="card-text">{p.sold} sold</p> */}
          
        </div>
    )
}
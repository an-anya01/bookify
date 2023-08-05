import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menu from "./components/nav/Menu";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/routes/PrivateRoute";
import AdminRoute from "./components/routes/AdminRoute";
import Category from "./pages/admin/Category";
import Product from "./pages/admin/Product";
import Profile from "./pages/user/Profile";
import AdminProductUpdate from "./pages/admin/ProductUpdate";
import AdminDashboard from "./pages/admin/Dashboard"
import AdminProducts from "./pages/admin/Products";
import Shop from "./pages/Shop";
import Search from "./pages/Search";
import ProductView from "./pages/ProductView";
import CategoriesList from "./pages/CategoriesList";
import CategoryView from "./pages/CategoryView";
import Cart from "./pages/Cart";
import AdminOrders from "./pages/admin/Orders";
import UserOrders from "./pages/user/Order";

const PageNotFound=()=>{
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    404| Page Not Found
    
    
    </div >);
  
};

export default function App() {
  return (
   <BrowserRouter>
   <Menu />
   <Toaster />
   <Routes>
    <Route path='/login' element={<Login />}/>
    <Route path='/' element={<Home />}/>
    <Route path='/shop' element={<Shop />}/>
    <Route path='/search' element={<Search/>}/>
    <Route path="/categories" element={<CategoriesList/>}/>
    <Route path="/category/:slug" element={<CategoryView/>}/>
    <Route path="/cart" element={<Cart/>}/>

    <Route path='/product/:slug' element={<ProductView/>}/>
    <Route path='/register' element={<Register />} />
    <Route path="/dashboard" element={<PrivateRoute />}>
      <Route path='user' element={<Dashboard />} />
      <Route path="user/profile" element={<Profile/>}/>
      <Route path="user/order" element={<UserOrders/>}/>
    </Route>

    <Route path="/dashboard" element={<AdminRoute />}>
      <Route path="admin" element={<AdminDashboard />} />
      <Route path="admin/category" element={<Category />}/>
      <Route path="admin/product" element={<Product />}/>
      <Route path="admin/products" element={<AdminProducts/>}/>
      <Route path="admin/orders" element={<AdminOrders/>}/>
      <Route path="admin/product/update/:slug" element={<AdminProductUpdate />} />



    </Route>
    <Route path="*" element={<PageNotFound />} replace />
   </Routes>
   
   
   </BrowserRouter>
  );
}
 


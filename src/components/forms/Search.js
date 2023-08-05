
import {useState,useEffect} from "react";
import {useSearch} from "../../context/Search"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Search(){
 
 const [values,setValues]=useSearch();
 const navigate=useNavigate();

 const handleSubmit=async(e)=>{
    try{
        e.preventDefault();
        const{data}=await axios.get(`/products/search/${values.keyword}`);
        setValues({...values,results:data});
        navigate("/search");

    }catch(err)
    {
        console.log(err);
    }
 }
    return (
<form className="d-flex" onSubmit={handleSubmit}>
<input type="search" 
style={{borderRadius:"0px"}} 
className="form-control"
placeholder="Search"
onChange={e=>setValues({...values,keyword:e.target.value})}
value={values.keyword} />
<button className="btn btn-outline-primary" 
  style={{borderRadius:"0px"}}
type="submit">
  Search
  </button> 
</form>

    )}
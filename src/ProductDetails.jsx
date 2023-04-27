import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"


function ProductDetails() {
    var x = useParams();
    const [productdetails, setProductdetails] = useState({})
    useEffect(()=>{
        axios.get("https://dummyjson.com/products/"+x.id).then(function(res){
            setProductdetails({...res.data})
        })
    },[x.id])
  return (
    <div>
        <h1>ProductDetails</h1>
        <h2>{productdetails.title}</h2>
        <img src={productdetails.thumbnail} alt='sd'/>
    </div>
  )
}
export default ProductDetails
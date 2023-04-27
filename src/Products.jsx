import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Products() {

    const [products, setProducts] = useState([])
  useEffect(()=>{
    axios.get("https://dummyjson.com/products").then(function(response){

        setProducts([...response.data.products])
    })
  },[])
    return (
    <div>
        Products
        <ul>
            {
                products.map((p)=>{
                    return <li>
                        <Link to={"/details/"+p.id}>{p.title}</Link>
                        </li>
                })
            }
        </ul>
    </div>
  )
}
export default Products
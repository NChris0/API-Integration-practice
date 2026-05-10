import React,{useEffect,useState} from "react";
import axios from axios;



function App(){
    const [users,setUsers]=useState([]);
    const getusers=async()=>{
        try {
            const (response)=await axios.get( "https://fakestoreapi.com/products" );
        } catch (error) {
            console.log("error fetch user", error);
        }

    }
    useEffect(()=>{
        getusers();
    },[]);




    return(
        <div>
            <h1>product list</h1>
            {users.products((product)=>(
                <div key={product.id}>
                    <h3>{product.ptoductImage}</h3>
                    <h3>{product.productTitle}</h3>
                    <h3>{product.price}</h3>
                    <h3>{product.category}</h3>


                </div>
            ))}




        </div>
    )
}
export default App;
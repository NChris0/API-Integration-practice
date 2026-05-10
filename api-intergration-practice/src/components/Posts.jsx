import React,{useEffect,useState} from "react";
import axios from "axios";


function App(){
    const [users,setUsers]=useState([]);
    const getusers=async()=>{
        try {
            const response=await axios.get(
                " https://jsonplaceholder.typicode.com/posts "
            );
            setUsers(response.data);
        } catch (error) {
            console.log("error fetch user", error);
        }
        
    }
    useEffect(()=>{
        getusers();
    },[]);



    return(
        <div>
            <h1>posts</h1>
            {users.posts((post)=>(
                <div key={post.id}>
                   <h3>{post.userImage}</h3>
                   <h3>{post.fullName}</h3>
                   <h3>{post.email}</h3>
                   <h3>{post.country}</h3>
                    


                </div>
            ))};





        </div>
    );
};
export default App;
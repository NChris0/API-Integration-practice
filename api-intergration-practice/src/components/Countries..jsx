import React,{useEffect,useState} from "react";


function App(){

    const users,setUsers=useState([]);
    const getUsers=async()=>{
        try {
          const response= await axios.get(
            "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region"
        );
          setUsers(response.data);  
        } catch (error) {
            console.log("error fetch user", error);
        }
    }
    useEffect(()=>{
        getUsers();
    }, []);


    return(
       <div>
        <h1>countries list</h1>
        {users.map((map)=>(
          <div key={map.id}>
            <h3>counrty flag:{map.flag}</h3>
            <h3>counrty name:{map.country}</h3>
            <h3>capital city:{map.capitalCity}</h3>
            <h3>country's population:{map.population}</h3>
            <h3>country region:{map.region}</h3>


          </div>

        ))}

        













       </div>
        

       




   

    )
}
export default App;
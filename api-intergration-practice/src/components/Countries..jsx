import React,{useEffect,useState} from "react";
import axios from axios,


function App(){

    const users,setUsers=useState([]);
    const getUsers=async()=>{
        try {
          const response= await axios.get(
            "https://www.google.com/search?q=list+ofcountrieswith+their+flag%2Cpopulation%2Ccapital+city%2Cregion&sca_esv=336273bfce097790&biw=1366&bih=641&sxsrf=ANbL-n6G01FD--qtZHMdmSyMOH--U7d6xw%3A1778444088953&ei=OOcAaq_qOdikkdUPid-LgQI&ved=0ahUKEwiv5rLBxK-UAxVYUqQEHYnvIiAQ4dUDCBE&uact=5&oq=list+ofcountrieswith+their+flag%2Cpopulation%2Ccapital+city%2Cregion&gs_lp=Egxnd3Mtd2l6LXNlcnAiPmxpc3Qgb2Zjb3VudHJpZXN3aXRoIHRoZWlyIGZsYWcscG9wdWxhdGlvbixjYXBpdGFsIGNpdHkscmVnaW9uSKSFAVD0B1iybXAFeAGQAQCYAdcCoAHbEqoBBTItNS4zuAEDyAEA-AEBmAILoALgD8ICChAAGEcY1gQYsAPCAg4QABjkAhjWBBiwA9gBAcICFxAuGNwGGLgGGNoGGNgCGMgDGLAD2AEBwgIHECMYsAIYJ8ICCBAAGIAEGKIEwgIKECEYChigARjDBMICBBAhGAqYAwDiAwUSATEgQIgGAZAGD7oGBggBEAEYCZIHBzUuMC4xLjWgB5smsgcFMi0xLjW4B44PwgcFMi00LjfIB2SACAE&sclient=gws-wiz-serp"
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
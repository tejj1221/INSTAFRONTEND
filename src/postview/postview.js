import Card from "../componenst/card";
import Header from "../componenst/header";
import { useEffect,useState } from "react";

const PostView=()=>{
    const[data,setdata]=useState([])
    useEffect(()=>{
        fetch("https://kolli-clone.herokuapp.com/post/all",{
            method:"GET"
        }).then(x=>x.json()).then(Data=>setdata(Data.data))

    },[])
    return(
        <div className="main-body">
            <Header/>
            {data.map((x,key)=>{
                return(
                <Card key={key+1}info={x}/>
                )
            })}
        </div>

       
        

    )
}
export default PostView;

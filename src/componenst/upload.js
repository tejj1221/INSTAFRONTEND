import { useState } from "react";
import {  useNavigate } from "react-router-dom"

const Upload=()=>{
    
    const navigate = useNavigate();
    let months={Jan:"01",Fed:"02",Mar:"03",Apr:"04",May:"05",Jun:"06",Juy:"07",Aug:"08",Sep:"09",Oct:"10",Nov:"11",Dec:"12"};
    let date=Date(Date.now());
    let arr=date.toString().split(" ").slice(1,5)
    let str=arr[1]+"/"+months[arr[0]]+"/"+arr[2]+" "+arr[3]
    
    
    const fun=(e)=>{
         e.preventDefault() 
         const useData= new FormData();
         useData.append("likes",0)
         useData.append("file",e.target.postImage.files[0]) 
         useData.append("name",e.target.name.value)
         useData.append("location",e.target.location.value)
         useData.append("description",e.target.description.value)
         useData.append("date",str)
         useData.append("postImage",e.target.postImage.files[0].name)

        console.log(e.target.postImage.files[0].name)
        fetch("https://kolli-clone.herokuapp.com/post/add",{
            method:"POST",
            body:useData
        }).then(x=>x.json()).then(data=>console.log(data))
        navigate("/postview")
        
    }
    
    return(
        <div className="uploadcont">
            <form onSubmit={fun} >
                <div>
                <input type="file"  name="postImage"/>
                </div>
                <div>
                <input type="text" placeholder= "Author" name="name"/>
                <input type="text" placeholder="Location" name="location"/>
                </div>
                <div>
                <input type="text" placeholder="Description" name="description"/>
                </div>
                <div>
               <button type="submit" >Post</button>
                </div>
            </form>
        </div>

    )
}
export default Upload;
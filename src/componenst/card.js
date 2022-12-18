const Card=(props)=>{
    
    return(
        <div className="card">
            <div className="postHead">
                <div className="postHeadNames">
                   <div className="font">{props.info.name}</div> 
                    <div className="color">{props.info.location}</div>
                </div>
                <div><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                
               
            </div>
            <div className="postImage">
                <img src={"https://kolli-clone.herokuapp.com/post/image/"+props.info.postImage} alt="post"/> 
            </div>
            <div className="postBottom">
                <div className="likeandcomm">
                    <div>
                        <div><i className="fa fa-heart"></i>  <i className="fa fa-comment"></i> <i className="fa fa-paper-plane"></i></div>
                        <div className="color">{props.info.likes}likes</div>
                    </div>
                                    
                    
                    <div>
                        {props.info.date}
                    </div>

                </div>
                <div className="font">{props.info.description}</div>
            </div>
        </div>

    )
}
export default Card;
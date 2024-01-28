import Moment from "react-moment";

export default function InsideRepositoriesComponent(props) {
    
    
    
    return(


        <div className="fff" >
            <div className="flex123">
                <i class="fa-solid fa-folder"></i>
                <h3>{props.path}</h3>
            </div>

                <div className="cce">
                    <span>{props.commitmessage}</span>    

                </div>
                <div className="moment">
                    <span className="l"><Moment toNow>{props.time}</Moment></span>
                </div>
                
            
            
        </div>
    )
}
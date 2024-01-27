import Moment from "react-moment";

export default function InsideRepositoriesComponent(props) {
    
    
    
    return(


        <>
        <h3>{props.path}</h3>
        <span>{props.commitmessage}</span>    
        <span><Moment toNow>{props.time}</Moment></span>
        </>
    )
}
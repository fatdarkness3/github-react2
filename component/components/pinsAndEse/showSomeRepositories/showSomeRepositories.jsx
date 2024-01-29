import { Link } from "react-router-dom";

export default function ShowSomeRepositories(props) {
    
    return(
        <>
        <div className="headerForBorder">
            <Link to={`/${props.username}/${props.name}`}>
                <div className="part1-1">
                    <a href="#" >

                        {props.name}
                                
                    </a>
                    <p>{props.type==false ? "public": "privet"}</p>
                </div>
            </Link>
        <div className="type">
                <div className="part1-11">
                    <div></div>
                    <p>{props.language}</p>
                </div>
                
        </div>

        </div>
        


        
        </>
    )
}
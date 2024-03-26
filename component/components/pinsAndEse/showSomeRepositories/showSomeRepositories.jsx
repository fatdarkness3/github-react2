import { Link } from "react-router-dom";

export default function ShowSomeRepositories(props) {
    
    return(
        <>
        <div className="headerForBorder">
            <Link to={`/${props.username}/${props.name}`}>
                <div className="part1-1">
                    <a  href="#" >

                        {props.name}
                                
                    </a>
                    <p>{props.type==false ? "public": "privet"}</p>
                </div>
            </Link>
        <div className="type">
                <div className="part1-11 margin">
                    <div className={props.language =="CSS" ? "purple" : null || props.language =="JavaScript" ? "yellow" :null || props.language == "TypeScript" ? "blue" : null || props.language == "HTML" ? "red":null || props.language == "Objective-C" ? "blueLight" : null || props.language == "C" ? "gray" : null || props.language == "Java" ? "orange" : null || !props.language ?"none" :null}></div>
                    <p>{props.language}</p>
                </div>
                
        </div>

        </div>
        


        
        </>
    )
}
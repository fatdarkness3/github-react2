import { useEffect ,  } from "react"
import Moment from "react-moment"
import { Link , useSearchParams } from "react-router-dom"

export default function RenderRepose(props) {

    

    

    

    return(
        <>
    <div key = {props.id} className="father">
            <div className="space">
                <Link to={`/${props.params}/${props.name}`}>

                <div className="part1-1">
                    <a href="#" >
                        {props.name}
                        
                    </a>
                    <p>{props.type==false ? "public": "privet"}</p>
                </div>
                
                </Link>
                <div className="part2-2">
                    <button type="button" class="btn btn1  btn-secondary btn-sm">
                        <div className="p-p1">
                            <i class="fa fa-star-o"></i>
                            <p>Star</p>
                        </div>
                        <div className="p-p2">
                        <button type="button" class="btn btn-secondary btn-sm">
                            <i class="fa fa-sort-down"></i>
                        </button>
                        </div>
                        
                    </button>
                    
                </div>

            </div>   
            <div className="type">
                <div className="part1-1">
                    <div className= {props.language =="CSS" ? "purple" : null || props.language =="JavaScript" ? "yellow" :null || props.language == "TypeScript" ? "blue" : null || props.language == "HTML" ? "red":null || props.language == "Objective-C" ? "blueLight" : null || props.language == "C" ? "gray" : null || props.language == "Java" ? "orange" : null || !props.language ?"none" :null}></div>
                    <p className={!props.language ? "none" : null}>{props.language}</p>


                    <p><Moment fromNow>{props.pushed_at}</Moment></p>
                </div>
                
            </div>
        </div>
        </>
    )
}
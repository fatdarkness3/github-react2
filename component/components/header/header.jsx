import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react"
import Input from "../inputs/input";
// let par = useParams()
// let b = par.username
import { createPortal } from "react-dom";
import { repositories } from "../../../api/RepositoresApi";

export default function Header1(props) {

const [ac , setAc] = useState(false)

const [repose11 , setRepose11] = useState([])
const [open , setOpen] = useState(false)
    
    let params = useParams()
    let username = params.username

    let ref = useRef()
    let pathanem = ( window.location.pathname);
  let replace =   pathanem.replace("/" , "")
  console.log(replace)
  
  
    const navigate = useNavigate()
   
    
    useEffect(() => {
        repositories(username).then((e) => {
                let a = e.length
                setRepose11(a)
        })
       
    },  [])
    return(
        <>
        
        
        <header >
                <div className="column">
                    <div className="flex">
                        <div className="cl">
                                    <div className="left">
                                        <button type="button" class="btn btn-outline-secondary">
                                        <i class="bi bi-list"></i>
                                        </button>
                                        <i class="fa-brands fa-github"></i>
                                        <h4>{props.params}</h4>
                                    </div>
                        </div>
                        


                        <div className="f">
                        
                        <div className="right">
                            {/* <form className="f" onSubmit={(e) => {
                                // e.preventDefault()
                                // if(replace == params.username) {

                                //     navigate(`/${set}`)
                                //     location.reload();

                                // }else if(replace == `${params.username}/repository`){
                                //     navigate(`/${set}/repository`)
                                //     location.reload();
                                // }
                                
                            }} > */}
                                
                                {open ? createPortal(
                                            <div className="abBlack">
                                                <div className="wrapper">
                                                <div className="content">
                                                    <Input/>
                                                    {/* <button onClick={() => {
                                                        // e.stopPropagation()
                                                        setOpen(false)
                                                        
                                                    }}>close</button> */}
                                                    
                                                </div>
                                                </div>
                                            </div>,
        
                                            document.body
                                ) : null}
                                
                                    <button  type="button" class="btn btn-outline-secondary bbb" onClick={() => {
                                        
                                        
                                        setOpen(true)

                                    }} >
                                        
                                        <div className="div" ref={ref}>
                                        {/* <Input/> */}
                                        </div>
                                        
                                        <i class="fa fa-search"></i>
                                        <input onChange={(e) => {
                                            

                                            // let val = e.target.value
                                            // setSet(val)
                                            

                                        }} className="input" type="search" placeholder="Type / to search "/>
                                    </button>
                                    
                                    
                                    
                                {/* </form> */}
                                
                                    
                                <button type="button" class="btn btn-outline-secondary">
                                    <div className="flex-button">
                                        <h4>+</h4>    
                                        <i style = {{fontSize: "15px",}} class="bi bi-caret-down-fill"></i>
                                    </div>
                            
                                </button>
                                <button type="button" class="btn btn-outline-secondary">
                                    <i class="bi bi-record-circle"></i>
                                </button>
                            
                                <button type="button" class="btn btn-outline-secondary">
                                    <i class="bi bi-arrow-down-up"></i>
                                </button>
                            <button type="button" class="btn btn-outline-secondary">
                                <i class="bi bi-archive"></i>
                            </button>

                        </div>
                        </div>
                    </div>


















                    <div className="part2">
                                    <ul>
                                        <li className={replace == username ? "focus":"noneBorder"}>
                                            <Link to={`/${props.params}`}>

                                            <button  >
                                                <div className="give-position">
                                                    <i class="fa fa-book"></i>
                                                    <h6>Overview</h6>
                                                </div>
                                                
                                            </button>
                                            </Link>
                                            
                                            
                                        </li>
                                        <li className={replace == `${username}/repository` ? "focus" : "noneBorder" }>
                                        <Link to ={`/${username}/repository`}>
                                            <button >
                                            
                                            <div className="give-position">
                                                    <i class="fa fa-save"></i>
                                                    
                                                        <h6>Repositories</h6>

                                                        {!repose11 ? <div className="none"><div className="absolute">{repose11}</div></div>: <div className="first"><div className="absolute">{repose11}</div></div>}
                                                    
                                                </div>
                                                
                                            </button>
                                            </Link>
                                            
                                                
                                                
                                        </li>
                                        <li>
                                            <button className={ "noneBorder"} >
                                            <div className="give-position">
                                                    <i class="fa fa-columns"></i>
                                                    <h6>Project</h6>
                                                </div>
                                                
                                            </button>
                                                

                                        </li>
                                        <li>
                                            <button className={"noneBorder"} >
                                                <div className="give-position">
                                                    <i class="fa fa-dropbox"></i>
                                                    <h6>package</h6>
                                                </div>

                                               
                                            </button>
                                            
                                                
                                        </li>
                                        <li>
                                            <button className={"noneBorder"} >

                                            <div className="give-position">
                                                    <i class="fa fa-star-o"></i>
                                                    <h6>Star</h6>
                                                </div>
                                           
                                            </button>
                                                
                                            
                                                
                                        </li>
                                    </ul>
                                </div>
                </div>
            </header>
        
        </>
    )
}
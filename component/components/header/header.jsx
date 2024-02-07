import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react"
import Input from "../inputs/input";
// let par = useParams()
// let b = par.username
import { createPortal } from "react-dom";

export default function Header1(props) {

const [ac , setAc] = useState(true)
const [ac2 , setAc2] = useState(false)
const [ac3 , setAc3] = useState(false)
const [ac4 , setAc4] = useState(false)
const [ac5 , setAc5] = useState(false)
const [ac6 , setAc6] = useState(false)

const [open , setOpen] = useState(false)
    
    let params = useParams()
    let ref = useRef()
    let pathanem = ( window.location.pathname);
  let replace =   pathanem.replace("/" , "")
  
  
    const navigate = useNavigate()
   
    
    useEffect(() => {

       
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
                                        <i class="bi bi-github"></i>
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
                                        <li>
                                            <Link to={`/${props.params}`}>

                                            <button className={ac ? "focus" : "noneBorder"} onClick={() => {
                                            setAc(true)
                                            setAc2(false)
                                            setAc3(false)
                                            setAc4(false)
                                            setAc5(false)
                                        }}>
                                                <div className="give-position">
                                                    <i class="fa fa-book"></i>
                                                    <h6>Overview</h6>
                                                </div>
                                                
                                            </button>
                                            </Link>
                                            
                                            
                                        </li>
                                        <li >
                                        <Link to ={`/${props.params}/repository`}>
                                            <button className={ac2 ? "focus" : "noneBorder" } onClick={() => {
                                                
                                                setAc2(true)
                                                setAc(false)
                                                setAc3(false)
                                                setAc4(false)
                                                setAc5(false)
                                                
                                            }}>
                                            <div className="give-position">
                                                    <i class="fa fa-save"></i>
                                                    
                                                        <h6>Repositories</h6>
                                                    
                                                        {!props.numberOfRepositories ? <div className="none"><div className="absolute">{props.numberOfRepositories}</div></div>: <div className="first"><div className="absolute">{props.numberOfRepositories}</div></div>}
                                                    
                                                </div>
                                                
                                            </button>
                                            </Link>
                                            
                                                
                                                
                                        </li>
                                        <li>
                                            <button className={ac3 ?"focus" : "noneBorder"} onClick={() => {
                                                setAc2(false)
                                                setAc(false)
                                                setAc3(true)
                                                setAc4(false)
                                                setAc5(false)
                                            }}>
                                            <div className="give-position">
                                                    <i class="fa fa-columns"></i>
                                                    <h6>Project</h6>
                                                </div>
                                                <div className="backgroundBlack"></div>
                                            </button>
                                                

                                        </li>
                                        <li>
                                            <button className={ac4 ? "focus" : "noneBorder"} onClick={() => {
                                                setAc2(false)
                                                setAc(false)
                                                setAc3(false)
                                                setAc4(true)
                                                setAc5(false)
                                            }}>
                                                <div className="give-position">
                                                    <i class="fa fa-dropbox"></i>
                                                    <h6>package</h6>
                                                </div>

                                                <div className="backgroundBlack"></div>
                                            </button>
                                            
                                                
                                        </li>
                                        <li>
                                            <button className={ac5 ? "focus" : "noneBorder"} onClick={() => {
                                                setAc2(false)
                                                setAc(false)
                                                setAc3(false)
                                                setAc4(false)
                                                setAc5(true)
                                            }}>

                                            <div className="give-position">
                                                    <i class="fa fa-star-o"></i>
                                                    <h6>Star</h6>
                                                </div>
                                            <div className="backgroundBlack"></div>
                                            </button>
                                                
                                            
                                                
                                        </li>
                                    </ul>
                                </div>
                </div>
            </header>
        
        </>
    )
}
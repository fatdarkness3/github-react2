import { Link, useParams } from "react-router-dom";
import { useState } from "react"
// let par = useParams()
// let b = par.username


export default function HeaderForInsiderepositories (props) {

let paramsUsername = props.params
let nameOfRepository = props.nameOfRepository

 
    
    
    
   
    
    
    return(
        <>
        
        <header>
                <div className="column">
                    <div className="flex">
                        <div className="cl">
                                    <div className="left">
                                        <button type="button" class="btn btn-outline-secondary">
                                        <i class="bi bi-list"></i>
                                        </button>
                                        <i class="bi bi-github"></i>
                                        <h4>{paramsUsername} / {nameOfRepository}</h4>
                                    </div>
                        </div>
                        


                        <div className="f">
                        
                        <div className="right">
                            <div className="f"  >
                                
                                    <button type="button" class="btn btn-outline-secondary bbb" >
                                        <i class="fa fa-search"></i>
                                        <input  className="input" type="search" placeholder="Type / to search "/>
                                        
                                    </button>
                                    
                                    
                                    
                                    
                                </div>
                                
                                    
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
                                    <ul className="notCenter">
                                        <li>
                                            <Link to={`/${paramsUsername}/${nameOfRepository}`}>
                                            <button className="focus">
                                                <div className="give-position">
                                                    <i class="fa fa-code"></i>
                                                    <h6>Code</h6>
                                                </div>
                                                <div className="backgroundBlack"></div>
                                            </button>
                                            </Link>
                                            
                                            
                                        </li>
                                        <li>
                                        
                                            <button className="focus">
                                            <div className="give-position">
                                                    <i class="fa fa-savefa fa-circle-thin"></i>
                                                    
                                                        <h6>Issuese</h6>
                                                    
                                                        {!props.numberOfRepositories ? <div className="none"><div className="absolute">{props.numberOfRepositories}</div></div>: <div className="first"><div className="absolute">{props.numberOfRepositories}</div></div>}
                                                    
                                                </div>
                                                <div className="backgroundBlack"></div>
                                            </button>
                                            
                                            
                                                
                                                
                                        </li>
                                        <li>
                                            <button className="focus">
                                            <div className="give-position">
                                                    <i class="fa fa-stumbleupon"></i>
                                                    <h6>Pull requests</h6>
                                                </div>
                                                <div className="backgroundBlack"></div>
                                            </button>
                                                

                                        </li>
                                        <li>
                                            <button className="focus">
                                                <div className="give-position">
                                                    <i class="fa fa-play-circle-o"></i>
                                                    <h6>Actions</h6>
                                                </div>

                                                <div className="backgroundBlack"></div>
                                            </button>
                                            
                                                
                                        </li>
                                        <li>
                                            <button className="focus">
                                            <div className="give-position">
                                                    <i class="fa fa-columns"></i>
                                                    <h6>Project</h6>
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
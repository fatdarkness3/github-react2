import { useEffect, useState } from "react"
import { repositories } from "../../../../api/RepositoresApi"
import { useParams } from "react-router-dom"
import { languages } from "../../../../api/languege"


export default function SearchBtn(props) {

    const [active , setActive] = useState("")
    const [mm , setMm] = useState([])
    const [newState , setNewState] = useState("")
    

    let par = useParams()
    let username = par.username


    useEffect(() => {
        repositories(username).then((e) => {
            setMm(e)
        })  
       
    } , [])
    
    
    const letters = new Set();
    let obj = []
    let obj2 = []
    function aybaba() {
        
       
         let c = new Set(obj)
         
        
         return c
    }
    
    return (
        <>
            <div className="searchBtn">
                                <input type="search" placeholder="Find your repository" class="form-control" id="exampleInputEmail1"
                                 onChange={(e) => {
                                    let a = e.target.value
                                    props.setSearchValue(a)
                                    
                                }}/>
                                <div className="hame">
                                    <button type="button" class="btn btn-secondary btn-sm" onClick={() => {
                                        setActive(!active)
                                    }}>
                                        <div className="givFlex">
                                            <p>Type </p>
                                            
                                            <i class="fa fa-sort-down"></i>
                                        </div>
                                        
                                    </button>
                                    <div className={active ? "openSomeThing" : "none"}>
                                            <div className="p-1">
                                                <span>Select type</span>
                                                <i class="fa-solid fa-xmark"></i>
                                            </div>
                                            <div className="p-2">
                                                <p>All</p>
                                                <p>Public</p>
                                                <p>Private</p>
                                                <p>Sources</p>
                                                <p>Forks</p>
                                                <p>Archived</p>
                                                <p>Can be sponsored</p>
                                                <p>Mirrors</p>
                                                <p>Templates</p>
                                            </div>
                                        </div>
                                </div>
                                <div className="hame2">
                                    <button type="button" class="btn btn-secondary btn-sm">
                                        <div className="givFlex">
                                            <p>Language </p>
                                            
                                            <i class="fa fa-sort-down"></i> 
                                        </div>
                                    
                                    </button>
                                    <div className="openSomeThing2">
                                        <div className="p-1">

                                        </div>
                                        <div className="p-2">
                                            { mm.filter((e) => {
                                                
                                                    let a = e.language
                                                    
                                                   let b =  obj.push(a)
                                                    
                                                   


                                                })}
                                                
                                            <h6>{aybaba()}</h6>
                                        </div>
                                    </div>
                                </div>
                                

                                <button type="button" class="btn btn-secondary btn-sm">
                                    <div className="givFlex">
                                        <p>Sort</p>
                                        
                                        <i class="fa fa-sort-down"></i>
                                    </div>
                                    
                                </button>
                                
                            </div>
        
        </>
    )
}
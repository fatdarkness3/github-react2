import { useEffect, useState } from "react"
import { insideRepositories } from "../../../../../api/insideRepositoriesApi"
import { json, useParams } from "react-router-dom"
import { pushFilesJs } from "../../../../../api/pushFiles"
import InsideRepositoriesComponent from "../../../../components/insideRepositories/insideRepositoriesComponent"
import HeaderForInsiderepositories from "../../../../components/headerForInsiderepositories/headerForInsideRepositories"
import "../../../../../styles/style.css"
import { api } from "../../../../../api/userInfo"
import { responsiveArray } from "antd/es/_util/responsiveObserver"
import { repositories } from "../../../../../api/RepositoresApi"
import { branch } from "../../../../../api/branch"
import { tags } from "../../../../../api/tags"

export default function InsideRepositories(props) {

// let obj = {
//     name1: "pedaret1" , 
//     name2: "pedaret2" , 
//     name3: "pedaret3" , 
//     name4: "pedaret4" , 
//     name5: "pedaret5" , 
// }


const [res , setRes] = useState({})
const [res2 , setRes2] = useState([])
const [req , setReq] = useState({})
const [isRepositoryLoaded , setIsRepositoryLoaded]= useState(false)
const [test , setTest] = useState([])
const [branch1 , setBranch1] = useState([])
const [active , setActive] = useState("")

let param = useParams()
let username  = param.username
let nameOfRepository = param.nameOfRepository
    
    let default_branch = res.default_branch

    useEffect(() => {



        tags(username , nameOfRepository ).then((e) =>{
            setTest(e.length)
            console.log(e)
        } )



        insideRepositories(username , nameOfRepository).then((e) => {
           
            setRes(e)
            setIsRepositoryLoaded(true)
        })


        

        
        
        api(username).then((e) => {


            setReq(e)
            
            
        })



        // repositories(username).then((e) => {
        //     setTest(e)
        // })

        branch(username , nameOfRepository).then((e) => {
            setBranch1(e.length)
            
        })

        

       
    } , [])
    
    useEffect(() => {
        if(isRepositoryLoaded) {
            pushFilesJs( username , nameOfRepository , default_branch ).then((e) => {
            
                
                
                let tree = e.tree
                setRes2(tree)


            })
        }
        
        
    } , [isRepositoryLoaded])

    
            
        
   


    return (
        <>

        <HeaderForInsiderepositories params={username} nameOfRepository={nameOfRepository}/>

        <div className="wrapper">
            <div className="showWhoIsLogin">
                <div className="p1">
                    <img src={req.avatar_url}/>
                    
                    <h6>{nameOfRepository}</h6>
                    <p>{res.private == false ? "Public" : "private"}</p>
                </div>
                <div className="p2">
                    <button className="btn btn-secondary btn-sm">
                        <i class="fa-solid fa-thumbtack"></i>
                        <span>Pin</span>
                    </button>
                    <button className="btn btn-secondary btn-sm">
                        <i class="fa-regular fa-eye"></i>
                        <span>Watch</span>
                        <div>
                            <span>{res.subscribers_count}</span>
                        </div>
                        <i class="fa-solid fa-sort-down"></i>
                    </button>
                    <button className="btn btn-secondary btn-sm">
                        <i class="fa-brands fa-pushed"></i>
                        <span>Fork</span>
                        <div>
                            <span>{res.forks_count}</span>
                            
                        </div>
                        <i class="fa-solid fa-sort-down"></i>
                    </button>
                    <button className="btn btn-secondary btn-sm">
                        <i class="fa-regular fa-star"></i>
                        <span>star</span>
                        <div>
                            <span>{res.stargazers_count}</span>
                        </div>
                        <i class="fa-solid fa-sort-down"></i>
                    </button>
                </div>
            </div>
            <div className="container">
            <div className="part1">
                <div className="header">
                    <div className="p1">
                        <button className="btn btn-secondary btn-sm">
                            <i class="fa-brands fa-pushed"></i>
                            <span>{res.default_branch}</span>
                            <i class="fa-solid fa-sort-down"></i>
                        </button>
                        <div className="d1">
                            <i class="fa-brands fa-pushed"></i>
                            <span>{branch1}</span>
                            <span className="someColors">Branches</span>
                        </div>
                        <div className="d2">
                            <i class="fa-solid fa-thumbtack"></i>
                            <span>{test}</span>
                            <span className="someColors">Tags</span>
                        </div>
                    </div>
                    
                    <div className="p2">
                        <button>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input className="input" id="iii" placeholder="Go to file"/>
                        </button>
                        <button>
                            <span>Add file</span>
                            <i class="fa-solid fa-sort-down"></i>
                        </button>
                        <div className="addres">
                        <button className="button green"  onClick={() => {

                                setActive(!active)

                        }}>
 
                            <i class="fa-solid fa-code"></i>
                            <span>Code</span>
                            <i class="fa-solid fa-sort-down"></i>

                        </button>
                        <div className= {active ? "active" : "notActive"}>
                            
                            <div className="p-1">
                                <div className="ce1">
                                    <span>Local</span>
                                </div>
                                <div className="ce2">
                                    <span>Codespaces</span>
                                </div>
                            
                            </div>
                            <div className="p-2">
                                <div className="pp1">
                                    <i className="fa-solid fa-terminal"></i>
                                    <span>Clone</span> 
                                </div>
                                <div className="pp2">
                                    <span>?</span>
                                </div>
                               
                            </div>
                            <div className="p-3">
                                <div className="pp1">
                                    <h6>HTTPS</h6>
                                    <h6>SSH</h6>
                                    <h6>GitHub CLI</h6>
                                </div>
                                <div className="pp2">
                                    <input className="input"/>
                                </div>
                                <div className="pp3"></div>
                            </div>
                            <div className="p-4"></div>
                            <div className="p-5"></div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="main"></div>
            </div>
            <div className="part2"></div>
            </div>
        {res2.map((e) => {
            
            
          return <InsideRepositoriesComponent path = {e.path}/>  
            
        })}
        </div>
        
          
        
        
        </>
    )
}
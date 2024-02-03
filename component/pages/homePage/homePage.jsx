import { Link, useParams } from "react-router-dom"
import "../../../styles/style.css"
import { useState } from "react"
import { tokenTest } from "../../../src/token"
import { api } from "../../../api/userInfo"



export default function HomePage() {
    
const [use  , setUse] = useState("") 
const [use2 , setUse2] = useState("")

    tokenTest(use2)

    
    return (

        <form>
    <div className="center">
        
        <input type="search" placeholder="enter your token" onChange={(e) => {
            let a = e.target.value
            setUse2(a)
            

        }}/>


        {use2 ? <input type="search" placeholder="search your name" onChange={(e) => {
            let val = e.target.value 
            setUse(val)
            
        }} /> : null}
        {use ? <Link to={`/${use}`}>
            <button>click here</button>
        </Link> :null}
        
    </div>
    </form>
    )
}
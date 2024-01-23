import { Link, useParams } from "react-router-dom"
import "../../../styles/style.css"
import { useState } from "react"



export default function HomePage() {
    
const [use  , setUse] = useState("") 

    return (
        <form>
    <div className="center">
        <input type="search" placeholder="search your name" onChange={(e) => {
            let val = e.target.value 
            setUse(val)
        }} />
        <Link to={`/${use}`}>
            <button>click here</button>
        </Link>
    </div>
    </form>
    )
}
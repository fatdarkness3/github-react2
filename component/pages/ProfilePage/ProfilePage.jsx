import { useParams  } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Header1 from "../../components/header/header"
import UserProfile from "../../components/userProfile/userProfile";
import PinAndEse from "../../components/pinsAndEse/pinsAndEse";
import { api } from "../../../api/userInfo";


export default function Profile() {

    const param = useParams()
    
    const[name,  setName] = useState("")

    let getUserFromParams = param.username


    useEffect(() => {
        api(getUserFromParams).then((e) => {
            
            
            setName(e)
        })
        
        
    } , [])
    document.title = `${getUserFromParams} (${name.name})`
return(
    <>

        <Header1 params = {getUserFromParams}/>
                    <div className="main">
                        <div className="wrapper">
                            <div className="flexing">
                                <UserProfile params = {getUserFromParams}/>
                                <PinAndEse params = {getUserFromParams}/>
                            </div>
                        </div>
                    </div>
        
    
    </>
)

}
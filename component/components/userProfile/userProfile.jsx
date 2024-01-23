import { useContext, useEffect , useState } from "react"
// import { Context1 } from "../../context/context"
// import { getAnswerFromApiUserProfile } from "../../getAnswerFromApiUserProfile/getAnswerFromApiUserProfile"
import { api } from "../../../api/userInfo"
import Link from "antd/es/typography/Link"



export default function UserProfile(props) {
    
    // let cont = useContext(Context1)
    // let a = cont.setSet1
    // let b = cont.rec1
    
    let [rec , setSet] = useState("")
    let [test , setTest] = useState([])
    let params = props.params
    
    let obj = {
        image: rec.avatar_url , 
        name: rec.name ,
        login:rec .login ,
        bio:rec .bio , 
        followers_url: rec.followers_url , 
        followers: rec.followers , 
        following_url: rec.following_url , 
        following: rec.following , 
        blog : rec.blog , 

    }

    let followers = obj.followers_url

    useEffect(() => {
        // getAnswerFromApiUserProfile (a , params )  
        api(params).then((e) => {
            setSet(e)
        })
        // followersApi(params).then((e) => {
        //     setTest(e)
        // })
        // console.log(test)
    } , [])
 
    
    
    
    
   return(
   <>
    
    <div className="p1">
                            <div className="userImage">
                                <img src={obj.image}/>
                            </div>
                            <div className="userName">
                                <p>{obj.name}</p>
                            </div>
                            <div className="login">
                                <h5>{obj.login}</h5>
                            </div>
                            <div className="button-follow">
                                <button type="button" class="btn btn-secondary btn-sm">follow</button>
                            </div>
                            <div className="bio">
                                <h6>{obj.bio}</h6>
                            </div>
                            <div className="followers"> 
                                    
                                        <Link className="a" href={followers}>
                                             
                                                <i style={{ fontSize: "13px",}} class="fa fa-users"></i>
                                                <span>{obj.followers}</span>
                                                <p>followers</p>
                                            
                                        </Link> 
                                       {/* /-----------------------------------------------------------------------------------------------------------------------/ */}
                                        
                                        
                                    <span>.</span>
                                    
                                        <a className="a" href={obj.following_url}>
                                            
                                                <span>{obj.following}</span>
                                                <p>following</p>
                                            
                                        </a>
                                    
                            </div>
                            <div className="blog">
                               { !props.blog ? ""  : 
                               <>
                               
                               <i className="fa fa-chain"></i>
                               <a href={obj.blog}>{obj.blog}</a>
                                
                               
                               </>}
                               
                            </div>
                            <div className="achievements">
                                <h6>Achievements</h6>

                            </div>
                            <div className="block-report">
                                <p>block.and.report</p>
                            </div>
                        </div>
    
    
    </>
   )
}
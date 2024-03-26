import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Input(props) {

    const [set , setSet] = useState("")
    let params = useParams()

    let pathanem = ( window.location.pathname);

  let replace =   pathanem.replace("/" , "")

 let sel = props.select
    
  const navigate = useNavigate()


  
    return(
        <>
        
        

            <div className="background">
                <div className="part1">


            <form className="f" onSubmit={(e) => {
            
            e.preventDefault()
            // if(replace == params.username) {

               navigate(`/search?q=${set}&type=repositories`)
                location.reload();

            // }
            // else if(replace == `${params.username}/repository`){
            //     navigate(`/${set}/repository`)
            //     location.reload();
            // }
            
        }} >
                    <button type="button" class="btn btn-outline-secondary bbb">


                        <i class="fa-solid fa-magnifying-glass"></i>

                        <input ref={sel}  type="search" onChange={(e) => {
                            let a  = e.target.value 
                            setSet(a)
                            
                        }}/>



                    </button>

                    
                    </form>


                </div>
                {set == "" ? null :
                <div className="part2">
                <i class="fa-solid fa-magnifying-glass"></i>
                   <p>{set}</p>
                </div>}
                
            </div>
        
        
        </>
    )
}
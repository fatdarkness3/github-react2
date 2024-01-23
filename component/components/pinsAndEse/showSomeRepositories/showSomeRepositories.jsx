export default function ShowSomeRepositories(props) {
    
    return(
        <>
        <div className="headerForBorder">

        <div className="part1-1">
            <a href="#" >

                {props.name}
                        
            </a>
            <p>{props.type==false ? "public": "privet"}</p>
        </div>
        <div className="type">
                <div className="part1-11">
                    <div></div>
                    <p>{props.language}</p>
                </div>
                
        </div>

        </div>
        


        
        </>
    )
}
import { searchRepository } from "../../../api/searchApi"

export default function Search() {

    searchRepository().then((e) => {
        console.log(e)
    })


    return (
        <>
        
        
        </>
    )
}
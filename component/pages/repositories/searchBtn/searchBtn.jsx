export default function SearchBtn(props) {
    return (
        <>
            <div className="searchBtn">
                                <input type="search" placeholder="Find your repository" class="form-control" id="exampleInputEmail1"
                                 onChange={(e) => {
                                    let a = e.target.value
                                    props.setSearchValue(a)
                                    
                                }}/>
                                <button type="button" class="btn btn-secondary btn-sm">
                                    <div className="givFlex">
                                        <p>Type </p>
                                        
                                        <i class="fa fa-sort-down"></i>
                                    </div>
                                    
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm">
                                    <div className="givFlex">
                                        <p>Language </p>
                                        
                                        <i class="fa fa-sort-down"></i> 
                                    </div>
                                
                                </button>
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
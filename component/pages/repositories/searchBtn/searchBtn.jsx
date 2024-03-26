import { useEffect, useState } from 'react';
import { repositories } from '../../../../api/RepositoresApi';
import { Link, useParams, useSearchParams } from 'react-router-dom';

export default function SearchBtn(props) {
  const [active, setActive] = useState('');
  const [mm, setMm] = useState([]);
  const [active2, setActive2] = useState('');
  const [active3, setActive3] = useState('');
  const [type, setType] = useState('');
  const [langu, setLangu] = useState('');
  const [sort ,setSort] = useState("")

  let [searchParams, setSearchParams] = useSearchParams();


  let username = props.username;

  useEffect(() => {
    repositories(username).then((e) => {
      setMm(e);
    });
  }, []);
  useEffect(() => {
    if (langu || type || sort) {
      setSearchParams(`tab=repositories&language=${langu}&type=${type}&sort=${sort}`);
    } 
  }, [type , langu , sort]);
  

 
  

  let arry = [
    'public',
    'private',
    'sources',
    'forks',
    'archived',
    'canBeSponsored',
    'mirrors',
    'templates',
  ];
  let arrysOfSort = [
    "Lastupdated",
    "Name",
    "Stars",
  ]
 



  function show() {
    let arry = [];
    mm.map((e) => {
      let a = e.language;
      arry.push(a);
      
    });

    let a = [...new Set(arry)];

    let mmm = a.filter((e) => {
      return e !== null;
    });
    return mmm
      .sort()
      .reverse()
      .map((e) => {
        return (
          <p
            onClick={() => {
              setLangu(e);

              setActive2(false);
            }}>
            
            {e}
          </p>
        );
      });
  }
  return (
    <>
      <div className='searchBtn'>
        <input
          type='search'
          placeholder='Find your repository'
          class='form-control'
          id='exampleInputEmail1'
          onChange={(e) => {

            let a = e.target.value;
            props.setSearchValue(a);

          }}
        />
        <div className='hame'>
          <button
            type='button'
            class='btn btn-secondary btn-sm'
            onClick={() => {
              setActive(!active);
              setActive2(false);
              setActive3(false);
            }}>
            <div className='givFlex'>
              <p>Type </p>
              <i class='fa fa-sort-down'></i>
            </div>
          </button>
          <div className={active ? 'openSomeThing' : 'none'}>
            <div className='p-1'>
              <span>Select type</span>
              <i
                class='fa-solid fa-xmark'
                onClick={() => {
                  setActive(!active);
                }}></i>
            </div>
            <div className='p-2'>
              <p
                onClick={() => {
                  if (langu || sort) {
                    // setSearchParams(`tab=repository&language=${langu}&type=&sort=${sort}`);
                    searchParams.delete("type")
                    setSearchParams(searchParams)

                  } else {
                    
                    setSearchParams("tab=repositories")
                  }
                  
                  setType('');
                  
                  setActive(false);
                }}>
                All
              </p>
              {arry.map((e) => {
                return (
                  <p
                    onClick={() => {
                      setType(e);
                      setActive(false);
                    }}>
                    {e}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className='hame2'>
          <button
            type='button'
            class='btn btn-secondary btn-sm'
            onClick={() => {
              setActive2(!active2);
              setActive(false);
              setActive3(false);
            }}>
            <div className='givFlex'>
              <p>Language </p>
              <i class='fa fa-sort-down'></i>
            </div>
          </button>
          <div className={active2 ? 'openSomeThing2' : 'none'}>
            <div className='p-1'>
              <span>Select type</span>
              <i
                class='fa-solid fa-xmark'
                onClick={() => {
                  setActive2(!active2);
                }}></i>
            </div>
            <div className='p-2'>
              <p
                onClick={() => {
                  setActive2(false);
                  if (type || sort) {
                    // setSearchParams(`tab=repository&language=&type=${type}&sort=${sort}`);
                    searchParams.delete("language")
                    setSearchParams(searchParams)
                  } else {
                    // searchParams.delete("language" , "type" , "sort" )
                    
                    setSearchParams("tab=repositories")
                  }
                  setLangu('');
                  
                }}>
                All
              </p>
              {show()}
            </div>
          </div>
        </div>

        <div className='hame3'>
          <button
            type='button'
            class='btn btn-secondary btn-sm'
            onClick={() => {
              setActive3(!active3);
              setActive(false);
              setActive2(false);
            }}>
            <div className='givFlex'>


              <p>Sort </p>
              <i class='fa fa-sort-down'></i>
            </div>
          </button>
          <div className={active3 ? 'openSomeThing3' : 'none'}>
            <div className='p-1'>
              <span>Select order</span>
              <i
                class='fa-solid fa-xmark'
                onClick={() => {

                  setActive3(!active3);
                  setActive(false);
                  setActive2(false);
                  
                }}></i>
            </div>
            <div className='p-2'>
              <p onClick={() => {
                setActive3(false)
                if (type || langu) {
                    // setSearchParams(`tab=repository&language=${langu}&type=${type}&sort=`);
                    searchParams.delete("sort")
                    setSearchParams(searchParams)

                  } else {
                    // searchParams.delete("language" , "type" , "sort" )
                    setSearchParams("tab=repositories")
                  }
                  setSort("")
              }}>All</p>
              {arrysOfSort.map((e)=> {
               return <p onClick={() => {
                setSort(e)
                setActive3(false)
               }}>{e}</p>
                
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

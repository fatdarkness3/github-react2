import { useEffect, useState } from 'react';
import '../../../styles/style.css';

import { repositories } from '../../../api/RepositoresApi';
import RenderRepose from './renderRepositories/renderrepose';
import Header1 from '../../components/header/header';
import UserProfile from '../../components/userProfile/userProfile';
import SearchBtn from './searchBtn/searchBtn';
import { MoonLoader } from 'react-spinners';
import { useParams, useSearchParams } from 'react-router-dom';
import { getAnswerFromApiUserProfile } from '../../getAnswerFromApiUserProfile/getAnswerFromApiUserProfile';
import { api } from '../../../api/userInfo';

export default function RepositoryPage(username) {
  const [repose, setRepose] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const [firstLoading, setFirstLoading] = useState(false);

  const [error, setError] = useState(false);
  const [test, setTest] = useState('');
  const [sss, setSss] = useState([]);

  let [searchParams] = useSearchParams();

  let lang = searchParams.get('language');
  let params = useParams();
  let getUserFromParams = params.username;
  
  
  useEffect(() => {
    api(getUserFromParams).then((e) => {
      setTest(e.name);
    });

    setFirstLoading(true);
    try {
      getAnswerFromApiUserProfile();
    } catch {
      setError(true);
    }

    setError(false);

    repositories(getUserFromParams)
      .then((e) => {
        setRepose(e);
      })
      .finally(() => {
        setFirstLoading(false);
      });
  }, []);

  document.title = `${getUserFromParams} (${test}) /Repository`;


    let result = repose

    .filter((e) => {
      if (
        e.name.includes(searchValue) ||
        searchValue == e.name
      ) {
        return true;
      }
    })
    .filter((e) => {
      if (e.language == lang) {
        return true;
      } else if (!lang || lang == '') {
        return true;
      }
    })


  return (
    <>
      <Header1 />
      {firstLoading ? (
        <div className='loading'>
          <MoonLoader color='#36d7b7' />
        </div>
      ) : (
        <div className='main'>
          <div className='wrapper'>
            <div className='flexing'>
              {error ? (
                <h1 color='#fff'>error</h1>
              ) : (
                <UserProfile params={getUserFromParams} />
              )}

              <div className='p2'>
                <div className='clearFilter'>


                  <h6>{result.length} results found</h6>

                </div>

                <SearchBtn setSearchValue={setSearchValue} username = {getUserFromParams} />
                <div className='repose'>
                  {
                    result.map((e, id) => {
                      
                      return (
                        <RenderRepose
                          params={getUserFromParams}
                          id={id}
                          pushed_at={e.updated_at}
                          language={e.language}
                          type={e.private}
                          name={e.name}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

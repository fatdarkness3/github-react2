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
import { insideRepositories } from '../../../api/insideRepositoriesApi';
import { api } from '../../../api/userInfo';
import InsideRepositories from './renderRepositories/insideRepositories/insideRepositories';

export default function RepositoryPage() {
  const [repose, setRepose] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const [firstLoading, setFirstLoading] = useState(false);
  
  const [error, setError] = useState(false);
  const [test, setTest] = useState('');
  let [searchParams] = useSearchParams();

  let lang = searchParams.get('lang');
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
      setFirstLoading(false);
    }

    setError(false);

    repositories(getUserFromParams)
      .then((e) => {
        setRepose(e);
      })

      
  }, []);

  document.title = `${getUserFromParams} (${test}) /Repository`;

  console.log(searchValue);
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
                <SearchBtn setSearchValue={setSearchValue} />
                <div className='repose'>
                  {repose
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
                    .map((e, id) => {
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

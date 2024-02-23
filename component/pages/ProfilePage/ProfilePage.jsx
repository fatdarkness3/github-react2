import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Header1 from '../../components/header/header';
import UserProfile from '../../components/userProfile/userProfile';
import PinAndEse from '../../components/pinsAndEse/pinsAndEse';
import { api } from '../../../api/userInfo';
import Loading from '../../components/loading/loading';
import Errors from '../../components/errors/errors';

export default function Profile() {
  const param = useParams();

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [matn, setMatn] = useState(false);
  let getUserFromParams = param.username;

  useEffect(() => {
    api(getUserFromParams)
      .then((e) => {
        setName(e);
      })
      .catch(() => {
        setMatn(true);
        setLoading(false);
      });
  }, []);
  document.title = name
    ? `${getUserFromParams} (${name.name})`
    : `${getUserFromParams}`;
  useEffect(() => {
    if (name) {
      setLoading(false);
    }
  }, [name]);
  return (
    <>
      <Header1 params={getUserFromParams} />
      {loading ? (
        <div className='center'>
          <Loading />
        </div>
      ) : (
        <div className='main'>
          <div className='wrapper'>
            <div className='flexing'>
              {matn ? (
                <>
                  <div className='center'>
                    <Errors />
                  </div>
                  <div className='text'>
                    <h1>Try again or check your Net</h1>
                  </div>
                </>
              ) : (
                <>
                  <UserProfile params={getUserFromParams} />
                  <PinAndEse params={getUserFromParams} />
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Header1 from '../../components/header/header';
import UserProfile from '../../components/userProfile/userProfile';
import PinAndEse from '../../components/pinsAndEse/pinsAndEse';
import { api } from '../../../api/userInfo';
import Loading from '../../components/loading/loading';
import Errors from '../../components/errors/errors';

export default function Profile(usename) {
  const param = useParams();

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [matn, setMatn] = useState(false);
  let getUserFromParams2 = param.username;
  useEffect(() => {
    api(getUserFromParams2)
      .then((e) => {
        setName(e);
      })
      .catch(() => {
        setMatn(true);
        setLoading(false);
      });
  }, []);
  document.title = name
    ? `${getUserFromParams2} (${name.name})`
    : `${getUserFromParams2}`;
  useEffect(() => {
    if (name) {
      setLoading(false);
    }
  }, [name]);
  return (
    <>
      <Header1 params={getUserFromParams2} />
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
                  <UserProfile params={getUserFromParams2} />
                  <PinAndEse params={getUserFromParams2} />
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

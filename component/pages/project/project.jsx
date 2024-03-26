import Header1 from '../../components/header/header';
import UserProfile from '../../components/userProfile/userProfile';
import { useParams } from 'react-router-dom';

export default function Project() {
  let params = useParams();
  let username = params.username;

  return (
    <>
      <Header1 params={username} />

      <div className='main'>
        <div className='wrapper'>
          <div className='flexing'>
            <UserProfile params={username} />
            
          </div>
        </div>
      </div>
    </>
  );
}

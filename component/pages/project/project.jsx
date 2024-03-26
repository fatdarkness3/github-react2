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
            <div className='part2-project'>
              <i class="fa-solid fa-building-columns"></i>
              <div className='matn'>
                <h5>Create your first GitHub project</h5>
                <h6>Projects are a customizable, flexible tool for planning and tracking your work.</h6>
              </div>
              <button>New project</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

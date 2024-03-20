import { useSearchParams } from 'react-router-dom';
import RepositoryPage from '../../pages/repositories/mainPageOfRepositories';
import Profile from '../../pages/ProfileOveriew/ProfileOveriew';


export default function LoadAllPages() {
  const [serach, setSearch] = useSearchParams();

  let tabValueFromeSearchParams = serach.get('tab');
  
  if (tabValueFromeSearchParams == 'repositories') {
    return <RepositoryPage/>;
  } else {
    return <Profile/>;
  }
}

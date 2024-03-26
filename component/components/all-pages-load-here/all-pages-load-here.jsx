import { useSearchParams } from 'react-router-dom';
import RepositoryPage from '../../pages/repositories/mainPageOfRepositories';
import Profile from '../../pages/ProfileOveriew/ProfileOveriew';
import Project from '../../pages/project/project';

export default function LoadAllPages() {
  const [serach, setSearch] = useSearchParams();

  let tabValueFromeSearchParams = serach.get('tab');
  
  if (tabValueFromeSearchParams == 'repositories') {
    return <RepositoryPage/>;
  }else if( tabValueFromeSearchParams == "project") {
    return <Project/>
  }
   else {
    return <Profile/>;
  }
}

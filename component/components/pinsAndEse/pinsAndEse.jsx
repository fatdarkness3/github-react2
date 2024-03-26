import { useEffect, useRef, useState } from 'react';
import { repositories } from '../../../api/RepositoresApi';
import { Link } from 'react-router-dom';
import ShowSomeRepositories from './showSomeRepositories/showSomeRepositories';
import CalendarHeatmap from 'react-calendar-heatmap';
import '../../../styles/style2.css';
import Moment from 'react-moment';
import { commit } from '../../../api/commit';

export default function PinAndEse(props) {
  const [set, setSet] = useState([]);
  const [time, setTime] = useState('');
  const [active, setActive] = useState('');
  const [nameOfRepository, setNameOfRepository] = useState([]);
  const [ttrue, setTtrue] = useState(false);
  const [pp, setPp] = useState([]);

  let username = props.params;

  useEffect(() => {
    repositories(username).then((e) => {
      setSet(e);

      setTime(e[0].pushed_at);
      setNameOfRepository(e[0].name);
     

      setTtrue(true);
    });
  }, []);

  useEffect(() => {
    if (ttrue && nameOfRepository) {
      commit(username, nameOfRepository).then((e) => {
        setPp(e.length);
      });
    }
  }, [ttrue]);

  const value = [
    { date: '2024/01/11', count: 2 },
    { date: '2024/01/12', count: 20 },
    { date: '2024/01/13', count: 10 },
    ...[...Array(19)].map((_, idx) => ({
      date: `2016/02/${idx + 10}`,
      count: idx,
      content: '',
    })),
    { date: '2024/01/11', count: 2 },
    { date: '2024/01/01', count: 5 },
    { date: '2024/01/02', count: 5 },
    { date: '2024/01/04', count: 11 },
    { date: '2023/05/04', count: 11 },
  ];

  let lenght = value.length;

  const today = new Date();

  return (
    <div className='p'>
      <h6>Popular repositories</h6>
      <div className='part1'>
        {set.map((e) => {
          return (
            <ShowSomeRepositories
              username={username}
              name={e.name}
              type={e.private}
              language={e.language}
            />
          );
        })}
      </div>
      <div className='part2'>
        <div className='fffa'>
          <h6> {lenght} contributions in 2023</h6>
          <div className='calendar'>
            <div className='cal'>
              <CalendarHeatmap
                showMonthLabels={true}
                showWeekdayLabels={true}
                showOutOfRangeDays={true}
                horizontal={true}
                startDate={new Date('2023-01-01')}
                endDate={today}
                gutterSize={2}
                values={value}
              />
            </div>

            <div className='flex1'>
              <ul>
                <li>
                  <a href='#'>Learn how we count contributions</a>
                </li>

                <li>
                  <p>Less</p>

                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <p>More</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='part3'>
        <h6>Contribution activity</h6>
        <div className='year'>
          <div className='aaa'>
            <button
              onClick={() => {
                setActive(!active);
              }}>
              <div className='p111'>
                {' '}
                <span>Year</span>: 2024 <i className='fa fa-caret-down'></i>
              </div>
            </button>
            <div id='input' className={active ? 'yyy' : null}>
              <p>2024</p>
              <p>2023</p>
            </div>
          </div>
        </div>
        <div className='all'>
          <div className='Contribution'>
            <p className='ab'>
              <Moment fromNow>{time ? time : 'dont have date'}</Moment>
            </p>
            <div className='ab2'>
              <i class='fa-solid fa-file-arrow-up'></i>
            </div>

            <Link
              to={nameOfRepository ? `/${username}/${nameOfRepository}` : '#'}>
              <div className='name1'>
                <h6>Created {pp} commits in 1 repository</h6>
                <div className='ttt'>
                  <a>
                    {username}/
                    {nameOfRepository ? nameOfRepository : 'not found'}
                  </a>
                  <p> {pp} commits</p>
                </div>
              </div>
            </Link>
            <div className='name2'>
              <i class='fa-solid fa-angles-up'></i>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Input from '../inputs/input';
import { createPortal } from 'react-dom';
import { repositories } from '../../../api/RepositoresApi';

export default function Header1() {
  const [repose11, setRepose11] = useState([]);
  const [repose, setRepose] = useState([]);
  const [open, setOpen] = useState(false);
  const [ac, setAc] = useState(false);
  const [ac2, setAc2] = useState(false);
  const [input, setInput] = useState('');
  const[search  , setSearchParams] = useSearchParams()

  let params = useParams();
  let username = params.username;
  let ref = useRef();
  let pathanem = window.location.pathname;
  let replace = pathanem.replace('/', '');
  

  useEffect(() => {
    repositories(replace).then((e) => {
      let a = e.length;
      setRepose11(a);
      setRepose(e);
    });
  }, []);
  return (
    <>
      <div className={ac ? 'back123' : 'none'} />
      <header>
        <div className='column'>
          <div className='flex'>
            <div className='cl'>
              <div className='left'>
                <button
                  type='button'
                  class='btn btn-outline-secondary'
                  onClick={() => {
                    setAc(true);
                    document.getElementById('app').className = 'back';
                  }}>
                  <i class='bi bi-list'></i>
                </button>
                <i class='fa-brands fa-github'></i>
                <h4>{replace}</h4>
              </div>
            </div>

            <div className='f'>
              <div className='right'>
                {open
                  ? createPortal(
                      <div className='abBlack'>
                        <div className='wrapper'>
                          <div className='content'>
                            <Input />
                          </div>
                        </div>
                      </div>,

                      document.body
                    )
                  : null}

                <button
                  type='button'
                  class='btn btn-outline-secondary bbb'
                  onClick={() => {
                    setOpen(true);
                  }}>
                  <div className='div' ref={ref}>
                    {/* <Input/> */}
                  </div>

                  <i class='fa fa-search'></i>
                  <input
                    onChange={(e) => {
                      // let val = e.target.value
                      // setSet(val)
                    }}
                    className='input'
                    type='search'
                    placeholder='Type / to search '
                  />
                </button>

                {/* </form> */}

                <button type='button' class='btn btn-outline-secondary'>
                  <div className='flex-button'>
                    <h4>+</h4>
                    <i
                      style={{ fontSize: '15px' }}
                      class='bi bi-caret-down-fill'></i>
                  </div>
                </button>
                <button type='button' class='btn btn-outline-secondary'>
                  <i class='bi bi-record-circle'></i>
                </button>

                <button type='button' class='btn btn-outline-secondary'>
                  <i class='bi bi-arrow-down-up'></i>
                </button>
                <button type='button' class='btn btn-outline-secondary'>
                  <i class='bi bi-archive'></i>
                </button>
              </div>
            </div>
          </div>

          <div className='part2'>
            <ul>
              <li className={search == "" ? 'focus' : 'noneBorder'}>
                <Link to={`/${username}`}>
                  <button>
                    <div className='give-position'>
                      <i class='fa fa-book'></i>
                      <h6>Overview</h6>
                    </div>
                  </button>
                </Link>
              </li>
              <li
                className={
                  search.get("tab") == "repositories" ? 'focus' : 'noneBorder'
                }>
                <Link to={`?tab=repositories`}>
                  <button>
                    <div className='give-position'>
                      <i class='fa fa-save'></i>

                      <h6>Repositories</h6>

                      {!repose11 ? (
                        <div className='none'>
                          <div className='absolute'>{repose11}</div>
                        </div>
                      ) : (
                        <div className='first'>
                          <div className='absolute'>{repose11}</div>
                        </div>
                      )}
                    </div>
                  </button>
                </Link>
              </li>
              <li className={
                  search.get("tab") == "project" ? 'focus' : 'noneBorder'
                }>
                <Link to={'?tab=project'}>
                  <button className='noneBorder'>
                    <div className='give-position'>
                      <i class='fa fa-columns'></i>
                      <h6>Project</h6>
                    </div>
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'?tab=package'}>
                  <button className='noneBorder'>
                    <div className='give-position'>
                      <i class='fa fa-dropbox'></i>
                      <h6>package</h6>
                    </div>
                  </button>
                </Link>
              </li>
              <li>
                <Link to={'?tab=star'}>
                  <button className={'noneBorder'}>
                    <div className='give-position'>
                      <i class='fa fa-star-o'></i>
                      <h6>Star</h6>
                    </div>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className={ac ? 'hamberger active' : 'hamberger'}>
        <div className='ham1'>
          <i class='fa-brands fa-github'></i>
          <div className='relative'>
            <span
              onClick={() => {
                setAc(false);
              }}>
              ⨯
            </span>
          </div>
        </div>
        <div className='ham2'>
          <div className='ham2-1 flex3'>
            <i class='fa-solid fa-house'></i>
            <Link to={`/${username}`}>
              <span>Home</span>
            </Link>
          </div>
          <div className='ham2-2 flex3'>
            <i class='fa-regular fa-circle'></i>
            <span>Issues</span>
          </div>
          <div className='ham2-3 flex3'>
            <i class='fa-solid fa-code-pull-request'></i>
            <span>Pull requests</span>
          </div>
          <div className='ham2-4 flex3'>
            <i class='fa-solid fa-book'></i>
            <span>Projects</span>
          </div>
          <div className='ham2-5 flex3'>
            <i class='fa-solid fa-envelope'></i>
            <span>Discussions</span>
          </div>
          <div className='ham2-6 flex3'>
            <i class='fa-solid fa-computer'></i>
            <span>Codespaces</span>
          </div>
        </div>
        <div className='ham3'>
          <div className='ham3-1 flex3'>
            <i class='fa-solid fa-paint-roller'></i>
            <span>Explore</span>
          </div>
          <div className='ham3-2 flex3'>
            <i class='fa-solid fa-gift'></i>
            <span>MarketPlace</span>
          </div>
        </div>
        <div className='ham4'>
          <div className='ham4-1'>
            <span>Repositories</span>
            {!ac2 ? (
              <i
                class='fa-solid fa-magnifying-glass'
                onClick={() => {
                  setAc2(true);
                }}></i>
            ) : (
              <input
                type='search'
                className='input'
                onChange={(e) => {
                  let a = e.target.value;
                  setInput(a);
                }}
              />
            )}
          </div>
          <div className='ham4-2'>
            {repose.map((e) => {
              let a = [];
              a.push(e.name);
              if (e.name.includes(input)) {
                return (
                  <Link to={`/${username}/${a}`}>
                    <div className='p'>
                      <img src={e.owner.avatar_url} />
                      <p>
                        {username} / {a.sort()}
                      </p>
                    </div>
                  </Link>
                );
              } else if (input == '' || !input) {
                return (
                  <Link to={`/${username}/${a}`}>
                    <div className='p'>
                      <img src={e.owner.avatar_url} />
                      <p>
                        {username} / {a.sort()}
                      </p>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

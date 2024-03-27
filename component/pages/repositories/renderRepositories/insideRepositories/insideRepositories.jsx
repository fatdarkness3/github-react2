import { useEffect, useState } from 'react';
import { insideRepositories } from '../../../../../api/insideRepositoriesApi';
import { Link, json, useParams } from 'react-router-dom';
import { pushFilesJs } from '../../../../../api/pushFiles';
import InsideRepositoriesComponent from '../../../../components/insideRepositories/insideRepositoriesComponent';
import HeaderForInsiderepositories from '../../../../components/headerForInsiderepositories/headerForInsideRepositories';
import '../../../../../styles/style.css';
import { api } from '../../../../../api/userInfo';
import { branch } from '../../../../../api/branch';
import { tags } from '../../../../../api/tags';
import { commits } from '../../../../../api/commits';
import { commit } from '../../../../../api/commit';
import Moment from 'react-moment';
import { languages } from '../../../../../api/languege';
import { getReadME } from '../../../../../api/readMe';

export default function InsideRepositories() {
  const [res, setRes] = useState({});
  const [res2, setRes2] = useState([]);
  const [req, setReq] = useState({});
  const [isRepositoryLoaded, setIsRepositoryLoaded] = useState(false);
  const [test, setTest] = useState([]);
  const [branch1, setBranch1] = useState([]);
  const [active, setActive] = useState('');
  const [commitmessage, setMessageCommit] = useState([]);
  const [time, setTime] = useState([]);
  const [commitsLenghts, setCommitsLenghts] = useState([]);
  const [readMe1, setReadMe] = useState('');

  const [popopo, setPopopo] = useState([]);
  const [ac, setAc] = useState(true);
  const [ac2, setAc2] = useState(false);
  const [ac3, setAc3] = useState(false);
  const [tik, setTik] = useState(false);
  const [tik2, setTik2] = useState(false);
  const [tik3, setTik3] = useState(false);

  let param = useParams();
  let username = param.username;
  let nameOfRepository = param.nameOfRepository;

  let default_branch = res.default_branch;

  useEffect(() => {
    tags(username, nameOfRepository).then((e) => {
      setTest(e.length);
    });

    insideRepositories(username, nameOfRepository).then((e) => {
      setRes(e);
      setIsRepositoryLoaded(true);
    });

    api(username).then((e) => {
      setReq(e);
    });

    branch(username, nameOfRepository).then((e) => {
      setBranch1(e);
    });
    

      getReadME(username, nameOfRepository).then((e) => {
        setReadMe(e);
      })
    

    languages(username, nameOfRepository).then((e) => {
      setPopopo(e);
    });
  }, []);

  useEffect(() => {
    if (isRepositoryLoaded) {
      pushFilesJs(username, nameOfRepository, default_branch).then((e) => {
        let tree = e.tree;

        setRes2(tree);
      });

      commit(username, nameOfRepository).then((e) => {
        setCommitsLenghts(e.length);
      });

      commits(username, nameOfRepository, default_branch).then((e) => {
        setMessageCommit(e.commit.message);
        setTime(e.commit.committer.date);
      });
    }
  }, [isRepositoryLoaded]);

  function cal(e) {
    let cc = Object.values(popopo);
    let cc2 = Object.keys(popopo);

    let sum = 0;
    for (let i = 0; i < cc.length; i++) {
      sum += cc[i];
    }

    return cc2.map((key) => {
      let a = [key, popopo[key]];

      let cfg = (a[1] * 100) / sum;

      return (
        <div className='op'>
          <div
            className={
              a[0] == 'JavaScript'
                ? 'yellow'
                : null || a[0] == 'CSS'
                  ? 'purple'
                  : null || a[0] == 'HTML'
                    ? 'red'
                    : null || a[0] == 'TypeScript'
                      ? 'blue'
                      : null || a[0] == 'Objective-C'
                        ? 'blue'
                        : null || a[0] == 'Objective-C++'
                          ? 'midblue'
                          : null || a[0] == 'Java'
                            ? 'orange'
                            : null || a[0] == 'GLSL'
                              ? 'someBlues'
                              : null || a[0] == 'C++'
                                ? 'sorkh'
                                : null || a[0] == 'C'
                                  ? 'gray'
                                  : null || a[0] == 'Python'
                                    ? 'blue'
                                    : null || a[0] == 'Ruby'
                                      ? 'darkRed'
                                      : null
            }></div>
          <h6>
            <span>{a[0]}</span>
            <span>{cfg.toFixed(1)}%</span>
          </h6>
        </div>
      );
    });
  }
  function cal2() {
    let arry = [];

    let cc = Object.values(popopo);
    let cc2 = Object.keys(popopo);

    let sum = 0;
    for (let i = 0; i < cc.length; i++) {
      sum += cc[i];
    }

    cc2.map((key) => {
      let a = [key, popopo[key]];
      let b = [key, ((popopo[key] * 100) / sum).toFixed(1)];

      arry.push(b);
    });
    return arry.map((e) => {
      let cxz = (e[1] / 100) * 300;
      let qqq = cxz.toFixed(1);

      return (
        <>
          <div
            className={
              e[0] == 'JavaScript'
                ? 'yellow'
                : null || e[0] == 'CSS'
                  ? 'purple'
                  : null || e[0] == 'HTML'
                    ? 'red'
                    : null || e[0] == 'TypeScript'
                      ? 'blue'
                      : null || e[0] == 'Objective-C'
                        ? 'blue'
                        : null || e[0] == 'Objective-C++'
                          ? 'midblue'
                          : null || e[0] == 'Java'
                            ? 'orange'
                            : null || e[0] == 'GLSL'
                              ? 'someBlues'
                              : null || e[0] == 'C++'
                                ? 'sorkh'
                                : null || e[0] == 'C'
                                  ? 'gray'
                                  : null || e[0] == 'Python'
                                    ? 'blue'
                                    : null || e[0] == 'Ruby'
                                      ? 'darkRed'
                                      : null
            }
            style={{ width: `${qqq}px`, height: '10px' }}></div>
        </>
      );
    });
  }
  cal2();

  return (
    <>
      <HeaderForInsiderepositories
        params={username}
        nameOfRepository={nameOfRepository}
      />

      <div className='wrapper'>
        <div className='showWhoIsLogin'>
          <div className='p1'>
            <img src={req.avatar_url} />

            <h6>{nameOfRepository}</h6>
            <p>{res.private == false ? 'Public' : 'private'}</p>
          </div>
          <div className='p2'>
            <button className='btn btn-secondary btn-sm'>
              <i class='fa-solid fa-thumbtack'></i>
              <span>Pin</span>
            </button>
            <button className='btn btn-secondary btn-sm'>
              <i class='fa-regular fa-eye'></i>
              <span>Watch</span>
              <div>
                <span>{res.subscribers_count}</span>
              </div>
              <i class='fa-solid fa-sort-down'></i>
            </button>
            <button className='btn btn-secondary btn-sm'>
              <i class='fa-brands fa-pushed'></i>
              <span>Fork</span>
              <div>
                <span>{res.forks_count}</span>
              </div>
              <i class='fa-solid fa-sort-down'></i>
            </button>
            <button className='btn btn-secondary btn-sm'>
              <i class='fa-regular fa-star'></i>
              <span>star</span>
              <div>
                <span>{res.stargazers_count}</span>
              </div>
              <i class='fa-solid fa-sort-down'></i>
            </button>
          </div>
        </div>
        <div className='container'>
          <div className='part1'>
            <div className='header'>
              <div className='p1'>
                <button className='btn btn-secondary btn-sm'>
                  <i class='fa-brands fa-pushed'></i>
                  <span>{res.default_branch}</span>
                  <i class='fa-solid fa-sort-down'></i>
                </button>
                <div className='d1'>
                  <i class='fa-brands fa-pushed'></i>
                  <span>{branch1.length}</span>
                  <span className='someColors'>Branches</span>
                </div>
                <div className='d2'>
                  <i class='fa-solid fa-thumbtack'></i>
                  <span>{test}</span>
                  <span className='someColors'>Tags</span>
                </div>
              </div>

              <div className='p2'>
                <button>
                  <i class='fa-solid fa-magnifying-glass'></i>
                  <input id='iii' placeholder='Go to file' />
                </button>
                <button>
                  <span>Add file</span>
                  <i class='fa-solid fa-sort-down'></i>
                </button>
                <div className='addres'>
                  <button
                    className='button green'
                    onClick={() => {
                      setActive(!active);
                    }}>
                    <i class='fa-solid fa-code'></i>
                    <span>Code</span>
                    <i class='fa-solid fa-sort-down'></i>
                  </button>

                  <div className={active ? 'active' : 'notActive'}>
                    <div className='p-1'>
                      <div className='ce1'>
                        <span>Local</span>
                      </div>
                      <div className='ce2'>
                        <span>Codespaces</span>
                      </div>
                    </div>
                    <div className='p-2'>
                      <div className='pp1'>
                        <i className='fa-solid fa-terminal'></i>
                        <span>Clone</span>
                      </div>
                      <div className='pp2'>
                        <span>?</span>
                      </div>
                    </div>
                    <div className='p-3'>
                      <div className='pp1'>
                        <div className={ac ? 'underline' : null}>
                          <h6
                            onClick={() => {
                              setAc(true);
                              setAc2(false);
                              setAc3(false);
                            }}>
                            HTTPS
                          </h6>
                        </div>
                        <div className={ac2 ? 'underline' : null}>
                          <h6
                            onClick={() => {
                              setAc2(true);
                              setAc3(false);
                              setAc(false);
                            }}>
                            SSH
                          </h6>
                        </div>
                        <div className={ac3 ? 'underline' : null}>
                          <h6
                            onClick={() => {
                              setAc3(true);
                              setAc2(false);
                              setAc(false);
                            }}>
                            GitHub CLI
                          </h6>
                        </div>
                      </div>

                      <div className={ac2 || ac3 ? 'none' : 'pp2'}>
                        <div className='flex'>
                          <input
                            id='myInput'
                            value={`https://github.com/${username}/${nameOfRepository}.git`}
                            className='input'
                          />

                          <i
                            className={
                              tik ? 'fa-solid fa-check' : 'fa-solid fa-copy'
                            }
                            onClick={() => {
                              // Get the text field
                              var copyText = document.getElementById('myInput');

                              // Select the text field
                              copyText.select();
                              copyText.setSelectionRange(0, 99999); // For mobile devices

                              // Copy the text inside the text field
                              navigator.clipboard.writeText(copyText.value);
                              setTik(true);
                            }}
                          />
                        </div>

                        <p>Clone using the web URL.</p>
                      </div>

                      <div className={ac2 ? 'pp2-2' : 'none'}>
                        <div className='flex'>
                          <input
                            id='myInput2'
                            value={`git@github.com:${username}/${nameOfRepository}.git`}
                            className='input'
                          />
                          <i
                            className={
                              tik2 ? 'fa-solid fa-check' : 'fa-solid fa-copy'
                            }
                            onClick={() => {
                              // Get the text field
                              var copyText =
                                document.getElementById('myInput2');

                              // Select the text field
                              copyText.select();
                              copyText.setSelectionRange(0, 99999); // For mobile devices

                              // Copy the text inside the text field
                              navigator.clipboard.writeText(copyText.value);
                              setTik2(true);
                            }}
                          />
                        </div>

                        <p>Use a password-protected SSH key.</p>
                      </div>

                      <div className={ac3 ? 'pp2-3' : 'none'}>
                        <div className='flex'>
                          <input
                            id='myInput3'
                            value={`gh repo clone ${username}/${nameOfRepository}`}
                            className='input'
                          />
                          <i
                            className={
                              tik3 ? 'fa-solid fa-check' : 'fa-solid fa-copy'
                            }
                            onClick={() => {
                              // Get the text field
                              var copyText =
                                document.getElementById('myInput3');

                              // Select the text field
                              copyText.select();
                              copyText.setSelectionRange(0, 99999); // For mobile devices

                              // Copy the text inside the text field
                              navigator.clipboard.writeText(copyText.value);
                              setTik3(true);
                            }}
                          />
                        </div>

                        <p>Work fast with our official CLI.</p>
                      </div>
                    </div>
                    <div className='p-44'>
                      <div className='popopo'>
                        <i className='fa-solid fa-download'></i>
                        <h6>Open with GitHub Desktop</h6>
                      </div>
                    </div>
                    <div className='p-55'>
                      <div className='popopo'>
                        <i className='fa-solid fa-file-zipper'></i>
                        <Link
                          to={`https://github.com/${username}/${nameOfRepository}/archive/refs/heads/main.zip`}>
                          <h6>Download ZIP</h6>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* https://developer.mozilla.org/en-US/docs/Web/API/URL/URL */}

            <div className='main'>
              <div className='p-11'>
                <div className='p-e'>
                  <img src={req.avatar_url} />
                  <span>{req.login}</span>
                  <span>{commitmessage}</span>
                </div>
                <div className='p-e2'>
                  <span>
                    <Moment toNow>{time}</Moment>
                  </span>
                  <div className='peyvand'>
                    <i class='fa-regular fa-clock'></i>
                    <span> {commitsLenghts} Commits</span>
                  </div>
                </div>
              </div>
              <div className='p-22'>
                {res2.map((e) => {
                  return (
                    <InsideRepositoriesComponent
                      time={time}
                      commitmessage={commitmessage}
                      path={e.path}
                    />
                  );
                })}
              </div>
            </div>
            <div className='readMe'>
              <h5>{readMe1 == "404: Not Found" ? "Empty" : readMe1}</h5>
            </div>
          </div>

          <div className='part2' style={{ width: '25%' }}>
            <div className='pr1'>
              <div className='p1 '>
                <h6>About</h6>
              </div>
              <div className='p2 '>
                <p>No description, website, or topics provided.</p>
              </div>
              <div className='p3'>
                <div className='pqq1 pqq'>
                  <a href='#'>
                    <i class='fa-brands fa-readme'></i>
                    <span>Readme</span>
                  </a>
                </div>
                <div className='pqq2 pqq'>
                  <a href='#'>
                    <i class='fa-solid fa-chart-line'></i>
                    <span>Activity</span>
                  </a>
                </div>
                <div className='pqq3 pqq'>
                  <a href='#'>
                    <i class='fa-regular fa-star'></i>
                    <span>{res.stargazers_count} stars</span>
                  </a>
                </div>
                <div className='pqq4 pqq'>
                  <a href='#'>
                    <i class='fa-regular fa-eye'></i>
                    <span>{res.subscribers_count} Watch</span>
                  </a>
                </div>
                <div className='pqq5 pqq'>
                  <a href='#'>
                    <i class='fa-solid fa-code-pull-request'></i>
                    <span>{res.forks_count} Fork</span>
                  </a>
                </div>
                <div className='pqq6 pqq'>
                  <a href='#'>
                    <span>Report repository</span>
                  </a>
                </div>
              </div>
            </div>
            <div className='pr2'>
              <a href='#'>
                <h6>Releases</h6>
              </a>
              <span>No releases published</span>
            </div>
            <div className='pr3'>
              <a href='#'>
                <h6>Packages</h6>
              </a>
              <span>No packages published</span>
            </div>
            <div className='pr4'>
              <h6>Languages</h6>
              <div className='pop1'>
                <div className='kaftar1'>{cal2()}</div>
                <div className='kaftar2'>{cal()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

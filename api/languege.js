import { token } from "./userInfo";
import { Octokit } from "octokit";

async function languages(username , nameOfRepository) {
  const octokit = new Octokit({
    auth: token
  })
  
 let a =  await octokit.request('GET /repos/{owner}/languages', {
    owner: username,
    
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  return a.data;
}
export {languages};
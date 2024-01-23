import { token } from "./userInfo";
import { Octokit } from "octokit";

async function pushFilesJs(username , nameOfRepository , default_branch) {


  const octokit = new Octokit({
    auth: token
  })
  
 let ret =  await octokit.request('GET /repos/{owner}/{repo}/git/trees/{tree_sha}', {
    owner: username ,
    repo: nameOfRepository,
    tree_sha: default_branch,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
      return ret.data;
}
export {pushFilesJs};
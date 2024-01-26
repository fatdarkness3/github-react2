import { Octokit } from "octokit"
import { token } from "./userInfo"

async function branch(username , nameOfRepository) {
    const octokit = new Octokit({
        auth: token
      })
      
     let a =  await octokit.request('GET /repos/{owner}/{repo}/branches', {
        owner: username,
        repo: nameOfRepository,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
    return a.data;
}
export {branch};
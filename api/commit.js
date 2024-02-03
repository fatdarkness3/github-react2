import { tokenTest } from "../src/token"
import { token } from "./userInfo"
import { Octokit } from "octokit"
async function commit(username , nameOfRepository) {
    const octokit = new Octokit({
        auth: tokenTest()
      })
      
    let a  =   await octokit.request('GET /repos/{owner}/{repo}/commits', {
        owner: username,
        repo: nameOfRepository,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      return a.data
}
export {commit}
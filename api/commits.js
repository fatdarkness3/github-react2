import { token } from "./userInfo"
import { Octokit } from "octokit"

async function commits(a ,name ,  branch) {
    const octokit = new Octokit({
        auth: token
      })
      
     let salam =  await octokit.request('GET /repos/{owner}/{repo}/commits/{ref}', {
        owner: a,
        repo: name,
        ref: branch,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      return salam.data
}
export {commits};
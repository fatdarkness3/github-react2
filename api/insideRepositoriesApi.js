import { token } from "./userInfo"
import { Octokit } from "octokit";

async function insideRepositories(username , nameOfRepository ) {
    const octokit = new Octokit({
        auth: token
      })
      
     let importApi =  await octokit.request('GET /repos/{owner}/{repo}', {
        owner: username,
        repo: nameOfRepository,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      let a= importApi.data
      
      return a;
}

export {insideRepositories}
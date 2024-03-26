import { Octokit } from "octokit"
import { tokenTest } from "../src/token";

async  function searchRepository() {
    const octokit = new Octokit({
        auth: tokenTest()
      })
      
     let repository =  await octokit.request('GET /search/repositories', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      return repository;
}
export {searchRepository};
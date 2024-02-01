 import { Octokit } from "octokit";












 export let token = "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"




 

 async function api(username) {
    
    const octokit = new Octokit({
        auth: token
      })
      
     let response =  await octokit.request('GET /users/{username}', {
        username: username,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
  return response.data;
}
export {api};
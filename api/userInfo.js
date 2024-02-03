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
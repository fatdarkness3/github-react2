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
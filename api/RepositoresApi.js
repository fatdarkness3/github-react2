
import { Octokit } from "octokit";
import { token } from "./userInfo";
async function repositories(username) {

    const octokit = new Octokit({
        auth: token
      })

let render =  await octokit.request('GET /users/{username}/repos', {
  username: username , 
  headers: {
     'X-GitHub-Api-Version': '2022-11-28'
   }
 })
 return render.data;
}
export {repositories};
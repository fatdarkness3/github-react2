
import { token } from "./userInfo"

async function pingsAndEseJs(props) {


    const octokit = new Octokit({
        auth: token
      })
      
 let a =      await octokit.request('GET /repos/{owner}/{repo}', {
        owner: props.username,
        repo: ``,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      return a;
}

export {pingsAndEseJs}
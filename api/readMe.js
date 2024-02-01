export async function getReadME(owner, repo) {
    const apiUrl = `https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`;

    
        const response = await fetch(apiUrl);
  
        
        const readme = await response.text();
        
        return readme;

       
  }
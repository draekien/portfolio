import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_PAT,
  userAgent: 'portfolio',
});

export default async function getLastDeployment() {
  const res = await octokit.rest.repos.listDeployments({
    repo: 'portfolio',
    owner: 'draekien',
    environment: 'production',
    per_page: 1,
  });

  return res.data[0];
}

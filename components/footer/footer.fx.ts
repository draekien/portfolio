import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_PAT,
  userAgent: 'portfolio',
});

export default async function getLastDeployment() {
  try {
    const res = await octokit.rest.repos.listDeployments({
      repo: 'portfolio',
      owner: 'draekien',
      environment: 'production',
      per_page: 1,
    });

    return res.data[0];
  } catch (error) {
    console.error(
      'Failed to get latest deployment. Check that your GITHUB_PAT has not expired.',
      error
    );

    return {
      created_at: '2024-03-16',
    };
  }
}

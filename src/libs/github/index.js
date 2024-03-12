import { getSingleDiscussionQuery, getDiscussionsQuery } from "./queries";

const endpoint = import.meta.env.PUBLIC_GITAPI;
const bearer = import.meta.env.AUTH_TOKEN;
const repoName = import.meta.env.PUBLIC_REPO_NAME;
const repoOwner = import.meta.env.PUBLIC_REPO_OWNER;

async function githubFetch({ query, variables }) {
  try {
    const results = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearer}`,
      },
      body: JSON.stringify({
        query: query && query,
        variables: variables && variables,
      }),
    });

    if (!results.ok) {
      throw new Error(
        `Fetch failed with status ${results.status}; Error: ${results.statusText}`
      );
    }

    const { data } = await results.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

export async function getDiscussion(id) {
  const variables = { repoName, repoOwner, number: parseInt(id) };

  const res = await githubFetch({
    query: getSingleDiscussionQuery,
    variables: variables, 
  });

  const { repository } = res;

  return repository;
}

export async function getDiscussions() {
  const variables = { repoName, repoOwner };

  const res = await githubFetch({
    query: getDiscussionsQuery,
    variables: variables,
  });

  const { repository } = res;

  return repository;
}

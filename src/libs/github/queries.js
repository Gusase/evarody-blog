export const getSingleDiscussionQuery = `
query getDiscussion($repoName: String!, $repoOwner: String!, $number: Int!){
  repository(owner:$repoOwner, name: $repoName) {
    discussion(number: $number) {
      author{
          login,
          avatarUrl,
          url,
      },
      title,
      body,
      bodyText,
      bodyHTML,
      category{
        name
      },
      repository{
        name,
      },
      publishedAt #comment created,
      createdAt #object created,
      lastEditedAt,
      updatedAt,
      comments(first:50){
        nodes{
            author{
                avatarUrl,
                login,
                url
            }
            body,
            publishedAt,
            lastEditedAt,
        },
        totalCount
      }
    },
  }
}
`;

export const getDiscussionsQuery = `
query getDiscussios($repoName: String!, $repoOwner: String!){
  repository(owner:$repoOwner, name: $repoName) {
    id,
    owner{
        avatarUrl,
        login,
        url
    },
    name,
    description,
    nameWithOwner,
    createdAt,
    url,
    discussions(first:27,orderBy:{field: CREATED_AT, direction: DESC}) {
        pageInfo{
            endCursor,
            hasNextPage,
            hasPreviousPage,
            startCursor
        },
        edges{
            cursor
            node{
                number,
                author{
                    login,
                    avatarUrl,
                    url,
                },
                title,
                body,
                bodyText,
                bodyHTML,
                category{
                  name
                },
                createdAt,
            },
        },
        nodes {
        # type: Discussion
        id
      },
        totalCount,
    },
    discussionCategories(first:2){
        edges{
            node{
                id,
                name,
            },
        },
    },
    languages(first:1){
        nodes{
            name
        }
    },
    openGraphImageUrl
  }
}
`;

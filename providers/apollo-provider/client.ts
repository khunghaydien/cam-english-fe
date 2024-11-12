import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
    gql,
    Observable,
    ApolloLink,
    HttpLink,
    split,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

// Function to refresh the token
async function refreshToken(client: ApolloClient<NormalizedCacheObject>) {
    try {
        const { data } = await client.mutate({
            mutation: gql`
        mutation RefreshToken {
          refreshToken
        }
      `,
        });
        const newAccessToken = data?.refreshToken;
        return `Bearer ${newAccessToken}`;
    } catch (err) {
        throw new Error("Error getting new access token.");
    }
}

let retryCount = 0;
const maxRetry = 3;

const errorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
        if (graphQLErrors) {
            graphQLErrors.forEach(({ message, extensions }) => {
                if (extensions) {
                } else {
                }
            });

            for (const err of graphQLErrors) {
                if (
                    err.extensions?.code === "UNAUTHENTICATED" &&
                    retryCount < maxRetry
                ) {
                    retryCount++;

                    return new Observable((observer) => {
                        refreshToken(client)
                            .then((token) => {
                                operation.setContext(({ headers = {} }) => ({
                                    headers: {
                                        ...headers,
                                        authorization: token,
                                    },
                                }));
                                const forward$ = forward(operation);
                                forward$.subscribe(observer);
                            })
                            .catch((error) => {
                                observer.error(error);
                            });
                    });
                }
            }
        }

        if (networkError) {
        }
    }
);

const successLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {
        if (response.data) {

        }
        return response;
    });
});

// Create an HTTP link
const httpLink = new HttpLink({
    uri: "http://localhost:3030/graphql",
    credentials: "include",
    headers: {
        "Content-Type": "application/json",
    },
});

const wsLink = new GraphQLWsLink(
    createClient({
        url: "ws://localhost:3030/graphql",
    })
);

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        );
    },
    wsLink,
    httpLink
);

// Combine error link and HTTP link
const link = ApolloLink.from([errorLink, successLink, splitLink]);

// Initialize Apollo Client
export const client = new ApolloClient({
    link,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    getCommentsByPostId: {
                        merge(_existing, incoming) {
                            return incoming;
                        },
                    },
                },
            },
        },
    }),
});

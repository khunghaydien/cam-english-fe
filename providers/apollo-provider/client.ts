import {
    ApolloClient,
    InMemoryCache,
    ApolloLink,
    HttpLink,
    split,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { BaseURL, WsURL } from "@/consts/app.const";
const errorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
        if (graphQLErrors) {
            graphQLErrors.forEach(({ message, extensions }) => {
                if (extensions) {
                    const validationErrors: any = extensions;
                    // toast({
                    //     title: validationErrors?.code?.split("_")?.join(" ") as string,
                    //     description: Object.values(validationErrors)[0] as string,
                    //     variant: "destructive",
                    // });
                } else {
                    // toast({
                    //     title: "GRAPHQL ERROR",
                    //     description: message,
                    //     variant: "destructive",
                    // });
                }
            });
        }

        if (networkError) {
            // toast({
            //     title: "NETWORK ERROR",
            //     description: networkError.message,
            //     variant: "destructive",
            // });
        }
    }
);

const successLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {
        if (response.data) {
            Object.keys(response.data).forEach((key) => {
                if (
                    key.toLowerCase().includes("create") ||
                    key.toLowerCase().includes("update") ||
                    key.toLowerCase().includes("delete")
                ) {
                    const operationName = key.charAt(0).toUpperCase() + key.slice(1);
                    // toast({
                    //     title: `${operationName
                    //         .replace(/([A-Z])/g, " $1")
                    //         .trim()} Successful`,
                    //     description: `${operationName
                    //         .replace(/([A-Z])/g, " $1")
                    //         .trim()} was successful.`,
                    //     variant: "default",
                    // });
                }
            });
        }
        return response;
    });
});

// Create an HTTP link
const httpLink = new HttpLink({
    uri: `${BaseURL}/graphql`,
    credentials: "include",
    headers: {
        "Content-Type": "application/json",
    },
});

const wsLink = new GraphQLWsLink(
    createClient({
        url: `${WsURL}/graphql`,
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

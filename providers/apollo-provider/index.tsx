"use client";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import { client } from "./client";

function index({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default index;

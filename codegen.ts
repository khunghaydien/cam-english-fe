import { CodegenConfig } from "@graphql-codegen/cli"
const config: CodegenConfig = {
  schema: 'https://cam-english-be-production.up.railway.app/graphql',
  documents: ["./graphql/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
}

export default config
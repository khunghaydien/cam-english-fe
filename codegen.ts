import { CodegenConfig } from "@graphql-codegen/cli"
import { baseURL } from "./consts/app.const"
const config: CodegenConfig = {
  schema: `${baseURL}/graphql`,
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
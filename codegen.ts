import { CodegenConfig } from "@graphql-codegen/cli"
import { BaseURL } from "./consts/app.const"
const config: CodegenConfig = {
  schema: `${BaseURL}/graphql`,
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
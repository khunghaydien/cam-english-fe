import { gql } from "@apollo/client";
export const AUTHORIZATION_LOGIN = gql`
  mutation AuthorizationLogin($authorizationLoginDto: AuthorizationLoginDto!) {
    authorizationLogin(authorizationLoginDto: $authorizationLoginDto) {
      id
      name
      email
      image
    }
  }
`;

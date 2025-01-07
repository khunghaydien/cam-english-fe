import { gql } from "@apollo/client";
export const AUTHORIZATION_SIGN_IN = gql`
  mutation AuthorizationSignIn($authorizationSignInDto: AuthorizationSignInDto!) {
    authorizationSignIn(authorizationSignInDto: $authorizationSignInDto) {
      id
      name
      email
      image
    }
  }
`;
export const SIGN_IN = gql`
  mutation SignIn($signInDto: SignInDto!) {
    signIn(signInDto: $signInDto) {
      id
      name
      email
      image
    }
  }
`;
export const SIGN_UP = gql`
  mutation SignUp($signUpDto: SignUpDto!) {
    signUp(signUpDto: $signUpDto) {
      id
      name
      email
      image
    }
  }
`;
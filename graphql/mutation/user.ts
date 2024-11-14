import { gql } from "@apollo/client";
export const SIGN_UP_BY_GOOGLE = gql`
  mutation SignUpByGoogle($signUpByGoogleDto: SignUpByGoogleDto!) {
    signUpByGoogle(signUpByGoogleDto: $signUpByGoogleDto) {
      id
      name
      email
      image
    }
  }
`;

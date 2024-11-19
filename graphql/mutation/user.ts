import { gql } from "@apollo/client";
export const CREATE_USER_FROM_PROVIDERS = gql`
  mutation CreateUserFromProviders($createUserFromProvidersDto: CreateUserDto!) {
    createUserFromProviders(createUserFromProvidersDto: $createUserFromProvidersDto) {
      id
      name
      email
      image
    }
  }
`;

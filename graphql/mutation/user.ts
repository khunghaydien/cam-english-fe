import { gql } from "@apollo/client";
export const CREATE_USER = gql`
  mutation CreateUser($createUserDto: CreateUserDto!) {
    createUser(createUserDto: $createUserDto) {
      id
    }
  }
`;

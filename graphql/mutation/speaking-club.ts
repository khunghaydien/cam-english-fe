import { gql } from "@apollo/client";
export const CREATE_CHANNEL = gql`
  mutation CreateChannel($createChannelDto: CreateChannelDto!) {
    createChannel(createChannelDto: $createChannelDto) {
      id
      name
      level
      language
      host {
        id
        name
        image
        email
      }
    }
  }
`;

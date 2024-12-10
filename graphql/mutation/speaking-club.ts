import { gql } from "@apollo/client";
export const CREATE_SPEAKING_ROOM = gql`
  mutation CreateSpeakingRoom($createSpeakingRoomDto: CreateSpeakingRoomDto!) {
    createSpeakingRoom(createSpeakingRoomDto: $createSpeakingRoomDto) {
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

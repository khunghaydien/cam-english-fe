// Subscription for the SpeakingClub (list)
import { gql } from "@apollo/client";
export const SPEAKING_CLUB_SUBSCRIPTION = gql`
  subscription SpeakingRoomSubscription($roomId:String) {
    speakingRoomSubscription(roomId: $roomId) {
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
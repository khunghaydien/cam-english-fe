// Subscription for the SpeakingClub (list)
import { gql } from "@apollo/client";
export const SPEAKING_CLUB_SUBSCRIPTION = gql`
  subscription SpeakingRoomSubscription {
    speakingRoomSubscription {
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
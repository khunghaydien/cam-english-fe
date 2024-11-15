import { gql } from "@apollo/client";
export const GET_SPEAKING_CLUB = gql`
  query GetSpeakingClub(
    $filterSpeakingClubDto: FilterSpeakingClubDto,
    $paginationDto: PaginationDto,
    $orderByDto: OrderByDto
  ) {
    getSpeakingClub(
      filterSpeakingClubDto: $filterSpeakingClubDto,
      paginationDto: $paginationDto,
      orderByDto: $orderByDto
    ) {
      data{
        id
        name
        level
        type
        language
      }  
      pagination{
        currentPage
        pageSize
        totalElements
        totalPages
      }
    }
  }
`

export const GET_CHANNEL = gql`
  query GetChannel($getChannelDto: GetChannelDto) {
    getChannel(getChannelDto: $getChannelDto) {
      id
      name
      level
      type
      language
      host {
        email
      }
    }
  }
`
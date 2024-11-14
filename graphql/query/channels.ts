import { gql } from "@apollo/client";
export const GET_CHANNEL = gql`
  query getChannel(
    $filterChannelDto: FilterChannelDto,
    $paginationDto: PaginationDto,
    $orderByDto: OrderByDto
  ) {
    getChannel(
      filterChannelDto: $filterChannelDto,
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
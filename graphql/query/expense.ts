import { gql } from "@apollo/client";
export const GET_EXPENSE = gql`
  query GetExpense(
    $filterExpenseDto: FilterExpenseDto
  ) {
    getExpense(
      filterExpenseDto: $filterExpenseDto
    ) {
      data {
        id
        description
        amount
        date
        author {
            id
            name
            image
        }
        createdAt
        updatedAt
      }
    }
  }
`
import { gql } from "@apollo/client";
export const CREATE_EXPENSE = gql`
  mutation CreateExpense($createExpenseDto: CreateExpenseDto!) {
    createExpense(createExpenseDto: $createExpenseDto) {
      id
      date
      description
      amount
      author {
        id
        name
        image
        email
      }
    }
  }
`;

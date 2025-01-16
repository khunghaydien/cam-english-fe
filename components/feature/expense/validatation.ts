import * as yup from 'yup'

export const createExpenseValidation = yup.object({
    description: yup.string().nullable().required('Name is requied'),
    amount: yup.string().nullable().required('Level is required'),
})
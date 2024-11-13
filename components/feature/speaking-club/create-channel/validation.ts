import * as yup from 'yup'

export const createChannelValidation = yup.object({
    name: yup.string().nullable().required('Name is requied'),
    level: yup.object().nullable().required('Level is required'),
    type: yup.object().nullable().required('Type is required'),
    language: yup.object().nullable().required('Language is required'),
})
import { OrderByDto, Pagination, PaginationDto } from "@/gql/graphql";
export const initialPagination: Pagination = {
    currentPage: 1,
    pageSize: 12,
    totalElements: 0,
    totalPages: Infinity
}
export const initialPaginationDto: PaginationDto = { page: 1, pageSize: 12 }
export const initialOrderByDto: OrderByDto = {
    field: 'createdAt',
    order: 'desc'
}
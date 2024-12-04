import { OrderByDto, Pagination, PaginationDto } from '@/gql/graphql';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { OptionProps } from '@/components/ui/select-chip';
import { initialOrderByDto, initialPagination, initialPaginationDto } from '@/consts';

export const initialFilterSpeakingRoomDto: FilterSpeakingClubDto = {}

export type FilterSpeakingClubDto = {
    name?: string,
    language?: OptionProps[]
    type?: OptionProps[]
    level?: OptionProps[]
}

export interface SpeakingClubState {
    filterSpeakingClubDto: FilterSpeakingClubDto,
    paginationDto: PaginationDto,
    orderByDto: OrderByDto
    pagination: Pagination
}

export const initialState: SpeakingClubState = {
    filterSpeakingClubDto: initialFilterSpeakingRoomDto,
    paginationDto: initialPaginationDto,
    orderByDto: initialOrderByDto,
    pagination: initialPagination,
};

const speakingClubSlice = createSlice({
    name: 'speakingClub',
    initialState,
    reducers: {
        setFilterSpeakingClubDto: (state, action: PayloadAction<FilterSpeakingClubDto>) => {
            state.filterSpeakingClubDto = action.payload;
        },
        setPaginationDto: (state, action: PayloadAction<PaginationDto>) => {
            state.paginationDto = action.payload;
        },
        setOrderByDto: (state, action: PayloadAction<OrderByDto>) => {
            state.orderByDto = action.payload;
        },
        setPagination: (state, action: PayloadAction<Pagination>) => {
            state.pagination = action.payload;
        },
    },
});
export const selectSpeakingClub: any = (state: RootState) => state['speakingClub']
export const { setFilterSpeakingClubDto, setPaginationDto, setOrderByDto, setPagination } = speakingClubSlice.actions;
export default speakingClubSlice.reducer;
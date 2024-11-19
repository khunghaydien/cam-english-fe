import { FilterSpeakingRoomDto, OrderByDto, PaginationDto } from '@/gql/graphql';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface SpeakingRoomState {
    filterSpeakingRoomDto: FilterSpeakingRoomDto,
    paginationDto: PaginationDto,
    orderByDto: OrderByDto
}

export const initialState: SpeakingRoomState = {
    filterSpeakingRoomDto: {
    } as FilterSpeakingRoomDto,
    paginationDto: { page: 1, pageSize: 10 } as PaginationDto,
    orderByDto: {} as OrderByDto,
};

const speakingRoomSlice = createSlice({
    name: 'speakingRoom',
    initialState,
    reducers: {
        setFilterSpeakingRoom: (state, action: PayloadAction<FilterSpeakingRoomDto>) => {
            state.filterSpeakingRoomDto = action.payload;
        },
        setPagination: (state, action: PayloadAction<PaginationDto>) => {
            state.paginationDto = action.payload;
        },
        setOrderBy: (state, action: PayloadAction<OrderByDto>) => {
            state.orderByDto = action.payload;
        },
    },
});
export const selectSpeakingRoom: any = (state: RootState) => state['speakingRoom']
export const { setFilterSpeakingRoom, setPagination, setOrderBy } = speakingRoomSlice.actions;
export default speakingRoomSlice.reducer;
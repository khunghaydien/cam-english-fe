import { OrderByDto, PaginationDto } from '@/gql/graphql';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { OptionProps } from '@/components/ui/select-chip';

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
}

export const initialState: SpeakingClubState = {
    filterSpeakingClubDto: {},
    paginationDto: { page: 1, pageSize: 10 } as PaginationDto,
    orderByDto: {} as OrderByDto,
};

const speakingClubSlice = createSlice({
    name: 'speakingClub',
    initialState,
    reducers: {
        setFilterSpeakingClub: (state, action: PayloadAction<FilterSpeakingClubDto>) => {
            state.filterSpeakingClubDto = action.payload;
        },
        setPagination: (state, action: PayloadAction<PaginationDto>) => {
            state.paginationDto = action.payload;
        },
        setOrderBy: (state, action: PayloadAction<OrderByDto>) => {
            state.orderByDto = action.payload;
        },
    },
});
export const selectSpeakingClub: any = (state: RootState) => state['speakingClub']
export const { setFilterSpeakingClub, setPagination, setOrderBy } = speakingClubSlice.actions;
export default speakingClubSlice.reducer;
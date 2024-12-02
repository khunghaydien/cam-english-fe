/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CreateSpeakingRoomDto = {
  language?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserDto = {
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type FilterSpeakingClubDto = {
  language?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type GetSpeakingRoomDto = {
  id: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSpeakingRoom?: Maybe<SpeakingRoom>;
  createUserFromCredentials?: Maybe<User>;
  createUserFromProviders?: Maybe<User>;
};


export type MutationCreateSpeakingRoomArgs = {
  createSpeakingRoomDto: CreateSpeakingRoomDto;
};


export type MutationCreateUserFromCredentialsArgs = {
  createUserFromCredentialsDto: CreateUserDto;
};


export type MutationCreateUserFromProvidersArgs = {
  createUserFromProvidersDto: CreateUserDto;
};

export type OrderByDto = {
  field?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  currentPage: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  totalElements: Scalars['Float']['output'];
  totalPages: Scalars['Float']['output'];
};

export type PaginationDto = {
  initial?: InputMaybe<Scalars['Float']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
};

export type Query = {
  __typename?: 'Query';
  getSpeakingClub?: Maybe<SpeakingClub>;
  getSpeakingRoom?: Maybe<SpeakingRoom>;
  hello: Scalars['String']['output'];
};


export type QueryGetSpeakingClubArgs = {
  filterSpeakingClubDto?: InputMaybe<FilterSpeakingClubDto>;
  orderByDto?: InputMaybe<OrderByDto>;
  paginationDto?: InputMaybe<PaginationDto>;
};


export type QueryGetSpeakingRoomArgs = {
  getSpeakingRoomDto?: InputMaybe<GetSpeakingRoomDto>;
};

export type SpeakingClub = {
  __typename?: 'SpeakingClub';
  data: Array<SpeakingRoom>;
  pagination: Pagination;
};

export type SpeakingRoom = {
  __typename?: 'SpeakingRoom';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  host?: Maybe<User>;
  hostId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  language?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userSpeakingRooms?: Maybe<Array<UserSpeakingRoom>>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  role?: Maybe<Scalars['String']['output']>;
};

export type UserSpeakingRoom = {
  __typename?: 'UserSpeakingRoom';
  id: Scalars['String']['output'];
  participant?: Maybe<User>;
  participantId?: Maybe<Scalars['String']['output']>;
  speakingRoom?: Maybe<SpeakingRoom>;
  speakingRoomId?: Maybe<Scalars['String']['output']>;
};

export type CreateSpeakingRoomMutationVariables = Exact<{
  createSpeakingRoomDto: CreateSpeakingRoomDto;
}>;


export type CreateSpeakingRoomMutation = { __typename?: 'Mutation', createSpeakingRoom?: { __typename?: 'SpeakingRoom', id: string, name?: string | null, level?: string | null, language?: string | null, host?: { __typename?: 'User', id: string, name: string, image?: string | null, email?: string | null } | null } | null };

export type CreateUserFromProvidersMutationVariables = Exact<{
  createUserFromProvidersDto: CreateUserDto;
}>;


export type CreateUserFromProvidersMutation = { __typename?: 'Mutation', createUserFromProviders?: { __typename?: 'User', id: string, name: string, email?: string | null, image?: string | null } | null };

export type GetSpeakingClubQueryVariables = Exact<{
  filterSpeakingClubDto?: InputMaybe<FilterSpeakingClubDto>;
  paginationDto?: InputMaybe<PaginationDto>;
  orderByDto?: InputMaybe<OrderByDto>;
}>;


export type GetSpeakingClubQuery = { __typename?: 'Query', getSpeakingClub?: { __typename?: 'SpeakingClub', data: Array<{ __typename?: 'SpeakingRoom', id: string, name?: string | null, level?: string | null, type?: string | null, language?: string | null }>, pagination: { __typename?: 'Pagination', currentPage: number, pageSize: number, totalElements: number, totalPages: number } } | null };

export type GetSpeakingRoomQueryVariables = Exact<{
  getSpeakingRoomDto?: InputMaybe<GetSpeakingRoomDto>;
}>;


export type GetSpeakingRoomQuery = { __typename?: 'Query', getSpeakingRoom?: { __typename?: 'SpeakingRoom', id: string, name?: string | null, level?: string | null, type?: string | null, language?: string | null, host?: { __typename?: 'User', email?: string | null } | null } | null };


export const CreateSpeakingRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSpeakingRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createSpeakingRoomDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSpeakingRoomDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSpeakingRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createSpeakingRoomDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createSpeakingRoomDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"host"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<CreateSpeakingRoomMutation, CreateSpeakingRoomMutationVariables>;
export const CreateUserFromProvidersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserFromProviders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createUserFromProvidersDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUserFromProviders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserFromProvidersDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createUserFromProvidersDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<CreateUserFromProvidersMutation, CreateUserFromProvidersMutationVariables>;
export const GetSpeakingClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSpeakingClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filterSpeakingClubDto"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterSpeakingClubDto"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationDto"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationDto"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderByDto"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderByDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSpeakingClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filterSpeakingClubDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filterSpeakingClubDto"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationDto"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderByDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderByDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"totalElements"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]}}]} as unknown as DocumentNode<GetSpeakingClubQuery, GetSpeakingClubQueryVariables>;
export const GetSpeakingRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSpeakingRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getSpeakingRoomDto"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GetSpeakingRoomDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSpeakingRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getSpeakingRoomDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getSpeakingRoomDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"host"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<GetSpeakingRoomQuery, GetSpeakingRoomQueryVariables>;
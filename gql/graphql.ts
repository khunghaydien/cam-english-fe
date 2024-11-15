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

export type Channel = {
  __typename?: 'Channel';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  host?: Maybe<User>;
  hostId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  language?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userChannel?: Maybe<Array<UserChannel>>;
};

export type CreateChannelDto = {
  language: Scalars['String']['input'];
  level: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type FilterSpeakingClubDto = {
  language?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type GetChannelDto = {
  id: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createChannel?: Maybe<Channel>;
  signUp?: Maybe<User>;
  signUpByGoogle?: Maybe<User>;
};


export type MutationCreateChannelArgs = {
  createChannelDto: CreateChannelDto;
};


export type MutationSignUpArgs = {
  signUp: SignUpDto;
};


export type MutationSignUpByGoogleArgs = {
  signUpByGoogleDto: SignUpByGoogleDto;
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
  getChannel?: Maybe<Channel>;
  getSpeakingClub?: Maybe<SpeakingClub>;
  hello: Scalars['String']['output'];
};


export type QueryGetChannelArgs = {
  getChannelDto?: InputMaybe<GetChannelDto>;
};


export type QueryGetSpeakingClubArgs = {
  filterSpeakingClubDto?: InputMaybe<FilterSpeakingClubDto>;
  orderByDto?: InputMaybe<OrderByDto>;
  paginationDto?: InputMaybe<PaginationDto>;
};

export type SignUpByGoogleDto = {
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type SignUpDto = {
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type SpeakingClub = {
  __typename?: 'SpeakingClub';
  data: Array<Channel>;
  pagination: Pagination;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  role?: Maybe<Scalars['String']['output']>;
};

export type UserChannel = {
  __typename?: 'UserChannel';
  channel?: Maybe<Channel>;
  channelId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  participant?: Maybe<User>;
  participantId?: Maybe<Scalars['String']['output']>;
};

export type CreateChannelMutationVariables = Exact<{
  createChannelDto: CreateChannelDto;
}>;


export type CreateChannelMutation = { __typename?: 'Mutation', createChannel?: { __typename?: 'Channel', id: string, name?: string | null, level?: string | null, language?: string | null, host?: { __typename?: 'User', id: string, name: string, image?: string | null, email?: string | null } | null } | null };

export type SignUpByGoogleMutationVariables = Exact<{
  signUpByGoogleDto: SignUpByGoogleDto;
}>;


export type SignUpByGoogleMutation = { __typename?: 'Mutation', signUpByGoogle?: { __typename?: 'User', id: string, name: string, email?: string | null, image?: string | null } | null };

export type GetSpeakingClubQueryVariables = Exact<{
  filterSpeakingClubDto?: InputMaybe<FilterSpeakingClubDto>;
  paginationDto?: InputMaybe<PaginationDto>;
  orderByDto?: InputMaybe<OrderByDto>;
}>;


export type GetSpeakingClubQuery = { __typename?: 'Query', getSpeakingClub?: { __typename?: 'SpeakingClub', data: Array<{ __typename?: 'Channel', id: string, name?: string | null, level?: string | null, type?: string | null, language?: string | null }>, pagination: { __typename?: 'Pagination', currentPage: number, pageSize: number, totalElements: number, totalPages: number } } | null };

export type GetChannelQueryVariables = Exact<{
  getChannelDto?: InputMaybe<GetChannelDto>;
}>;


export type GetChannelQuery = { __typename?: 'Query', getChannel?: { __typename?: 'Channel', id: string, name?: string | null, level?: string | null, type?: string | null, language?: string | null, host?: { __typename?: 'User', email?: string | null } | null } | null };


export const CreateChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createChannelDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateChannelDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createChannelDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createChannelDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"host"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<CreateChannelMutation, CreateChannelMutationVariables>;
export const SignUpByGoogleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUpByGoogle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signUpByGoogleDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpByGoogleDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUpByGoogle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signUpByGoogleDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signUpByGoogleDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<SignUpByGoogleMutation, SignUpByGoogleMutationVariables>;
export const GetSpeakingClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSpeakingClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filterSpeakingClubDto"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterSpeakingClubDto"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationDto"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationDto"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderByDto"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderByDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSpeakingClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filterSpeakingClubDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filterSpeakingClubDto"}}},{"kind":"Argument","name":{"kind":"Name","value":"paginationDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationDto"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderByDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderByDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"totalElements"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]}}]} as unknown as DocumentNode<GetSpeakingClubQuery, GetSpeakingClubQueryVariables>;
export const GetChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getChannelDto"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GetChannelDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getChannelDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getChannelDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"host"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<GetChannelQuery, GetChannelQueryVariables>;
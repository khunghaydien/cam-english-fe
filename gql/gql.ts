/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  mutation CreateSpeakingRoom($createSpeakingRoomDto: CreateSpeakingRoomDto!) {\n    createSpeakingRoom(createSpeakingRoomDto: $createSpeakingRoomDto) {\n      id\n      name\n      level\n      language\n      host {\n        id\n        name\n        image\n        email\n      }\n    }\n  }\n": types.CreateSpeakingRoomDocument,
    "\n  mutation CreateUserFromProviders($createUserFromProvidersDto: CreateUserDto!) {\n    createUserFromProviders(createUserFromProvidersDto: $createUserFromProvidersDto) {\n      id\n      name\n      email\n      image\n    }\n  }\n": types.CreateUserFromProvidersDocument,
    "\n  query GetSpeakingClub(\n    $filterSpeakingClubDto: FilterSpeakingClubDto,\n    $paginationDto: PaginationDto,\n    $orderByDto: OrderByDto\n  ) {\n    getSpeakingClub(\n      filterSpeakingClubDto: $filterSpeakingClubDto,\n      paginationDto: $paginationDto,\n      orderByDto: $orderByDto\n    ) {\n      data{\n        id\n        name\n        level\n        type\n        language\n        host{\n          id\n          name\n          image\n        }\n      }  \n      pagination{\n        currentPage\n        pageSize\n        totalElements\n        totalPages\n      }\n    }\n  }\n": types.GetSpeakingClubDocument,
    "\n  query GetSpeakingRoom($getSpeakingRoomDto: GetSpeakingRoomDto) {\n    getSpeakingRoom(getSpeakingRoomDto: $getSpeakingRoomDto) {\n      id\n      name\n      level\n      type\n      language\n      host {\n        email\n      }\n    }\n  }\n": types.GetSpeakingRoomDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateSpeakingRoom($createSpeakingRoomDto: CreateSpeakingRoomDto!) {\n    createSpeakingRoom(createSpeakingRoomDto: $createSpeakingRoomDto) {\n      id\n      name\n      level\n      language\n      host {\n        id\n        name\n        image\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateSpeakingRoom($createSpeakingRoomDto: CreateSpeakingRoomDto!) {\n    createSpeakingRoom(createSpeakingRoomDto: $createSpeakingRoomDto) {\n      id\n      name\n      level\n      language\n      host {\n        id\n        name\n        image\n        email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUserFromProviders($createUserFromProvidersDto: CreateUserDto!) {\n    createUserFromProviders(createUserFromProvidersDto: $createUserFromProvidersDto) {\n      id\n      name\n      email\n      image\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUserFromProviders($createUserFromProvidersDto: CreateUserDto!) {\n    createUserFromProviders(createUserFromProvidersDto: $createUserFromProvidersDto) {\n      id\n      name\n      email\n      image\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSpeakingClub(\n    $filterSpeakingClubDto: FilterSpeakingClubDto,\n    $paginationDto: PaginationDto,\n    $orderByDto: OrderByDto\n  ) {\n    getSpeakingClub(\n      filterSpeakingClubDto: $filterSpeakingClubDto,\n      paginationDto: $paginationDto,\n      orderByDto: $orderByDto\n    ) {\n      data{\n        id\n        name\n        level\n        type\n        language\n        host{\n          id\n          name\n          image\n        }\n      }  \n      pagination{\n        currentPage\n        pageSize\n        totalElements\n        totalPages\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSpeakingClub(\n    $filterSpeakingClubDto: FilterSpeakingClubDto,\n    $paginationDto: PaginationDto,\n    $orderByDto: OrderByDto\n  ) {\n    getSpeakingClub(\n      filterSpeakingClubDto: $filterSpeakingClubDto,\n      paginationDto: $paginationDto,\n      orderByDto: $orderByDto\n    ) {\n      data{\n        id\n        name\n        level\n        type\n        language\n        host{\n          id\n          name\n          image\n        }\n      }  \n      pagination{\n        currentPage\n        pageSize\n        totalElements\n        totalPages\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSpeakingRoom($getSpeakingRoomDto: GetSpeakingRoomDto) {\n    getSpeakingRoom(getSpeakingRoomDto: $getSpeakingRoomDto) {\n      id\n      name\n      level\n      type\n      language\n      host {\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSpeakingRoom($getSpeakingRoomDto: GetSpeakingRoomDto) {\n    getSpeakingRoom(getSpeakingRoomDto: $getSpeakingRoomDto) {\n      id\n      name\n      level\n      type\n      language\n      host {\n        email\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
import { Connection, Statement } from './types'




// POST for statements around existing statement

export interface ConnectionContextRequest {
    statement_id: string,
}

export interface ConnectionContextResponse {
    connections: Connection[],
    statements: Statement[],
}



// ----------- user -----------

// POST user/create
// 
// creates new user

export interface UserCreateRequest {
    username: string,
    password: string,
}

export interface UserCreateResponse {
    response: string,
}


// POST token
//
// get access token with login data

export interface TokenRequest {
    username: string,
    password: string,
    // scope, client_id, client_secret, grant_type ?
}

export interface TokenResponse {
    access_token: string,
    token_type: string,
}


// POST statement (get)
//
// search for statements

export interface StatementRequest {
    q: string,
    tags: string[],
    results: number,
    skip: number,
}

export interface StatementResponse {
    statements: Statement[],
}


// POST statement/context 
//
// get context for a statement

export interface StatementContextRequest {
    id: string,
    exclude_ids: string[],
}

export interface StatementContextResponse {
    statements: Statement[],
    connections: Connection[],
}



// 'Authorization': 'Bearer ' + token


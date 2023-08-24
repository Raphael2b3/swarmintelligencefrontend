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
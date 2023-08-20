import { Connection, Statement } from './types'




// POST for statements around existing statement

export interface ConnectionContextRequest {
    statement_id: string,
}

export interface ConnectionContextResponse {
    connections: Connection[],
    statements: Statement[],
}
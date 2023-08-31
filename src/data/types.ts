

export interface Statement {
    id: string,
    truth: number,
    arg_connection_ids: string[],
    parent_connection_ids: string[],
    tags: string[],

    user_created: boolean,
    user_voted: number, // -1, 0, 1
}





export interface Connection {
    id: string,
    stm_parent_id: string,
    stm_child_id: string,
    supports: boolean,
    user_created: boolean,
    user_voted: number,
} 


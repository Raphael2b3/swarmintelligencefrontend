

export interface Statement {
    id: string,
    value: string,
    user_vote: number, // -1, 0, 1
    user_is_author: boolean,
    
    loaded: boolean,
    arg_ids: string[],
    parent_ids: string[],
}





export interface Connection {
    id: string,
    supports: boolean,
    stm_parent_id: string,
    stm_child_id: string,
} 


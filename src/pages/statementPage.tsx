import { useContext } from 'react'
import { useParams } from "react-router-dom"
import AppFrame from "../components/appFrame"
import { StatementContextRequest, StatementContextResponse } from "../data/interface"
import { AppContext } from "../context/appContext"
import Statement from '../components/statement'


export default function StatementPage() {

    const { statemendID } = useParams()
    const AppCtx = useContext(AppContext)



    return(
        <AppFrame>
            Statement page with param: { statemendID }
            <Statement 
                value = 'Delphine sind schwule Haie.'
                tags = {['Tiere', 'Sexualität', 'Meer']}
                user_created = {true}
                user_voted = {1}
            />
        </AppFrame>
    )


    function postStatementContext(id: string, exclude_ids: string[]): Promise<StatementContextResponse> {

        return new Promise<StatementContextResponse>(
    
            (resolve, reject): void => {
        
                const request: StatementContextRequest = {
                    id: id,
                    exclude_ids: exclude_ids,
                }
        
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(request)
                }
        
                fetch(AppCtx.root + 'statement/context', requestOptions)
                    .then( 
                        response => resolve(response.json()) 
                    )
                    .catch( 
                        message => reject(message) 
                    )
        
            }
        )
    
    }

}


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0NSIsImV4cCI6MTY5NjA4MzAxOX0.W4SgcUjU5uj7w2V60t3GV7XtD-nfuKUPIc7c3aM6JRY
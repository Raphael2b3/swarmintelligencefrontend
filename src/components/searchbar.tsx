import { useState, useContext } from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import { StatementRequest, StatementResponse } from '../data/interface'
import { AppContext } from '../context/appContext'

const Frame = styled.div`
    width: inherit;
`

const Border = styled.div`
    border: solid 1px grey;
    border-radius: 100px;
    padding: 3px 6px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: white;
`

const SearchInput = styled.input`
    all: unset;
    flex: 1 1 auto;
    margin-left: 5px;
`

const IconButton = styled(Icon)`

`


export default function Searchbar(){

    const [searchString, setSearchString] = useState<string>('')
    const AppCtx = useContext(AppContext)

    return(
        <Frame>
            <Border>
                <IconButton onClick = {handleSearch}>search</IconButton>
                <SearchInput 
                    onChange = {(e) => {handleInput(e)}} 
                    value = {searchString}
                />
                <IconButton>more_horiz</IconButton>
            </Border>
        </Frame>        
    )

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {

        setSearchString(e.currentTarget.value)

    }

    function handleSearch() {

        postStatementSearch(searchString, [])
            .then( 
                (result) => {
                    console.log(result)
                }
            )
    }


    function postStatementSearch(searchString: string, tags: string[]): Promise<StatementResponse> {

        return new Promise<StatementResponse>(
    
            (resolve, reject): void => {
        
                const request: StatementRequest = {
                    q: searchString,
                    tags: tags,
                    results: 0,
                    skip: 0,
                }
        
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0NSIsImV4cCI6MTY5NjA4MzAxOX0.W4SgcUjU5uj7w2V60t3GV7XtD-nfuKUPIc7c3aM6JRY' },
                    body: JSON.stringify(request)
                }
        
                fetch(AppCtx.root + 'statement', requestOptions)
                    .then( response => resolve(response.json()) )
                    .catch( message => reject(message) )
        
            }
        )
    
    }

}
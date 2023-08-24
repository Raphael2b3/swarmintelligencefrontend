import { useState } from 'react'
import styled from 'styled-components'
import Icon from '../Icon'

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


    return(
        <Frame>
            <Border>
                <IconButton>search</IconButton>
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

}
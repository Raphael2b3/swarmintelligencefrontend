import { useState } from 'react'
import styled from 'styled-components'

const Frame = styled.div`
    width: inherit;
`

const Border = styled.div`
    border: solid 1px blue;
    border-radius: 100px;
`

const SearchInput = styled.input`
    all: unset;
`


export default function Searchbar(){

    const [searchString, setSearchString] = useState<string>('')


    return(
        <Frame>
            <Border>
                <SearchInput 
                    onChange = {(e) => {handleInput(e)}} 
                    value = {searchString}
                />

                {searchString}
            </Border>
        </Frame>        
    )

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {

        setSearchString(e.currentTarget.value)

    }

}
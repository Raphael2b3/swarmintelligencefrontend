import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BorderFrame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    border: solid 1px grey;
    border-radius: 5px;
    overflow: hidden;
`


interface LinkItemProps {
    odd: boolean,
    lastItem?: boolean,
}
const LinkItemFrame = styled.div<LinkItemProps>`
    
    width: 100%;
    border-bottom: solid ${props => props.lastItem ? '0' : '1'}px grey;
    background-color: ${props => props.odd ? 'lightgrey' : 'white'};


`


const LinkItem = styled(Link)`
    all: unset;

    padding: 2px 15px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

`

export default function Navi() {

    return(
        <BorderFrame>
            <LinkItemFrame odd = {true}>
                <LinkItem to = './login' > Login </LinkItem>
            </LinkItemFrame>
            <LinkItemFrame odd = {false} lastItem>
                <LinkItem to = '/'> empty </LinkItem>
            </LinkItemFrame>
        </BorderFrame>
    )
}
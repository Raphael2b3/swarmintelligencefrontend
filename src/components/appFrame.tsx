import styled from 'styled-components'
import Searchbar from '../components/searchbar'
import Navi from '../components/navi'


const Frame = styled.div`
    height: inherit;
    width: inherit;

    display: flex;
    flex-direction: column;
    jusitfy-content: center;
    align-items: center;
    position: relative;
`

const SearchbarFrame = styled.div`
    position: absolute;
    top: 0;
    z-index: 10;

    padding: 10px;
    max-width: 300px;
    width: 100%;
`

const NavFrame = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    padding: 10px;
`

const InnerFrame = styled.div`
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
`


interface Props {
    children: React.ReactNode,
}
export default function AppFrame(props: Props) {

    return (
        <Frame>
            <SearchbarFrame>
                <Searchbar/>
            </SearchbarFrame>
            
            <NavFrame>
                <Navi/>
            </NavFrame>

            <InnerFrame>
                { props.children }
            </InnerFrame>
        </Frame>
    )
} 
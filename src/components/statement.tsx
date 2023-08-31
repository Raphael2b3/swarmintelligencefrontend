import styled from 'styled-components'
import Icon from '../Icon'


const StatementFrame = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

const Border = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-radius: 7px;
    border: solid 1px grey;
    overflow: hidden;
`

const StatementInfoFrame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const StatementVoteFrame = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 10px;
    justify-content: center;
    align-items: center;
    border-left: solid 1px grey;
`

const Tags = styled.div`
    padding: 2px 2px 2px 10px;
    border-bottom: solid 1px grey;
    background-color: #ccc;
    color: #444;
    font-size: 12px;
    font-weight: 600;
`

const StatementTextFrame = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
`

const StatementText = styled.div`
    flex: 1 1 auto;
`

const VoteButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    border-radius: 100px;
    overflow: hidden;
`

interface VoteProps {
    upVote?: boolean,
}
const Vote = styled.div<VoteProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px ${props => props.upVote ? '4' : '8'}px 4px ${props => props.upVote ? '8' : '4'}px;
    border-right: solid ${props => props.upVote ? '1' : '0'}px grey;
    background-color: #333;

    &:hover {
        background-color: #666;
    }
`

const VoteIcon = styled(Icon)<VoteProps>`
    transform: rotate(${props => props.upVote ? '-90' : '90'}deg);
`


interface Props {
    value: string,
    tags: string[],
    user_created: boolean,
    user_voted: number,
}
export default function Statement(props: Props) {


    return (
        <StatementFrame>
            <Border>
                <StatementInfoFrame>
                    
                    <Tags>
                        {props.tags.map((tag, idx) => 
                            { return (tag + (idx === props.tags.length - 1 ? '' : ', ')) }
                        )}
                    </Tags>

                    <StatementTextFrame>
                        <StatementText>
                            {props.value}
                        </StatementText>
                        <Icon>
                            edit
                        </Icon>
                    </StatementTextFrame>

                </StatementInfoFrame>
                <StatementVoteFrame>
                    <VoteButtons>
                        <Vote upVote><VoteIcon upVote>arrow_forward_ios</VoteIcon></Vote>
                        <Vote><VoteIcon>arrow_forward_ios</VoteIcon></Vote>
                    </VoteButtons>

                </StatementVoteFrame>            
            </Border>
        </StatementFrame>
    )
}
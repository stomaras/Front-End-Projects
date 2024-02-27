import {styled} from "styled-components"

const Container = styled.div`
    display: flex;
`

const Panel = styled.div`
    flex:${(props) => props.flex};
`;

export const SplitScreen = ({children,  leftwidth = 1, rightwidth = 1}) => {
    const [left, right] = children;
    return (
        <Container>
            <Panel flex={leftwidth}>
                {left}
            </Panel>
            <Panel flex={rightwidth}>
                {right}
            </Panel>
        </Container>
    )
}
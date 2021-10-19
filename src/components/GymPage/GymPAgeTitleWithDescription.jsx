import styled from "styled-components";
import { useSelector } from "react-redux";
import { gymSelector } from "../../redux/gymPageReducer";

const TitleWithDescription = styled.div`
    width:70%;
    margin: 15px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    font-size:1.5rem;
    font-weight: 700;
`;

const Description = styled.h2`
    margin-top: 10px;
    width: 230px;
`;

function GymPageTitleWithDescription() {

    const { gymTitle, gymDescription } = useSelector(gymSelector);

    return <TitleWithDescription>
        <Title>{gymTitle}</Title>
        <Description>{gymDescription}</Description>
    </TitleWithDescription>
}

export default GymPageTitleWithDescription;
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const NavigationFrame = styled.div`
    height:20px;
    padding:10px;
    text-align: left;
    width:100px;
    font-size: 2rem;
`;

const NaigationArrow = styled.p`
    font-weight:1000;
    &:hover {
        cursor:pointer;
    }
`;

function GymPageNavigation() {

    let history = useHistory();

    return <NavigationFrame>
        <NaigationArrow onClick={() => history.push('/userPage')}>{'<'}</NaigationArrow>
    </NavigationFrame>
};

export default GymPageNavigation;
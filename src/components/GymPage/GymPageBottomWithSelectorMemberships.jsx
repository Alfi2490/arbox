import { useSelector } from "react-redux";
import { userSelector } from "../../redux/userPageReducer";
import styled from "styled-components";
import { useHistory } from "react-router";

const MembershipsFrame = styled.div`
    padding:10px;
    display:flex;
    align-items: center;
`;

const MembershipImage = styled.img`
    width:25px;
    height:25px;
    border-radius:50%;
    margin-right: 15px;
`;

const MembercipsArrow = styled.p`
    font-weight: 1000;
    margin-left: auto;
    &:hover{
        cursor: pointer;
    }
`;

function GymPageBottomWithSelectorMemberships() {

    const { userName, userImage } = useSelector(userSelector);
    const history = useHistory();

    return <MembershipsFrame>
            <MembershipImage src={userImage}/>
            <h1>{userName}</h1>
            <MembercipsArrow onClick={() => history.push('userPage')}>{'>'}</MembercipsArrow>
        </MembershipsFrame>
}

export default GymPageBottomWithSelectorMemberships;
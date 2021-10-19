import { useSelector } from "react-redux";
import { userSelector } from "../../redux/userPageReducer";
import styled from "styled-components";

const UserNameWithBioFrame = styled.div`
    margin: 10px auto 0;
    width: 80%;
`;

const UserName = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
`;

const UserBio = styled.h2`
    font-size: 1.5rem;
    margin-top: 10px;
`;


function UserPageNameWithBio() {

    const { userName, userBio } = useSelector(userSelector);

    return <UserNameWithBioFrame>
        <UserName>{userName}</UserName>
        <UserBio>{userBio}</UserBio>
    </UserNameWithBioFrame>
};

export default UserPageNameWithBio;
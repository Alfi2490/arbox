import UserPageBottomGym from "./UserPageBottomGym";
import styled from "styled-components";
import UserPageBottomEdit from './UserPageBottomEdit';
import USerPageBottomBirthday from './USerPageBottomBirthday';
import { useSelector } from "react-redux";
import { userSelector } from "../../../redux/userPageReducer";
import UserPageBottomForm from './UserPageBottomForm';

const BottomFrame = styled.div`
    width:90%;
    background-color: white;
    border-radius:8px;
    margin: 15px auto;
    color: black;
    min-height:100px;
`;

const UserPageBottomHeader = styled.div`
    background-color: whitesmoke;
    padding:10px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    text-align: left;
    font-weight: bold;
`;

function UserPageBottom() {

    const { editPersonalDetails } = useSelector(userSelector);

    return <BottomFrame>
        { editPersonalDetails ? <UserPageBottomForm /> : <>
            <UserPageBottomHeader>My Club</UserPageBottomHeader>
            <UserPageBottomGym />
            <UserPageBottomEdit />
            <USerPageBottomBirthday />
        </>}
        
    </BottomFrame>
}

export default UserPageBottom;
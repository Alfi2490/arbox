import styled from "styled-components";
import pencil from '../../../images/pencil.png';
import { useDispatch } from "react-redux";
import { changeEditPersonalDetails } from "../../../redux/userPageReducer";

const PageBottomEditFrame = styled.div`
    padding:10px;
    background-color: whitesmoke;
    display:flex;
    align-items: center;
`;

const PersonalData = styled.h1`
    font-weight: bold
`;

const EditBlockFrame = styled.div`
    display: flex
    align-items: center;
    margin-left:auto;
    margin-right: 20px;
    &:hover {
        cursor:pointer;
    }
`;

const EditText = styled.p`
    margin-left:10px;
    padding: 10px 0;
`;

const EditImage = styled.img`
    width:30px;
`;

function UserPageBottomEdit() {

    const dispatch = useDispatch();

    return <PageBottomEditFrame>
        <PersonalData>Personal Details</PersonalData>
        <EditBlockFrame onClick={() => dispatch(changeEditPersonalDetails())} >
            <EditImage src={pencil} alt="None" />
            <EditText>Edit</EditText>
        </EditBlockFrame>
        </PageBottomEditFrame>
}

export default UserPageBottomEdit;
import { useDispatch, useSelector } from "react-redux";
import { setUserImage, userSelector, changeEditUserImage } from '../../redux/userPageReducer';
import styled from "styled-components";
import lsUserActions from "../../localstorage/userLocastorage";

const UserImageInput = styled.div`
    height:100%;
    background-color: rgba(44, 55, 48 ,0.4);
    position: absolute;
    display:border-box;
    z-index:1;
    width: 100%;
`;

const InputFrame = styled.form`
    position:relative;
    margin: 100px auto;
    width: 300px;
    height: 100px;
    background-color: rgb(41, 41, 202);
    border-radius: 10px;
    padding-top:20px;
`;

const Label = styled.label`
    color: white;
    margin-right:5px;
`;

const UserButton = styled.button`
    margin-top:20px;
`;

function UserPageImageInput() {

    const { userImage } = useSelector(userSelector);
    const dispatch = useDispatch();

    return <UserImageInput>
        <InputFrame onSubmit={e => {
            e.preventDefault();
            dispatch(changeEditUserImage());
        }}>
        <Label htmlFor="userImage">Insert URL:</Label>
        <input type="text" name="userImage" value={userImage} onChange={(e) => {
            dispatch(setUserImage(e.target.value));
            lsUserActions.setLsUseerItem('userImage', e.target.value);
        }}/>
        <UserButton type="submit" name="submit">Close input</UserButton>
        </InputFrame>
    </UserImageInput>
}

export default UserPageImageInput;
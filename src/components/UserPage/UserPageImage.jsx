import { useSelector, useDispatch } from "react-redux";
import { userSelector, changeEditUserImage } from "../../redux/userPageReducer";
import styled from "styled-components";
import addphoto from '../../images/addphoto.png';

const UserImageFrame = styled.div`
    height: 80px;
    width: 80px;
    background-color:blue;
    margin: 0 auto;
    border-radius:50%;
    display: flex;
    position: relative;
`;

const AddPhotoFrame = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    bottom: 0;
    right: 0;

    &:hover{
        cursor: pointer;
    }
`;

const UserImage = styled.img`
    width: 100%;
`;

function UserPageImage() {

    const { userImage } = useSelector(userSelector);
    const dispatch = useDispatch();

    return <UserImageFrame>
        <UserImage src={userImage} alt="None" />
        <AddPhotoFrame onClick={() => dispatch(changeEditUserImage())}> 
            <UserImage src={addphoto} alt="None" />
        </AddPhotoFrame>
    </UserImageFrame>
};

export default UserPageImage;
import UserPageNavigation from "./UserPageNavigation";
import UserPageImage from "./UserPageImage";
import UserPageNameWithBio from "./UserPageNameWithBio";
import UserPageBottom from "./UserPageBottom/UserPageBottom";
import { useSelector } from 'react-redux';
import { userSelector } from "../../redux/userPageReducer";
import UserPageImageInput from "./UserPageImageInput";

function UserPage () {

    const { editUserImage } = useSelector(userSelector);

    return <div className="UserPage">
        {editUserImage && <UserPageImageInput />}
        <UserPageNavigation />
        <UserPageImage />
        <UserPageNameWithBio />
        <UserPageBottom />
    </div>
};

export default UserPage;
import { useSelector, useDispatch } from "react-redux";
import { userSelector, setUserName, setUserBio, setUserBirthDate, changeEditPersonalDetails } from "../../../redux/userPageReducer";
import modules from './UserPageBottomForm.module.css';
import lsUserActions from "../../../localstorage/userLocastorage";

function UserPageBottomForm() {

    const { userName, userBio, userBirthDate } = useSelector(userSelector);
    const dispatch = useDispatch();

    return <form className={modules.Form} onSubmit={(e) => {
        e.preventDefault();
        dispatch(changeEditPersonalDetails());
    }}>
            <div className={modules.InputFrame}>
            <label htmlFor="userName"> Name: </label>
            <input 
                type="text" 
                name="userName" 
                value={userName} 
                onChange={(e) => {
                    dispatch(setUserName(e.target.value));
                    lsUserActions.setLsUseerItem("userName", e.target.value);
                }} /></div>

            <div className={modules.InputFrame}>
            <label htmlFor="userBio"> Bio: </label>
            <input 
                type="text" 
                name="userBio" 
                value={userBio} 
                onChange={(e) => {
                    dispatch(setUserBio(e.target.value));
                    lsUserActions.setLsUseerItem("userBio", e.target.value);
                }} /> </div>

            <div className={modules.InputFrame}>
            <label htmlFor="userBirthDate"> Birthday: </label>
            <input 
                type="text" 
                name="userBirthDate" 
                value={userBirthDate} 
                onChange={(e) => {
                    dispatch(setUserBirthDate(e.target.value));
                    lsUserActions.setLsUseerItem("userBirthDate", e.target.value);
                }} /> </div>

            <button type="submit" name="submit">Close form</button>
        </form>
}

export default UserPageBottomForm;
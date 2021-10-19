import { useSelector, useDispatch } from "react-redux";
import { gymSelector, setGymTitle, setGymDescription, setGymImage } from "../../redux/gymPageReducer";
import modules from '../UserPage/UserPageBottom/UserPageBottomForm.module.css';
import lsGymActions from "../../localstorage/gymLocalstorage";

function GymPageBottomWithSelectorForm() {

    const { gymTitle, gymDescription, gymImage } = useSelector(gymSelector);
    const dispatch = useDispatch();

    return <form className={modules.Form}>
        <div className={modules.InputFrame}>
            <label htmlFor="gymTitle">Title:</label>
            <input 
                type="text" 
                name="gymTitle"
                value={gymTitle}
                onChange={e => {
                    dispatch(setGymTitle(e.target.value));
                    lsGymActions.setLsGymItem('gymTitle', e.target.value);
                }}/>
        </div>
        <div className={modules.InputFrame}>
            <label htmlFor="gymDescription">Description:</label>
            <input 
                type="text" 
                name="gymDescription"
                value={gymDescription}
                onChange={e => {
                    dispatch(setGymDescription(e.target.value));
                    lsGymActions.setLsGymItem('gymDescription', e.target.value);
                }}/>
        </div>
        <div className={modules.InputFrame}>
            <label htmlFor="gymImage">Insert URL:</label>
            <input 
                type="text" 
                name="gymImage"
                value={gymImage}
                onChange={e => {
                        dispatch(setGymImage(e.target.value));
                        lsGymActions.setLsGymItem('gymImage', e.target.value);
                }}/>
        </div>
    </form>
}

export default GymPageBottomWithSelectorForm;
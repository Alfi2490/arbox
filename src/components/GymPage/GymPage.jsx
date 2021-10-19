import GymPageImage from './GymPageImage';
import GymPageNavigation from './GymPageNavigation';
import GymPageTitleWithDescription from './GymPAgeTitleWithDescription';
import GymPageContactsBlock from './GymPageContactsBlock';
import GymPageBottomWithSelector from './GymPageBottomWithSelector';
import GymPageContactInput from './GymPageContactInput';
import { useSelector } from 'react-redux';
import { gymSelector } from '../../redux/gymPageReducer';

function GymPage () {

    const { contactInputActive } = useSelector(gymSelector);

    return <div className="GymPage">
        {contactInputActive && <GymPageContactInput />}
        <GymPageNavigation />
        <GymPageImage />
        <GymPageTitleWithDescription />
        <GymPageContactsBlock />
        <GymPageBottomWithSelector />
    </div>
};

export default GymPage;
import { useSelector, useDispatch } from "react-redux";
import { gymSelector, setBottomSelectorStatus } from "../../redux/gymPageReducer";
import styled from "styled-components";
import GymPageBottomWithSelectorForm from './GymPageBottomWithSelectorForm';
import GymPageBottomWithSelectorMemberships from "./GymPageBottomWithSelectorMemberships";

const BottomSelectorFrame = styled.div`
    margin: 20px auto 3px;
    width: 87%;
    display:flex;
    justify-content: space-between;
`;

const BottomSelector = styled.div`

    &:hover {
        cursor: pointer;
        color: whitesmoke;
    }
`;

const CurrentInformation = styled.div`
    flex-basis: 100%;
    background-color: white;
    height: 150px;
    width: 90%;
    margin:5px auto;
    border-radius: 8px;
    color: black;
`;

const SelectIndicatorFrame = styled.div`
    height:2px;
    width: 85%;
    margin: 0 auto;
    position: relative;
`;

const SlectIndicatorMemberships = styled.div`
    width: 100px;
    border: 1px solid white;
    position: absolute;    
    background-color:white;
`;

const SelctIndicatorForms = styled.div`
    width: 50px;
    border: 1px solid white;
    position: absolute; 
    background-color:white;
    right:0;
`;

function GymPageBottomWithSelector() {

    const { bottomSelectorStatus } = useSelector(gymSelector)
    const dispatch = useDispatch();

    return <>

        <BottomSelectorFrame>
            <BottomSelector onClick={() => dispatch(setBottomSelectorStatus('My Memberships'))}>My Memberships</BottomSelector>
            <BottomSelector onClick={() => dispatch(setBottomSelectorStatus('My Forms'))}> My Forms</BottomSelector>
        </BottomSelectorFrame>

        <SelectIndicatorFrame>
            {bottomSelectorStatus === "My Memberships" && <SlectIndicatorMemberships />}
            {bottomSelectorStatus === "My Forms" && <SelctIndicatorForms />}
        </SelectIndicatorFrame>

        <CurrentInformation>
            {bottomSelectorStatus === 'My Memberships' && <GymPageBottomWithSelectorMemberships />}
            {bottomSelectorStatus === 'My Forms' && <GymPageBottomWithSelectorForm />}
        </CurrentInformation>

    </>
};

export default GymPageBottomWithSelector;
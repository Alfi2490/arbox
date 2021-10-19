import { useSelector } from "react-redux";
import { gymSelector } from "../../../redux/gymPageReducer";
import styled from "styled-components";
import phone from '../../../images/phone.png';
import { useHistory } from 'react-router-dom';

const BottomGymFrame = styled.div`
    padding: 10px 30px;
    display:flex;
    align-items:center;
`;

const BottomGymImage = styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
    border: 1px solid silver;
`;

const BottomNameWithStatus = styled.div`
    flex-basis:30%;
    text-align: left;
    margin-left:10px;
`;

const BottomPhonewithNavigation = styled.div`
    margin-left:auto;
    width:45px;
    display:flex;
    align-items:center
`;

const BottomNavigation = styled.p`
    font-weight:1000;
    margin-left: 10px;
    &:hover{
        cursor:pointer;
    }
`;

function UserPageBottomGym() {

    const { gymImage, gymTitle } = useSelector(gymSelector);
    const history = useHistory();

    return <BottomGymFrame>

        <BottomGymImage src={gymImage} alt="None" />

        <BottomNameWithStatus>
            <h1>{gymTitle}</h1>
            <h3 style={{color:'green'}}>Active</h3>
        </BottomNameWithStatus>

        <BottomPhonewithNavigation>
            <img src={phone} alt="None" style={{width:'17px'}}/>
            <BottomNavigation onClick={() => history.push('/gymPage')}>{'>'}</BottomNavigation>
        </BottomPhonewithNavigation>

        </BottomGymFrame>
};

export default UserPageBottomGym;
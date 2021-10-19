import cake from '../../../images/cake.png';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../redux/userPageReducer';
import styled from 'styled-components';

const BottomBirthdayFrame = styled.div`
    display:flex;
    padding:10px
`;

const BottomBirthdayImage = styled.img`
    width:20px;
    height:20px;
    margin-left:10px;
`;

const BottomBiirthdaytextFrame = styled.div`
    text-align: left;
    margin-left:15px;
`;

const BottomBirthdday = styled.h1`
    font-size: 0.7rem;
`;

const BottomBirthdayDate = styled.h2`
    margit-top:5px
`;

function USerPageBottomBirthday() {

    const { userBirthDate } = useSelector(userSelector);

    return <BottomBirthdayFrame>
        <BottomBirthdayImage src={cake} alt="None" />
        <BottomBiirthdaytextFrame>
            <BottomBirthdday>Birthday</BottomBirthdday>
            <BottomBirthdayDate>{userBirthDate}</BottomBirthdayDate>
        </BottomBiirthdaytextFrame>
        </BottomBirthdayFrame>
}

export default USerPageBottomBirthday;
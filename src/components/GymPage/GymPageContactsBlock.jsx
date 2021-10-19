import phone from '../../images/phone.png';
import email from '../../images/email.png';
import www from '../../images/www.png';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { gymSelector, setContactInputActive } from '../../redux/gymPageReducer';

const ContactsFrame = styled.div`
    background-color: white;
    width: 85%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    align-items:center;
    justify-content:space-around;
    border-radius: 8px;
`;

const ImageWithInformation = styled.img`
    width:25px;

    &:hover {
        cursor: pointer;
    }
`;

const ImageWithoutInformation = styled.img`
    width:25px;
    opacity: 0.3; 

    &:hover {
        cursor: pointer;
    }
`;

function GymPageContactsBlock() {

    const { gymPhone, gymWww, gymMail } = useSelector(gymSelector);
    const dispatch = useDispatch();

    function setContactInputActiveHandler(inputname) {
        dispatch(setContactInputActive(inputname));
    }

    return <ContactsFrame>

        {gymPhone ? <ImageWithInformation src={phone} alt="None" onClick={() => setContactInputActiveHandler('Phone')} /> 
            : <ImageWithoutInformation src={phone} alt="None" onClick={() => setContactInputActiveHandler('Phone')} />}

        {gymWww ? <ImageWithInformation src={www} alt="None" onClick={() => setContactInputActiveHandler('WWW')}/> 
            : <ImageWithoutInformation src={www} alt="None" onClick={() => setContactInputActiveHandler('WWW')}/>}

        {gymMail ? <ImageWithInformation src={email} alt="None" onClick={() => setContactInputActiveHandler('E-mail')}/> 
            : <ImageWithoutInformation src={email} alt="None" onClick={() => setContactInputActiveHandler('E-mail')}/>}

    </ContactsFrame>
}

export default GymPageContactsBlock;
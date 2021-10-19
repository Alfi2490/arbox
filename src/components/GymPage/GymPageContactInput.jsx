import { useSelector, useDispatch } from "react-redux";
import { gymSelector, clearContactInputActive, setGymPhone, setGymMail, setGymWww } from "../../redux/gymPageReducer";
import styled from "styled-components";
import lsGymActions from "../../localstorage/gymLocalstorage";

const GymContactInput = styled.div`
    height:100%;
    background-color: rgba(44, 55, 48 ,0.4);
    position: absolute;
    display:border-box;
    z-index:1;
    width: 100%;
`;

const ContactForm = styled.form`
    position:relative;
    margin: 100px auto;
    width: 300px;
    height: 100px;
    background-color: rgb(69, 189, 89);
    border-radius: 10px;
    padding-top:20px;
`;

const ContactSubmit = styled.button`
    margin-top:15px;
`;

const ContactInputLAbel = styled.label`
    margin-right: 5px;
`;

const ContactInput = styled.input`

`;

function GymPageContactInput() {

    const dispatch = useDispatch();
    const { contactInputActive, gymMail, gymPhone, gymWww } = useSelector(gymSelector);

    let inputValue = '';
    let inputOnChange = '';
    let item = '';
    if ( contactInputActive === 'Phone' ) {
        inputValue = gymPhone;
        inputOnChange = setGymPhone;
        item = 'gymPhone';
    };
    if ( contactInputActive === 'WWW') {
        inputValue = gymWww;
        inputOnChange = setGymWww;
        item = 'gymWww';
    };
    if ( contactInputActive === 'E-mail') {
        inputValue = gymMail;
        inputOnChange = setGymMail;
        item = 'gymMail';
    }

    return <GymContactInput>

        <ContactForm onSubmit={e => {
            e.preventDefault();
            dispatch(clearContactInputActive());
        }}>
            <ContactInputLAbel>{contactInputActive}:</ContactInputLAbel>
            <ContactInput 
                name="contactInput"
                type="text"
                value={inputValue}
                onChange={e => {
                    dispatch(inputOnChange(e.target.value));
                    lsGymActions.setLsGymItem(item, e.target.value);
                }}
                 />
            <ContactSubmit type="submit" name="submit">
                Close input
            </ContactSubmit>
        </ContactForm>
    </GymContactInput>
}

export default GymPageContactInput;
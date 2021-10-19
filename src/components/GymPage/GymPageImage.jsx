import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { gymSelector } from '../../redux/gymPageReducer';

const ImgFrame = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: white;
    margin:0 auto;
    position: relative;
`;

const GymImage = styled.img`
    width:100%;
`;

function GymPageImage() {
    
    const { gymImage } = useSelector(gymSelector)

    return <ImgFrame>
        <GymImage src={gymImage} alt="noImage" />
    </ImgFrame>
}

export default GymPageImage;
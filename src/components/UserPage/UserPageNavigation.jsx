import search from '../../images/search.png';
import nonifications from '../../images/nonifications.png';
import styled from 'styled-components';

const UserNavigationFrame = styled.div`
    padding: 10px;
    text-align: right;
`;

const Image = styled.img`
    width: 25px;
    margin-left: 10px;
    &:hover {
        cursor:pointer;
    }
`;

function UserPageNavigation () {
    return <UserNavigationFrame>
        <Image src={search} alt="None" />
        <Image src={nonifications} alt="None" />
    </UserNavigationFrame>
}
export default UserPageNavigation;
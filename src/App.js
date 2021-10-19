import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import GymPage from './components/GymPage/GymPage';
import UserPage from './components/UserPage/UserPage';
import { useEffect } from 'react';
import lsUserActions from './localstorage/userLocastorage';
import lsGymActions from './localstorage/gymLocalstorage';
import { setGymTitle, setGymDescription, setGymImage, setGymPhone, setGymMail, setGymWww } from './redux/gymPageReducer';
import { setUserName, setUserBio, setUserBirthDate, setUserImage  } from './redux/userPageReducer';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  //Initialization
  
  useEffect(() => {
    let gymValues = lsGymActions.getLsGym();
        if (gymValues === null) {
            lsGymActions.initLsGym({
                gymImage: 'https://firebasestorage.googleapis.com/v0/b/israguru-f6736.appspot.com/o/gym.png?alt=media&token=6b6283a9-c8d2-4064-8e1a-2752abf8e01d',
                gymTitle: 'GymGym',
                gymDescription: 'Open Gym 06:00 - 18:00 Rotchchild 15, Tel Aviv',
                gymPhone: '',
                gymMail: '',
                gymWww: '',
            });
            gymValues = lsGymActions.getLsGym();
        };
        dispatch(setGymImage(gymValues.gymImage));
        dispatch(setGymTitle(gymValues.gymTitle));
        dispatch(setGymDescription(gymValues.gymDescription));
        dispatch(setGymPhone(gymValues.gymPhone));
        dispatch(setGymMail(gymValues.setGymMail));
        dispatch(setGymWww(gymValues.gymWww));

        let userValues = lsUserActions.getLsUser();
        if (userValues === null) {
            lsUserActions.initLsUser({
                userImage: 'https://firebasestorage.googleapis.com/v0/b/israguru-f6736.appspot.com/o/newuser.png?alt=media&token=4367fabd-5b7f-4119-afa0-888595cbcc4c',
                userName: 'New User',
                userBio: 'Body Builder',
                userBirthDate: 'January 1, 1990'
            });
            userValues = lsUserActions.getLsUser();
        };
        dispatch(setUserName(userValues.userName));
        dispatch(setUserBio(userValues.userBio));
        dispatch(setUserBirthDate(userValues.userBirthDate));
        dispatch(setUserImage(userValues.userImage));
  });

  return (
    <div className="App">
      <Switch>
        <Route path="/gymPage" component={GymPage} />
        <Route path="/userPage" component={UserPage} />
        <Redirect from="**" to="/gymPage" />
      </Switch>
    </div>
  );
}

export default App;

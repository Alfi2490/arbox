const USER = 'USER';

function initLsUser (user) {
    localStorage.setItem(USER, JSON.stringify(user));
};

function getLsUser () {
    let user = JSON.parse(localStorage.getItem(USER));
    return user;
}

function setLsUseerItem(type, item) {
    let user = JSON.parse(localStorage.getItem(USER));
    user[type] = item;
    localStorage.setItem(USER, JSON.stringify(user));
}

const lsUserActions = { initLsUser, getLsUser, setLsUseerItem };
export default lsUserActions; 
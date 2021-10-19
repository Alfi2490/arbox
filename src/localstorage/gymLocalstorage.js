const GYM = 'GYM';

function initLsGym (gym) {
    localStorage.setItem(GYM, JSON.stringify(gym));
};

function getLsGym () {
    let gym = JSON.parse(localStorage.getItem(GYM));
    return gym;
}

function setLsGymItem(type, item) {
    let gym = JSON.parse(localStorage.getItem(GYM));
    gym[type] = item;
    localStorage.setItem(GYM, JSON.stringify(gym));
}

const lsGymActions = { initLsGym, getLsGym, setLsGymItem };
export default lsGymActions; 
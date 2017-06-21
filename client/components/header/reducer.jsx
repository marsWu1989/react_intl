import FORECAST from './constant';

export default function forecast(number = null, action) {
    if (action.type === FORECAST) {
        return action.amount;
    }

    return number;
}


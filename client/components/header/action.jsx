import FORECAST from './constant';

export default function forecast(stories) {
    return {
        type: FORECAST,
        amount: stories
    };
}


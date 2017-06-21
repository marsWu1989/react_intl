import forecast from './../client/components/header/action';

// todo...
export default (ctx, next, store) => {
    store.dispatch(forecast(ctx.state.forecast));
};
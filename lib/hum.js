import HomeModel from './../server/models/HomeModel';

export default async(ctx, next) => {
    ctx.state.forecast = await HomeModel.forecast(ctx, next) || null;
    await next();
};
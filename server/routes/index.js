import Router from 'koa-router';
import Home from './../controllers/Home';

const router = new Router({
    prefix: '/api'
});

/*
 * @brief 测试数据
 * params  id
 * @return json
 */

router.get('/', Home.news);

export default router;
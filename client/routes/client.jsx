import React from 'react';
import { Route } from 'react-router';

const Index = (location, cb) =>
    require.ensure(
        [],
        require => cb(null, require('./../components/index').default),
        'index'
    );
export default (
    <Route>
        <Route path="/" getComponent={Index} />
    </Route>
);

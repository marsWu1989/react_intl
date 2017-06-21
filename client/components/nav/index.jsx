import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import s from './Nav';

const Nav = () =>
    <div className={s.nav}>
        <ul className={s.items}>
            <li>
                <Link to="/">
                    <FormattedMessage id="hello" />
                </Link>
            </li>
            <li><Link to="/">2</Link></li>
            <li><Link to="/">3</Link></li>
            <li><Link to="/">4</Link></li>
            <li><Link to="/">5</Link></li>
        </ul>
    </div>;

export default Nav;

// Header Component...!

import React, { FC } from 'react';

interface HeaderProp {
    screenName: string;
}

const Header: FC<HeaderProp> = ({ screenName }) => {
    return (
        <h1> {`${screenName} Screen`} </h1>
    );
};

export default Header;
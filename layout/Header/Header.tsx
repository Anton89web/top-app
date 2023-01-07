import React from 'react';
import cn from "classnames";
import styles from "./Header.module.css";
import {HeaderProps} from "./Header.props";

const Header = ({...props}: HeaderProps): JSX.Element => {
    return (
        <div  {...props}>
            HEADER
        </div>
    );
};

export default Header;

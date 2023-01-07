import React from 'react';
import cn from "classnames";
import styles from "./Sidebar.module.css";
import {SidebarProps} from "./Sidebar.props";

const Sidebar = ({...props}: SidebarProps): JSX.Element => {
    return (
        <div  {...props}>
            SIDEBAR
        </div>
    );
};

export default Sidebar;

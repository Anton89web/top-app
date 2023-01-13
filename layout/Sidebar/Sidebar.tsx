import React from 'react';
import cn from "classnames";
import styles from "./Sidebar.module.css";
import {SidebarProps} from "./Sidebar.props";
import Menu from "../Menu/Menu";
import {logo} from "../../public/Icons";
import Input from "../../components/Input/Input";
import Search from "../../components/Search/Search";

const Sidebar = ({className , ...props}: SidebarProps): JSX.Element => {
    return (
        <div className={(cn(className, styles.sidebar))}  {...props}>
            {logo}
            <div>
                <Search/>
            </div>
           <Menu/>
        </div>
    );
};

export default Sidebar;

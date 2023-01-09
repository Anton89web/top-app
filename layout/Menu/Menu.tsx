import React, {useContext} from 'react';
import cn from "classnames";
import styles from "./Menu.module.css";
import {format} from "date-fns";
import {AppContext} from "../../context/app.context";

const Menu = (): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);
    return (
        <div>
            {menu.map(e => (<li key={e._id.secondCategory}>{e._id.secondCategory}</li>))}
        </div>
    );
};

export default Menu;

import React from 'react';
import cn from "classnames";
import styles from "./Advantages.module.css";
import {AdvantagesProps} from "./Advantages.props";
import Card from "../Card/Card";
import {check, rate} from "../../public/Icons";
import {priceRU} from "../../helpers/helpers";

const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map(a=> (
                <div key={a._id} className={styles.advantage}>
                    {check}
                    <div className={styles.title}>
                        {a.title}
                    </div>
                    <div className={styles.vline}/>
                    <div className={styles.description}>{a.description}</div>
                </div>
            ))}
        </>
    )
};

export default Advantages;

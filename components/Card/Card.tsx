import React from 'react';
import cn from "classnames";
import styles from "./Card.module.css";
import {CardProps} from "./Card.props";

const Card = ({color, children, className, ...props}: CardProps): JSX.Element => {
    return (
        <div
            className={cn(styles.card, className, {
            [styles.blue]: color == "blue"
            })}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;

import React from 'react';
import cn from "classnames";
import styles from "./Paragraph.module.css";
import {ParagraphProps} from "./Paragraph.props";

const Paragraph = ({size, children}: ParagraphProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p,{
                [styles.big]: size == "big",
                [styles.medium]: size == "medium",
                [styles.small]:  size == "small",
            })}
        >
            {children}
        </p>
    );
};

export default Paragraph;

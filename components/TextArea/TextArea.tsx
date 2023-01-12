import React from 'react';
import cn from "classnames";
import styles from "./TextArea.module.css";
import {TextAreaProps} from "./TextArea.props";

const TextArea = ({className, ...props}: TextAreaProps): JSX.Element => {
    return (
        <textarea className={cn(className, styles.input)} {...props}/>
    );
};

export default TextArea;

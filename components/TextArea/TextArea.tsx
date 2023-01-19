import React, {ForwardedRef, forwardRef} from 'react';
import cn from "classnames";
import styles from "./TextArea.module.css";
import {TextAreaProps} from "./TextArea.props";
import Card from "../Card/Card";

const TextArea = forwardRef(({ error ,className, ...props}: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <div className={cn(styles.textareaWrapper, className)}>
            <textarea className={cn(styles.textarea, {
                [styles.error]: error
            })} ref={ref} {...props}/>
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>

    );
});
TextArea.displayName = 'TextArea';
export default TextArea;

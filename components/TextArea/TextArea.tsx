import React, {ForwardedRef, forwardRef} from 'react';
import cn from "classnames";
import styles from "./TextArea.module.css";
import {TextAreaProps} from "./TextArea.props";

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

export default TextArea;

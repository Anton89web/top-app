import React, {FC} from 'react';
import {ButtonIconProps, icons} from "./ButtonIcon.props";
import styles from "./ButtonIcon.module.css";
import cn from "classnames"

const ButtonIcon = ({appearance, icon, className, ...props}: ButtonIconProps): JSX.Element => {
   const IconCamp = icons[icon]
    return (
       <button
           aria-label={icon}
           className={cn(styles.button, className, {
            [styles.primary]: appearance == "primary",
            [styles.white]: appearance == "white",
       })}
           {...props}
       >
           {IconCamp}
       </button>
   )
};

export default ButtonIcon;

import React from 'react';
import cn from "classnames";
import styles from "./Footer.module.css";
import {FooterProps} from "./Footer.props";
import Link from "next/link";
import {format} from "date-fns";

const Footer = ({ className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer) } {...props}>
            <span>OwlTop © 2020 - {format( new Date(), 'yyyy')} Все права защищены</span>
            <Link  href={"/"} target={"_blank"} aria-label='Пользовательское соглашение'>
                Пользовательское соглашение</Link>
            <Link  href={"/"} target={"_blank"}
                   aria-label='Политика конфиденциальности'>
                Политика конфиденциальности</Link>
        </footer>
    );
};

export default Footer;

import React, {useEffect} from 'react';
import styles from "./Up.module.css";
import {up} from "../../public/Icons";
import {useScrollY} from "../../hooks/useScrollY";
import {motion, useAnimation} from "framer-motion";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

const Up = (): JSX.Element => {
    const controls = useAnimation();
    const y = useScrollY()

    useEffect(()=> {
        controls.start({ opacity: Math.round(y/document.body.scrollHeight)
    })}, [y, controls])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <motion.div
            className={styles.up}
            animate={controls}
            initial={{opacity: 0}}
        >
            <ButtonIcon icon={'up'} appearance={'primary'} onClick={scrollToTop}
            />
        </motion.div>
    );
};

export default Up;

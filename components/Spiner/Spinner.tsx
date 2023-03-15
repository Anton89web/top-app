import React, {FC} from 'react';
import s from "./Spinner.module.css"
import Image from "next/image";


const Spinner:FC = () => {
    return (
        <div className={s.spinner}>
            <Image src={'/spinner.gif'} width={200} height={200} alt={'spinner'}/>
        </div>
    );
};

export default Spinner;

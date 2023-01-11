import React from 'react';
import cn from "classnames";
import styles from "./HhData.module.css";
import {HhDataProps} from "./HhData.props";
import Card from "../Card/Card";
import {rate} from "../../public/Icons";

const HhData = ({count, juniorSalary, middleSalary, seniorSalary}: HhDataProps): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count} color='white'>
                <div className={styles.hhStatTitle}>
                    Всего вакансий
                </div>
                <div className={styles.countValue}>
                    {count}
                </div>
            </Card>
            <Card className={styles.salary} color='white'>
               <div>
                   <div className={styles.title}>
                       Начальный
                   </div>
                   <div className={styles.salaryValue}>
                       {juniorSalary}
                   </div>
                   <div className={styles.rate}>
                       {rate}
                       {rate}
                       {rate}
                   </div>
               </div>
                <div>
                    <div className={styles.title}>
                        Средний
                    </div>
                    <div className={styles.salaryValue}>
                        {middleSalary}
                    </div>
                    <div className={styles.rate}>
                        {rate}
                        {rate}
                        {rate}
                    </div>
                </div>
                <div>
                    <div className={styles.title}>
                        Профессионал
                    </div>
                    <div className={styles.salaryValue}>
                        {seniorSalary}
                    </div>
                    <div className={styles.rate}>
                        {rate}
                        {rate}
                        {rate}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default HhData;

import React from 'react';
import cn from "classnames";
import styles from "./Sort.module.css";
import {SortEnum, SortProps} from "./Sort.props";
import {sortIcon} from "../../public/Icons";

const Sort = ({sort, setSort, className, ...props }: SortProps): JSX.Element => {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <span
            onClick={()=> setSort(SortEnum.Rating)}
            className={cn({
            [styles.active]: sort == SortEnum.Rating
            })}
            >
                {sortIcon} По рейтингу
            </span>
            <span
                onClick={()=> setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort == SortEnum.Price
                })}
            >
                {sortIcon} По цене
            </span>

        </div>
    );
};

export default Sort;

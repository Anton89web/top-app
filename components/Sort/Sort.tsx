import React, { useState } from 'react';
import cn from "classnames";
import styles from "./Sort.module.css";
import {SortEnum, SortProps} from "./Sort.props";
import {sortIcon} from "../../public/Icons";

const Sort = ({sort, setSort, className, ...props }: SortProps): JSX.Element =>
{
    const [revIconRaiting, setRevIconRaiting] = useState(false)
    const [revIconPrice, setRevIconPrice] = useState(true)
    const [sortPrise, setSortPrice] = useState(true)
    const [sortRaiting, setSortRaiting ] = useState(false)


    return(<div className={cn(styles.sort, className)} {...props}>
            <span
            onClick={()=>{
            setSortRaiting(!sortRaiting)    
            setSort(sortRaiting? SortEnum.Rating : SortEnum.RatingDown)
            setRevIconRaiting(!revIconRaiting)
            } }
            className={cn({
            [styles.active]: sort == SortEnum.Rating
            })}
            >
                <span
                className={cn(styles.icon,{
            [styles.activeIcon]: revIconRaiting
            })}
                >{sortIcon}</span> По рейтингу
            </span>
            <span
                onClick={()=>{
                    setSortPrice(!sortPrise)
                    setSort(sortPrise? SortEnum.Price : SortEnum.PriceDown)
                    setRevIconPrice(!revIconPrice)} }
                className={cn(styles.icon,{
                    [styles.active]: sort == SortEnum.Price
                })}
            >
                <span
                className={cn(styles.icon,{
                    [styles.activeIcon]: revIconPrice
                    })}
                >{sortIcon}</span> По цене
            </span>
        </div>)
    
};

export default Sort;

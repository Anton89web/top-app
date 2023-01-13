import React from 'react';
import cn from "classnames";
import styles from "./Product.module.css";
import {ProductProps} from "./Product.props";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import Card from "../Card/Card";

const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
    return (
        <Card className={styles.product} color={'white'}>
            <div className={styles.logo}><img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title}/></div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>{product.price}</div>
            <div className={styles.credit}>{product.credit}</div>
            <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
            <div className={styles.tags}>{product.categories.map(c => <Tag key={c} color="ghost">{c}</Tag>)}</div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.rateTitle}>{product.reviewCount} отзывов</div>
            <div><hr className={styles.hr}/></div>
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>фичи</div>
            <div className={styles.advBlock}>
                <div className={styles.advantages}>
                   <div>Преимущества</div>
                   <div>{product.advantages}</div>
                </div>
                <div className={styles.disadvantages}>
                    <div>Недостатки</div>
                    <div>{product.disadvantages}</div>
                </div>
            </div>
            <div><hr className={styles.hr}/></div>
            <div className={styles.actions}>
                <Button appearance='primary'>Узнать подробнее</Button>
                <Button appearance='ghost' arrow='right'>Читать отзывы</Button>
            </div>
        </Card>
    );
};

export default Product;

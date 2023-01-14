import React from 'react';
import cn from "classnames";
import styles from "./Product.module.css";
import {ProductProps} from "./Product.props";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import Card from "../Card/Card";
import {decl0fNum, priceRU} from "../../helpers/helpers";
import Image from "next/image";

const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
    return (
        <Card className={styles.product} color={'white'}>
            <div className={styles.logo}>
                <Image
                    src={process.env.NEXT_PUBLIC_DOMAIN + product.image.replace('/uploads', 'uploads')}
                    alt={product.title}
                    width={70}
                    height={70}
                />
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
                {priceRU(product.price)}
                {product.oldPrice && <Tag className={styles.oldPrice} color={'green'}>{priceRU(product.price - product.oldPrice)}</Tag>}
            </div>
            <div className={styles.credit}>
                {priceRU(product.credit)}/<span className={styles.month}>мес</span>
            </div>
            <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
            <div className={styles.tags}>{product.categories.map(c => <Tag className={styles.category} key={c} color="ghost">{c}</Tag>)}</div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.rateTitle}>
                {product.reviewCount }
                {decl0fNum(product.reviewCount, [' отзывов', ' отзыва', ' отзывов'])}</div>
            <hr className={styles.hr}/>
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>
                {product.characteristics.map(c => (
                    <div className={styles.characteristics} key={c.name}>
                        <span className={styles.characteristicsName}>{c.name}</span>
                        <span className={styles.characteristicsDots}></span>
                        <span className={styles.characteristicsValue}>{c.value}</span>
                    </div>
                ))}

            </div>
            <div className={styles.advBlock}>
                {product.advantages &&
                <div className={styles.advantages}>
                  <div className={styles.advTitle}>Преимущества</div>
                  <div>{product.advantages}</div>
                </div>
                }
                {product.disadvantages &&
                <div className={styles.disadvantages}>
                  <div className={styles.advTitle}>Недостатки</div>
                  <div>{product.disadvantages}</div>
                </div>}
            </div>
            <hr className={cn(styles.hr, styles.hr2)}/>
            <div className={styles.actions}>
                <Button appearance='primary'>Узнать подробнее</Button>
                <Button appearance='ghost' arrow='right'>Читать отзывы</Button>
            </div>
        </Card>
    );
};

export default Product;

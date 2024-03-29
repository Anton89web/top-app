import React, {ForwardedRef, forwardRef, useRef, useState} from 'react';
import cn from "classnames";
import styles from "./Product.module.css";
import {ProductProps} from "./Product.props";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import Card from "../Card/Card";
import {decl0fNum, priceRU} from "../../helpers/helpers";
import Image from "next/image";
import {Review} from "../Review/Review";
import {ReviewForm} from "../ReviewForm/ReviewForm";
import {motion} from "framer-motion";

const Product = motion(forwardRef(({product, className, ...props}: ProductProps, ref:ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const  reviewRef = useRef<HTMLDivElement>(null)
    const  variants = {
        visible: { opacity: 1, height: 'auto', display: 'block' },
		hidden: { opacity: 0, height: 0, display: 'none' }
    }
    const srollToReview = () => {
        setIsReviewOpened(true)
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        reviewRef.current?.focus()
    }

    return (
        <div className={className} {...props} ref={ref}>
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
                <div className={styles.rating}><Rating rating={product.reviewAvg || product.initialRating}/></div>
                <div className={styles.tags}>{product.categories.map(c => <Tag className={styles.category} key={c} color="ghost">{c}</Tag>)}</div>
                <div className={styles.priceTitle}>цена</div>
                <div className={styles.creditTitle}>кредит</div>
                <div className={styles.rateTitle}>
                    <a href="#ref" onClick={srollToReview}/>
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
                    <Button  appearance='primary'>Узнать подробнее</Button>
                    <Button
                        appearance='ghost'
                        arrow={ isReviewOpened? 'down' : 'right'}
                        className={styles.reviewButton}
                        onClick={()=> setIsReviewOpened(!isReviewOpened)}
                    >Читать отзывы</Button>
                </div>
            </Card>
            <motion.div animate={isReviewOpened ? 'visible': 'hidden'} variants={variants} initial="hidden">
                <Card color={'blue'}
                      className={styles.reviews}
                      ref={reviewRef}
                      tabIndex={0}
                >
                    {product.reviews.map(r => (
                        <div key={r._id}>
                            <Review   review={r}/>
                            <hr className={styles.hr}/>
                        </div>
                    ))}
                    <ReviewForm productId={product._id} isOpened={isReviewOpened}/>
                </Card>
            </motion.div>

        </div>

    );
}))
Product.displayName = 'Product';
export default Product;

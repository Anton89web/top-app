import React, {useEffect, useReducer} from 'react';
import {TopPageComponentProps} from "./TopPageComponent.props";
import Htag from "../../components/Htag/Htag";
import Tag from "../../components/Tag/Tag";
import styles from "./TopPageComponent.module.css"
import HhData from "../../components/HhData/HhData";
import {TopLevelCategory} from "../../interfaces/page.interface";
import Advantages from "../../components/Advantages/Advantages";
import Sort from "../../components/Sort/Sort";
import {SortEnum} from "../../components/Sort/Sort.props";
import {sortReducer} from "./sort.reducer";
import TextArea from "../../components/TextArea/TextArea";
import Product from "../../components/Product/Product";
import {useScrollY} from "../../hooks/useScrollY";
import {useReducedMotion} from "framer-motion";

const TopPageComponent = ({page, products, firstCategory }:TopPageComponentProps): JSX.Element => {
const shouldReduceMotion = useReducedMotion()
const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});


    const setSort = (sort: SortEnum) => {
        console.log(sort);
      dispatchSort({type: sort})
    }


    useEffect(() => {
		dispatchSort({ type: 'reset', initialState: products });
        setSort(SortEnum.Rating)
	}, [products]);


    return (
    <div className={styles.wrapper}>
        <div className={styles.title}>
            <Htag tag={'h1'}>{page.title}
            </Htag>
            {products && <Tag color="grey" size='m'>{products.length}</Tag>}
            <Sort sort={sort} setSort={setSort}/>
        </div>
        <div>
            {sortedProducts && sortedProducts.map(p => (<Product
                layout={!shouldReduceMotion}
                key={p._id} product={p}/>))}
        </div>
        <div className={styles.hhTitle}>
            <Htag tag='h2'>Вакансии - {page.category}
            </Htag>
            <Tag color="red" size='m'>hh.ru</Tag>
        </div>
        {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
        {page.advantages && page.advantages.length > 0 && <>
            <Htag tag="h2">Преимущества</Htag>
          <Advantages advantages={page.advantages}/>
        </>}
        {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/> }
        <Htag tag="h2">Получаемые навыки</Htag>
        {page.tags.map(t => <Tag key={t} color={'primary'} size={'s'}>{t}</Tag>)}
    </div>
    );
};
export default TopPageComponent;

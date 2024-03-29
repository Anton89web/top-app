import { GetStaticProps } from 'next';
import React, {useEffect, useState} from 'react';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';
import {useRouter} from "next/router";
import Spinner from "../components/Spiner/Spinner";

function Home({ menu }: HomeProps): JSX.Element {
	const router = useRouter()
	useEffect(()=>{
		router.push('/courses/financial-analytics')
	}, [])
	return (
		<Spinner/>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import Tag from "../components/Tag/Tag";
import Rating from "../components/Rating/Rating";
import {useState} from "react";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";
import Input from "../components/Input/Input";
import {API} from "../helpers/api";


 function Home({menu, firstCategory}:HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(2)
  return (
    <>
     <Htag tag="h1">Заголовок</Htag>
    <Button appearance="primary" arrow="right">Кнопка</Button>
    <Button appearance="ghost" arrow="down">Кнопка</Button>
      <Tag size={'s'}>Small</Tag>
      <Tag size={'m'}>Medium</Tag>
      <Tag size={'s'} href={"test"} color={"ghost"}>test</Tag>
      <Tag size={'m'} color={"ghost"}>ghost</Tag>
      <Tag size={'m'} color={"red"}>red</Tag>
      <Tag size={'s'} color={"primary"}>primary</Tag>
      <Tag size={'s'} color={"grey"}>grey</Tag>
      <Tag size={'s'} color={"green"}>green</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
    </>
  )
}

export default withLayout(Home)


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


interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[],
    firstCategory: number;
}
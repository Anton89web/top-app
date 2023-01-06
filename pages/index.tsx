import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import Paragraph from "../components/Paragraf/Paragraph";
import Tag from "../components/Tag/Tag";
import Rating from "../components/Rating/Rating";
import {useState} from "react";


export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(2)
  return (
    <div>
     <Htag tag="h1">ТЕКСТ</Htag>
    <Button appearance="primary" arrow="right">Кнопка</Button>
    <Button appearance="ghost" arrow="down">Кнопка</Button>
    <Paragraph size="big">Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</Paragraph>
    <Paragraph size="medium">Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Paragraph>
    <Paragraph size="small">Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!</Paragraph>
      <Tag size={'s'}>Small</Tag>
      <Tag size={'m'}>Medium</Tag>
      <Tag size={'s'} href={"test"} color={"ghost"}>test</Tag>
      <Tag size={'m'} color={"ghost"}>ghost</Tag>
      <Tag size={'m'} color={"red"}>red</Tag>
      <Tag size={'s'} color={"primary"}>primary</Tag>
      <Tag size={'s'} color={"grey"}>grey</Tag>
      <Tag size={'s'} color={"green"}>green</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
    </div>


  )
}

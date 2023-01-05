import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";


const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  return (
    <div>
     <Htag tag="h1">ТЕКСТ</Htag>
    <Button appearance="primary" arrow="right">Кнопка</Button>
    <Button appearance="ghost" arrow="down">Кнопка</Button>
    </div>
  )
}

import React, {FunctionComponent, useState, KeyboardEvent, useRef} from 'react';
import cn from "classnames";
import styles from "./Layout.module.css";
import {LayoutProps} from "./Layout.props";
import Sidebar from "./Sidebar/Sidebar";
import {Header} from "./Header/Header";
import Footer from "./Footer/Footer";
import {AppContextProvider, IAppContext} from "../context/app.context";
import Up from "../components/Up/Up";

const Layout = ({children}: LayoutProps): JSX.Element => {
    const bodyRef = useRef<HTMLDivElement>(null);
    const [isSkipLinkDisplay, setIsSkipLinkDisplay] = useState<boolean>(false);

    function skipContentActon(key: React.KeyboardEvent<Element>) {
        if (key.code == "Space" || key.code == "Enter"){
            key.preventDefault()
            bodyRef.current?.focus()
        }
        setIsSkipLinkDisplay(false)
    }

    return (
        <div className={styles.wrapper}>
            <a
                onKeyDown={(key: KeyboardEvent)=>skipContentActon(key)}
                onFocus={()=> setIsSkipLinkDisplay(true)}
                tabIndex={1}
               className={cn(styles.skipLink, {
               [styles.displayed]: isSkipLinkDisplay
               })}
               href=""> Сразу к содержанию</a>
         <Header className={styles.header}/>
         <Sidebar className={styles.sidebar}/>
         <main className={styles.main} ref={bodyRef} tabIndex={0}>
             {children}
         </main>
         <Footer className={styles.footer}/>
            <Up/>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>)=>{
    return function withLayoutComponent (props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props}/>
                </Layout>
            </AppContextProvider>
        )
    }
}

export default Layout;

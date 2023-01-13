import React, {KeyboardEventHandler, SyntheticEvent, useState} from 'react';
import cn from "classnames";
import styles from "./Search.module.css";
import {SearchProps} from "./Search.props";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {searchIcon} from "../../public/Icons";
import {useRouter} from "next/router";

const Search = ({className, ...props}: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter()

    const goToSearch = () => {
      router.push({
         pathname: '/search',
          query: {
             q: search
          }
      })
        setSearch("")
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter"){
        goToSearch()
    }
    }

    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input
                className={styles.input}
                placeholder='Поиск...'
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
            />
            <Button
                className={styles.search_button}
                appearance="primary"
                onClick={goToSearch}
            >
                {searchIcon}
            </Button>
        </div>
    );
};

export default Search;

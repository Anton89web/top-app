import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import {booksIcon, coursesIcon, productsIcon, servicesIcon} from "../public/Icons";
import {TopLevelCategory} from "../interfaces/page.interface";
import {number} from "prop-types";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: "courses", name: "Курсы", icon: coursesIcon, id: TopLevelCategory.Courses
    },{route: "services", name: "Сервисы", icon: servicesIcon, id: TopLevelCategory.Services
    },{route: "books", name: "Книги", icon: booksIcon, id: TopLevelCategory.Books
    },{route: "products", name: "Продукты", icon: productsIcon, id: TopLevelCategory.Products
    },
]

export const priceRU = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(" ₽");

export const decl0fNum = (number: number, titles: [string, string, string]): string => {
    const cases = [2, 0, 1, 1, 1, 2]
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5)? number % 10 : 5]]
}
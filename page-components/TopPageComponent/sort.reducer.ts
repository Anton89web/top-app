import {SortEnum} from "../../components/Sort/Sort.props";
import {ProductModel} from "../../interfaces/product.interface";

export  type SortActions = { type: SortEnum | { type: SortEnum.Rating}} | {type: 'reset', initialState: ProductModel[]}

export interface SortReducerState {
    sort: SortEnum;
    products: ProductModel[];
}

export const sortReducer =(state: SortReducerState, action: SortActions ): SortReducerState => {
    switch (action.type) {
        case SortEnum.Rating:
            return {
                sort: SortEnum.Rating,
                products: state.products.sort((a, b) => (a.reviewAvg || a.initialRating) > (b.reviewAvg || b.initialRating) ? -1 : 1)
            }
            case SortEnum.RatingDown:
            return {
                sort: SortEnum.Rating,
                products: state.products.sort((a, b) => (b.reviewAvg || b.initialRating) > (a.reviewAvg || a.initialRating) ? -1 : 1)
            }
        case SortEnum.Price: 
            return {
                sort: SortEnum.Price,
                products: state.products.sort((a, b) => a.price > b.price ? -1 : 1)
            }
            case SortEnum.PriceDown: 
            return {
                sort: SortEnum.Price,
                products: state.products.sort((a, b) => b.price > a.price ? -1 : 1)
            }
        case 'reset':
            return {
                sort: SortEnum.Rating,
                products: action.initialState
            }
        default:
            throw new Error('Неверный тип сортировки')
    }
}
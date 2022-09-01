import React, {createContext} from 'react';
import BasketStore from "../store/BasketStore";
import CategoryStore from "../store/CategoryStore";
import ItemStore from "../store/ItemStore";

export const Context = createContext(null)

const ContextProvider = ({children}) => {
    return (
        <Context.Provider value={
            {
                basketStore: new BasketStore(),
                categoryStore: new CategoryStore(),
                itemStore: new ItemStore()
            }
        }
        >
            {children}
        </Context.Provider>
    )
}

export default ContextProvider
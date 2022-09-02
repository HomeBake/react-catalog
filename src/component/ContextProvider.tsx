import React, {createContext} from 'react'
import BasketStore from '../store/BasketStore'
import CategoryStore from '../store/CategoryStore'
import ItemStore from '../store/ItemStore'

interface Props {
	children: React.ReactNode
}

interface Stores {
	basketStore: BasketStore
	categoryStore: CategoryStore
	itemStore: ItemStore
}

const context: Stores = {
	basketStore: new BasketStore(),
	categoryStore: new CategoryStore(),
	itemStore: new ItemStore()
}

export const Context = createContext<Stores>(context)


const ContextProvider = ({children}: Props) => {
	return (
		<Context.Provider value={context}
		>
			{children}
		</Context.Provider>
	)
}

export default ContextProvider
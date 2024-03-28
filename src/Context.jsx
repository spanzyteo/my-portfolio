import { createContext, useContext, useReducer } from 'react'

const initialState = {
  projectRef: null,
}

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PROJECT_REF':
      return { ...state, projectRef: action.payload }
    default:
      return state
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be within a cart provider')
  }
  return context
}

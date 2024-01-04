import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state,action)=>{
  switch (action.type) {
    case "Add":
      return [...state,{
        id:action.id, name:action.name, qty:action.qty,img:action.img,
        size:action.size, price:action.price
      }]
      
      throw Error('Error in Reducer...');

  }

}

const CartProvider = ({children})=>{

  const[state,dispatch] = useReducer(reducer,[]);
  return(
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider> 
    </CartDispatchContext.Provider>
  )
}

export default CartProvider;
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
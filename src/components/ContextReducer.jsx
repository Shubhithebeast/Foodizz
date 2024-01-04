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

    case "REMOVE":
      let new_arr=[...state]
      new_arr.splice(action.index,1)
      return new_arr;

    case "UPDATE":
      let arr = [...state]
      arr.find((food,index)=>{
        if(food.id === action.id){
          // console.log(food.qty,parseInt(action.qty), action.price+food.price)
          arr[index] = {...food, qty:parseInt(action.qty)+food.qty, price: action.price+ food.price}
        } 
        return arr;
      })
      return arr;
      
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
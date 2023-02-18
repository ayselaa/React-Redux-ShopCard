import { createSlice } from '@reduxjs/toolkit'

const cardSlice = createSlice ({
    name: 'card',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
     addToCard(state, action){
      const newitem = action.payload
      const exsistigItem  = state.items.find((item) => item.id === newitem.id)
      state.totalQuantity++
      if (!exsistigItem) {
        state.items.push({
         itemid: newitem.id,
         price: newitem.price,
         quantity: 1,
         totalPrice: newitem.price,
         name: newitem.title
        })
      }
      else{
        exsistigItem.quantity++;
        exsistigItem.totalPrice = exsistigItem.totalPrice + newitem.price;
      }
     },
     removeToCard(state, action){
       const Id = action.payload;
       const exsistigItem = state.items.find((item) => item.id === Id);
       state.totalQuantity--;
       if (exsistigItem.quantity === 1) {
       state.items = state.items.filter((item) => item.id !== Id)
       }
       else{
        exsistigItem.quantity--;
        // exsistigItem.totalPrice = exsistigItem.totalPrice - exsistigItem.price
        
       }
     }
    }
})
export const cardAction = cardSlice.actions;
export default cardSlice;

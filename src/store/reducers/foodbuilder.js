// import * as actionType from "./action"


const initialState = {
    materials: [],
    price: 0,
  };
  
  const foodPrice = {
      hotDog: 10000,
      salad: 8000,
      cheese: 5000,
      tomato: 2000
    };
  
  const fReducer = (state = initialState, action) => {
      const ind1 = state.materials.findIndex(itm => {
          if (itm.type === action.name) {
            return itm.type;
           }  
           return false
        });
        let newPrice = state.price;
  
        state.materials.map(function(obj, index) {
          if (obj.type === action.name || index === ind1) {
           newPrice= state.price - foodPrice[action.name];
         }
      return newPrice;
       })
  
    switch (action.type) {
      case "INCRE":
        return {
          ...state,
          ...state.materials,
          ...state.price,
          materials: state.materials.concat({ type: action.name }),
          price:state.price + foodPrice[action.name]
        };
      case "DECRE":
        return {
            ...state,
            ...state.materials,
            ...state.price,
            materials:state.materials.filter((itm,index)=>itm.type !==action.name || index !==ind1),
            price: newPrice
        };

        default :
       
    }
    return state;
  };
  
  export default fReducer;
  
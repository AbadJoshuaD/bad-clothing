import SHOP_DATA from "../../pages/shop/shop.data";

const INITIAL_STATE = {
  collections: SHOP_DATA
};

/* Creates a reducer (stores initial state of the data) */
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;

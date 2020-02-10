export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        selectedProducts: action.payload,
        selectedTotal: ++state.selectedTotal
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        selectedProducts: action.payload,
        selectedTotal: --state.selectedTotal
      };
    default:
      throw new Error();
  }
};
export default cartReducer;

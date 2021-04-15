import { CART_RETRIEVE_REQUEST, CART_RETRIEVE_SUCCESS } from './actions';

/**
 * Reducer to manage the state of the store.
 * The store reducer handles actions related to the cart
 * and order processing.
 * @param state The application state.
 * @param action The type of action.
 * @example
 * const initialState = {
 *    cart: { loading: true },
 * };
 * export function StoreProvider({ children }) {
 *    const [state, dispatch] = useReducer(storeReducer, initialState);
 *    const value = { state, dispatch };
 *    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
 * }
*/
const storeReducer = (state, action) => {
  switch (action.type) {
    case CART_RETRIEVE_REQUEST:
      return {
        ...state,
        cart: { loading: true },
      };
    case CART_RETRIEVE_SUCCESS:
      return {
        ...state,
        cart: { loading: false, data: action.payload },
      };
    default:
      return state;
  }
};

export default storeReducer;

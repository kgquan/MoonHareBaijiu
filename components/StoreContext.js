import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import storeReducer from '../context/storeReducer';

const initialState = {
  cart: { loading: true },
};

/**
 * Context that holds global data for the store, e.g. cart data.
 * @example
 * const { state, dispatch } = useContext(StoreContext);
 * const { cart } = state;
 */
export const StoreContext = createContext(initialState);

/**
 * The provider to handle the store context.
 * @param children The child components between the StoreContext tags.
 * */
export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  const value = { state, dispatch };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

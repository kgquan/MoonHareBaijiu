import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import swell from 'swell-js';

import { InlineIcon } from '@iconify/react';
import shoppingCart2Line from '@iconify/icons-ri/shopping-cart-2-line';
import cartStyles from '../styles/components/cart.module.scss';
import notificationBadgeStyles from '../styles/components/notificationbadge.module.scss';
import containerStyles from '../styles/components/container.module.scss';
import headerStyles from '../styles/components/header.module.scss';

import { StoreContext } from './StoreContext';
import { CART_RETRIEVE_REQUEST, CART_RETRIEVE_SUCCESS } from '../context/actions';

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(StoreContext);
  const { cart } = state;

  useEffect(() => {
    const fetchCart = async () => {
      swell.init(process.env.STORE_ID, process.env.STORE_PUBLIC_KEY);
      dispatch({ type: CART_RETRIEVE_REQUEST });
      const cartData = await swell.cart.get();
      dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData });
    };

    fetchCart();
  }, []);

  return (
    <>
      <div className={headerStyles.header}>
        <div className={containerStyles.container}>
          <div className={headerStyles.header_logo}>
            Logo
          </div>
          <div className={headerStyles.header_navigation}>
            <ul>
              <li>Shop</li>
              <li>About</li>
              <li>Recipes</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={headerStyles.header_cart}>
            <div className={notificationBadgeStyles.notification_badge}>
              {cart.loading ? '...' : cart.data.item_quantity}
            </div>
            <InlineIcon icon={shoppingCart2Line} width="36px" height="36px" />
            <div className={cartStyles.cart_button} />
          </div>
        </div>
      </div>
      {children}

    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

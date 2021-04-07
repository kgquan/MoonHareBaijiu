import PropTypes from 'prop-types';

import { InlineIcon } from '@iconify/react';
import shoppingCart2Line from '@iconify/icons-ri/shopping-cart-2-line';
import cartStyles from '../styles/components/cart.module.scss';
import notificationBadgeStyles from '../styles/components/notificationbadge.module.scss';
import containerStyles from '../styles/components/container.module.scss';
import headerStyles from '../styles/components/header.module.scss';

const Layout = ({ children }) => (
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
          <div className={cartStyles.cart_button}>
            <div className={notificationBadgeStyles.notification_badge}>100</div>
            <InlineIcon icon={shoppingCart2Line} width="36px" height="36px" />
          </div>
        </div>
      </div>
    </div>
    {children}
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

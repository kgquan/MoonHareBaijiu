import shoppingCart2Line from '@iconify-icons/ri/shopping-cart-2-line';
import { InlineIcon } from '@iconify/react';
import homeStyles from '../styles/home.module.scss';
import containerStyles from '../styles/components/container.module.scss';
import headerStyles from '../styles/components/header.module.scss';

export default function Home() {
  return (
    <>
      <div className={headerStyles.header}>
        <div className={containerStyles.container}>
          <div className={headerStyles.header__logo}>
            Logo
          </div>
          <div className={headerStyles.header__navigation}>
            <ul>
              <li>Shop</li>
              <li>About</li>
              <li>Recipes</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={headerStyles.header__cart}>
            <InlineIcon icon={shoppingCart2Line} width="36px" height="36px" />
          </div>
        </div>
      </div>
      <div className={homeStyles.home}>Hello world!</div>
    </>
  );
}

import { InlineIcon } from '@iconify/react';
import shoppingCart2Line from '@iconify/icons-ri/shopping-cart-2-line';
import homeStyles from '../styles/home.module.scss';
import containerStyles from '../styles/components/container.module.scss';
import headerStyles from '../styles/components/header.module.scss';
import heroStyles from '../styles/components/hero.module.scss';
import buttonStyles from '../styles/components/button.module.scss';
import productListStyles from '../styles/components/productlist.module.scss';
import productStyles from '../styles/components/product.module.scss';

export default function Home() {
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
            <InlineIcon icon={shoppingCart2Line} width="36px" height="36px" />
          </div>
        </div>
      </div>
      <div className={homeStyles.home}>
        <div className={heroStyles.hero}>
          <div className={containerStyles.container}>
            <div className={heroStyles.hero_description}>
              <h1>Make moments magical with our refined Chinese baijiu.</h1>
              <p>
                With a silky-smooth finish and a rich smokey flavour, our
                traditionally-produced liquor is the perfect drink for any occasion.
              </p>
              <button type="button" className={`${buttonStyles.button} ${buttonStyles.button_large}`}>Explore our products</button>
            </div>
          </div>
        </div>
        <div className={productListStyles.productlist_staggered}>
          <div className={containerStyles.container}>

            <div className={`${productListStyles.product} ${productStyles.product} ${productStyles.product_goldstar}`}>
              <div className={productStyles.product_description}>
                <p>Our classic, sweet-tasting flavour</p>
                <h2>Gold Star Baijiu</h2>
                <span className={productStyles.product_chinese_name}>金星白酒</span>
              </div>
              <div className={productStyles.product_visual}>
                <img src="https://via.placeholder.com/450" alt="Placeholder" />
              </div>
              <div className={productStyles.circle} />
              <div className={productStyles.product_cta}>
                <button type="button" className={`${buttonStyles.button}`}>Add to Cart</button>
              </div>
            </div>

            <div className={`${productListStyles.product} ${productStyles.product} ${productStyles.product_dragonsword}`}>
              <div className={productStyles.product_description}>
                <p>Bold, brash, and for the daring</p>
                <h2>Dragon Sword Baijiu</h2>
                <span className={productStyles.product_chinese_name}>屠龍刀白酒</span>
              </div>
              <div className={productStyles.product_visual}>
                <img src="https://via.placeholder.com/450" alt="Placeholder" />
              </div>
              <div className={productStyles.circle} />
              <div className={productStyles.product_cta}>
                <button type="button" className={`${buttonStyles.button} ${buttonStyles.button_dark}`}>Add to Cart</button>
              </div>
            </div>

            <div className={`${productListStyles.product} ${productStyles.product} ${productStyles.product_peachesofimmortality}`}>
              <div className={productStyles.product_description}>
                <p>Fragrant, with notes of peach</p>
                <h2>Peaches of Immortality Baijiu</h2>
                <span className={productStyles.product_chinese_name}>仙桃白酒</span>
              </div>
              <div className={productStyles.product_visual}>
                <img src="https://via.placeholder.com/450" alt="Placeholder" />
              </div>
              <div className={productStyles.circle} />
              <div className={productStyles.product_cta}>
                <button type="button" className={`${buttonStyles.button}`}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import swell from 'swell-js';
import PropTypes from 'prop-types';

import { InlineIcon } from '@iconify/react';
import shoppingCart2Line from '@iconify/icons-ri/shopping-cart-2-line';
import homeStyles from '../styles/home.module.scss';
import cartStyles from '../styles/components/cart.module.scss';
import notificationBadgeStyles from '../styles/components/notificationbadge.module.scss';
import containerStyles from '../styles/components/container.module.scss';
import headerStyles from '../styles/components/header.module.scss';
import heroStyles from '../styles/components/hero.module.scss';
import buttonStyles from '../styles/components/button.module.scss';
import productListStyles from '../styles/components/productlist.module.scss';
import productStyles from '../styles/components/product.module.scss';

export default function Home(props) {
  const { products } = props;

  /** Given a URL slug, return the appropriate CSS styles.
   *  @param slug The part of a URL that explains the content of a page.
   *  @example
   *  setColour('gold-star-baijiu');
   *  @returns {Object} An object containing the styles for that type of drink.
  */
  function setColour(slug) {
    if (slug.includes('gold') && slug.includes('star')) {
      return productStyles.product_goldstar;
    }
    if (slug.includes('dragon') && slug.includes('sword')) {
      return productStyles.product_dragonsword;
    }
    if (slug.includes('peaches') && slug.includes('immortality')) {
      return productStyles.product_peachesofimmortality;
    }
    return '';
  }

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
            <div className={cartStyles.cart_button}>
              <div className={notificationBadgeStyles.notification_badge}>100</div>
              <InlineIcon icon={shoppingCart2Line} width="36px" height="36px" />
            </div>
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
          <div className={containerStyles.container} data-cy="featured-products">
            {products.map((product) => (
              <div key={product.id} className={`${productListStyles.product} ${productStyles.product} ${setColour(product.slug)}`} data-cy="product">
                <div className={productStyles.product_description}>
                  <p>{product.attributes.tagline.value}</p>
                  <h2>{product.name}</h2>
                  <span className={productStyles.product_chinese_name}>
                    {product.attributes.chinese_name.value}
                  </span>
                </div>
                <div className={productStyles.product_visual}>
                  <img src="https://via.placeholder.com/450" alt="Placeholder" />
                </div>
                <div className={productStyles.circle} />
                <div className={productStyles.product_cta}>
                  <button type="button" className={`${buttonStyles.button} ${buttonStyles.button_secondary}`}>Learn More</button>
                  <button type="button" className={`${buttonStyles.button} ${setColour(product.slug).includes('sword') ? buttonStyles.button_dark : ''}`}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  swell.init(process.env.STORE_ID, process.env.STORE_PUBLIC_KEY);
  const { results: products } = await swell.products.list({});
  return {
    props: {
      products,
    },
    revalidate: 60,
  };
}

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

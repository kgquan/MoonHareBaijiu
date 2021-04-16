import React, { useContext } from 'react';
import swell from 'swell-js';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import { StoreContext } from '../components/StoreContext';
import { CART_RETRIEVE_SUCCESS } from '../context/actions';

import homeStyles from '../styles/home.module.scss';
import containerStyles from '../styles/components/container.module.scss';
import heroStyles from '../styles/components/hero.module.scss';
import buttonStyles from '../styles/components/button.module.scss';
import productListStyles from '../styles/components/productlist.module.scss';
import productStyles from '../styles/components/product.module.scss';

export default function Home(props) {
  const { products } = props;
  const { dispatch } = useContext(StoreContext);

  /**
   * Handles adding a single product to your cart.
   * @param product An object containing the product ID
   */
  const addToCartHandler = async (product) => {
    swell.init(process.env.STORE_ID, process.env.STORE_PUBLIC_KEY);
    const cartData = await swell.cart.addItem({
      product_id: product.id,
      quantity: 1,
    });

    dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData });
  };

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
      <Layout>
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
                    <button type="button" onClick={() => addToCartHandler(product)} className={`${buttonStyles.button} ${setColour(product.slug).includes('sword') ? buttonStyles.button_dark : ''}`}>Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
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

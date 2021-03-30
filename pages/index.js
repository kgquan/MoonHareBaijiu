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
        </div>
      </div>
      <div className={homeStyles.home}>Hello world!</div>
    </>
  );
}

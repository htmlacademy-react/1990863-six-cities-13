import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import './not-found-page.css';
import { Helmet } from 'react-helmet-async';

function NotFoundPage(): React.JSX.Element {
  return (
    <div className='notFound'>
      <Helmet>
        <title>6 Cities. 404</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section>
            <h1 className="notFoundTitle">404 Not Found</h1>
            <hr className='notFoundLine'/>
            <p className='notFoundText'>Страница не найдена.</p>
            <Link to="/" className='notFoundTitleLink'>Перейти на главную страницу</Link>
          </section>
        </div>
      </main>
    </div>

  );
}
export default NotFoundPage;

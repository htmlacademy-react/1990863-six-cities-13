import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../const';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';

type AppOffersProps = {
  offersCount: number;
}

function App({offersCount}: AppOffersProps): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage offersCount={offersCount} />}></Route>
        <Route path={AppRoute.Login} element={<LoginPage />}></Route>
        <Route path={AppRoute.Favorites} element={<FavoritesPage />}></Route>
        <Route path={AppRoute.Offer}>
          <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage />}/>
        </Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

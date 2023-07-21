import MainPage from '../../pages/main-page/main-page';

type AppOffersProps = {
  offersCount: number;
}

function App({offersCount}: AppOffersProps): React.JSX.Element {
  return (
    <MainPage offersCount={offersCount} />
  );
}

export default App;

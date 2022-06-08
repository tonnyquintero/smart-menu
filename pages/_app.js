import Header from '../components/Header';
import AppContext from '../context/appContext';
import useInitialState from '../Hooks/useInitialState';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <Header />
            <Component {...pageProps} />
        </AppContext.Provider>
    );
}

export default MyApp;

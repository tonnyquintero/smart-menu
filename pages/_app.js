import Header from '../components/Header';
import AppContext from '../context/appContext';
import useInitialState from '../Hooks/useInitialState';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
    const initialState = useInitialState();
    return (
        <ThemeProvider attribute="class">
            <AppContext.Provider value={initialState}>
                <Header />
                <Component {...pageProps} />
            </AppContext.Provider>
        </ThemeProvider>
    );
}

export default MyApp;

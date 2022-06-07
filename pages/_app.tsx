import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="grid grid-cols-12 gap-6 my-14 lg:px-48 px-5">
            <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
                <Sidebar />
            </div>
            <div className="lg:col-span-9 col-span-12 bg-white rounded-2xl">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;

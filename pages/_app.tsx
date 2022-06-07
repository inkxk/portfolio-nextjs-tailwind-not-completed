import "../styles/globals.css";
import "@fontsource/jetbrains-mono";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="grid grid-cols-12 gap-6 my-14 lg:px-48 px-5">
            <div className="lg:col-span-3 col-span-12 bg-white rounded-2xl text-center">
                <Sidebar />
            </div>
            <div className="lg:col-span-9 col-span-12 bg-white rounded-2xl">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;

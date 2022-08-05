import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="p-7 bg-zinc-900 text-white h-screen">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

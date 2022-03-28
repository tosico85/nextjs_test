import "../styles/globals.css";
import Layout from "./components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>{`
        .link {
          text-decoration: none;
        }

        .active {
          color: tomato;
        }
      `}</style>
    </div>
  );
}

import Seo from "./components/Seo";
import { useState, useEffect } from "react";

export default function Home({ results }) {
  /* const [movies, setMovies] = useState(results);

  useEffect(() => {
    (async () => {
      const json = await (await fetch("/api/movies")).json();
      setMovies(json.results);
    })();
  }, []); */

  return (
    <div>
      <Seo title="Home" />
      <h1>Hello</h1>
      <div>
        {results.map((item) => (
          <div key={item.id}>
            <span>{item.original_title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();
  return {
    props: {
      results,
    },
  };
}

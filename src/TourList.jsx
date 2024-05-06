/* eslint-disable no-unused-vars */
import { useEffect, useContext, useRef, useState } from "react";
import TourCard from "./components/TourCard";
import { ToursContext } from "./App";
import { useParams } from "react-router-dom";

export default function Overview() {
  let { q } = useParams();
  const Tours = useRef([]);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function func() {
        setIsLoading(true);
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/tour/search?q=${q}`
        );
        const D = await res.json();

        Tours.current = [...D.data];

        setIsLoading(false);
      }
      func();
    },
    [q]
  );

  return (
    <main className="main">
      {isLoading ? (
        <div style={{ fontSize: "5rem" }}>Loading......</div>
      ) : Tours.current.length ? (
        <div className="card-container">
          {Tours.current.map((e) => {
            return <TourCard data={e} key={e.slug} />;
          })}
        </div>
      ) : (
        <div style={{ fontSize: "5rem" }}>No results found</div>
      )}
    </main>
  );
}

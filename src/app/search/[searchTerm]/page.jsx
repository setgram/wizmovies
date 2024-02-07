import Results from "@/app/components/Results";
import React from "react";

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=cf880f68f76186eea590f5d3a98227f1&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results &&
        results.length ===
        <h1 className="text-center pt-6">No results found</h1>}
      {results && <Results results={results} />}
    </div>
  );
}

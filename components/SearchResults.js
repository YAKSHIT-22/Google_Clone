import React from "react";
import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";

export default function SearchResults({ results }) {
  return (
    <div className="flex flex-col justify-center w-full mx-auto pl-[0.5rem] xs:pl-[1rem] sm:pl-[2rem] md:pl-12 lg:pl-44">
      <p className="text-gray-500 text-sm mb-2 mt-5 truncate p-2">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime}) seconds
      </p>
      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8 p-2">
          <div className="group truncate">
            <a className="text-sm truncate" href={result.link}>{result.formattedUrl}</a>
            <a className="group-hover:underline decoration-blue-800 truncate" href={result.link}>
              <h2 className="truncate text-xl font-medium text-blue-800">{result.title}</h2>
            </a>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}

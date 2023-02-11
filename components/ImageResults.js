import React from "react";
import PaginationButtons from "./PaginationButtons";

export default function ImageResults({ results }) {
  
    return (
 
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 gap-4">
        {results.items?.map((result) => (
            
          <div key={result.link} className="mb-8">
            
            <div className="group">
              <a href={result.image.contextLink}>
                <img
                  className="group-hover:shadow-md w-full h-60 object-contain lg:object-fill"
                  src={result.link}
                  alt={result.title}
                />
              </a>
              <a className="group-hover:underline " href={result.image.contextLink}>
                <h2 className="truncate text-md mt-1 sm:text-lg md:text-xl">{result.title}</h2>
              </a>
              <a className="group-hover:underline " href={result.image.contextLink}>
                <p className="text-gray-600 mt-1 truncate text-sm sm:text-md">{result.displayLink}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
          <PaginationButtons/>
      </div>
    </div>
  );
}
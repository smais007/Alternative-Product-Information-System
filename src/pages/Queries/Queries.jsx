import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Queries() {
  const queries = useLoaderData();
  const [viewMode, setViewMode] = useState("card");

  const sortedQueries = [...queries].sort((a, b) => {
    return new Date(b.posted_date) - new Date(a.posted_date);
  });

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "card" ? "list" : "card"));
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        {/* View mode toggle buttons */}
        <div className="flex justify-end mb-4">
          <button
            className={`px-4 py-2 mr-2 ${
              viewMode === "card"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={toggleViewMode}
          >
            Card View
          </button>
          <button
            className={`px-4 py-2 ${
              viewMode === "list"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={toggleViewMode}
          >
            List View
          </button>
        </div>

        {/* Queries grid or list */}
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {sortedQueries.map((query) => (
            <div
              key={query._id}
              className={`group relative ${
                viewMode === "card"
                  ? "overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                  : "border-b border-gray-200 dark:border-gray-700"
              }`}
            >
              {/* Card or list item content */}
              {viewMode === "card" ? (
                // Card view content
                <div>
                  <div className="aspect-h-4 aspect-w-3 bg-gray-200 dark:bg-gray-700 sm:aspect-none group-hover:opacity-75 sm:h-96">
                    <img
                      src={query.product_image_url}
                      className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 flex-col space-y-2 p-4">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      <a href={`/details/${query._id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {query.query_title}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      {query.product_name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      {query.brand_name}
                    </p>
                    <div className="flex flex-1 flex-col justify-end">
                      <p className="text-sm italic text-gray-500 dark:text-gray-300">
                        {query.alternation_reason.slice(0, 150)}...
                      </p>
                      <div className="flex items-center gap-3 pt-3">
                        <img
                          className="inline-block h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <p className="text-base font-normal text-gray-900 dark:text-gray-100">
                          {query.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // List view content
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    <a href={`/details/${query._id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {query.query_title}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {query.product_name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {query.brand_name}
                  </p>
                  <p className="text-sm italic text-gray-500 dark:text-gray-300">
                    {query.alternation_reason.slice(0, 150)}...
                  </p>
                  <div className="flex items-center gap-3 pt-3">
                    <img
                      className="inline-block h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p className="text-base font-normal text-gray-900 dark:text-gray-100">
                      {query.name}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

export default function Queries() {
  const queries = useLoaderData();
  const [viewMode, setViewMode] = useState("card");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const { user } = useContext(AuthContext);

  const sortedQueries = [...queries].sort((a, b) => {
    return new Date(b.posted_date) - new Date(a.posted_date);
  });

  const filteredQueries = sortedQueries.filter((query) => {
    const matchesSearchTerm = query.query_title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesUser = selectedUser ? query.name === selectedUser : true;

    return matchesSearchTerm && matchesUser;
  });

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "card" ? "list" : "card"));
  };

  const uniqueUsers = [...new Set(queries.map((query) => query.name))];

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        {/* Search and filter inputs */}
        <div className="mb-4 flex justify-between items-center space-y-2 flex-wrap">
          <div>
            <label
              htmlFor="search"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Quick search
            </label>
            <div className="relative mt-2 flex items-center">
              <input
                type="text"
                name="search"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>

          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">All Users</option>
            {uniqueUsers.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>

          <div className="flex">
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
        </div>

        {/* Queries grid or list */}
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {filteredQueries.map((query) => (
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
                    </div>
                    <div className="flex items-center gap-3 pt-3">
                      <img
                        className="inline-block h-8 w-8 rounded-full"
                        src={query.user_img}
                        alt=""
                      />
                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-gray-100 leading-none">
                          {query.name}
                        </p>
                        <p className="font-normal text-xs text-gray-600 dark:text-gray-300 leading-none">
                          {new Date(query.posted_date).toLocaleDateString()}
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
                      src={query.user_img}
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-gray-100 leading-none">
                        {query.name}
                      </p>
                      <p className="font-normal text-xs text-gray-600 dark:text-gray-300 leading-none">
                        {new Date(query.posted_date).toLocaleDateString()}
                      </p>
                    </div>
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

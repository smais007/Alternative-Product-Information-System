import { useLoaderData } from "react-router-dom";

export default function RecentQueries() {
  const queries = useLoaderData();

  const sortedQueries = [...queries].sort((a, b) => {
    return new Date(b.posted_date) - new Date(a.posted_date);
  });
  const slicedQueries = sortedQueries.slice(0, 6);

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {slicedQueries.map((query) => (
            <div
              key={query._id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 transition-colors duration-300"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 dark:bg-gray-700 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <img
                  src={query.product_image_url}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  alt={query.query_title}
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
              <div>
                {/* <Link
                  to={`/details/${query._id}`}
                  type="button"
                  className="rounded bg-indigo-50 px-2 py-1 text-sm font-semibold text-red-600 shadow-sm hover:bg-indigo-100"
                >
                  ViewDetails
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

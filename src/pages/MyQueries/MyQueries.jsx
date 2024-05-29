import { Link, useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";

export default function MyQueries() {
  const initialQueries = useLoaderData();
  const [queries, setQueries] = useState(initialQueries);
  const { user } = useContext(AuthContext);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://apis-server-eight.vercel.app/queries/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              // Remove the deleted item from places array
              setQueries(queries.filter((query) => query._id !== _id));
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-5 sm:px-3 sm:py-2 lg:max-w-7xl lg:px-8">
        {/* <QueryBanner /> */}
        <div className="mt-16 flex justify-center mb-10">
          <p className="relative rounded-full bg-gray-50  dark:bg-gray-800 px-4 py-1.5 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-inset ring-gray-900/5">
            <span className="hidden md:inline">
              What&apos;s in your mind? Need post an query? Go here to {""}
            </span>
            <a href="/add-query" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Add Your Query<span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {queries?.map(
            (query) =>
              query.email === user.email && (
                <div
                  key={query._id}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200"
                >
                  <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                    <img
                      src={query.product_image_url}
                      className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                      alt={query.query_title}
                    />
                  </div>
                  <div className="flex flex-1 flex-col space-y-2 p-4">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {" "}
                      {query.query_title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {query.product_name}
                    </p>
                    <p className="text-sm text-gray-500">{query.brand_name}</p>
                    <div className="flex flex-1 flex-col justify-end">
                      <p className="text-sm italic text-gray-500">
                        {query.alternation_reason}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
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
                          <p className=" font-normal text-xs  text-gray-600 dark:text-gray-300  leading-none">
                            {new Date(query.posted_date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between gap-1">
                        <Link
                          to={`/details/${query._id}`}
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="Details"
                          className="rounded px-1 py-1 text-sm font-semibold text-indigo-600  hover:bg-indigo-100"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
                            />
                          </svg>
                        </Link>
                        <Link
                          to={`/update-query/${query._id}`}
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="Update"
                          className="rounded px-1 py-1 text-sm font-semibold text-green-600  hover:bg-indigo-100"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                            />
                          </svg>
                        </Link>
                        <button
                          onClick={() => handleDelete(query._id)}
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="Delete"
                          className="rounded px-1 py-1 text-sm font-semibold text-red-600  hover:bg-indigo-100"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}

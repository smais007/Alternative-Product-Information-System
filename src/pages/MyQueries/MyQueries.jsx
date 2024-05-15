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
              What&apos;s in your mind? Need post an query? Go here to post
            </span>
            <a href="/add-query" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" /> Your
              Query<span aria-hidden="true">&rarr;</span>
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
                      <div className="flex items-center gap-3 pt-3">
                        <img
                          className="inline-block h-8 w-8 rounded-full"
                          src={query.user_img}
                          alt=""
                        />
                        <p className="text-base font-normal text-gray-900 dark:text-gray-100">
                          {query.name}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Link
                      to={`/details/${query._id}`}
                      className="rounded bg-indigo-50 px-2 py-1 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                    >
                      Details
                    </Link>
                    <Link
                      to={`/update-query/${query._id}`}
                      className="rounded bg-indigo-50 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm hover:bg-indigo-100"
                    >
                      Update
                    </Link>
                    <button onClick={() => handleDelete(query._id)}>
                      Click
                    </button>
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

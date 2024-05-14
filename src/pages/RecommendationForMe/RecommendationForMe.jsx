import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function RecommendationForMe() {
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const [recommendedData, setRecommendedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://apis-server-eight.vercel.app/recommendation?user=${email}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setRecommendedData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [email]);

  const deleteUser = (id) => {
    // Implement logic to delete user
    console.log("Deleting user with id:", id);
  };

  return (
    <div
      className={`container mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200`}
    >
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6">Users</h1>
          <p className="mt-2 text-sm">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => console.log("Add user")}
          >
            Add user
          </button>
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div className="-mx-4 mt-8 sm:-mx-0">
          <table className="min-w-full divide-y divide-gray-300">
            {/* Table headers */}
            <thead>
              <tr>
                <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0">
                  Query Title
                </th>
                <th className="hidden px-3 py-3.5 text-left text-sm font-semibold lg:table-cell">
                  Your Product Name
                </th>
                <th className="hidden px-3 py-3.5 text-left text-sm font-semibold sm:table-cell">
                  Recommended Product
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold">
                  Recommender Name
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="divide-y divide-gray-200">
              {Array.isArray(recommendedData) &&
                recommendedData.map(
                  (data) =>
                    email !== data.recommender.email && (
                      <tr key={data._id}>
                        <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium sm:w-auto sm:max-w-none sm:pl-0">
                          {data.query_title}
                          <dl className="font-normal lg:hidden">
                            <dt className="sr-only">Your Product</dt>
                            <dd className="mt-1 truncate">
                              Your Product: {data.product_name}
                            </dd>
                            <dt className="sr-only sm:hidden">
                              Recomended Product
                            </dt>
                            <dd className="mt-1 truncate sm:hidden">
                              Recomended Product {data.re_product_name}
                            </dd>
                          </dl>
                        </td>
                        <td className="hidden px-3 py-4 text-sm lg:table-cell">
                          {data.product_name}
                        </td>
                        <td className="hidden px-3 py-4 text-sm sm:table-cell">
                          {data.re_product_name}
                        </td>
                        <td className="px-3 py-4 text-sm">
                          {data.recommender.name}
                        </td>
                        <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <button
                            className="text-indigo-600 hover:text-indigo-900"
                            onClick={() => deleteUser(data._id)}
                          >
                            Delete<span className="sr-only">, {data.name}</span>
                          </button>
                        </td>
                      </tr>
                    )
                )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useLoaderData } from "react-router-dom";

export default function RecommendationForMe() {
  const recommendedData = useLoaderData();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/queries");
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const { user } = useContext(AuthContext);
  const email = user?.email;
  return (
    <div className="container mx-auto    px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Users
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
              >
                Query Title
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Your Product Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Recommended Product
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Recommender Name
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {Array.isArray(recommendedData) &&
              recommendedData.map(
                (data) =>
                  email !== data.recommender.email && (
                    <tr key={data._id}>
                      <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                        {data.query_title}
                        <dl className="font-normal lg:hidden">
                          <dt className="sr-only">Your Product</dt>
                          <dd className="mt-1 truncate text-gray-700">
                            Your Product: {data.product_name}
                          </dd>

                          {/* <dt className="sr-only sm:hidden">Your Product</dt>
                          <dd className="mt-1 truncate text-gray-500 sm:hidden">
                          Your Product:  {data.product_name}
                          </dd> */}
                          <dt className="sr-only sm:hidden">
                            Recomended Product
                          </dt>
                          <dd className="mt-1 truncate text-gray-500 sm:hidden">
                            Recomended Product {data.re_product_name}
                          </dd>
                        </dl>
                      </td>
                      <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                        {data.product_name}
                      </td>
                      <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                        {data.re_product_name}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {data.recommender.name}
                      </td>
                      <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Delete<span className="sr-only">, {data.name}</span>
                        </a>
                      </td>
                    </tr>
                  )
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

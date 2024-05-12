import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

import { toast } from "sonner";
import { useParams } from "react-router-dom";

export default function Recommendation() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [query, setQuery] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/recommendation/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setQuery(data);
        console.log(typeof data);
      })
      .catch((error) => {
        console.error("Error fetching place:", error);
        // Handle error (e.g., display an error message)
      });
  }, [id]);

  console.log(query);

  const handleRecommendation = (e) => {
    e.preventDefault();
    const form = e.target;
    const re_product_name = form.re_product_name.value;
    const re_brand_name = form.re_brand_name.value;
    const re_product_image_url = form.re_product_image_url.value;
    const re_query_title = form.re_query_title.value;
    const re_recommendation_reason = form.re_recommendation_reason.value;



    const recommendationQuery = {
      re_product_name,
      re_brand_name,
      re_product_image_url,
      re_query_title,
      re_recommendation_reason,

    };

    console.log(recommendationQuery);

    // fetch("http://localhost:5000/queries", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(addQuery),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       toast.success("New Place has been added");
    //       form.reset();
    //     }
    //   });
  };

  return (
    <div className="space-y-10 divide-y divide-gray-900/10 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Recommendation Product Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            THis information will display in publically
          </p>
        </div>

        <form
          onSubmit={handleRecommendation}
          className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
        >
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Recomended Product Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="re_product_name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Recomended Product Brand
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="re_brand_name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="url"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Recomended Product Image URL
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="re_product_image_url"
                    id="product_image_url"
                    autoComplete="url"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="re_query_title"
                    id="query_title"
                    autoComplete="title"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Recommendation Reason
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="re_recommendation_reason"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about recommendation reason.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add to Recommendation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

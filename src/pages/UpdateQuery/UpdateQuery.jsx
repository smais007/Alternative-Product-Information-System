import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

import { toast } from "sonner";

export default function UpdateQuery() {
  const { user } = useContext(AuthContext);
  // console.log(user);

  const handleAddQuery = (e) => {
    e.preventDefault();
    const form = e.target;
    const product_name = form.product_name.value;
    const brand_name = form.brand_name.value;
    const product_image_url = form.product_image_url.value;
    const query_title = form.query_title.value;
    const alternation_reason = form.alternation_reason.value;
    const email = user.email;
    const recomend_count = 0;
    const name = user.displayName;
    const user_img = user.photoURL;
    const posted_date = new Date();
    const addQuery = {
      product_name,
      brand_name,
      product_image_url,
      query_title,
      alternation_reason,
      email,
      recomend_count,
      name,
      user_img,
      posted_date,
    };

    console.log(addQuery);

    fetch("http://localhost:5000/queries", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addQuery),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("New Place has been added");
          form.reset();
        }
      });
  };

  return (
    <div className="space-y-10 divide-y divide-gray-900/10 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Update Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            THis information will display in publically
          </p>
        </div>

        <form
          onSubmit={handleAddQuery}
          className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
        >
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="product_name"
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
                  Product Brand
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="brand_name"
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
                  Product Image URL
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="product_image_url"
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
                  Query Title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="query_title"
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
                  Alternation Reason
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="alternation_reason"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about alternation_reason.
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
              Add Query
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

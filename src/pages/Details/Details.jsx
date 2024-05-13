import { Link, useParams } from "react-router-dom";
import RecomendedProd from "../../components/RecomendedProd/RecomendedProd";
import { useEffect, useState } from "react";

export default function Details() {
  const { id } = useParams();
  const [query, setQuery] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setQuery(data);
      })
      .catch((error) => {
        console.error("Error fetching place:", error);
        // Handle error (e.g., display an error message)
      });
  }, [id]);

  const handleAddRecommendation = () => {
    fetch(`http://localhost:5000/recommendation/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Recommendation count increased:", data);
        // Optionally, you can update the state to reflect the change immediately
      })
      .catch((error) => {
        console.error("Error adding recommendation:", error);
        // Handle error (e.g., display an error message)
      });
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {query.query_title}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <div className="ml-4 border-l border-gray-300 pl-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  {/* <div></div> */}
                  {/* <p className="ml-2 text-sm text-gray-500">
                    Posted_Date: {query.posted_date}
                  </p> */}
                  <p className="ml-2 text-sm text-indigo-600  font-medium">
                    {query.recomend_count} Recomended
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">
                <span className="font-bold ">Query Title: {""}</span>
                {query.query_title}
              </p>
            </div>

            <div className="mt-6 flex items-center">
              <p className="ml-2 text-sm text-gray-500">
                <span className="font-bold ">Brand Name :</span>
                {query.brand_name}
              </p>
            </div>
            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">
                <span className="font-bold ">Alternation Reason: {""}</span>
                {query.alternation_reason}
              </p>
            </div>
            <div className="flex gap-4 items-center pt-6">
              <img
                className="inline-block h-10 w-10 rounded-full"
                src={query?.user_img}
                alt=""
              />
              <div>
                <p>{query.name}</p>
                <p className="text-sm text-gray-500">
                  {" "}
                  <span>Posted: </span>{" "}
                  {new Date(query.posted_date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
            <img
              src={query.product_image_url}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product form */}
        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

            <form>
              <div className="mt-1">
                <Link
                  onClick={handleAddRecommendation}
                  to={`/recommendation/${id}`}
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Add Recomended Product
                </Link>
              </div>
            </form>
          </section>
        </div>
      </div>
      <div>
        <RecomendedProd id={id}></RecomendedProd>
      </div>
    </div>
  );
}

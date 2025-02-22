/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const orders = [
  {
    number: "WU88191111",
    date: "January 22, 2021",
    datetime: "2021-01-22",
    href: "#",
    invoiceHref: "#",
    total: "$302.00",
    products: [
      {
        id: 1,
        name: "Nomad Tumbler",
        description:
          "This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you're weird like that, this bottle is ready for your next adventure.",
        href: "#",
        price: "$35.00",
        status: "out-for-delivery",
        date: "January 5, 2021",
        datetime: "2021-01-05",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/order-history-page-06-product-01.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
    ],
  },
];

export default function RecomendedProd({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://apis-server-eight.vercel.app/recommendation"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 border">
      <div className="mx-auto max-w-4xl ">
        <div className="mt-16">
          <div className="space-y-16 sm:space-y-24">
            {orders.map((order) => (
              <div key={order.number}>
                <h3 className="sr-only">Order placed on </h3>

                <div className="bg-gray-50 px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8">
                  <p className="font-bold">
                    View Recomended Products for your Query
                  </p>
                </div>

                <div className="mt-6 flow-root px-4 sm:mt-10 sm:px-0">
                  <div className="-my-6 divide-y divide-gray-200 sm:-my-10">
                    {data &&
                      data.map(
                        (product) =>
                          id === product.id && (
                            <div
                              key={product._id}
                              className="flex  py-6 sm:py-10"
                            >
                              <div className="min-w-0 flex-1 lg:flex lg:flex-col">
                                <div className="lg:flex-1">
                                  <div className="sm:flex">
                                    <div>
                                      <h4 className="font-medium text-gray-900">
                                        {product.re_product_name}
                                      </h4>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="py-4">
                                      <p className="text-sm font-bold mb-2 text-gray-600 leading-2">
                                        Product Name :{" "}
                                        <span className="font-normal">
                                          {product.re_product_name}
                                        </span>
                                      </p>
                                      <p className="text-sm font-bold text-gray-600 leading-3">
                                        Brand Name:{" "}
                                        <span className="font-normal">
                                          {product.re_brand_name}
                                        </span>
                                      </p>
                                    </div>
                                    <p className="mt-2 hidden text-sm font-bold text-gray-500 sm:block">
                                      Recommendation reason:{" "}
                                      <span className="font-normal">
                                        {" "}
                                        {product.re_recommendation_reason}
                                      </span>
                                    </p>
                                  </div>
                                  <div className="mt-3 md:mt-6 font-medium">
                                    <p>View Details</p>
                                  </div>
                                </div>
                              </div>
                              <div className="ml-4 flex-shrink-0 sm:order-first sm:m-0 sm:mr-6">
                                <img
                                  src={product.re_product_image_url}
                                  className="col-start-2 col-end-3 h-20 w-20 rounded-lg object-cover object-center sm:col-start-1 sm:row-span-2 sm:row-start-1 sm:h-40 sm:w-40 lg:h-52 lg:w-52"
                                />
                              </div>
                            </div>
                          )
                      )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthProvider";
// import { useLoaderData } from "react-router-dom";
// import Lottie from "lottie-react";
// import Chatboat from "../../../public/Chatbot.json";

// export default function MyRecommendations() {
//   const recommendedData = useLoaderData();
//   const { user } = useContext(AuthContext);
//   const email = user?.email;

//   const style = {
//     width: "400px",
//   };

//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
//       {recommendedData.length}
//       {recommendedData.length !== 0  ? (
//         <div>
//           <div className="flex justify-center">
//             <Lottie style={style} animationData={Chatboat} />
//           </div>
//         </div>
//       ) : (
//         <div className="-mx-4 mt-8 sm:-mx-0">
//           <table
//             className={`min-w-full divide-y divide-gray-300 dark:divide-gray-700`}
//           >
//             <thead>
//               <tr>
//                 <th
//                   scope="col"
//                   className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-0"
//                 >
//                   Query Title
//                 </th>
//                 <th
//                   scope="col"
//                   className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900  dark:text-white lg:table-cell"
//                 >
//                   Recommended Query Title
//                 </th>
//                 <th
//                   scope="col"
//                   className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900  dark:text-white sm:table-cell"
//                 >
//                   Product Name
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900  dark:text-white"
//                 >
//                   Recommended Product
//                 </th>
//                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
//                   <span className="sr-only">Edit</span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200 dark:divide-gray-800 bg-white  dark:text-gray-900">
//               {Array.isArray(recommendedData) &&
//                 recommendedData.map(
//                   (data) =>
//                     email === data.recommender.email && (
//                       <tr key={data._id}>
//                         <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:w-auto sm:max-w-none sm:pl-0">
//                           {data.query_title}
//                           <dl className="font-normal lg:hidden">
//                             <dt className="sr-only">Your Product</dt>

//                             <dt className="sr-only sm:hidden">Email</dt>
//                             <dd className="mt-1 truncate text-gray-500 sm:hidden">
//                               {data.product_name}
//                             </dd>
//                           </dl>
//                         </td>
//                         <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
//                           {data.re_query_title}
//                         </td>
//                         <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
//                           {data.product_name}
//                         </td>
//                         <td className="px-3 py-4 text-sm text-gray-500">
//                           {data.re_product_name}
//                         </td>
//                         <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
//                           <a
//                             href="#"
//                             className="text-indigo-600 hover:text-indigo-900"
//                           >
//                             Delete<span className="sr-only">, {data.name}</span>
//                           </a>
//                         </td>
//                       </tr>
//                     )
//                 )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

const Test = () => {
  return <div>Test</div>;
};

export default Test;

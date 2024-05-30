import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "sonner";

export default function UpdateProfile() {
  const { user, editUserProfile } = useContext(AuthContext);

  const [name, setName] = useState(user.displayName || "");
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");

  const handleUpdateProfile = () => {
    editUserProfile(name, photoURL, phoneNumber).then(() => {
      toast.success("Your profile update successfully");
      setName("");
      setPhoneNumber("");
      setPhotoURL("");
    });
  };

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 mt-3 md:mt-5">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Update Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Personal details and information.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div>
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-2 block w-full md:w-[18.75rem] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Smais Shawon"
                  />
                </div>
              </div>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email Address
            </dt>
            <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div>
                <div className="mt-2">
                  <input
                    disabled
                    type="email"
                    name="email"
                    id="email"
                    //value={email}
                    //onChange={(e) => setEmail(e.target.value)}
                    className="pl-2 block w-full md:w-[18.75rem] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Phone Number
            </dt>
            <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div>
                <div className="mt-2">
                  <input
                    disabled
                    type="tel"
                    name="phoneNo"
                    id="email"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="pl-2 block w-full md:w-[18.75rem] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Photo URL
            </dt>
            <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div>
                <div className="mt-2">
                  <input
                    type="text"
                    id="phone"
                    name="photoURL"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    className="pl-2 block w-full md:w-[18.75rem] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="https://examp.com/user.jpg"
                  />
                </div>
              </div>
            </dd>
          </div>
        </dl>
      </div>
      <div className="flex justify-center md:justify-start">
        <button
          type="button"
          className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleUpdateProfile}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}
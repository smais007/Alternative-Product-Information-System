export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-200 dark:divide-gray-700 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                Get in touch
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                Have questions about our alternative product info system or want
                to learn more? Feel free to reach out to us!
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  Collaborate
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        className="font-semibold text-indigo-600"
                        href="mailto:collaborate@example.com"
                      >
                        collaborate@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd className="dark:text-gray-400">+1 (555) 905-2345</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  Press
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        className="font-semibold text-indigo-600"
                        href="mailto:press@example.com"
                      >
                        press@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd className="dark:text-gray-400">+1 (555) 905-3456</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  Join our team
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        className="font-semibold text-indigo-600"
                        href="mailto:careers@example.com"
                      >
                        careers@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd className="dark:text-gray-400">+1 (555) 905-4567</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  Say hello
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        className="font-semibold text-indigo-600"
                        href="mailto:hello@example.com"
                      >
                        hello@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd className="dark:text-gray-400">+1 (555) 905-5678</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                Locations
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                Located in City/Area, our office is the central hub for our
                alternative product info system. Drop by for a demo or reach out
                to us online!
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50  dark:bg-gray-800 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  Los Angeles
                </h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600 dark:text-gray-400">
                  <p>4556 Brendan Ferry</p>
                  <p>Los Angeles, CA 90210</p>
                </address>
              </div>
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  New York
                </h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600 dark:text-gray-400">
                  <p>886 Walter Street</p>
                  <p>New York, NY 12345</p>
                </address>
              </div>
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  Toronto
                </h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600 dark:text-gray-400">
                  <p>7363 Cynthia Pass</p>
                  <p>Toronto, ON N3Y 4H8</p>
                </address>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10 dark:bg-gray-800">
                <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  Chicago
                </h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600 dark:text-gray-400">
                  <p>726 Mavis Island</p>
                  <p>Chicago, IL 60601</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

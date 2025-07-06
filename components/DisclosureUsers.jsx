import { Disclosure } from "@headlessui/react";
import React from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAppContext } from "./AppContext";
import { useAppContextNounou } from "./AppContextNounou";
import ImageSrc from "./ImageSrc";

const DisclosureUsers = () => {
  const {
    state: { session },
  } = useAppContext();
  console.log(session);
  const {
    state: { sessionNounou },
  } = useAppContextNounou();

  const { setSession } = useAppContext();
  const { setSessionNounou } = useAppContextNounou();

  const handelClick = async () => {
    setSession();
    //  router.push("/");

    return;
  };
  const handelClick1 = () => {
    setSessionNounou();

    //  router.push("/");

    return;
  };

  return (
    <div>
      <div className="border-t border-indigo-700 pb-3 pt-4">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <ImageSrc
              src="/emoji.webp"
              width="200"
              height={32}
              className="h-10 w-10 rounded-full"
              alt="logo-nounous"
            />
            {/* <img
              className="h-10 w-10 rounded-full"
              src={}
              alt=""
            /> */}
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-white">
              {session.username}
            </div>
            <div className="text-sm font-medium text-indigo-300">
              {session.email}
            </div>
          </div>
          <button
            type="button"
            className="ml-auto flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 space-y-1 px-2">
          <div>
            <Disclosure.Button
              as="a"
              href="/setting"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
            >
              Your Profile
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="/#"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
            >
              Settings
            </Disclosure.Button>
            <Disclosure.Button
              onClick={handelClick}
              className="w-full flex justify-start rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
            >
              Sign out
            </Disclosure.Button>
          </div>
          {/* {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))} */}
        </div>
      </div>
    </div>
  );
};

export default DisclosureUsers;

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import NounousGet from "./NounousGet";
import ImageSrc from "./ImageSrc";
import { AiOutlineUser } from "react-icons/ai";
import Footer from "./Footer";
import Link from "next/link";
import { useAppContext } from "./AppContext";
import { useAppContextNounou } from "./AppContextNounou";
import DisclosureUsers from "./DisclosureUsers";
import DisclosureNounous from "./DisclosureNounous";
import TitrePage from "./TitrePage";
import { usePathname } from "next/navigation";
import FooterPage from "./FooterPage";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example(props) {
  const pathname = usePathname();
  const navigation = [
    { name: "Home", href: "/", current: pathname === "/" ? true : false },
    {
      name: "Book-bebe",
      href: "/book-bebe",
      current: pathname === "/book-bebe" ? true : false,
    },
    {
      name: "Statistiques",
      href: "/statistiques",
      current: pathname === "/statistiques" ? true : false,
    },
    {
      name: "Setting",
      href: "/setting",
      current: pathname === "/setting" ? true : false,
    },
    { name: "Calendar", href: "#", current: pathname === "/#" ? true : false },
  ];
  const { children } = props;
  const {
    state: { session },
  } = useAppContext();
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
    <>
      <div className="h-screen  flex flex-col ">
        <div className="bg-indigo-600  pb-32">
          <Disclosure
            as="nav"
            className="border-b border-indigo-300 border-opacity-25 bg-indigo-600 lg:border-none"
          >
            {({ open }) => (
              <>
                <div className="mx-auto max--7xl px-2 sm:px-4 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                    <div className="flex items-center px-2 lg:px-0">
                      <Link href="/" className="flex -shrink-0">
                        <ImageSrc
                          src="/logo/logo-nounous-white.png"
                          width="200"
                          height={32}
                          className="w-20 md:w-20 h-10 rounded"
                          alt="logo-nounous"
                        />
                      </Link>
                      <div className="hidden lg:ml-10 lg:block">
                        <div className="flex space-x-4">
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-indigo-700 text-white"
                                  : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                                "rounded-md py-2 px-3 text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </Link>
                          ))}
                          {session && session.role === "ADMIN" ? (
                            <Link
                              href="/admin"
                              className={classNames(
                                pathname === "admin"
                                  ? "bg-indigo-700 text-white"
                                  : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                                "rounded-md py-2 px-3 text-sm font-medium"
                              )}
                            >
                              ADMIN
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="flex lg:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-200 hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="hidden lg:ml-4 lg:block">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        {!session && !sessionNounou ? (
                          <Link
                            href="/connexion"
                            className="flex rounded-full bg-indigo-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 ml-3"
                          >
                            <span className="sr-only">Open user menu</span>
                            <AiOutlineUser className="h-8 w-8 rounded-full" />
                            {/* <img src={user.imageUrl} alt="" /> */}
                          </Link>
                        ) : (
                          <Menu
                            as="div"
                            className="relative ml-3 flex-shrink-0"
                          >
                            <div>
                              <Menu.Button className="flex rounded-full bg-indigo-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                                <span className="sr-only">Open user menu</span>
                                <AiOutlineUser className="h-8 w-8 rounded-full" />
                                {/* <img src={user.imageUrl} alt="" /> */}
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        href="/setting"
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                      >
                                        Your Profile
                                      </Link>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        href="/#"
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                      >
                                        Settings
                                      </Link>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <button
                                        onClick={
                                          session ? handelClick : handelClick1
                                        }
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "w-full flex justify-start px-4 py-2 text-sm text-gray-700"
                                        )}
                                      >
                                        Sign out
                                      </button>
                                    )}
                                  </Menu.Item>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="lg:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        // as="Link"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-indigo-700 text-white"
                            : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                          "block rounded-md py-2 px-3 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    {session && session.role === "ADMIN" ? (
                      <Link
                        href="/admin"
                        className={classNames(
                          pathname === "admin"
                            ? "bg-indigo-700 text-white"
                            : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                          "block rounded-md py-2 px-3 text-base font-medium"
                        )}
                      >
                        ADMIN
                      </Link>
                    ) : null}
                  </div>

                  {/* connexion menu Mobile */}
                  {!session && !sessionNounou ? (
                    <div className="border-t border-indigo-700 pb-3 pt-4">
                      <div className="flex-shrink-0  px-2">
                        <AiOutlineUser className="h-10 w-10 rounded-full bg-slate-300 ml-3" />
                        <Link
                          href="/connexion"
                          className="w-full flex justify-start rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                        >
                          Sign in
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {session ? <DisclosureUsers /> : <DisclosureNounous />}
                    </div>
                  )}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className=" py-10 h-full w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <TitrePage />
            </div>
          </header>
        </div>

        <main className="-mt-32 grow  mx-4 px-4 sm:px-6 lg:px-8 bg-slate-200 rounded">
          <div className=" ">
            {/* Your content */}
            <article className="">{children}</article>

            {/* <NounousGet /> */}
          </div>
        </main>
        <div>
          <FooterPage />
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
}

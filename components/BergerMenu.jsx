import { useCallback, useState } from "react";
import Link from "next/link";
import { GrMenu } from "react-icons/gr";
import { useAppContext } from "./AppContext";

const BurgerMenu = () => {
  const {
    state: { session },
  } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = useCallback(
    () => setMenuOpen((state) => !state),
    []
  );

  return (
    <>
      <button className="text-xl px-4" onClick={handleToggleMenu}>
        <GrMenu className="w-8 h-8" />
      </button>
      <ul
        className={`flex flex-col absolute  bg-gradient-to-r  transition-all duration-500 z-50 ease-in ${
          menuOpen ? "left-0 w-full h-full" : "left-[-290px]"
        }`}
      >
        <button onClick={handleToggleMenu} className="p-4">
          <div className="flex flex-col w-64 pt-10">
            <li className="bg-slate-300 border-double  border-4 border-black  rounded-xl">
              <p className="p-4 block hover:bg-slate-100 rounded-xl">
                <Link href="/#">item 1</Link>
              </p>
            </li>
            <li className="bg-slate-300 border-double  border-4 border-black  rounded-xl">
              <p className="p-4 block hover:bg-slate-100 rounded-xl">
                <Link href="/#">item 2</Link>
              </p>
            </li>
            <li className="bg-slate-300 border-double  border-4 border-black  rounded-xl">
              <p className="p-4 block hover:bg-slate-100 rounded-xl">
                <Link href="/#">item 3</Link>
              </p>
            </li>
            <li className="bg-slate-300 border-double  border-4 border-black  rounded-xl">
              <p className="p-4 block hover:bg-slate-100 rounded-xl">
                <Link href="/#">item 4</Link>
              </p>
            </li>
            <li className="bg-slate-300 border-double  border-4 border-black  rounded-xl">
              <p className="p-4 block hover:bg-slate-100 rounded-xl">
                <Link href="/#">item 5</Link>
              </p>
            </li>
            <li className="bg-slate-300 border-double  border-4 border-black  rounded-xl">
              <p className="p-4 block hover:bg-slate-100 rounded-xl">
                <Link href="/#"> item 6</Link>
              </p>
            </li>
            <li className="bg-slate-300 border-double  border-4 border-black  rounded-xl">
              <p className="p-4 block hover:bg-slate-100 rounded-xl">
                <Link href="/setting">Settings</Link>
              </p>
            </li>
            {session && session.role === "ADMIN" && (
              <li className="bg-slate-300 border-double  border-4 border-black  rounded-xl">
                <p className="p-4 block hover:bg-slate-100 rounded-xl">
                  <Link href="/admin">Administrateur</Link>
                </p>
              </li>
            )}
          </div>
        </button>
      </ul>
    </>
  );
};
export default BurgerMenu;

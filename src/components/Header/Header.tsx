import { Link } from "react-router-dom";
import { UserIcon } from "../icons";
const navlist = [
  {
    href: "/collections/keyboards",
    name: "Keyboards",
  },
  {
    href: "/collections/keycaps",
    name: "Keycaps",
  },
  {
    href: "/collections/switches",
    name: "Switches",
  },
];
export const Header = () => {
  return (
    <>
      <div className="w-full h-7  bg-gradient-to-l to-accent-green from-accent-blue" />
      <header className="w-full px-11 h-14 flex justify-around items-center bg-white shadow-md font-roboto mb-10">
        <h1 className="text-3xl ">
          <Link to="/home">Keebs.</Link>
        </h1>
        <nav>
          <ul className="flex gap-5 ">
            {navlist.map((navItem) => (
              <li
                className="text-lg font-bold hover:underline-offset-[20px] hover:underline "
                key={navItem.name}
              >
                <Link to={navItem.href}>{navItem.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Link to="/account">
            <UserIcon />
          </Link>
        </div>
      </header>
    </>
  );
};

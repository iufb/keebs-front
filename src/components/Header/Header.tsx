import { Box, Heading, Text } from "@radix-ui/themes";
const navlist = [
  {
    href: "/keyboards",
    name: "Keyboards",
  },
  {
    href: "/keycaps",
    name: "Keycaps",
  },
  {
    href: "/switches",
    name: "Switches",
  },
];
export const Header = () => {
  return (
    <header className="w-full px-10 h-20 flex justify-around items-center bg-white shadow-md font-roboto">
      <Heading as="h1" size="7" color="gray">
        <a href="/">Keebs.</a>
      </Heading>
      <nav>
        <ul className="flex gap-5 ">
          {navlist.map((navItem) => (
            <li
              className="text-lg font-bold hover:underline-offset-[20px] hover:underline "
              key={navItem.name}
            >
              <a href={navItem.href}>{navItem.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Box>
        <a href="/account">User</a>
      </Box>
    </header>
  );
};

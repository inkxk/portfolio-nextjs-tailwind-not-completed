import React, { useState, useEffect, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem: FC<{
    activeItem: string;
    setActiveItem: Function;
    name: string;
    route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
    return activeItem !== name ? (
        <Link href={route}>
            <a>
                <span
                    onClick={() => setActiveItem(name)}
                    className="hover:text-green-500"
                >
                    {name}
                </span>
            </a>
        </Link>
    ) : null;
};

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>("");
    const { pathname } = useRouter();

    useEffect(() => {
        if (pathname === "/") setActiveItem("About");
        if (pathname === "/projects") setActiveItem("Projects");
        if (pathname === "/resume") setActiveItem("Resume");
    }, []);

    return (
        <div className="flex justify-between px-5 py-3 my-3">
            <span className="font-bold text-green-500 text-xl border-b-4 border-green-500 md:text-2xl">
                {activeItem}
            </span>
            <div className="text-lg flex space-x-5">
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="About"
                    route="/"
                />
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="Projects"
                    route="/projects"
                />
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="Resume"
                    route="/resume"
                />
            </div>
        </div>
    );
};

export default Navbar;

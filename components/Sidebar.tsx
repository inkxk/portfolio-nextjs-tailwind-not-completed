import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
    return (
        <>
            <img
                src="https://avatars.githubusercontent.com/u/64063112?v=4"
                alt="user avatar"
                className="w-40 h-40 rounded-full mx-auto"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider">
                Potcharapol Nokyoo
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
                Web Developer
            </p>
            <a
                className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center"
                href=""
                download="name"
            >
                <GiTie className="w-6 h-6" />
                Download Resume
            </a>

            {/* Social Icons */}
            <div className="flex justify-around my-5 text-green-500 w-9/12 md:w-full mx-auto">
                <a href="https://github.com/inkxk">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/inkxk_/">
                    <AiFillInstagram className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
            </div>

            {/* Address */}
            <div
                className="my-5 py-4 bg-gray-200"
                style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
            >
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Bangkok,Thailand</span>
                </div>
                <p className="my-2">potcharapol.nok@gmail.com</p>
                <p className="my-2">+66880949523</p>
            </div>

            {/* Email Button */}
            <button
                className="bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 my-2 text-white focus:outline-none"
                onClick={() => window.open("mailto: potcharapol.nok@gmail.com")}
            >
                Contact Me!
            </button>
            <button className="bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 my-2 text-white">
                Theme
            </button>
        </>
    );
};

export default Sidebar;

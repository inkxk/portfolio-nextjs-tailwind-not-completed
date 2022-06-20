import React, { FC } from "react";
import { TypeSkill } from "../types";

const Bar: FC<{
    data: TypeSkill;
}> = ({ data: { Icon, level, name } }) => {
    return (
        <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500">
            <div
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
                style={{ width: `${level}%` }}
            >
                <Icon className="mr-3" />
                {name}
            </div>
        </div>
    );
};

export default Bar;

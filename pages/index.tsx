import type { GetStaticProps, NextPage } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const Home: NextPage = () => {
    return (
        <div className="flex flex-col flex-grow px-6 pt-1">
            <h5 className="my-3 text-base font-medium">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti laudantium rerum nobis. Culpa quo sunt cumque quas
                exercitationem quis iusto modi amet tenetur. Cumque quam
                praesentium vitae quos porro eaque!
            </h5>
            <div
                className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
                style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
            >
                <h6 className="my-3 text-xl font-semibold tracking-wide">What I Offer</h6>
                <div className="grid gap-6 my-3 md:grid-cols-2">
                    {services.map((service) => (
                        <div className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1">
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;


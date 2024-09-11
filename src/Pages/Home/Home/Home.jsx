import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Products from "../Products/Products";

import RecursivePartitioningLayout from "../../../Components/RecursivePartitioningLayout/RecursivePartitioningLayout";
import AlphabetTileInteraction from "../../../Components/AlphabetTileInteraction/AlphabetTileInteraction";
import { Element } from "react-scroll";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            {/* <Banner></Banner> */}
            {/* <Products></Products> */}
            <div className="bg-pink-300 mt-24">
                <h2 className="md:text-2xl font-bold text-purple-700 text-center my-8">Recursive Partitioning</h2>
            </div>
            <div className="w-full h-100">
                <Element name="partitioning">
                    <RecursivePartitioningLayout ></RecursivePartitioningLayout>
                </Element>
            </div>
            <div className="bg-pink-300 mt-24">
                <h2 className="md:text-2xl font-bold text-purple-600 text-center my-8">Alphabet Title Interaction</h2>
            </div>
            <div className="mb-10">
                <Element name="alphabet">
                    <AlphabetTileInteraction></AlphabetTileInteraction>
                </Element>
            </div>
        </div>
    );
};

export default Home;
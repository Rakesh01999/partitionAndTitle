import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Products from "../Products/Products";

import RecursivePartitioningLayout from "../../../Components/RecursivePartitioningLayout/RecursivePartitioningLayout";
import AlphabetTileInteraction from "../../../Components/AlphabetTileInteraction/AlphabetTileInteraction";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Recusive Partioning | Home</title>
            </Helmet>
            {/* <Banner></Banner> */}
            {/* <Products></Products> */}
            <div>
                <h2 className="md:text-2xl font-bold text-purple-600 text-center my-8">Recursive Partitioning</h2>
            </div>
            <div className="w-full h-100">
                <RecursivePartitioningLayout></RecursivePartitioningLayout>
            </div>
            <div>
                <h2 className="md:text-2xl font-bold text-purple-600 text-center my-8">Alphabet Title Interaction</h2>
            </div>
            <div className="mb-10">
                <AlphabetTileInteraction></AlphabetTileInteraction>
            </div>
        </div>
    );
};

export default Home;
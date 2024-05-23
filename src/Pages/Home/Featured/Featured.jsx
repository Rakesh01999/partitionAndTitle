import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="Check it out" heading="Featured Item"> </SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pt-12 pb-20 px-36">
                <div><img src={featuredImg} alt="" /></div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get some ?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis dolorem illo odit veniam, rem fugiat dicta quidem, nulla hic, dignissimos similique reprehenderit dolor saepe nobis ex maxime sapiente vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, earum cupiditate. Ex, repellendus ratione atque facilis aliquam qui culpa magnam doloribus earum quaerat esse quidem repudiandae quae id eum excepturi!
                    </p>
                    <button className="btn btn-outline btn-success border-0 border-b-4  mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
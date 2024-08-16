
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-8">
            <p className="text-orange-600 mb-2"> --- {subHeading} ---</p>
            {/* <p className="text-3xl uppercase font-bold text-orange-500 border-y-4 py-4">{heading}</p> */}
            <p className="text-3xl font-extrabold bg-gradient-to-bl from-yellow-300 to-orange-600 bg-clip-text text-transparent border-y-4 py-4">{heading}</p>
        </div>
    );
};

export default SectionTitle;


const MenuItem = ({item}) => {
    const {name , recipe, image, price} = item ;
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0 100px 100px 100px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name} -------- </h3>
                <p>{recipe}</p>
            </div>
                <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;
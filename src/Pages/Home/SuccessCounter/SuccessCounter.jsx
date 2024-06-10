import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const SuccessCounter = () => {
    return (
        <div>
            <SectionTitle
                subHeading={"Site Summary Section"}
                heading={"Success Counter"}>
            </SectionTitle>
            {/* <h3 className='text-3xl mt-10 font-bold'>Success Counter</h3> */}
        </div>
    );
};

export default SuccessCounter;
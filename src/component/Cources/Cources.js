import React, { useEffect, useState } from 'react';
import Cource from '../Cource/Cource';



const Cources = () => {

    const [cources, setCources] = useState([]);

    useEffect(() => {
        fetch('./cources.JSON')
            .then(res => res.json())
            .then(data => setCources(data));
    }, []);

    // console.log(cources);

    return (
        <div className='pb-5'>
            <h1 className='pt-5 pb-5'>Our Cources</h1>

            <div className='row justify-content-center ps-5 ms-5  gy-4 '>

                {
                    cources?.map(cource => (
                        <div className='col-md-5'>
                            <Cource
                                key={cource.id}
                                cource={cource}
                            ></Cource>
                        </div>
                    )
                    )
                }

            </div>
        </div>
    );
};

export default Cources;
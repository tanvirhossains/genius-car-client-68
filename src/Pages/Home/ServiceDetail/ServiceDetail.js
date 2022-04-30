import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UseServieceDetail from '../../Hooks/UseServieceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams()
   const [service] = UseServieceDetail(serviceId)

    return (
        <div>
            <h1>Service detail: {service.name} </h1>
            <div className='text-center' >
                <Link to={`/checkout/${serviceId}`} > <button className='btn btn-primary'>Proceed checkout!!</button></Link>
            </div>

        </div>
    );
};

export default ServiceDetail;
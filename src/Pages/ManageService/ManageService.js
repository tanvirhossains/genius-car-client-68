import React from 'react';
import UseService from '../Hooks/UseService';

const ManageService = () => {

    const [services , setServices] = UseService()

    const handleDelete = id => {
        const proceed = window.confirm('are you sure , you want to delete')
        if (proceed) {

            fetch(`http://localhost:5000/service/${id}`, {
                method: 'delete',
            })
                .then(res => res.json())
                .then(data => {console.log(data)
                const remaining = services.filter (service => service._id !== id)
                setServices(remaining)
                })

        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Manage a service!!!!!</h2>

            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name} <button onClick={() => handleDelete(service._id)}>x</button></h3>
                </div>)
            }

        </div>
    );
};

export default ManageService;
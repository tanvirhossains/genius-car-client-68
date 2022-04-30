import { jsonEval } from '@firebase/util';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:5000/service`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then (result => console.log(result))

    }

    return (
        <div className='mx-auto w-50'>
            <h1>Add your service</h1>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' className='mb-2' {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='description' className='mb-2' {...register("description",)} />
                <input placeholder='price' className='mb-2' type="number" {...register("price",)} />
                <input placeholder='img' className='mb-2' type="text" {...register("img",)} />
                <input type="submit" text="add user" />
            </form>
        </div>
    );
};

export default AddService;
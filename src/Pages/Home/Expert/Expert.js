import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert

    return (
        <div className='g-5 col-sm-12 col-lg-3 col-md-4'>
            <div className="card  " style={{ width: "18rem" }}>
                <img src={img} alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>

    );
};

export default Expert;
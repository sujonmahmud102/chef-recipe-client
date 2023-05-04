import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeDetails = () => {
    const [disabled, setDisabled] = useState(false);
    const recipe = useLoaderData();
    const { name, ingredients, cooking_method, rating, image } = recipe;

    // toast
    const notify = () => toast.success('Added to this recipe on favorite', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const handleDisabled = () => {
        setDisabled(!disabled);
    }
    
    return (
        <div className='m-16 lg:flex items-center justify-around'>
            <div className='gap-5'>
                <div className='text-center'>
                    <img className='w-96 h-64 rounded-2xl mx-auto' src={image} alt="" />
                    <h3 className='mt-4 text-2xl font-semibold italic uppercase'>
                        {name}
                    </h3>
                    <p className='text-center my-5'>Ratings: {rating}</p>
                    <button onClick={() => { notify(), handleDisabled() }} disabled={disabled} className="btn btn-outline btn-secondary ">Add To Favorite</button>
                    <ToastContainer />
                </div>
            </div>
            <div className='gap-5 mt-8 md:pl-16'>
                <div>
                    <h3 className='text-xl font-semibold mb-2'>
                        Ingredients:
                    </h3>
                    {
                        ingredients.map((items, i) => <ul key={i}
                            className='list-disc'>
                            <li>{items}</li>
                        </ul>)
                    }
                </div>
                <div className='mt-6'>
                    <h3 className='text-xl font-semibold mb-2'>
                        Cooking Method:
                    </h3>
                    {
                        cooking_method.map((items, i) => <ul key={i}
                            className='list-disc'>
                            <li>{items}</li>
                        </ul>)
                    }
                </div>
            </div>


        </div>
    );
};

export default RecipeDetails;
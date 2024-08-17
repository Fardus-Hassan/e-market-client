import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import axios from 'axios';

const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/products`)
            setProducts(data);
        }
        fetchData()
    }, [])

    console.log(products);

    return (
        <div className='lg:mb-[120px] mt-10 mb-[80px] mx-auto max-w-[1440px] w-[95%]'>
            <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2'>
                {
                    products.length > 0 ? products.map(product => (
                        <ProductCard key={product._id} product={product} />
                    )) : <h1>Loading...</h1>
                }
            </div>
        </div>
    );
};

export default Home;
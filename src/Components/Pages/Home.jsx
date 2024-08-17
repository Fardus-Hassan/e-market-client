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
        <div className='lg:mb-[120px] mt-10 mb-[80px]'>
            <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2'>
                {
                    products.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default Home;
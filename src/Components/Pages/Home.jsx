import React, { useContext, useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import axios from 'axios';
import { GlobalStateContext } from '../../Global/GlobalContext';
import Spinner from '../Spinner/Spinner';

const Home = () => {

    const [loading, setLoading] = useState(true)

    const [datas, setDatas] = useState([])
    const { searchData } = useContext(GlobalStateContext)
    const [filterData, setFilterData] = useState([])


    const [total, setTotal] = useState(0)
    const [itemPerPage, setItemPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)
    const totalPage = Math.ceil(total / itemPerPage)
    const pages = [...Array(totalPage).keys()]



    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/products?page=${currentPage}&size=${itemPerPage}`)
            setDatas(data)
            setLoading(false)
        }
        getData()
    }, [currentPage, itemPerPage])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/products/byCount/productsCount`)
            setTotal(data.count)
            setLoading(false)
        }
        getData()
    }, [])

    useEffect(() => {
        setFilterData(searchData)
    }, [searchData])


    if (loading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='lg:mb-[100px] mt-10 mb-[80px] mx-auto max-w-[1440px] w-[95%]'>
            <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2'>
                {datas.length > 0 ? (
                    datas.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
            <div className="flex justify-center pt-10">
                <button
                    disabled={currentPage === 0}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className={`${currentPage === 0
                            ? "text-gray-200 flex items-center justify-center px-4 py-2 mx-1 transition-colors duration-300 transform bg-white rounded-md hover:cursor-not-allowed border shadow-md"
                            : "flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hover:bg-pmColor hover:text-white border shadow-md"
                        }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                <div className="sm:inline flex justify-between flex-wrap gap-2">
                    {pages.map((item, i) => (
                        <button
                            onClick={() => setCurrentPage(i)}
                            key={i}
                            className={`px-4 ${currentPage === i
                                    ? "bg-pmColor py-2 mx-1 transition-colors hover:text-white duration-300 transform rounded-md text-white hover:bg-pmColor border shadow-md"
                                    : "py-2 mx-1 transition-colors bg-white hover:text-white text-black duration-300 transform rounded-md hover:bg-pmColor border shadow-md"
                                }`}
                        >
                            {item + 1}
                        </button>
                    ))}
                </div>

                <button
                    disabled={currentPage === Math.ceil(total / itemPerPage) - 1}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className={`${currentPage === Math.ceil(total / itemPerPage) - 1
                            ? "text-gray-200 flex items-center justify-center px-4 py-2 mx-1 transition-colors duration-300 transform bg-white rounded-md hover:cursor-not-allowed border shadow-md"
                            : "flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hover:bg-pmColor hover:text-white border shadow-md"
                        }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );

};

export default Home;
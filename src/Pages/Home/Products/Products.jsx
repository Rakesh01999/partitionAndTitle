import React, { useState, useEffect } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Pagination, PaginationItem } from '@mui/material';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [brands, setBrands] = useState([]);

    const [filters, setFilters] = useState({
        category: '',
        brandName: '',
        priceRange: { min: 0, max: 1000 },
        sortBy: ''
    });
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);

    // useEffect(() => {
    //     fetch('http://localhost:5000/products')
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data);
    //             setFilteredProducts(data);
    //             setLoading(false);
    //         });
    // }, []);

    // ---------- claude 
    useEffect(() => {
        // fetch('http://localhost:5000/products')
        fetch('https://shopease-server-mauve.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
                // Extract unique brand names
                const uniqueBrands = [...new Set(data.map(product => product.brandName))];
                setBrands(uniqueBrands);
                setLoading(false);
            });
    }, []);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('priceRange')) {
            const key = name.split('.')[1];
            setFilters(prev => ({
                ...prev,
                priceRange: { ...prev.priceRange, [key]: parseInt(value) }
            }));
        } else {
            setFilters(prev => ({ ...prev, [name]: value }));
        }
    };

    const applyFilters = () => {
        let filtered = products;

        if (filters.category) {
            filtered = filtered.filter(product => product.categoryName === filters.category);
        }

        if (filters.brand) {
            filtered = filtered.filter(product => product.brandName === filters.brand);
        }

        filtered = filtered.filter(product =>
            (isNaN(filters.priceRange.min) || product.price >= filters.priceRange.min) &&
            (isNaN(filters.priceRange.max) || product.price <= filters.priceRange.max)
        );

        if (filters.sortBy === 'priceLowToHigh') {
            filtered = filtered.sort((a, b) => a.price - b.price);
        } else if (filters.sortBy === 'priceHighToLow') {
            filtered = filtered.sort((a, b) => b.price - a.price);
        } else if (filters.sortBy === 'newestFirst') {
            filtered = filtered.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        }

        setFilteredProducts(filtered);
        setCurrentPage(1);
    };

    const handleSearch = () => {
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const searchResults = products.filter(product =>
                (product.productName && product.productName.toLowerCase().includes(query)) ||
                (product.brandName && product.brandName.toLowerCase().includes(query)) ||
                (product.categoryName && product.categoryName.toLowerCase().includes(query))
            );
            setFilteredProducts(searchResults);
            setCurrentPage(1);
        } else {
            setFilteredProducts(products);
        }
    };

    const resetFilters = () => {
        setFilteredProducts(products);
        setFilters({
            category: '',
            brand: '',
            priceRange: { min: 0, max: 1000 },
            sortBy: ''
        });
        setSearchQuery('');
        setCurrentPage(1);
    };


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4">

            <SectionTitle subHeading="Find Here" heading="All Products" />


            {/* Search Section */}
            <div className="mb-8 flex justify-center">
                <div className="flex gap-2 w-full max-w-md">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search products..."
                        className="input input-bordered flex-grow px-4 py-2 rounded-lg border border-gray-300"
                    />
                    <button
                        onClick={handleSearch}
                        className="btn bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300"
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* Filters Section */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center">
                {/* Category Filter */}
                <div className="w-full sm:w-1/3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                    <select
                        name="category"
                        value={filters.category}
                        onChange={handleFilterChange}
                        className="select select-bordered w-full px-4 py-2 rounded-lg border border-gray-300"
                    >
                        <option value="">All</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Computers">Computers</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Cameras">Cameras</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Storage">Storage</option>
                        <option value="Wearables">Wearables</option>
                        <option value="Health">Health</option>
                        <option value="Appliances">Appliances</option>
                        <option value="Home">Home</option>
                        <option value="Books">Books</option>
                        <option value="Networking">Networking</option>
                        <option value="Tools">Tools</option>
                        <option value="Outdoor">Outdoor</option>
                    </select>
                </div>

                {/* -------Brand Name FIlter--------- */}
                {/* Brand Filter */}
                <div className="w-full sm:w-1/4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Brand</label>
                    <select
                        name="brand"
                        value={filters.brand}
                        onChange={handleFilterChange}
                        className="select select-bordered w-full px-4 py-2 rounded-lg border border-gray-300"
                    >
                        <option value="">All Brands</option>
                        {brands.map((brand, index) => (
                            <option key={index} value={brand}>{brand}</option>
                        ))}
                    </select>
                </div>


                {/* Price Range Filter */}
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-1/3">
                    <div className="w-full">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Min Price</label>
                        <input
                            type="number"
                            name="priceRange.min"
                            value={filters.priceRange.min}
                            onChange={handleFilterChange}
                            className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Max Price</label>
                        <input
                            type="number"
                            name="priceRange.max"
                            value={filters.priceRange.max}
                            onChange={handleFilterChange}
                            className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300"
                        />
                    </div>
                </div>

                {/* Sort By Filter */}
                <div className="w-full sm:w-1/3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Sort By</label>
                    <select
                        name="sortBy"
                        value={filters.sortBy}
                        onChange={handleFilterChange}
                        className="select select-bordered w-full px-4 py-2 rounded-lg border border-gray-300"
                    >
                        <option value="">None</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                        <option value="newestFirst">Date: Newest First</option>
                    </select>
                </div>
            </div>

            <div className='flex justify-center gap-6 mb-6' >
                {/* Apply Filters Button */}
                <button
                    onClick={applyFilters}
                    className="btn bg-orange-500 text-white hover:bg-yellow-300 hover:text-black px-4 py-2 rounded-lg transition duration-300 mt-4 sm:mt-0"
                >
                    Apply Filters
                </button>

                {/* Reset Filters Button */}
                <button
                    onClick={resetFilters}
                    className="btn bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition duration-300 mt-4 sm:mt-0"
                >
                    Reset All
                </button>
            </div>

            <h2 className="text-center text-2xl font-bold mb-6"> Products: {filteredProducts.length}</h2>


            {/* Products Section */}
            {filteredProducts.length === 0 ? (
                <p className="text-center text-orange-500 font-bold text-xl md:text-2xl">No products found matching the current filters or search query.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProducts.map(product => (
                        <div data-aos="zoom-out-up">

                            <div key={product.id} className="bg-orange-200 border rounded-lg shadow-lg p-4 transition hover:shadow-2xl">
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                                <h3 className="text-lg font-bold text-gray-800">{product.productName}</h3>
                                <p className="text-gray-600 mt-2 flex"><span className='text-black font-semibold'>Brand:</span> {product.brandName || 'N/A'}</p>
                                <p className="text-gray-600 mt-1"><span className='text-black font-semibold'>Category:</span> {product.categoryName || 'N/A'}</p>
                                <p className="text-gray-800 mt-1 font-semibold">Price: ${product.price.toFixed(2)}</p>
                                <p className="text-gray-500 mt-1 text-sm"><span className='text-black font-semibold'>Date :</span> {new Date(product.dateAdded).toLocaleDateString()}</p>
                                <p className="text-gray-500 mt-1 text-sm"><span className='text-black font-semibold'>Details:</span> {product.Details}</p>
                            </div>
                        </div>

                    ))}
                </div>
            )}

            {/* Pagination */}
            {/* <div className="my-8 flex justify-center items-center">
                <Pagination
                    count={Math.ceil(filteredProducts.length / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    renderItem={(item) => (
                        <PaginationItem
                            {...item}
                            className={`page-item ${item.selected ? 'bg-orange-600 text-white font-bold' : ''}`}
                        />
                    )}
                />
            </div> */}

            <div className="my-8 flex justify-center items-center">
                <Pagination
                    count={Math.ceil(filteredProducts.length / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    renderItem={(item) => (
                        <PaginationItem
                            {...item}
                            sx={{
                                '&.Mui-selected': {
                                    backgroundColor: 'orange', // Set the selected background color to orange
                                    color: 'white', // Set the selected text color to white
                                    fontWeight: 'bold', // Make the selected item bold
                                },
                                '&.Mui-selected:hover': {
                                    backgroundColor: 'darkorange', // Set a darker shade of orange on hover
                                },
                            }}
                            className={`page-item ${item.selected ? 'font-bold' : ''}`}
                        />
                    )}
                />
            </div>

        </div>
    );
};

export default Products;


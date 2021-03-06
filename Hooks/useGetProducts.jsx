import { useEffect, useState } from 'react';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await API;
            const filteredProducts = response.filter((product) => {
                return product.images.length > 0;
            });
            setProducts(filteredProducts);
        }
        fetchData();
    }, [API]);

    return products;
};

export default useGetProducts;

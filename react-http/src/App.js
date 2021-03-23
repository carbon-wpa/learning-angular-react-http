import React, {useEffect, useState} from 'react';
import {getProductsList} from "./Products.service";


function App() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsList()
            .then(items => setProducts(items))
            .catch(error => console.log('error occurred ', error));
    }, []);

    return (
        <>
        {products.map(product => (
            <div key={product.id}>
                <b>{product.name}</b>
                <br /> {product.price} - VAT: {product.vat}
                <br /> {product.createdAt.format('DD-MM-YYYY HH:mm')}
            </div>
        ))}
        </>
    );
}

export default App;

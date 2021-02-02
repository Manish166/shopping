import React from 'react';
import { Row } from 'antd';
import ProductCard from '../../components/productCard';
import products from '../../data/vegetables.json';

const ProductPage = () => {
    return (
        <div>
            <div
                style={{
                    fontSize: 28,
                    fontWeight: '800',
                    marginTop: 40,
                    marginBottom: 40,
                }}
            >
                Vegetables
            </div>
            <Row>
                {products.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            title={product.name}
                            description={product.quantity}
                            price={product.price}
                            pic={product.pic}
                        />
                    );
                })}
            </Row>
        </div>
    );
};

export default ProductPage;

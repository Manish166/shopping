import React from 'react';
import { Card, Button } from 'antd';
const { Meta } = Card;
// eslint-disable-next-line react/prop-types
const ProductCard = ({
    // eslint-disable-next-line react/prop-types
    title = '',
    // eslint-disable-next-line react/prop-types
    description = '',
    // eslint-disable-next-line react/prop-types
    pic = '',
    // eslint-disable-next-line react/prop-types
    price = '',
}) => {
    return (
        <Card
            style={{
                width: 350,
                backgroundColor: 'white',
                margin: 20,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'blue',
            }}
            cover={
                <img
                    alt="example"
                    style={{ width: 350, height: 300, padding: 2 }}
                    src={`${pic}`}
                />
            }
            actions={[
                <Button
                    type="text"
                    style={{
                        fontSize: 20,
                        backgroundColor: 'white',
                        borderTopWidth: 1,
                        borderTopColor: 'blue',
                        borderTopStyle: 'solid',
                        // height: '100%',
                        width: '100%',
                    }}
                    key="addToCart"
                >
                    Add to Cart
                </Button>,
            ]}
        >
            <Meta title={title} description={description} />
            <div>{price}</div>
        </Card>
    );
};

export default ProductCard;

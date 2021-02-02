import React from 'react';
import { Card } from 'antd';
import { EditOutlined } from '@ant-design/icons';
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
                height: 450,
                backgroundColor: 'skyblue',
            }}
            cover={
                <img
                    alt="example"
                    style={{ width: 350, height: 300 }}
                    src={`${pic}`}
                />
            }
        >
            actions=
            {[<EditOutlined key="setting" />]}
            <Meta title={title} description={description} />
            <div>{price}</div>
            <div
                style={{
                    fontSize: 20,
                    border: 1,
                    borderStyle: 'solid',
                    borderColor: 'black',
                    backgroundColor: 'red',
                    height: 50,
                    width: 350,
                    textAlign: 'center',
                    padding: -24,
                }}
            >
                Add to Cart
            </div>
        </Card>
    );
};

export default ProductCard;

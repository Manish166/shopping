import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
// eslint-disable-next-line react/prop-types
const CategoryCard = ({ title = '', description = '', pic = '' }) => {
    console.log('pic', pic);
    return (
        <Card
            style={{
                width: 350,
                height: 400,
                backgroundColor: 'skyblue',
                margin: 30,
            }}
            cover={
                <img
                    alt="example"
                    style={{ width: 350, height: 300 }}
                    src={`${pic}`}
                />
            }
        >
            <Meta title={title} description={description} />
        </Card>
    );
};

export default CategoryCard;

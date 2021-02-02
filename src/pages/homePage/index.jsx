import React from 'react';
import { Row } from 'antd';
import CategoryCard from '../../components/categoryCard';
import promotions from '../../data/promotions.json';
import categories from '../../data/categories.json';

const HomePage = () => {
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
                Welcome to Smart Shopping
            </div>
            <Row>
                {promotions.map((promtion) => {
                    return (
                        <CategoryCard
                            key={promtion.id}
                            title={promtion.title}
                            description={promtion.description}
                            pic={promtion.pic}
                        />
                    );
                })}
            </Row>
            <div
                style={{
                    fontSize: 28,
                    fontWeight: '800',
                    marginTop: 40,
                    marginBottom: 40,
                }}
            >
                Featured product categories
            </div>
            <Row>
                {categories.map((category) => {
                    return (
                        <CategoryCard
                            key={category.id}
                            title={category.title}
                            description={category.description}
                            pic={category.pic}
                        />
                    );
                })}
            </Row>
        </div>
    );
};

export default HomePage;

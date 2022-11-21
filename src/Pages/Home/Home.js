import React from 'react';
import Calander from '../Calander/Calander';
import Content from '../Content/Content';
import Services from '../Serviecs/Services';
import Teams from '../Teams/Teams';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Content></Content>
            <Services></Services>
            <Calander></Calander>
            <Teams></Teams>
        </div>
    );
};

export default Home;
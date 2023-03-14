import React from 'react';
import Contract from '../Contract/Contract';
import Review from '../Reviews/Review';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
            <Review></Review>
            <Contract></Contract>
            <Footer></Footer>
        </div>
    );
};

export default Home;
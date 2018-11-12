import React from 'react';
import Layout from '../components/Layout';
import deadPenguin from '../img/dead-penguin.png';
import deadEagle from '../img/dead-eagle.png';
import logo from '../img/united-logo.svg';

const IndexPage = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">United FC</h1>
            <h3>Probably the best floorball team in Victoria</h3>
            <img src={deadPenguin} alt="dead penguin" title="Victim number 1" />
            <img src={deadEagle} alt="dead eagle" title="Victim number 2" />
            <h4>Our trophies</h4>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

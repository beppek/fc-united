import React from 'react';
import Layout from '../components/Layout';
import latestKill from '../img/dead-penguin.png';

const IndexPage = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">FC United</h1>
            <h3>Probably the best floorball team in Victoria</h3>
            <p>Our latest victim:</p>
            <img src={latestKill} alt="dead penguin" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

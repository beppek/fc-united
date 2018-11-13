import React from 'react';
import { Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Layout from '../components/Layout';
import deadPenguin from '../img/dead-penguin.png';
import deadEagle from '../img/dead-eagle.png';
import logo from '../img/united-logo.svg';

const IndexPage = () => {
  return (
    <Layout>
      <section style={{ height: '100%' }} className="section">
        <div style={{ height: '100%' }} className="container">
          <div style={{ height: '100%' }} className="content">
            <Image centered src={logo} />
            <h3 style={{ textAlign: 'center' }}>
              Probably the best floorball team in Victoria
            </h3>
            <div style={{ position: 'absolute', bottom: '0' }}>
              <Image.Group size="small">
                <Image src={deadPenguin} alt="dead penguin" title="W 8-3" />
                <Image src={deadEagle} alt="dead eagle" title="w 9-8" />
              </Image.Group>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

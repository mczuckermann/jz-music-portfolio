import React from 'react';
import Layout from '../components/Layouts/layout';
import Image from '../components/Image';
import SEO from '../components/SEO';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './index.css';

const IndexPage = () => (
  <Layout>
    <SEO
      description="visibility improvement"
      title="Home"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <h1 className="mainTitle">"Enjoy the tunes."</h1>
    <div
      style={{
        maxWidth: `1000px`,
        marginBottom: `1.45rem`,
      }}
    >
      <Image style={{ borderRadius: 15 }} />
    </div>
  </Layout>
);

export default IndexPage;
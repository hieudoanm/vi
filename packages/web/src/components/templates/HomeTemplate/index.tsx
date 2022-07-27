import Head from 'next/head';
import React from 'react';
import CTA from '../../organisms/CTA';
import Features, { FeaturesProps } from '../../organisms/Features';
import Footer, { FooterProps } from '../../organisms/Footer';
import Hero from '../../organisms/Hero';
import Navbar from '../../organisms/Navbar';

export type HomeTemplateProps = Pick<FeaturesProps, 'features'> &
  Pick<FooterProps, 'pages'>;

const HomeTemplate: React.FC<HomeTemplateProps> = ({ features, pages }) => {
  return (
    <>
      <Head>
        <title>VI</title>
      </Head>
      <Navbar />
      <Hero />
      <Features
        id="features"
        title="Smart money management"
        subtitle="Features"
        features={features}
      />
      <CTA />
      <Footer pages={pages} />
    </>
  );
};

HomeTemplate.displayName = 'HomeTemplate';
HomeTemplate.defaultProps = {};

export default HomeTemplate;

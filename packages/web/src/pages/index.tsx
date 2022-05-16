import type { NextPage } from 'next';
import React from 'react';
import HomeTemplate from '../components/templates/HomeTemplate';

const HomePage: NextPage = () => {
  const features = [
    {
      title: 'Notifications',
      description:
        'Receive budget and spending alerts based on your favorite triggers.',
    },
    {
      title: 'Security',
      description:
        'Your data is always safe with us as we use the latest security protocols.',
    },
    {
      title: 'Automation',
      description:
        'Create smart automated workflows and triggers for your money.',
    },
    {
      title: 'Aggregation',
      description: 'Easily link up to 5 banks to your finance account.',
    },
    {
      title: 'Payments',
      description: 'Send money to friends and family with ease.',
    },
    {
      title: 'Rewards',
      description: 'High interest and rewards for hitting your goals.',
    },
  ];

  const pages = [
    { category: 'Features', links: ['Automation', 'Rewards'] },
    { category: 'Resources', links: ['Compare', 'Blog'] },
    { category: 'Company', links: ['About Us', 'Rewards'] },
    { category: 'Social', links: ['LinkedIn', 'Instagram'] },
  ];

  return <HomeTemplate features={features} pages={pages} />;
};

export default HomePage;

import Head from 'next/head';
import React, { ReactNode } from 'react';
import Container from '@mui/material/Container';
import PageHeader from '../../molecules/PageHeader';
import Appsbar from '../../organisms/Appsbar';

export type AppsTemplateProps = {
  title?: string;
  children?: ReactNode;
};

const AppsTemplate: React.FC<AppsTemplateProps> = ({
  title = '',
  children = <></>,
}) => {
  return (
    <>
      <Head>
        <title>VI - {title}</title>
      </Head>
      <Appsbar appName="VI" />
      <PageHeader title={title} />
      <Container>
        <div className="py-8">{children}</div>
      </Container>
    </>
  );
};

AppsTemplate.displayName = 'AppsTemplate';
AppsTemplate.defaultProps = { title: '', children: <></> };

export default AppsTemplate;

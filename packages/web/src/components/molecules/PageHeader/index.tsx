import React from 'react';
import Container from '@mui/material/Container';

export type PageHeaderProps = { className?: string; title?: string };

export const PageHeader: React.FC<PageHeaderProps> = ({
  title = '',
  children = '',
}) => {
  return (
    <div className="py-12 border-b">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="text-4xl uppercase">{title}</h1>
          {children && <div>{children}</div>}
        </div>
      </Container>
    </div>
  );
};

PageHeader.displayName = 'PageHeader';
PageHeader.defaultProps = { title: '' };

export default PageHeader;

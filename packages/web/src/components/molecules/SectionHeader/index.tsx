import React, { ReactNode } from 'react';

export type SectionHeaderProps = { children?: ReactNode };

const SectionHeader: React.FC<SectionHeaderProps> = ({ children = <></> }) => {
  return (
    <div className="pb-8">
      <h2 className="uppercase text-2xl">{children}</h2>
    </div>
  );
};

SectionHeader.displayName = 'SectionHeader';
SectionHeader.defaultProps = { children: <></> };

export default SectionHeader;

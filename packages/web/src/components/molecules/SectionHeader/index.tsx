import React from 'react';

const SectionHeader: React.FC = ({ children }) => {
  return (
    <div className="pb-8">
      <h2 className="uppercase text-2xl">{children}</h2>
    </div>
  );
};

export default SectionHeader;

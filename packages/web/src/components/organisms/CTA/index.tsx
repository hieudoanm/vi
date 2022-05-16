import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Link from 'next/link';
import React from 'react';

const StyledSection = styled.section`
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`;

const CTA: React.FC = () => {
  return (
    <StyledSection className="bg-cyan-50 py-20">
      <div className="flex flex-col justify-center items-center pt-20 pb-10">
        <h1 className="text-center mx-auto mb-8 text-4xl font-bold">
          Be the first to get the beta
        </h1>
        <Link href="/api/auth/login" passHref>
          <Button type="button" variant="contained" size="large">
            Get early access
          </Button>
        </Link>
        <p className="text-sm font-light pt-4">No credit card required.</p>
      </div>
    </StyledSection>
  );
};

export default CTA;

import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import Link from 'next/link';
import React from 'react';

const StyledImage = styled.div`
  padding-bottom: 100%;
  background-image: url(/hero.png);
`;

const StyledSection = styled.section`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
`;

export type HeroProps = { id: string };

const Hero: React.FC = () => {
  return (
    <StyledSection id="hero" className="bg-cyan-50 pt-40 pb-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-3">
            <p className="mb-4 text-blue-500 font-medium">Personal Finance</p>
            <h1 className="mx-auto mb-8 text-4xl font-bold">
              All your money,
              <br />
              one account
            </h1>
            <h3 className="mb-8 text-2xl">
              We&apos;re building next generation personal finance tools. Sign
              up to get early access.
            </h3>
            <form>
              <div className="flex gap-8 mb-8">
                <TextField
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="Email"
                  className="bg-white border border-blue-500"
                  required
                />
                <Button type="button" variant="contained">
                  Early Access
                </Button>
              </div>
            </form>
            <p>
              Already have a beta account?{' '}
              <Link href="/api/auth/login" passHref>
                <span className="underline text-blue-500 cursor-pointer">
                  Sign in
                </span>
              </Link>
            </p>
          </div>
          <div className="col-span-2">
            <div className="hidden md:block">
              <StyledImage className="w-full bg-cover" />
            </div>
          </div>
        </div>
      </Container>
    </StyledSection>
  );
};

export default Hero;

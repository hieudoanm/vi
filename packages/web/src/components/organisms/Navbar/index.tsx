import { useUser } from '@auth0/nextjs-auth0';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const StyledNavbar = styled.nav`
  background-color: ${({ scrolled }: { scrolled: boolean }) =>
    scrolled ? `white !important` : null};
`;

export const Navbar: React.FC = () => {
  const { isLoading, user } = useUser();
  const [scrolled, setHasScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 32) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  console.log('user', user);

  return (
    <StyledNavbar
      scrolled={scrolled}
      className={`${
        scrolled ? 'shadow md:py-4' : 'md:py-6'
      } py-4 w-full fixed z-10 bg-cyan-50 transition-all`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <div className="font-extrabold tracking-widest text-black">VI</div>
          {!isLoading && (
            <div>
              {!user && (
                <Link href="/api/auth/login" passHref>
                  <Button type="button" variant="contained">
                    Log In
                  </Button>
                </Link>
              )}
              {user && (
                <Link href="/apps" passHref>
                  <Button type="button" variant="contained">
                    Apps
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </Container>
    </StyledNavbar>
  );
};

Navbar.displayName = 'Navbar';
Navbar.defaultProps = {};

export default Navbar;

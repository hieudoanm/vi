import { Container } from '@mui/material';
import React from 'react';

export type Page = {
  category: string;
  links: string[];
};

export type FooterProps = { pages: Page[] };

const Footer: React.FC<FooterProps> = ({ pages = [] }) => {
  return (
    <footer className="bg-white py-20">
      <Container>
        <div className="grid grid-cols-4 gap-8">
          {pages.map(({ category, links }) => {
            return (
              <div key={`category-${category}`}>
                <span className="font-bold">{category}</span>
                <ul className="pt-4">
                  {links.map((link: string, index: number) => {
                    return (
                      <li key={`link-${index}`} className="mb-3">
                        {link}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
      <Container className="pt-12">
        <div className="font-extrabold tracking-widest">VI</div>
      </Container>
    </footer>
  );
};

export default Footer;

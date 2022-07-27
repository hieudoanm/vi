import { useUser } from '@auth0/nextjs-auth0';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import React, { useState } from 'react';

const pages = [
  { href: '/apps/transfer', text: 'Transfer' },
  { href: '/apps/top-up', text: 'Top Up' },
  { href: '/apps/activities', text: 'Activities' },
];

const settings = [
  { href: '/apps/notifications', text: 'Notifications' },
  { href: '/apps/profile', text: 'Profile' },
  { href: '/api/auth/logout', text: 'Log Out' },
];

export type AppsBarProps = {
  appName: string;
};

const AppsBar: React.FC<AppsBarProps> = ({ appName }) => {
  const { isLoading, user } = useUser();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  if (isLoading) {
    return <AppBar position="static"></AppBar>;
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Link href="/apps" passHref>
            <Typography
              variant="h6"
              noWrap
              component="div"
              className="cursor-pointer"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              {appName}
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({ href, text }) => (
                <MenuItem key={href} onClick={handleCloseNavMenu}>
                  <Link href={href} passHref>
                    <Typography textAlign="center">{text}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link href="/apps" passHref>
            <Typography
              variant="h6"
              noWrap
              component="div"
              className="cursor-pointer"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              WALLET
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({ href, text }) => (
              <Link key={href} href={href} passHref>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {text}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={user?.name || ''}
                  src={user?.picture || ''}
                  className="bg-white border-2"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(({ href, text }) => (
                <MenuItem key={href} onClick={handleCloseUserMenu}>
                  <Link href={href} passHref>
                    <Typography textAlign="center">{text}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

AppsBar.displayName = 'AppsBar';
AppsBar.defaultProps = {};

export default AppsBar;

import NextLink from 'next/link';

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { ShoppingCartOutlined, SearchOutlined, MenuOutlined } from '@mui/icons-material';
import { useContext } from 'react';
import { UIContext } from '../../context/ui';

export const Navbar = () => {

    const { openSideMenu } = useContext( UIContext );

    return (
        <AppBar>
            <Toolbar>
                <NextLink href='/' passHref>
                    <Link display='flex' alignItems='center'>
                        <Typography variant='h6'>Wicho García</Typography>
                        {/* <Typography sx={{ ml: 0.5 }}>Fotografía</Typography> */}
                    </Link>
                </NextLink>

                <Box flex={ 1 } />

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <NextLink href='/' passHref>
                        <Link>
                            <Button>Home</Button>
                        </Link>
                    </NextLink>

                    <NextLink href='/photography' passHref>
                        <Link>
                            <Button>Galería</Button>
                        </Link>
                    </NextLink>

                    <NextLink href='/about' passHref>
                        <Link>
                            <Button>Acerca de mí</Button>
                        </Link>
                    </NextLink>

                    {/* <NextLink href='/shop' passHref>
                        <Link>
                            <Button>Shop</Button>
                        </Link>
                    </NextLink> */}

                    <NextLink href='/contact' passHref>
                        <Link>
                            <Button>Contacto</Button>
                        </Link>
                    </NextLink>
                </Box>
                
                
                <Box flex={ 1 } />

                <IconButton>
                    <SearchOutlined />
                </IconButton>

                {/* <NextLink href='/cart' passHref>
                    <Link>
                        <IconButton>
                            <Badge badgeContent={ 2 } color='secondary'>
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink> */}

                <IconButton onClick={ openSideMenu }>
                    <MenuOutlined />
                </IconButton>

                {/* <Button 
                    onClick={ openSideMenu }
                    sx={{ p: 1, m: 1 }}
                >
                    <MenuOutlined />
                </Button> */}

            </Toolbar>
        </AppBar>
    )
}

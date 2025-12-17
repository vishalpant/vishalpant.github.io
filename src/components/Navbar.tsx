import { Link } from 'react-router-dom';
import { portfolio } from '../data/portfolio';
import { AppBar, Toolbar, Typography, Button, Container, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Navbar() {
    return (
        <AppBar position="fixed">
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>

                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography variant="h6" sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                            {portfolio.name}
                        </Typography>
                        <Typography variant="subtitle2" >
                            {portfolio.title}
                        </Typography>
                    </Link>
                    <Box sx={{
                        display: {
                            xs: 'none', md: 'flex'
                        },
                        alignItems: 'center'
                    }}>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        {/* <Button color="inherit" component={Link} to="/projects">Projects</Button> */}
                        <Button color="inherit" component={Link} to="/about">About</Button>
                        <IconButton
                            color="inherit"
                            href={portfolio.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            href={portfolio.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
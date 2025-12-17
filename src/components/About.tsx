import { Box, Container, Typography, Grid, Card, CardContent, IconButton } from "@mui/material";
import { portfolio } from "../data/portfolio";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function About() {
    return (
        <Container maxWidth="md">
            <Box sx={{ paddingTop: 8, paddingBottom: 8 }}>
                <Typography variant="h4" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="h5">
                    Hi! I'm a {portfolio.title}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 2, whiteSpace: 'pre-line' }}>
                    {portfolio.description}
                </Typography>
                <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>
                    Skills
                </Typography>
                <Grid container spacing={2}>
                    {Object.keys(portfolio.skills).map((skill: string) => (
                        <Grid size={{ md: 2.2}} key={skill}>
                            <Card sx={{
                                width: 150,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s, color 0.3s',
                                color: 'primary.main',
                                border: '1px solid',
                                borderColor: 'primary.main',
                                borderRadius: '10px',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                                    backgroundColor: 'primary.main',
                                    color: 'secondary.main',
                                }
                            }}>
                                <CardContent>
                                    {portfolio.skills[skill as keyof typeof portfolio.skills].icon && (
                                        <img src={portfolio.skills[skill as keyof typeof portfolio.skills].icon} alt={skill} width="40" height="40" style={{ display: 'block', margin: '0 auto 10px' }} />
                                    )}
                                    <Typography variant="h6" align="center">
                                        {skill}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>
                    Contact
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 2, whiteSpace: 'pre-line' }}>
                    Want to get in touch? Here are my handles where you can reach out.
                </Typography>
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
        </Container>
    )
}
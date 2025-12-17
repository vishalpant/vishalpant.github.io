import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Fade, Button } from '@mui/material';
import { portfolio } from "../data/portfolio";
import { fetchGreetings } from '../services/greetings';

export default function Home() {
    const [greetings, setGreetings] = useState(["Hello"]);
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [showGreeting, setShowGreeting] = useState(true);
    const greetingsFetched = useRef(false);

    useEffect(() => {
        if (greetingsFetched.current) return;
        greetingsFetched.current = true;
        const loadGreetings = async () => {
            const fetchedGreetings = await fetchGreetings();
            setGreetings(fetchedGreetings);
        };
        loadGreetings();
    }, []);

    useEffect(() => {
        if (greetings.length > 1) {
            const getNextRandomIndex = (currentIndex: number, total: number) => {
                let nextIndex;
                do {
                    nextIndex = Math.floor(Math.random() * total);
                } while (nextIndex === currentIndex);
                return nextIndex;
            };

            const interval = setInterval(() => {
                setShowGreeting(false);
                setTimeout(() => {
                    setGreetingIndex(prevIndex => getNextRandomIndex(prevIndex, greetings.length));
                    setShowGreeting(true);
                }, 500); // Time for fade out
            }, 2000); // Time each greeting is shown

            return () => clearInterval(interval);
        }
    }, [greetings]);

    const skills = Object.entries(portfolio.skills);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'calc(100vh - 64px)', // Adjust height considering the AppBar
                textAlign: 'center'
            }}
        >
            <Fade in={showGreeting} timeout={500}>
                <Typography variant="h4">
                    {greetings[greetingIndex]}
                </Typography>
            </Fade>
            <Typography variant="h2" sx={{ mt: 2, color: 'primary.main' }}>
                I'm {portfolio.firstName}
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
                {portfolio.title}
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2, maxWidth: 'md' }}>
                {portfolio.bio}
            </Typography>
            <Typography variant="h4" sx={{ mt: 4, maxWidth: 'md' }}>
                You can reach out to me for
            </Typography>
            <Box
                sx={{
                    overflow: 'hidden',
                    width: '80%',
                    mt: 2,
                    '& .scrolling-wrapper': {
                        display: 'flex',
                        animation: 'scroll 30s linear infinite',
                    },
                    '@keyframes scroll': {
                        '0%': { transform: 'translateX(0)' },
                        '100%': { transform: `translateX(-${skills.length * 100}px)` },
                    },
                }}
            >
                <Box className="scrolling-wrapper">
                    {skills.concat(skills).map(([skill, data], index) => (
                        <Box key={`${skill}-${index}`} sx={{ mx: 2, textAlign: 'center', flexShrink: 0, width: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={data.icon} alt={skill} width="50" height="50" />
                            <Typography variant="caption">{skill}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Typography variant="h4" sx={{ mt: 4, maxWidth: 'md' }}>
                Want to know more?
            </Typography>
            <Button
                variant="contained"
                href="/about"
                rel="noopener noreferrer"
                sx={{ mt: 4 }}
            >
                About Me
            </Button>
        </Box>
    );
}
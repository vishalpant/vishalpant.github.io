import { Box, Typography } from '@mui/material';

export default function NotFound() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '50vh',
            }}
        >
            <Typography variant="h1" component="h1" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" component="h2">
                Page Not Found
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
                The page you are looking for does not exist.
            </Typography>
        </Box>
    );
}

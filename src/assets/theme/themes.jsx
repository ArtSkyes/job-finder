import { Padding, RoundedCorner } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';

const themes = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
        h4: { fontWeight: 600 },
        h6: { fontWeight: 600 },
        title: { fontWeight: 600 },
        h8: { paddingBottom: '10px' },
    },
    button: {
        fontFamily: 'Poppins, sans-serif',
        navbar: { fontSize: '30px' },
        contained: { RoundedCorner: '50px' },
    },
});

export default themes;
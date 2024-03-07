import { ReactNode } from 'react'
import { ThemeProvider, createTheme, type PaletteMode } from '@mui/material';

const lightTheme = createTheme({
    palette: {
        mode: 'light'
    }
})

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
})

interface ThemeProps {
    children: ReactNode;
    paletteMode: PaletteMode
}

const Theme = (props: ThemeProps) => {
    const { children, paletteMode } = props;

    const theme = paletteMode === 'light' ? lightTheme : darkTheme

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Theme

import { useState } from 'react'
import { Box, Container, Stack, type PaletteMode } from '@mui/material';
import Theme from './theme'
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import SchemaForm from "./SchemaForm.tsx";

function App() {
    const [paletteMode, setPaletteMode] = useState<PaletteMode>('dark')

    return (
        <Theme paletteMode={paletteMode}>
            <Box bgcolor="background.default" height="100vh" width="100vw" paddingY={5}>
                <Container>
                    <ThemeSwitcher onChange={setPaletteMode}/>

                    <br/>
                    <br/>
                    <br/>

                    {SchemaForm}
                </Container>
            </Box>
        </Theme>
    )
}

export default App

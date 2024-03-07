import { useState } from 'react'
import { InputLabel, Select, MenuItem, type PaletteMode, type SelectChangeEvent } from '@mui/material';

interface ThemeSwitcherProps {
    onChange: (paletteMode: PaletteMode) => void
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { onChange } = props
    const [paletteMode, setPaletteMode] = useState<PaletteMode>('dark')

    const handleThemeChange = (e: SelectChangeEvent<PaletteMode>) => {
        const paletteMode = e.target.value as PaletteMode

        setPaletteMode(paletteMode)
        onChange(paletteMode)
    }

    return (
        <>
            <InputLabel>Theme</InputLabel>
            <Select onChange={handleThemeChange} value={paletteMode}>
                <MenuItem value="light">🌞 Light</MenuItem>
                <MenuItem value="dark">🌚 Dark</MenuItem>
            </Select>
        </>
    )
}

export default ThemeSwitcher

import React from 'react';
import { Box, Divider, Stack } from '@mui/material';

export default function FooterSection() {

    return (
        <Box sx={{ position: 'fixed', backgroundColor: 'white', bottom: 0, width: "100%", display: "flex", justifyContent: "center" }}>
            <Stack direction="row" spacing={1}>
                <Box>
                    <a target="_blank" href="https://icons8.com/icon/PlAwvlTCxkgY/wood-log">Wood Log</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ mr: '-1px' }} />
                <Box>
                    <a target="_blank" href="https://icons8.com/icon/60374/iron-ore">ore</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ mr: '-1px' }} />
                <Box>
                    <a target="_blank" href="https://icons8.com/icon/18108/wheat">Wheat</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ mr: '-1px' }} />
                <Box>
                    <a target="_blank" href="https://icons8.com/icon/53914/topaz">Topaz</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ mr: '-1px' }} />
                <Box>
                    <a target="_blank" href="https://icons8.com/icon/52862/ruby">Ruby</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ mr: '-1px' }} />
                <Box>
                    <a target="_blank" href="https://icons8.com/icon/53913/diamond">Diamond</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ mr: '-1px' }} />
                <Box>
                    <a target="_blank" href="https://icons8.com/icon/60370/bronze-ore">Bronze Ore</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ mr: '-1px' }} />
                <Box>
                    <a target="_blank" href="https://icons8.com/icon/62470/stone-inscription">Stone Inscription</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ mr: '-1px' }} />
                <Box>
                    <a target="_blank" href="https://icons8.com/icon/q53th37bGbV0/obsidian">Obsidian</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ mr: '-1px' }} />
                <Box>
                    <a target="_blank" href="https://icons8.com/icon/Dlb6SlP0ZeAN/mana">Mana</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                </Box>
            </Stack>
        </Box>
    )
}
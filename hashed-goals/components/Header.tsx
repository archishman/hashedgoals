import React, { useEffect, useRef, useState, KeyboardEvent } from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';

// custom
import Layout from './Layout';

export default function Header() {
    return (
        <Layout.Header>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1.5,
                }}
            >
                <IconButton
                    variant="outlined"
                    size="sm"
                    sx={{ display: { sm: 'none' } }}
                >

                </IconButton>


                <Typography component="h1" fontWeight="xl">
                    Hashed Goals
                </Typography>
            </Box>
        </Layout.Header>

    )
}


import * as React from 'react';
import Box, { BoxProps } from '@mui/joy/Box';
function Root(props: BoxProps) {
    return (
        <Box
            {...props}
            sx={[
                {
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'minmax(64px, 200px) minmax(450px, 1fr)',
                        md: 'minmax(160px, 300px) minmax(300px, 500px) minmax(500px, 1fr)',
                    },
                    gridTemplateRows: '64px 1fr',
                    minHeight: '100vh',
                    bgcolor: 'background.body',
                },
                ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
            ]}
        />
    );
}

function Header(props: BoxProps) {
    return (
        <Box
            component="header"
            className="Header"
            {...props}
            sx={[
                {
                    p: 2,
                    gap: 2,
                    bgcolor: 'background.surface',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gridColumn: '1 / -1',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1100,
                },
                ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
            ]}
        />
    );
}

function Main(props: BoxProps) {
    return (
        <Box
            component="main"
            className="Main"
            {...props}
            sx={[
                {
                    p: 2,
                    display: 'flex',           // Enable Flexbox
                    width: '100vw',             // Set width to 100% of the parent container
                    flexDirection: 'column'
                },
                ...(Array.isArray(props.sx) ? props.sx : [props.sx])
            ]}
        />
    );
}



const components = {
    Root,
    Header,
    Main,
};

export default components;

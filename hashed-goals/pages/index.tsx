import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button'; // Import Button
import CryptoJS from 'crypto-js';
import ContentCopyIcon from '@mui/icons-material/ContentCopy'; // Import the icon
import Grid from '@mui/joy/Grid'; // Import Grid component

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [hashedText, setHashedText] = useState('');

  const handleInputChange = (event: { target: { value: any; }; }) => {
    const text = event.target.value;
    setInputText(text);
    const hash = CryptoJS.MD5(text).toString();
    setHashedText(hash);
  };

  const shareToTwitter = () => {
    const message = `Just made a promise to myself, and this MD5 hash: ${hashedText} is my secret goal! I'll share what it was when I nail it. Stay tuned! #HashedGoals`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(twitterUrl, '_blank');
  };

  const downloadPlainText = () => {
    const blob = new Blob([inputText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'MySecretGoal.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    const message = `Just made a promise to myself, and this MD5 hash: ${hashedText} is my secret goal! I'll share what it was when I nail it. Stay tuned! #HashedGoals`;
    navigator.clipboard.writeText(message).then(() => {
      // You can provide user feedback here, e.g., show a toast message
    });
  };

  const buttonStyle = {
    height: '40px', // Example height, adjust as needed
    borderRadius: '8px',
    width: '100%',
    pt: 3,
    pb: 3
  };

  return (
    <>
      <Head>
        <title>Hashed Goals</title>
      </Head>
      <Layout.Root>
        <Header />
        <Layout.Main>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 4 }}>
            <Typography level="h4" component="h1" textAlign="center" fontWeight="lg" sx={{ mb: 2 }}>
              Commit to your goals without revealing them!
            </Typography>
            <Typography level="body-sm" display="block" sx={{ mb: 2, maxWidth: '500px' }}>
              A hash is a unique fingerprint for your secret goal. It is almost basically to guess the secret goal from the hash.
              But, once you reveal your goal, anyonce can verify that its hash matches what you published.
              This proves your commitment to the goal without revealing it.
            </Typography>
            <Typography level="body-md" display="block" sx={{ mb: 2, maxWidth: '500px' }}>
              Make sure to save your secret goal to publish later!
            </Typography>
            <Textarea
              placeholder="e.g. I ran my first half-marathon."
              value={inputText}
              onChange={handleInputChange}
              sx={{ width: '100%', maxWidth: '500px', borderRadius: '8px', p: 2, mb: 2 }}
            />
            {inputText && (
              <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: '500px', mb: 2 }}>
                <Typography textAlign="left" sx={{ flexGrow: 1, fontFamily: 'monospace' }}>
                  Hashed goal: {hashedText}
                </Typography>
                <IconButton
                  variant="outlined"
                  size="sm"
                  onClick={copyToClipboard}
                  sx={{ display: { sm: 'none' } }}
                >
                  <ContentCopyIcon />
                </IconButton>

              </Box>
            )}
            {!inputText && (
              <Typography textAlign="left" sx={{ alignSelf: 'flex-start', ml: 'auto', mr: 'auto', maxWidth: '500px' }}>
                Enter a goal to see its commitment hash.
              </Typography>
            )}
            <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '500px' }}>


              <Grid container spacing={2} sx={{ maxWidth: '500px', width: '100%', mt: 2 }}>
                <Grid xs={4}>
                  <Button sx={buttonStyle} onClick={shareToTwitter}>
                    Share to Twitter
                  </Button>
                </Grid>
                <Grid xs={4}>
                  <Button sx={buttonStyle} onClick={copyToClipboard}>
                    Copy commitment
                  </Button>
                </Grid>
                <Grid xs={4}>
                  <Button sx={buttonStyle} onClick={downloadPlainText}>
                    Save Secret Goal
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Layout.Main>
      </Layout.Root>

    </>
  );
}

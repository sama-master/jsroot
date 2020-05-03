import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Color() {
  return (
    <Typography component="div" variant="body1">
      <Box bgcolor="primary.main">primary.main</Box>
      <Box bgcolor="secondary.main">secondary.main</Box>
      <Box bgcolor="error.main">error.main</Box>
      <Box bgcolor="warning.main">warning.main</Box>
      <Box bgcolor="info.main">info.main</Box>
      <Box bgcolor="success.main">success.main</Box>
      <Box bgcolor="text.primary">0</Box>
      <Box bgcolor="text.secondary">0</Box>
      <Box bgcolor="text.disabled">0</Box>
    </Typography>
  );
}
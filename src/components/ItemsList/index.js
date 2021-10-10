import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import * as mock from '../../__mocks__'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ margin: 'auto', marginTop: 30, width: '80%' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {mock.data.map((item, index) => (
          <Grid item xs={4} sm={1} md={2} key={index}>
            <Item>{item.data.title}</Item>
            <Item>{item.data.description}</Item>
            <Item>{item.data.image}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
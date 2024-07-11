import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, styled } from '@mui/material';
import { CustomCard, } from '../Custom/Custom';


const CustomCardComponent = () => (
  <CustomCard>
    <CardContent>
      <Typography variant="h5" component="div">
        Custom Card
      </Typography>
      <Typography variant="body2" color="text.secondary">
        This is a custom-styled card component with an increased box shadow.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </CustomCard>
);

export default CustomCardComponent;

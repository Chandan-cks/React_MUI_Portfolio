import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function Award({award}) {

    return (
            <Grid item xs={10}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/Web.png"
                        alt="Intenship"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           {award.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {award.desc}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">See More</Button>
                    </CardActions>
                </Card>
       
            </Grid>
    );
}
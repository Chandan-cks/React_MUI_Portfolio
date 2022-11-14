import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Textfield from '@mui/material/TextField';
import Award from './award/award';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';


function createData(Qualification, Board, Year, Percentage) {
    return { Qualification, Board, Year, Percentage,};
  }
const rows = [
    createData('B.Tech', 'Trident Academy of Technology', '2016-20', '70%'),
    createData('HSE', 'Banamalipur Junior Science college', '2014-16', '55%'),
    createData('SSC', 'Kushavadra High school', '2013-14', '60%')
  ];

function data(name,desc){
    return{name,desc};
}
const award=[
    data('Full Stack Web Development','description'),
    data('Full  Web Development','description 2'),
    data('Full Stack  Development','description 3'),
];
export default function App() {
  return (
    <>
     <Grid container spacing={12}>
        <Grid item xs={4}>
                <Stack direction="row" spacing={2}>
                <Avatar alt="Chandan" sx={{ width: 200, height: 200 }} src="/IMG-20220812-WA0007.jpg" />
                </Stack>
        </Grid>
        <Grid item xs={4}>
            <Box sx={{ width: '100%', maxWidth: 500, flexGrow: 1 }} >
            <Typography variant="h6">
                Name:-Chandan Kumar Sahoo
            </Typography>
            <Typography variant="h6">
                Age:-24
            </Typography>      
            <Typography variant="h6">
                Email:-chandu.sahoo99@gmail.com
            </Typography>   
            <Typography variant="h6">
                Mobile:7438092177
            </Typography>   
            <Typography variant="h6">
                Address:-Bhubaneswar, Khordha, Odisha
            </Typography>
            </Box>
        </Grid>
    </Grid>
        <Typography variant="h4" marginTop={5}>
            Education:-
        </Typography>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Qualification</TableCell>
                    <TableCell align="left">Board</TableCell>
                    <TableCell align="right">Year&nbsp;(g)</TableCell>
                    <TableCell align="right">Percentage&nbsp;(g)</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.Qualification}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.Qualification}
                    </TableCell>
                    <TableCell align="left">{row.Board}</TableCell>
                    <TableCell align="right">{row.Year}</TableCell>
                    <TableCell align="right">{row.Percentage}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>

        <Typography variant="h4" marginTop={5}>
            Award:-
        </Typography>
                <Grid container>
                {award.map((award) => (
                    <Grid item xs={4}>
                        <Award award={award}/>
                    </Grid>
                ))} 
                </Grid>

        <Grid container>
            <Grid item xs={12}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4">
                        Your details
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Textfield
                        name="firstName"
                        label="First Name"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Textfield
                        name="email"
                        label="Email"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Textfield
                        name="phone"
                        label="Phone"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Textfield
                        name="message"
                        label="Message"
                        multiline={true}
                        rows={4}
                        />
                    </Grid>
                    <Grid item xs={12} marginLeft={50}>
                        <Button variant="outlined">
                        Submit Form
                        </Button>
                    </Grid>
                    </Grid>
              
            </Grid>
        </Grid>
    </>
  );
}

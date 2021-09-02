
import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    td: {
        // flexGrow: 1,
        textAlign: "right",
        padding: theme.spacing(2),


    },
    root:{
        background: "light",
    borderRadius: 3,
    border: 0,
    color: 'white',
    // height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

    },
    paper: {
       
        color:"white",
        backgroundColor: "black"
    },
    control: {
        padding: theme.spacing(2),
    },
}));
function mapStateToProps(state) {
    return {
        coins: state.coins,
        open:state.Grid,
    };

}
export default connect(mapStateToProps)(function Task(props) {
    const { coins } = props;
    const classes = useStyles();

    return (

        <div>
       <div> <Button type="text" variant="outlined" color="primary" color="lightblue">Karaken markets</Button></div>
            
            
             { coins.map((item) => (
                 <>
                         <Paper className={classes.paper}>
          
                     <Grid container  spacing={0}>
                         <Grid item l={0}>
                        
                                 <img style={{ width: "50%" }} src={item.icon} alt=''></img>{item.typeOfCoin1}
                         </Grid>
                     </Grid>
                     <task style={{ color: "white" }}>
                         {item.Range.map((item) => (
                              <tr>
                                 <td  m={2} >  {item.nameOfCoin}</td> 
                                 <td className={classes.td}>{item.price}</td>
                                 <td style={{ color: item.Percent>0 ? "green" : "red", textAlign: "center" }}>{item.Percent}</td>
                                 <td >{item.numberOfIntres}</td>
                                 <td  style={{ color: item.star ? "yellow" : "white" }}>  <StarIcon /></td>
 
                             </tr>
                         ))}</task> 
                                 </Paper>
                 </>
                 
             ))}
         </div>
     )
 }
 )
 
 


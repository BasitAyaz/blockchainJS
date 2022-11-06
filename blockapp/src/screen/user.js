import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation,useParams } from "react-router-dom";


function User() {
  const location = useLocation();
  const [obj, setobj] = useState({});
  const params = useParams()

  const [count, setCount] = useState(0);

  let getData = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((data) => {
        console.log(data);
        setobj(data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    console.log(params)
    getData(params.id)
  }, []);

  return (
    <>
      <Box>
        <Box
          sx={{
            backgroundColor: "lightcyan",
            boxShadow: "0 5px 10px rgba(0,0,0,.6)",
          }}
        >
          <Typography variant="h3">{obj.name}</Typography>
        </Box>
        <Box sx={{padding:5}}>
          <Grid container>
            <Grid item>
                <Typography variant="h5">Email: {obj.email}</Typography>
                <Typography variant="h5">Phone: {obj.phone}</Typography>
                <Typography variant="h5">User Name: {obj.username}</Typography>
                <Typography variant="h5">Website: <a href={`${obj.website}`}>{obj.website}</a> </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
export default User;





let questions = [
    {
        question:'ABC',
        options:[1,2,3,4],
        correctAns:2
    },
    {
        question:'ABC',
        options:[1,2,3,4],
        correctAns:2
    },
    {
        question:'ABC',
        options:[1,2,3,4],
        correctAns:2
    },
    {
        question:'ABC',
        options:[1,2,3,4],
        correctAns:2
    },
    {
        question:'ABC',
        options:[1,2,3,4],
        correctAns:2
    },
    {
        question:'ABC',
        options:[1,2,3,4],
        correctAns:2
    },
    {
        question:'ABC',
        options:[1,2,3,4],
        correctAns:2
    },
]





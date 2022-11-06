import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function APIs() {
  const [listData, setListData] = useState([]);

  const navigate = useNavigate()

  let getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        console.log(data);
        setListData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let moveToUser = (e)=>{
    navigate(`/user/${e.id}`)
  }
  return (
    <>
      <Typography variant="h3">APIs </Typography>

      <Button onClick={getData} variant="contained">
        Get Data
      </Button>

      <Box sx={{ padding: 5 }}>
        {Array.isArray(listData) && listData.length > 0 ? (
          listData.map((x, i) => (
            <Box key={i}
              sx={{
                backgroundColor: "lightcyan",
                padding: 5,
                margin: 5,
                boxShadow: "0 10px 15px rgba(0,0,0,.2)",
              }}
            >
              <Typography >{x.name}</Typography>
              <Button onClick={()=>moveToUser(x)} variant="contained">Read More</Button>
            </Box>
          ))
        ) : (
          <Typography>No Data Found</Typography>
        )}
      </Box>
    </>
  );
}
export default APIs;

import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "./MovieCard.module.css";
import { Information } from "./JSONData/Information";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const MovieCard = () => {
  const [info, setInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("*");
  const [page, setPage] = React.useState(1);
  const [showItems, setShowItems] = useState(0);

  const handlePageChange = (event, value) => {
    setPage(value);
    if (page == 1) {
      setShowItems(page * 0);
    } else {
      setShowItems(value * 20);
    }
  };
  const inputHandler = (e) => {
    let vals = e.target.value;
    setSearchText(vals);
    // fetch(`https://images-api.nasa.gov/search?q=${searchText}`)
    // .then(res=>res.json())
    // .then(datas=>{console.log(datas);setQuery(datas)});
    console.log(vals);
  };
  const onSearchButtonHandler = async () => {
    // setIsLoading(true);
    // axios
    //   .get(
    //     `https://d3dyfaf3iutrxo.cloudfront.net/general/upload/8cc907c1bb9b404e8cb181825938fc23-data.json`
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     setInfo(res.data);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => console.log(err))
    //   .finally(() => setIsLoading(false));
    const a = true;
  };

  return (
    <>
      <div className={`mt-1 ml-5 ${styles.gridContainer}`}>
        {Information.slice(showItems, showItems + 20).map((dataVals, index) => {
          return (
            <>
              {/* <h1>{dataVals.Title}</h1> */}
              {/* <Card
                sx={{ maxWidth: 300 }}
                key={index}
                elevation="24"
                className={`mt-3 ${styles.gridItem}`}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="350"
                    //image={info.collection.items[0].links[0].href}
                    image={dataVals.Poster}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {dataVals.Title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card> */}

              <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                // ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                className={`mt-3 ${styles.gridItem}`}
                style={{ width: "300", height: "400" }} /// these are optional style, it is not necessary
              >
                <FrontSide
                  style={{
                    backgroundColor: "#444",
                    color: "#FFD700"
                  }}
                >
                   <img src = {dataVals.Poster} height = "auto" width = "300" /> <br />
                  {dataVals.Title}
                </FrontSide>
                <BackSide style={{ backgroundColor: "#222",color:"#FFD700" }}>
                  <div>
                      <div>Released on: {dataVals.Released} Rated : {dataVals.Rated}</div><br />
                      <div>Cast: {dataVals.Actors}</div><br />
                      <span>Plot :{dataVals.Plot}</span>
                        <br />
                      <span>Rating :{dataVals.Ratings[0].Source}:⭐{dataVals.Ratings[0].Value}</span>
                      
                  </div>
                </BackSide>
              </Flippy>
            </>
          );
        })}
      </div>
      <div className={styles.Header}>
        <Stack spacing={2}>
          <Typography>
            Page: {page} please Double click on below Page to display content
          </Typography>
          <Pagination count={24} page={page} onChange={handlePageChange} style = {{backgroundColor:"#FFD700"}}/>
        </Stack>
      </div>
    </>
  );
};

export default MovieCard;

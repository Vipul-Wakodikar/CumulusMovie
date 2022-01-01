import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import styles from "./MovieCard.module.css";
// import { Information } from "./JSONData/Information";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { changeCategories, changeVals } from "./Header/changeVals";
import Header from "./Header/Header";
import { List, Paper } from "@mui/material";
const MovieCard = () => {
  const [Information, setInformation] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = React.useState(1);
  const [showItems, setShowItems] = useState(0);
  const [category, setCategory] = useState("Title");
  const handlePageChange = (event, value) => {
    setPage(value);
    if (page == 1) {
      setShowItems(page * 0);
    } else {
      setShowItems(value * 20);
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://d3dyfaf3iutrxo.cloudfront.net/general/upload/8cc907c1bb9b404e8cb181825938fc23-data.json`,
        {
          method: "GET",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res.data);
        setInformation(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <changeVals.Provider value={{ searchText, setSearchText }}>
        <changeCategories.Provider value={{ category, setCategory }}>
          <Header />
        </changeCategories.Provider>
      </changeVals.Provider>
      <div>Searched text is: {searchText}</div>
      <div className={`mt-1 ml-5 ${styles.gridContainer}`}>
        {searchText.length > 0 ? (
          <>
            {isLoading ? (
              <h1>Loading</h1>
            ) : (
              <>
                {Information.map((dataVals) => {
                  return (
                    <>
                      {category === "Title" &&
                        dataVals.Title.includes(searchText) && (
                          <Flippy
                            flipOnHover={false} // default false
                            flipOnClick={true} // default false
                            flipDirection="horizontal" // horizontal or vertical
                            className={`mt-3 ${styles.gridItem}`}
                            style={{ maxWidth: "300", height: "400" }} /// these are optional style, it is not necessary
                          >
                            <FrontSide
                              style={{
                                backgroundColor: "#444",
                                color: "#FFD700",
                              }}
                            >
                              <img
                                src={dataVals.Poster}
                                height="auto"
                                width="auto"
                              />
                              <div className={styles.movieTitle}>
                                {dataVals.Title}
                              </div>
                            </FrontSide>
                            <BackSide
                              style={{
                                backgroundColor: "#222",
                                color: "#FFD700",
                              }}
                            >
                              <div>
                                <div>
                                  Released on: {dataVals.Released} Rated :{" "}
                                  {dataVals.Rated}
                                </div>
                                <br />
                                {dataVals.Ratings.map((newData) => {
                                  return (
                                    <>
                                      <span>
                                        {newData.Source}⭐{newData.Value}
                                      </span>
                                      <br />
                                    </>
                                  );
                                })}
                                <br />
                                <div>Genre: {dataVals.Genre}</div>
                                <br />
                                <div>Cast: {dataVals.Actors}</div>
                                <br />
                                <span>Plot :{dataVals.Plot}</span>
                                <br />
                              </div>
                            </BackSide>
                          </Flippy>
                        )}
                      {/* Genre */}
                      {category === "Genre" &&
                        dataVals.Genre.includes(searchText) && (
                          <Flippy
                            flipOnHover={false} // default false
                            flipOnClick={true} // default false
                            flipDirection="horizontal" // horizontal or vertical
                            className={`mt-3 ${styles.gridItem}`}
                            style={{ maxWidth: "300", height: "400" }} /// these are optional style, it is not necessary
                          >
                            <FrontSide
                              style={{
                                backgroundColor: "#444",
                                color: "#FFD700",
                              }}
                            >
                              <img
                                src={dataVals.Poster}
                                height="auto"
                                width="auto"
                              />
                              <div className={styles.movieTitle}>
                                {dataVals.Title}
                              </div>
                            </FrontSide>
                            <BackSide
                              style={{
                                backgroundColor: "#222",
                                color: "#FFD700",
                              }}
                            >
                              <div>
                                <div>
                                  Released on: {dataVals.Released} Rated :{" "}
                                  {dataVals.Rated}
                                </div>
                                <br />
                                {dataVals.Ratings.map((newData) => {
                                  return (
                                    <>
                                      <span>
                                        {newData.Source}⭐{newData.Value}
                                      </span>
                                      <br />
                                    </>
                                  );
                                })}
                                <br />
                                <div>Genre: {dataVals.Genre}</div>
                                <br />
                                <div>Cast: {dataVals.Actors}</div>
                                <br />
                                <span>Plot :{dataVals.Plot}</span>
                                <br />
                              </div>
                            </BackSide>
                          </Flippy>
                        )}
                    </>
                  );
                })}
              </>
            )}
          </>
        ) : (
          <>
            {isLoading ? (
              <h1>Loading</h1>
            ) : (
              <>
                {Information.slice(showItems, showItems + 20).map(
                  (dataVals, index) => {
                    return (
                      <>
                        <Flippy
                          flipOnHover={false} // default false
                          flipOnClick={true} // default false
                          flipDirection="horizontal" // horizontal or vertical
                          className={`mt-3 ${styles.gridItem}`}
                          style={{ maxWidth: "300", height: "400" }} /// these are optional style, it is not necessary
                        >
                          <FrontSide
                            style={{
                              backgroundColor: "#444",
                              color: "#FFD700",
                            }}
                          >
                            <img
                              src={dataVals.Poster}
                              height="auto"
                              width="auto"
                            />
                            <div className={styles.movieTitle}>
                              {dataVals.Title}
                            </div>
                          </FrontSide>
                          <BackSide
                            style={{
                              backgroundColor: "#222",
                              color: "#FFD700",
                            }}
                          >
                            <div>
                              <div>
                                Released on: {dataVals.Released} Rated :{" "}
                                {dataVals.Rated}
                              </div>
                              <br />
                              {dataVals.Ratings.map((newData) => {
                                return (
                                  <>
                                    <span>
                                      {newData.Source}⭐{newData.Value}
                                    </span>
                                    <br />
                                  </>
                                );
                              })}
                              <br />
                              <div>Genre: {dataVals.Genre}</div>
                              <br />
                              <div>Cast: {dataVals.Actors}</div>
                              <br />
                              <span>Plot :{dataVals.Plot}</span>
                              <br />
                            </div>
                          </BackSide>
                        </Flippy>
                      </>
                    );
                  }
                )}
              </>
            )}
          </>
        )}
      </div>
      <div className={styles.Header}>
        <Stack spacing={2}>
          <Typography>
            Page: {page} please Double click on below Page to display content
          </Typography>
          <Pagination
            count={24}
            page={page}
            onChange={handlePageChange}
            style={{ backgroundColor: "#FFD700" }}
          />
        </Stack>
      </div>
    </>
  );
};

export default MovieCard;

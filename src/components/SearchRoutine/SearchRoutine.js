import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";

const SearchRoutine = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1
    }/${current.getFullYear()}`;
  // F6F4FF
  return (
    <MainLayout>
      <form className=" ">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500      "
            placeholder="Search Your Routine..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={3}>
          <Grid item md={3} xs={12}>
            <Card sx={{ maxWidth: 370, backgroundColor: "#F6F4FF" }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="body1" component="div">
                    <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                      Institute: </span>

                    <span style={{ color: "#1A55AF" }}>
                      National University
                    </span>
                  </Typography>
                  <Grid container>
                    <Grid item md={6} xs={6}>
                      <Typography gutterBottom variant="body1" component="div">
                        <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                          Semester:
                        </span>
                        <span style={{ color: "#1A55AF" }}> 6th</span>
                      </Typography>
                    </Grid>
                    <Grid item md={6} xs={6}>
                      <Typography gutterBottom variant="body1" component="div">
                        <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                          Dept:
                        </span>
                        <span style={{ color: "#1A55AF" }}> CSE</span>
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item md={6} xs={6}>
                      <Typography gutterBottom variant="body1" component="div">
                        <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                          Total Class:
                        </span>
                        <span style={{ color: "#1A55AF" }}> 6</span>
                      </Typography>
                    </Grid>
                    <Grid item md={6} xs={6}>
                      <Typography gutterBottom variant="body1" component="div">
                        <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                          Date:
                        </span>
                        <span style={{ color: "#1A55AF" }}> {date}</span>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography gutterBottom variant="body1" component="div">
                    <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                      Routine uses:
                    </span>
                    <span style={{ color: "#1A55AF" }}> 120 users</span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions disableSpacing>
                <Button
                  size="small"
                  color="secondary"
                  sx={{ marginLeft: "auto" }}
                >
                  Checkout
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card sx={{ maxWidth: 370, backgroundColor: "#EDF6FF" }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="body1" component="div">
                    <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                      Institute: </span>

                    <span style={{ color: "#1A55AF" }}>
                      National University
                    </span>
                  </Typography>
                  <Grid container>
                    <Grid item md={6} xs={6}>
                      <Typography gutterBottom variant="body1" component="div">
                        <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                          Semester:
                        </span>
                        <span style={{ color: "#1A55AF" }}> 6th</span>
                      </Typography>
                    </Grid>
                    <Grid item md={6} xs={6}>
                      <Typography gutterBottom variant="body1" component="div">
                        <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                          Dept:
                        </span>
                        <span style={{ color: "#1A55AF" }}> CSE</span>
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item md={6} xs={6}>
                      <Typography gutterBottom variant="body1" component="div">
                        <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                          Total Class:
                        </span>
                        <span style={{ color: "#1A55AF" }}> 6</span>
                      </Typography>
                    </Grid>
                    <Grid item md={6} xs={6}>
                      <Typography gutterBottom variant="body1" component="div">
                        <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                          Date:
                        </span>
                        <span style={{ color: "#1A55AF" }}> {date}</span>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography gutterBottom variant="body1" component="div">
                    <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                      Routine uses:
                    </span>
                    <span style={{ color: "#1A55AF" }}> 120 users</span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions disableSpacing>
                <Button
                  size="small"
                  color="secondary"
                  sx={{ marginLeft: "auto" }}
                >
                  Checkout
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card sx={{ maxWidth: 370, backgroundColor: "#FFECE7" }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="body1" component="div">
                    <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                      Institute: </span>

                    <span style={{ color: "#1A55AF" }}>
                      National University
                    </span>
                  </Typography>
                  <Grid container>
                    <Grid item md={6} xs={6}>
                      <Typography gutterBottom variant="body1" component="div">
                        <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                          Semester:
                        </span>
                        <span style={{ color: "#1A55AF" }}> 6th</span>
                      </Typography>
                    </Grid>
                    <Grid item md={6} xs={6}>
                      <Typography gutterBottom variant="body1" component="div">
                        <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                          Dept:
                        </span>
                        <span style={{ color: "#1A55AF" }}> CSE</span>
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item md={6} xs={6}>
                      <Typography gutterBottom variant="body1" component="div">
                        <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                          Total Class:
                        </span>
                        <span style={{ color: "#1A55AF" }}> 6</span>
                      </Typography>
                    </Grid>
                    <Grid item md={6} xs={6}>
                      <Typography gutterBottom variant="body1" component="div">
                        <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                          Date:
                        </span>
                        <span style={{ color: "#1A55AF" }}> {date}</span>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography gutterBottom variant="body1" component="div">
                    <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                      Routine uses:
                    </span>
                    <span style={{ color: "#1A55AF" }}> 120 users</span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions disableSpacing>
                <Button
                  size="small"
                  color="secondary"
                  sx={{ marginLeft: "auto" }}
                >
                  Checkout
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item md={3} xs={12}>
            <Card sx={{ maxWidth: 370, backgroundColor: "#FFFBEF" }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="body1" component="div">
                    <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                      Institute: </span>

                    <span style={{ color: "#1A55AF" }}>
                      National University
                    </span>
                  </Typography>
                  <Grid container>
                    <Grid item md={6} xs={6}>
                      <Typography gutterBottom variant="body1" component="div">
                        <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                          Semester:
                        </span>
                        <span style={{ color: "#1A55AF" }}> 6th</span>
                      </Typography>
                    </Grid>
                    <Grid item md={6} xs={6}>
                      <Typography gutterBottom variant="body1" component="div">
                        <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                          Dept:
                        </span>
                        <span style={{ color: "#1A55AF" }}> CSE</span>
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item md={6} xs={6}>
                      <Typography gutterBottom variant="body1" component="div">
                        <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                          Total Class:
                        </span>
                        <span style={{ color: "#1A55AF" }}> 6</span>
                      </Typography>
                    </Grid>
                    <Grid item md={6} xs={6}>
                      <Typography gutterBottom variant="body1" component="div">
                        <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                          Date:
                        </span>
                        <span style={{ color: "#1A55AF" }}> {date}</span>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography gutterBottom variant="body1" component="div">
                    <span style={{ color: "#1E1388", fontWeight: "bold" }}>
                      Routine uses:
                    </span>
                    <span style={{ color: "#1A55AF" }}> 120 users</span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions disableSpacing>
                <Button
                  size="small"
                  color="secondary"
                  sx={{ marginLeft: "auto" }}
                >
                  Checkout
                </Button>
              </CardActions>
            </Card>
          </Grid>



        </Grid>
      </Container>
    </MainLayout >

  );
};

export default SearchRoutine;

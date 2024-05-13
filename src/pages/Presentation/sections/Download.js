/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: #-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

import MKTypography from "components/MKTypography";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <Container>
        <Grid container item xs={6} mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h3" mt={6} mb={3}>
              We are Registered
            </MKTypography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={4} lg={3}>
                <MKBox component="a" href="#" target="_blank">
                  <MKBox
                    component="img"
                    src="https://nascintl.com/wp-content/uploads/2023/10/RCIC-removebg.png"
                    width="100%"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={4} lg={3}>
                <MKBox
                  opacity={0.5}
                  component="a"
                  href="#"
                  target="_blank"
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox
                    component="img"
                    src="https://nascintl.com/wp-content/uploads/2023/06/mara.jpg"
                    width="100%"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={4} lg={3}>
                <MKBox
                  opacity={0.5}
                  component="a"
                  href="#"
                  target="_blank"
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox
                    component="img"
                    src="https://nascintl.com/wp-content/uploads/2023/06/british-councillogo.jpg"
                    width="100%"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={4} lg={3}>
                <MKBox
                  opacity={0.5}
                  component="a"
                  href="#"
                  target="_blank"
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox
                    component="img"
                    src="https://nascintl.com/wp-content/uploads/2023/06/DED-Logo.jpg"
                    width="100%"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={4} lg={3}>
                <MKBox component="a" href="#-react" target="_blank">
                  <MKBox
                    component="img"
                    src="https://nascintl.com/wp-content/uploads/2023/06/dmcclogo.jpg"
                    width="100%"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={4} lg={3}>
                <MKBox
                  opacity={0.5}
                  component="a"
                  href="#"
                  target="_blank"
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox
                    component="img"
                    src="https://nascintl.com/wp-content/uploads/2023/06/added.jpg"
                    width="100%"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={4} lg={3}>
                <MKBox
                  opacity={0.5}
                  component="a"
                  href="#"
                  target="_blank"
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox
                    component="img"
                    src="https://nascintl.com/wp-content/uploads/2023/10/Logo-Ajman.jpg"
                    width="100%"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={4} lg={3}>
                <MKBox
                  opacity={0.5}
                  component="a"
                  href="#"
                  target="_blank"
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox
                    component="img"
                    src="https://nascintl.com/wp-content/uploads/2023/10/rak-government-logo.jpg"
                    width="100%"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Download;

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
// import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "pages/Presentation/sections/data/designBlocksData";

function DesignBlocks() {
  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      {/* <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ name }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <ExampleCard
                image="https://flagdownload.com/wp-content/uploads/Flag_of_Canada-128x64.png"
                name={name}
              />
            </Grid>
          ))}
        </Grid>
      </Grid> */}

      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ name, image }) => (
            <Grid key={name} item xs={4} lg={1}>
              <MKBox component="a" target="_blank">
                <MKBox component="img" src={image} width="100%" />
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="List of Countries"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            Immigration Solutions
          </MKTypography>
          <MKTypography variant="body1" color="text">
            Explore our range of immigration services tailored for diverse destinations.
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;

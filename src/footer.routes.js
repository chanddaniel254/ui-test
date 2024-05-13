// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/nascintl-logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "",
    image: logoCT,
  },
  socials: [
    {
      icon: <FacebookIcon />,
    },
    {
      icon: <TwitterIcon />,
    },
    {
      icon: <YouTubeIcon />,
    },
  ],
  menus: [
    {
      name: "United Kingdom",
      items: [
        { name: "Victoria house" },
        { name: "Victoria Road, Aldershot" },
        { name: "Hampshire" },
        { name: "uk@nascintl.com" },
      ],
    },
    {
      name: "United State of America",
      items: [
        { name: "Hollywood, Florida 33021" },
        { name: "usa@nascintl.com" },
        { name: "Tel: +1 4249447888" },
      ],
    },
    {
      name: "Poland - Warsaw",
      items: [
        { name: "Warsaw, woj. Mazowieckie ul." },
        { name: "Aleja Jana Pawla 2, nr.27" },
        { name: "Kod 00-867" },
      ],
    },
    {
      name: "Dubai - Head Office",
      items: [
        { name: "Suite #3601, HDS Business" },
        { name: "Center JLT, Cluster M (Near Movenpick Hotel)" },
        { name: "Tel: +97145136311" },
        { name: "P.O Box 391680, Dubai, UAE" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}
    </MKTypography>
  ),
};

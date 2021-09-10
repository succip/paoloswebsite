import mappollPhoto from "../images/mappolls.png";
import geojsonCreatorPhoto from "../images/geojsoncreator.png";
import surreyGuesserPhoto from "../images/surreyguesser.png";

const projects = [
  {
    title: "MapPolls",
    description: "MapPolls are a quick and easy way to create location-based polls.",
    image: mappollPhoto,
    link: "https://mappolls.netlify.app/",
  },
  {
    title: "GeoJSON Creator",
    description: "This app uses the Esri JavaScript API to create downloadable GeoJSON files.",
    image: geojsonCreatorPhoto,
    link: "https://geojsoncreator.netlify.app/",
  },
  {
    title: "Surrey Community Guesser",
    description: "This game tests Surrey residents on their recognition of Surrey's communities using the Google StreetView API.",
    image: surreyGuesserPhoto,
    link: "https://cosmos.surrey.ca/external/surreygame/",
  },
];

export default projects;

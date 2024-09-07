import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass);
library.add(faDroplet);
library.add(faWind);
export const searchIcon = icon({
  prefix: "fas",
  iconName: "magnifying-glass",
}).html;

export const dropletIcon = icon({
  prefix: "fas",
  iconName: "droplet",
}).html;

export const windIcon = icon({
  prefix: "fas",
  iconName: "wind",
}).html;

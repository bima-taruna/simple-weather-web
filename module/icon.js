import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass);

export const searchIcon = icon({
  prefix: "fas",
  iconName: "magnifying-glass",
}).html;

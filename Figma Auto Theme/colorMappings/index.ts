import * as BlackColorMappings from "./blackColorMappings";
import * as GreyColorMappings from "./greyColorMappings";


export function getColorMappings(theme: "black-theme" | "grey-theme") {
  switch (theme) {
    case "black-theme":
      return BlackColorMappings;
    case "grey-theme": 
      return GreyColorMappings;
  }
}
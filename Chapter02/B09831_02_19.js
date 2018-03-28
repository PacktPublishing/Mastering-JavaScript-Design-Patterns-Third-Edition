// Regular expression to get all the attributes.
const regex = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g;

// In the next line we expose countAttributes as the default value
// to be used as a dependency.
export default function countAttributes (str) {
  return regex.match(str).length;
};

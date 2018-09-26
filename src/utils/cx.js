export default function(object) {
  let classes = "";

  for(let key in object) {
    if(object[key]) {
      classes = (classes === "") ? key : classes + " " + key;
    }
  }

  return(classes);
}

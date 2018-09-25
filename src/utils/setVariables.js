const setObject = function(body, prefix, object) {
  for(let key in object) {
    if(typeof(object[key]) === "object") {
      setObject(body, `${prefix}-${key}`, object[key]);
    } else {
      body.style.setProperty(`${prefix}-${key}`, object[key]);
    }
  }
};

export default function(variables) {
  const body = document.getElementsByTagName("BODY")[0];

  setObject(body, "-", variables);
}

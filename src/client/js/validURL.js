// https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url

function validURL(str) {
  console.log("Line 2, validURL.js is running");
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  // returns true or false pattern.test()
  return !!pattern.test(str);
}

export { validURL };
export const pattern = /^([^:]*):([^:]*):(.*)$/;

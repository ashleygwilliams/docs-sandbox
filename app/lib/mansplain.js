function mansplain(html) {
  var result = html.replace('/\(\d\)/', '<a href="#">LINK</a>');
  console.log(result);
  return result;
};

module.exports = mansplain;

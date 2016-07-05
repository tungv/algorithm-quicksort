const reverse = string =>
  (string.length <= 1)
    ? string
    : string[string.length - 1] + reverse(string.substr(0, string.length - 1));

export default reverse;

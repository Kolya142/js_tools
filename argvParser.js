//for node.js server
function argvPars(reqs) {
  let dict = {};
  let arg;
  for (arg of reqs.split("?")) {
    if (arg === "/") {continue;}
    dict[arg.split("=")[0]] = arg.split("=")[1];
  }
  return dict;
}

"use strict";
const {cat} = require("./step1.js")
const fsP = require('fs/promises');
const argv = process.argv[2];
const axios = require("axios");

/**Takes in one arguement (path),
 *  and it should read the file with that path,
 * and print the contents of that file. */

// async function cat(path) {
//   try {
//     let contents = await fsP.readFile(path, "utf8");
//     console.log(contents);
//   } catch (err) {
//     console.log(`Error reading ${path}:`, err.message);
//     process.exit(1);
//   }
// }

/** This should take a URL and using axios,
 * should read the content of that URL and print it to the console. */

async function webCat(url) {
  try {
    const resp = await axios.get(url);
    const text = resp.data;
    console.log(text);
  } catch (err) {
    console.log(`Error fetching ${url}:`, err.message);
    process.exit(1);
  }
}


if (argv.startsWith("http")) {
  webCat(argv);
} else {
  cat(argv);
}
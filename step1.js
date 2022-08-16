"use strict"

const fsP = require('fs/promises')
const argv= process.argv[2]

/**Takes in one arguement (path),
 *  and it should read the file with that path,
 * and print the contents of that file. */

async function cat(path){
  try{
    let contents = await fsP.readFile(path, "utf8")
    console.log(contents)
  } catch(err){
    console.log(`Error reading ${path}:`, err)
    process.exit(1)
  }
}

cat(argv)
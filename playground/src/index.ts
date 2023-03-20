/*
  A Simple Project Setup
  
  (1) tsc --init
  
  (2)
  - create src/ + dist/
  - config: outDir > dist + include > src folder

  (3)
  > tsc -w

  (4)
  - create html file and link to dist folder
  - open with live server 
    > or we can use lite-server
    > npm init -y
    > npm install lite-server
    > setup script in package.json
        "start": "lite-server"  

*/

function printDouble(msg: string) {
  console.log(msg)
  console.log(msg)
}

printDouble('Hello World')

process.stdin.setEncoding('utf8');

// your code goes here

var arr = ""

process.stdin.on('data', function(chunk) {
  arr += chunk;
})

process.stdin.on('end', ()=> {
  arr = arr.split("\n")
  var i = 0, rev = ""
  let T = arr[i++]
  while(T--) {
      rev = arr[i++].split("").reverse().join("")
      console.log(parseInt(rev))
  }
})


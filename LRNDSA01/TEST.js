process.stdin.resume()
process.stdin.setEncoding('utf-8')

var arr = ""

process.stdin.on('data', function(chunk) {
  arr += chunk;
})

process.stdin.on('end', ()=> {
  arr = arr.split("\n")
  while( (each = parseInt(arr.shift())) !== undefined ) {
     if(each===42) break;  
     console.log(parseInt(each))
  }
})

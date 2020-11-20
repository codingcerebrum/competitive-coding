var input = `6
gaga
abcde
rotor
xyzxy
abbaab
ababc`

var driverFunc = (input) => {
    var arr = input.split('\n')
    var i = 0, count = 0
    let T = arr[i++]
    while(T--){
        count = parseInt(arr[i].length)
        if(count%2 == 0){
            var div = count/2
            var part1 = arr[i].slice(0,div).split('').sort().join('')
            var part2 = arr[i].slice(div,arr[i].length).split('').sort().join('')
            console.log( (part1 === part2)? "YES":"NO")
        } else {
            var div = count/2
            var part1 = arr[i].slice(0,div).split('').sort().join('')
            var part2 = arr[i].slice(div+1,arr[i].length).split('').sort().join('')
            console.log( (part1 === part2)? "YES":"NO")
        }
        i++
    }
}

// Running the driver function
driverFunc(input)

var input = `3
1
10
3
8 3 6
5
4 5 1 2 3`

var driverFunc = (input) => {
    var arr = input.split('\n')
    var i = 0, N = 0, count = 1
    var carsOnTrack = []
    let T = arr[i++]
    while(T--){
        N = arr[i++]
        if (N == 1) {
            console.log(1)
            i++
            continue
        }
        count = 1
        carsOnTrack = arr[i++].split(' ')
        for( var j=1; j<N; j++) {
            if(carsOnTrack[j-1]>carsOnTrack[j]){
                count++
            } else {
                carsOnTrack[j] = carsOnTrack[j-1]
            }
        }
        console.log(count)
    }
    return
}

// Running the driver function
driverFunc(input)

const randomx = (arr) => {
    let randomIndex = Math.floor( Math.random() * arr.length );
    return arr[randomIndex]
}

export default randomx;
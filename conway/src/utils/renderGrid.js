const renderGrid = (arr, context) => {
    const colors = ["purple", "goldenrod", "teal", "white"]
    
    for (let col = 0; col < 70; col++) {
        for (let row = 0; row < 35; row++) {
            context.beginPath();
            context.rect(col * 10, row * 10, 10, 10)
            context.fillStyle = colors[arr[row][col].playerId];
            context.stroke()
            context.fill()
        }
    }
}

export default renderGrid;
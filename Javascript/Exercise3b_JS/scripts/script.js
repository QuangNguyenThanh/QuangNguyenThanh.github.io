var BarChart = function(options) {
    this.options = options;
    //color
    var color = options.color;
    //context
    var ctx = options.ctx;
    //titles
    var title = options.title;
    //data
    var data = options.data;
    var nameData = options.nameData;
    var scale = 0.6;
    //Find max data
    var maxData = findMax(data);
    //position y of main line
    const MAIN_LINE_POSITION_Y = 600;

    //get width chart
    var width = data.length * 100 + (data.length - 1) * 50;
    //find position begin draw chart
    var startX = (1000 - width * scale) / 2 + 100;
    var endX = startX + width + 100;
    ctx.scale(scale, scale);

    this.drawTitle = function() {
        ctx.beginPath();
        ctx.font = "40px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(title.titleTop, startX + 20 + (width - 700) / 2, 100);
        ctx.lineWidth = 5;
        ctx.stroke();
    }

    this.drawMainLine = function() {
        ctx.beginPath();
        ctx.moveTo(startX, MAIN_LINE_POSITION_Y);
        ctx.lineTo(startX + width + 100, MAIN_LINE_POSITION_Y);
        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.fillText("0", startX - 60, MAIN_LINE_POSITION_Y + 10);
        ctx.closePath();
    }

    this.drawLines = function() {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.fillStyle = "black";
        var i;
        var moveY = MAIN_LINE_POSITION_Y - 100;
        for (i = 0; i < 4; i++) {
            ctx.moveTo(startX, moveY);
            ctx.lineTo(startX + width + 100, moveY);
            ctx.stroke();
            ctx.fillText(maxData / 4 * (i + 1), startX - 60, moveY + 10);
            moveY -= 100;
        }
        ctx.closePath();
    }

    this.drawColumns = function() {
        ctx.restore();
        ctx.beginPath();
        ctx.fillStyle = color;
        var i;
        var moveX = startX;
        var heightEachPoint = 100 * 4 / maxData;
        for (i = 0; i < data.length; i++) {
            ctx.fillRect(moveX, MAIN_LINE_POSITION_Y, 100, -(data[i] * heightEachPoint));
            moveX += 150;
        }
        ctx.fillRect(moveX + 100 + 30, 200, 100, 30);
        moveX = startX + 40;
        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        for (i = 0; i < data.length; i++) {
            ctx.fillText(nameData[i], moveX, MAIN_LINE_POSITION_Y + 50);
            moveX += 150;
        }
        ctx.closePath();
    }

    this.drawText = function() {
        ctx.beginPath();
        ctx.fillStyle = "gray";
        ctx.font = "italic 30px Arial";
        ctx.fillText(title.titleBot, 700, MAIN_LINE_POSITION_Y + 150);
        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        ctx.fillText("LEVEL", endX + 80, 300);
        ctx.fillText("OF", endX + 80, 350);
        ctx.fillText("POSITION", endX + 80, 400);
        ctx.translate(0, 600);
        ctx.rotate(-Math.PI / 2);
        ctx.textAlign = "center";
        ctx.fillText(title.titleLeftRight, 200, 200);
    }

    this.draw = function() {
        this.drawTitle();
        this.drawMainLine();
        this.drawLines();
        this.drawColumns();
        this.drawText();
    }
}

function findMax(data) {
    var i;
    var max = data[0];
    for (i = 1; i < data.length; i++) {
        if (data[i] > max) {
            max = data[i];
        }
    }
    return max;
}
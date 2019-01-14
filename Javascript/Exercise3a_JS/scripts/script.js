var lineSuccess = [300, 100, 200, 100]; //position draw line success
var lineFail = [800, 100, 900, 100]; //position draw line fail
var scale = 0.3;
var slice_Height = 250; //sum of slice draw
//fix center position
var fixX = 10; 
var fixY = -10;

var Piechart = function (options) {
    this.options = options;
    // x,y center of Pie
    var centerX = options.centerX;
    var centerY = options.centerY;
    //radius of pie
    var radius = options.radius;
    //color of pie,text...
    var color = options.colors;
    var ctx = options.ctx;
    ctx.scale(1, scale);
    //data rate
    var myrate = options.data;
    //font
    var font = options.font;
    //tilte
    var title = options.title;

    var check = myrate.success >= myrate.fail ? true : false;
    if (!check) {
        fixX = -fixX;
        var t = lineSuccess;
        lineSuccess = lineFail;
        lineFail = t;
    } 
    //Draw success and fail part
    this.drawChart = function(i) {
        if (i < slice_Height) {
            ctx.fillStyle = color.botSuccess;
        }
        else {
            ctx.fillStyle = color.topSuccess;
        }
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - i);
        ctx.arc(centerX, centerY - i, radius, 0, myrate.success * 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        if (i < slice_Height) {
            ctx.fillStyle = color.botFail;
        } else {
            ctx.fillStyle = color.topFail;
        }
        ctx.beginPath();
        ctx.moveTo(centerX + fixX, centerY + fixY - i);
        ctx.arc(centerX + fixX, centerY + fixY - i, radius, myrate.success * 2 * Math.PI, 0);
        ctx.fill();
        ctx.closePath();
    }

    //Draw title of chart
    this.drawTitle = function() {
        ctx.scale(1, 3);
        ctx.beginPath();
        ctx.font = font.large;
        ctx.fillStyle = "blue";
        ctx.fillText(title, 400, 500);
        ctx.stroke();
    }

    //Draw lines chart
    this.drawLineSuccess = function() {
        var moveX, moveY;
        var angle = myrate.success * 100 * 3.6;
        //Find position begin draw line
        if (myrate.success <= 0.25) {
            moveX = centerX + 200 - angle;
            moveY = (centerY - slice_Height + angle) / 3;
        } else if (myrate.success <= 0.5) {
            moveX = centerX + 200 - 100 - angle / 2;
            moveY = (centerY - slice_Height + 100) / 3;
        } else {
            moveX = centerX - (angle - 180) / 2;
            moveY = (centerY - slice_Height + 100) / 3;  
        }
        ctx.beginPath();
        ctx.moveTo(moveX, moveY);
        ctx.lineTo(lineSuccess[0], lineSuccess[1]);
        ctx.lineTo(lineSuccess[2], lineSuccess[3]);
        ctx.lineWidth = 3;
        ctx.strokeStyle = color.botSuccess;
        ctx.stroke();
    }
    this.drawLineFail = function() {
        var moveX, moveY;
        var angle = myrate.fail * 100 * 3.6;
        //Find position begin draw line
        if (myrate.fail <= 0.25) {
            moveX = centerX + fixX + 200 - angle;
            moveY = (centerY + fixY - slice_Height - angle) / 3;
        } else if (myrate.fail <= 0.5) {
            moveX = centerX + fixX + 200 - 100 - angle / 2;
            moveY = (centerY + fixY - slice_Height - 100) / 3;
        } else {
            moveX = centerX + fixX - (angle - 180) / 2;
            moveY = (centerY + fixY - slice_Height - 100) / 3;
        }
        ctx.beginPath();
        ctx.moveTo(moveX, moveY);
        ctx.lineTo(lineFail[0], lineFail[1]);
        ctx.lineTo(lineFail[2], lineFail[3]);
        ctx.lineWidth = 3;
        ctx.strokeStyle = color.botFail;
        ctx.stroke();
    }

    //Draw text of chart
    this.drawText = function() {
        ctx.beginPath();
        ctx.font = font.normal;
        ctx.fillStyle = "black";
        if (!check) {
            ctx.fillText(myrate.success * 100 + "% ĐÃ ĐẠT", lineSuccess[0], lineSuccess[3] - 10);
            ctx.fillText(myrate.fail * 100 + "% CHƯA ĐẠT", lineFail[2], lineFail[3] - 10);
        } else {
            ctx.fillText(myrate.success * 100 + "% ĐÃ ĐẠT", lineSuccess[2], lineSuccess[3] - 10);
            ctx.fillText(myrate.fail * 100 + "% CHƯA ĐẠT", lineFail[0], lineFail[3] - 10);
        }   
    }

    this.draw = function() {
        for (i = 0; i <= slice_Height; i++) {
            this.drawChart(i);
        }
        this.drawTitle();
        this.drawLineSuccess();
        this.drawLineFail();
        this.drawText();
    }
};


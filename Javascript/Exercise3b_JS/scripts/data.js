window.onload = eventWindowLoaded;
function eventWindowLoaded() {
    Canvas();
}

function Canvas() {
    var data = [2, 0.1, 3, 4, 4];
    var nameData = ["A", "B", "C", "E", "F"];
    var title = {
        titleTop: "BIỂU ĐỔ LỊCH SỬ LEVEL OF POSITION",
        titleLeftRight: "LEVEL OF POSITION",
        titleBot: "TÊN DỰ ÁN"
    }
    var font = {
        large: "40px Arial",
        normal: "30px Arial",
        italic: "italic 30px Arial"
    }
    var color = "#3366CC";
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var myBarChart = new BarChart(
        {
            ctx,
            title: title,
            canvas: canvas,
            data: data,
            font: font,
            nameData: nameData,
            color: color
        }   
    );
    myBarChart.draw();
}
var ants = ants || {};

ants.rap = (function() {

    var _data = {

        digits: [2, 5, 6, 7, 8, 4],

        texts: ["男男喜欢比例", "女女喜欢比例", "男女喜欢比例", "女男喜欢比例", "同性喜欢比例", "中性喜欢比例"]


    };


    var getRandomColor = function() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    var colors = ['#000000', '#e06f00', '#85aed4', '#033395', '#d63b3f ', '#ff9b32 ', '#111111'];


    var paper = Raphael("eyesvg", 640, 480);
    paper.rect(0, 0, 640, 480, 10).attr({
        fill: "#F2F1D7",
        stroke: "none"
    });
    // paper.path({
    //     "fill": "#a9ea00",
    //     "stroke": "#c9c"
    // }, "M300,200 h-150 a150,150 0 1,0 150,-150 z");

    // paper.path("M300 300 L400 300 A100 100 0 0 0 " + parseInt(219.09830056250527) + " " + parseInt(241.22147477075268) + " z").attr({
    //     "fill": "#999999"
    // });

    var pieSection = function(cx, cy, r, paper, oc, startAngle, rcolor) {

        var angleplus = 360 * oc / 100,

            startAngle = startAngle || 0;


        endAngle = startAngle + angleplus,

        rad = Math.PI / 180,

        x1 = cx + r * Math.cos(-startAngle * rad),

        y1 = cy + r * Math.sin(-startAngle * rad),

        x2 = cx + r * Math.cos(-endAngle * rad),

        y2 = cy + r * Math.sin(-endAngle * rad),

        rcolor = rcolor;

        console.log(rcolor);

        var path = ["M", cx, cy, "L", x1, y1, "A", r, r, 0, +(endAngle - startAngle > 180), 0, x2, y2, "z"];
        path = path.join(" ");
        paper.path(path).attr({
            fill: rcolor
        }).hover(function() {


            this.xy = this.getBBox();



            this.transform("s2");

        }, function() {

            this.transform("s1");

        });


        return endAngle;


    }

    var ocs = [40, 20, 30, 10];
    for (var i = 0, l = ocs.length, startAngle; i < l; i++) {

        var bc = getRandomColor();

        startAngle = pieSection(300, 300, 100, paper, ocs[i], startAngle, bc);
    }




})();
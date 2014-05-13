var ants = ants || {};

ants.rap = (function() {

    var _data = {

        company: [

            ["2006年",

                "<p>9月 国内第一个大型3D网络社区项目立项,开展可行性研究</p>"


            ],
            [

                "2007年",

                "<p>1月 大型3D网络互动社区1.0版本启动</p> <p>10月 3D互动社区1.0版本完成,开始技术测试</p>"


            ],

            [

                "2008年",

                "<p>1月 3D网络社区开始小规模体验测试,搜集用户反馈</p>"


            ],

            [

                "2009年",

                '<p>3月 大型3D网络互动社区的开发进入2.0版本压力测试阶段</p><p>5月 使用美国"Facegen"技术,开发完成国内独有的"用户3D真脸生成"系统</p><p>12月 参展"第七届中国国际网络文化博览会",正式对外发布国内第一个拥有"真脸"系统的3D网络SNS社区<HapaMe></p>'


            ],

            [

                "2010年",

                '<p>8月 在3D网络社区中成功举办影星严宽的粉丝网络见面会等活动</p><p>9月 在3D网络社区中成功举办歌星刘著的粉丝网络见面会等活动,并发行国内第一个3D动画真人版音乐MV</p><p>10月 在3D网络美术馆中为著名音乐人郭峰举办了国内首次网上3D画展</p>'



            ],
            [
                "2012年",
                '<p>09月 与山西忻州五台山风景名胜区签订数字导览仪开发应用协议。</p><p>11月 与湖南凤凰古城景区签订数字导览仪开发应用协议。</p><p>12月 与山西皇城相府、平遥古城、天津蓟县盘山风景名胜区签订数字智慧导览仪开发应用协议</p>'

            ],
            [

                '2013年',
                '<p>02月 与北京八达岭长城旅游区、明十三陵景区-定陵及长陵、安徽徽州文化名城-歙县签订智慧旅游终端开发应用协议。</p><p>04月 与中国锦州世界园林博览会园区签订智慧终端设备合作协议并于同年5月首次将智慧导览仪终端设备投入到世博园园区，获得了观众和当地媒体的好评，5个月的时间不仅给公司带来了经济效益， 更积累了宝贵经验，为今后为全国各大知名景区提供良好服务打下了坚实基础。</p><p>05月 与陕西西安秦始皇兵马俑博物馆签订数字导游终端合作协议。</p><p>08月 正式开始为北京故宫博物院提供数字智慧导览仪，经过多年精心研发的智慧导览仪第一次在国家5A级风景区上线面对中外游客，对游艺公司来讲是一个重要的里程碑。</p><p>10月 与山西乔家大院景区、四川成都建川博物馆签订智慧旅游终端设备运营协议。</p><p>11月 与江苏省扬州市瘦西湖风景区签订智慧旅游终端设备运营协议。</p><p>12月 与四川金沙遗址博物馆签订签订智慧旅游终端设备运营协议。</p>'

            ],

            ['2014年',

                '<p>03月 与北京市风景名胜区协会签订“北京市风景名胜区年票”合作协议，由北京市风景名胜区协会独家授权游艺公司对北京市50个主流景区的年票发展和管理线上线下销售渠道，并开展年票宣传工作，向游客提供更完善的旅游服务。</p>'

            ]

        ]

    };


    var getRandomColor = function() {
        return ' # ' + Math.floor(Math.random() * 16777215).toString(16);
    };

    var colors = ['#000000', '#e06f00', '#85aed4', '#033395', '#d63b3f ', '#ff9b32 ', '#111111'];

    var _render = {
        height: 731
    },
        circles = [],
        texts = [],
        years = [];

    _render.width = (_data.company.length - 1) * 180 + 2 * 50 + 20 * 2;

    var vessel = $('#vessel'),
        v_l = $('<div> < </div>'),
        v_r = $('<div> > </div>');

    $('#vessel').css({
        'width': '981px',
        'overflow': 'hidden'
    });

    v_l.css({
        'display': 'none',
        'width': '100px',
        'position': 'absolute',
        'height': "100px",
        'line-height': '100%',
        'vertical-align': 'middle',
        'text-align': 'center',
        'font-weight': '800',
        'top': (_render.height - 100) / 2,
        'left': '0px',
        'z-index': 1000,
        'background-color': '#000000',
        'opacity': '.3',
        'font-size': '80px'
    });

    v_r.css({
        'display': 'none',
        'width': '100px',
        'position': 'absolute',
        'height': "100px",
        'line-height': '100%',
        'vertical-align': 'middle',
        'text-align': 'center',
        'font-weight': '800',
        'top': (_render.height - 100) / 2,
        'right': '0px',
        'z-index': 1000,
        'background-color': '#000000',
        'opacity': '.3',
        'font-size': '80px'
    });

    vessel.append(v_r);
    vessel.append(v_l);
    var paper = new Raphael(document.getElementById('eyesvg'), (_render.width % parseInt(vessel.width()) > 0 ? ((_render.width / parseInt(vessel.width()) + 1) * parseInt(vessel.width())) : _render.width), _render.height);

    // var rectShadow = paper.rect(25, (_render.height - 29) / 2, (_render.width % parseInt(vessel.width()) > 0 ? ((_render.width / parseInt(vessel.width()) + 1) * parseInt(vessel.width())) : _render.width) - 20 * 2, 36);
    // rectShadow.attr({

    //     fill: 'url(/images/ra.jpg)',

    //     stroke: '#e0e0e0',

    //     gradient: '90-#dddddd-#e0e0e0'
    // });

    var rect = paper.rect(20, (_render.height - 36) / 2, (_render.width % parseInt(vessel.width()) > 0 ? ((_render.width / parseInt(vessel.width()) + 1) * parseInt(vessel.width())) : _render.width) - 20 * 2, 36);
    rect.attr({

        fill: '#e1e1e1',
        stroke: '#dbdbdb',
        gradient: '90-#dddddd-#e1e1e1',

    }).glow({
        color: '#e1e1e1',
        offsetx: 2,
        offsety: 3


    });

    var line = paper.path("M " + 20 + "," + (_render.height - 10) / 2 + "L " + (_render.width - 20) + "," + (_render.height - 10) / 2);


    line.attr({
        fill: '#cccccc',
        'stroke-width': 1,
        'stroke-linejoin': 'round',
        opacity: .5


    }).glow({

        color: '#64a0c1'
    });


    for (var i = _data.company.length - 1; i >= 0; i--) {

        circles[i] = paper.circle(i * 180 + 20 + 50, parseFloat((_render.height - 10) / 2), 10);

        // circles[i].glow({

        //     fill: true,
        //     offsetx: 0,
        //     offsety: 0,
        //     stroke: '#333333',
        //     'stroke-width': 1,
        //     opacity: 0.4

        // });
        circles[i].attr({
            // fill: '#f00300',
            stroke: '#ffffff',
            'stroke-width': 5,
            gradient: '90-#b10d28-#af0a2c',
            'stroke-linejoin': 'round'
        }).glow({
            fill: true,
            offsetx: 0,
            offsety: 0,
            stroke: '#333333',
            'stroke-width': 1,
            opacity: 0.4
        }).hover(function() {


            this.g = this.glow({

                fill: true,
                offsetx: 0,
                offsety: 0,
                stroke: '#999999',
                'stroke-width': 1,
                opacity: 0.5

            });

        }, function() {

            this.g.remove();



        });


        years[i] = paper.text((i * 180 + 20 + 50), (i % 2 > 0) ? parseFloat((_render.height - 10) / 2) - 30 : parseFloat((_render.height - 10) / 2) + 30, _data.company[i][0]);

        var rdix;

        years[i].mm = colors[(rdux = parseInt(Math.random() * 10)) > (colors.length - 1) ? (rdux - colors.length) : rdux];

        console.log(rdux);

        years[i].attr({

            // "color": years[i].mm,
            'stroke': years[i].mm,
            'font-size': '18'

        });

        texts[i] = document.createElement('div');

        $(texts[i]).html(_data.company[i][1]);

        $(texts[i]).css({
            "width": 190 + 'px',
            "position": "absolute",
            "left": (i === 0 || i === (_data.company.length - 1)) ? ((i === 0) ? (i * 180 + 20) : (i * 180 + 20 - 100 / 2)) : (i * 180 + 20 + 50 - 95) + 'px',
            "display": 'none',
            "z-index": '1000',
            "font-size": "12px"

        });

        document.getElementById('texts').appendChild(texts[i]);

        $(texts[i]).css({
            'top': (i % 2 > 0) ? parseFloat((_render.height - 100) / 2) - $(texts[i]).height() : parseFloat((_render.height + 100)) / 2,
            'display': "block"
        });

    }


    $('#eyes').bind('mouseover', function() {

        v_r.css({
            'display': 'block'
        });

        v_l.css({
            'display': 'block'
        });


    });



    $('#eyesvg').css({
        'width': _render.width,
        'height': _render.height,
        'position': 'relative',
        'left': '0px',
        'top': '0px',
        'z-index': 1005
    });

    $('#texts').css({
        'width': _render.width,
        'height': _render.height,
        'position': 'absolute',
        'left': '0px',
        'top': '0px',
        'z-index': 1001
    });

    $('#eye').css({
        'position': 'absolute'
    });

    v_r.click(function() {


        if ((Math.abs(parseInt($('#eyesvg').css('left'))) + parseInt(vessel.width())) < parseInt($('#eyesvg').width())) {

            $('#texts').animate({

                opacity: 0.5,

                left: -(parseInt($('#eyesvg').css('left')) + parseInt(vessel.width()))

            }, 1000, function() {

                $(this).css({
                    'opacity': '1'
                });
            });



            $('#eyesvg').animate({

                opacity: 0.5,

                left: -(parseInt($('#eyesvg').css('left')) + parseInt(vessel.width()))

            }, 1000, function() {

                $(this).css({
                    'opacity': '1'
                });
            });


        }

    });
    v_l.click(function() {

        if (parseInt($('#eyesvg').css('left')) < 0) {


            $('#texts').animate({

                opacity: 0.5,

                left: (parseInt($('#eyesvg').css('left')) + parseInt(vessel.width()))

            }, 1000, function() {

                $(this).css({
                    'opacity': '1'
                });
            });


            $('#eyesvg').animate({

                opacity: 0.5,

                left: (parseInt($('#eyesvg').css('left')) + parseInt(vessel.width()))
            }, 1000, function() {

                $(this).css({
                    'opacity': '1'
                });
            });


        }




    });


})();
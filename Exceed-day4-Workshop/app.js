let temperature = 0;
let humid = 0;
let light = 0;
$(function () {
    //dynamic chart temparature
    setInterval(function () {
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/odinpalm-temp/view",
            dataType: "text",
            success: function (response) {
                temperature = parseInt(response);
            },
            fail: function (response) {
                console.log(response)
            }
        });
    }, 1000)

    setInterval(function () {
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/odinpalm-humid/view",
            dataType: "text",
            success: function (response) {
                humid = parseInt(response);
            },
            fail: function (response) {
                console.log(response)
            }
        });
    }, 1000)

    setInterval(function () {
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/odinpalm-light_status/view",
            dataType: "text",
            success: function (response) {
                light = parseInt(response);
            },
            fail: function (response) {
                console.log(response)
            }
        });
    }, 1000)

    $('#off-light-out-button').on('click', function () {
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/odinpalm-outside_light/set/",
            data: {
                value: 1
            },
            dataType: "json",
            success: function (response) {
                $('#light-out').html('<img width="200" src="https://image.flaticon.com/icons/svg/149/149200.svg" alt="" class="rounded">')
            },
            fail: function (response) {
                console.log(response);
            }

        });
    })
    $('#on-light-out-button').on('click', function () {
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/odinpalm-outside_light/set/",
            data: {
                value: 0
            },
            dataType: "json",
            success: function (response) {
                $('#light-out').html('<img width="200" src="https://image.flaticon.com/icons/png/512/148/148819.png" alt="" class="rounded">')
            },
            fail: function (response) {
                console.log(response);
            }

        });
    })

    $('#auto-light-out-button').on('click', function () {

        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/odinpalm-outside_light/set/",
            data: {
                value: 2
            },
            dataType: "json",
            success: function (response) {
            },
            fail: function (response) {
                console.log(response);
            }

        });
    })

    $('#off-light-in-button').on('click', function () {
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/odinpalm-inside_light/set/",
            data: {
                value: 1
            },
            dataType: "json",
            success: function (response) {
                $('#light-in').html('<img width="200" src="https://image.flaticon.com/icons/svg/149/149200.svg" alt="" class="rounded">')
            },
            fail: function (response) {
                console.log(response);
            }

        });
    })
    $('#on-light-in-button').on('click', function () {
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/odinpalm-inside_light/set/",
            data: {
                value: 0
            },
            dataType: "json",
            success: function (response) {
                $('#light-in').html('<img width="200" src="https://image.flaticon.com/icons/png/512/148/148819.png" alt="" class="rounded">')
            },
            fail: function (response) {
                console.log(response);
            }

        });
    })

    $('#off-door-button').on('click', function () {
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/odinpalm-door/set/",
            data: {
                value: 1
            },
            dataType: "json",
            success: function (response) {
                $('#door').html('<img width="200" src="https://image.flaticon.com/icons/svg/876/876904.svg" alt="" class="rounded">')
            },
            fail: function (response) {
                console.log(response);
            }

        });
    })
    $('#on-door-button').on('click', function () {
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/odinpalm-door/set/",
            data: {
                value: 0
            },
            dataType: "json",
            success: function (response) {
                $('#door').html('<img width="200" src="https://image.flaticon.com/icons/svg/876/876853.svg" alt="" class="rounded">')
            },
            fail: function (response) {
                console.log(response);
            }

        });
    })

    $('#auto-door-button').on('click', function () {
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/odinpalm-door/set/",
            data: {
                value: 2
            },
            dataType: "json",
            success: function (response) {

            },
            fail: function (response) {
                console.log(response);
            }

        });
    })

    $('#off-air-button').on('click', function () {
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/odinpalm-on_off_air/set/",
            data: {
                value: 1
            },
            dataType: "json",
            success: function (response) {
                $('#air').html('<img width="200" src="https://www.flaticon.com/premium-icon/icons/svg/701/701181.svg" alt="" class="rounded">')
            },
            fail: function (response) {
                console.log(response);
            }

        });
    })
    $('#on-air-button').on('click', function () {

        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/odinpalm-on_off_air/set/",
            data: {
                value: 0
            },
            dataType: "json",
            success: function (response) {
                $('#air').html('<img width="200" src="https://image.flaticon.com/icons/svg/701/701110.svg" alt="" class="rounded">')
            },
            fail: function (response) {
                console.log(response);
            }

        });
    })

    $('#auto-air-button').on('click', function () {
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/odinpalm-on_off_air/set/",
            data: {
                value: 2
            },
            dataType: "json",
            success: function (response) {

            },
            fail: function (response) {
                console.log(response);
            }

        });
    })

    $('#off-alarm-button').on('click', function () {
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/odinpalm-press_alarm/set/",
            data: {
                value: 1
            },
            dataType: "json",
            success: function (response) {
                $('#alarm').html('<img width="200" src="https://image.flaticon.com/icons/svg/883/883396.svg" alt="" class="rounded">')
            },
            fail: function (response) {
                console.log(response);
            }

        });
    })
    $('#on-alarm-button').on('click', function () {
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/odinpalm-press_alarm/set/",
            data: {
                value: 0
            },
            dataType: "json",
            success: function (response) {
                $('#alarm').html('<img width="200" src="https://image.flaticon.com/icons/svg/883/883345.svg" alt="" class="rounded">')
            },
            fail: function (response) {
                console.log(response);
            }

        });
    })
})

//Graph
window.onload = function () {

    var dps = []; // dataPoints
    var chart = new CanvasJS.Chart("chartTemperature", {
        title: {
            text: "Temperature"
        },
        axisY: {
            includeZero: false
        },
        data: [{
            type: "line",
            dataPoints: dps
        }]
    });

    var xVal = 0;
    var yVal = 0;
    var updateInterval = 1000;
    var dataLength = 20; // number of dataPoints visible at any point

    var updateChart = function (count) {

        count = count || 1;

        for (var j = 0; j < count; j++) {
            yVal = temperature;
            dps.push({
                x: xVal,
                y: yVal
            });
            xVal++;
        }

        if (dps.length > dataLength) {
            dps.shift();
        }

        chart.render();
    };

    updateChart(dataLength);
    setInterval(function () { updateChart() }, updateInterval);

    var dpsTwo = []; // dataPoints
    var chartTwo = new CanvasJS.Chart("chartHumidity", {
        title: {
            text: "Humidity"
        },
        axisY: {
            includeZero: false
        },
        data: [{
            type: "line",
            dataPoints: dpsTwo
        }]
    });

    var xValTwo = 0;
    var yValTwo = 0;
    var updateIntervalTwo = 1000;
    var dataLengthTwo = 20; // number of dataPoints visible at any point

    var updateChartTwo = function (countThree) {

        countThree = countThree || 1;

        for (var j = 0; j < countThree; j++) {
            yValTwo = humid;
            dpsTwo.push({
                x: xValTwo,
                y: yValTwo
            });
            xValTwo++;
        }

        if (dpsTwo.length > dataLength) {
            dpsTwo.shift();
        }

        chartTwo.render();
    };

    updateChartTwo(dataLengthTwo);
    setInterval(function () { updateChartTwo() }, updateIntervalTwo);

    var dpsThree = []; // dataPoints
    var chartThree = new CanvasJS.Chart("chartLight", {
        title: {
            text: "Light Intensity"
        },
        axisY: {
            includeZero: false
        },
        data: [{
            type: "line",
            dataPoints: dpsThree
        }]
    });

    var xValThree = 0;
    var yValThree = 0;
    var updateIntervalThree = 1000;
    var dataLengthThree = 20; // number of dataPoints visible at any point

    var updateChartThree = function (countThree) {

        countThree = countThree || 1;

        for (var j = 0; j < countThree; j++) {
            yValThree = light;
            dpsThree.push({
                x: xValThree,
                y: yValThree
            });
            xValThree++;
        }

        if (dpsThree.length > dataLength) {
            dpsThree.shift();
        }

        chartThree.render();
    };

    updateChartThree(dataLengthThree);
    setInterval(function () { updateChartThree() }, updateIntervalThree);
}

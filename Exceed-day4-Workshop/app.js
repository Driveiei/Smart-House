let x = 0;
$(function () {
    //dynamic chart temparature
    setInterval(function () {
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/odinpalm-outside_light/view",
            dataType: "text",
            success: function (response) {
                x = parseInt(response);
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
            url: "http://ecourse.cpe.ku.ac.th:1515/api/odinpalm-outside_light/set/",
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
            url: "http://ecourse.cpe.ku.ac.th:1515/api/odinpalm-outside_light/set/",
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
    var chart = new CanvasJS.Chart("chartTemperaturea", {
        title: {
            text: "Temperature Data"
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
            yVal = x;
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

}

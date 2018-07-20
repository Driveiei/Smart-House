$(function () {
    $.ajax({
        type: "GET",
        url: "http://ecourse.cpe.ku.ac.th:1515/api/odin-plam/view",
        data: "data",
        dataType: "dataType",
        success: function (response) {
            
        }
    });

    $('#off-light-button').on('click', function () {
        $('#light').html('<img width="200" src="https://www.flaticon.com/premium-icon/icons/svg/595/595136.svg" alt="" class="rounded">')
    })
    $('#on-light-button').on('click', function () {
        $('#light').html('<img width="200" src="https://www.flaticon.com/premium-icon/icons/svg/595/595085.svg" alt="" class="rounded">')
    })

    $('#off-door-button').on('click', function () {
        $('#door').html('<img width="200" src="https://image.flaticon.com/icons/svg/876/876904.svg" alt="" class="rounded">')
    })
    $('#on-door-button').on('click', function () {
        $('#door').html('<img width="200" src="https://image.flaticon.com/icons/svg/876/876853.svg" alt="" class="rounded">')
    })

    $('#off-air-button').on('click', function () {
        $('#air').html('<img width="200" src="https://www.flaticon.com/premium-icon/icons/svg/701/701181.svg" alt="" class="rounded">')
    })
    $('#on-air-button').on('click', function () {
        $('#air').html('<img width="200" src="https://image.flaticon.com/icons/svg/701/701110.svg" alt="" class="rounded">')
    })

    $('#off-alarm-button').on('click', function () {
        $('#alarm').html('<img width="200" src="https://image.flaticon.com/icons/svg/883/883396.svg" alt="" class="rounded">')
    })
    $('#on-alarm-button').on('click', function () {
        $('#alarm').html('<img width="200" src="https://image.flaticon.com/icons/svg/883/883345.svg" alt="" class="rounded">')
    })
})
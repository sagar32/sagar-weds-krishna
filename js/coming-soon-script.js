$(function() {
    // comming count down clock
    $('#clock').countDown({  
        targetDate: {
            'day'   : 3,
            'month' : 11,
            'year'  : 2017,
            'hour'  : 0,
            'min'   : 0,
            'sec'   : 0
        },
        omitWeeks: true
    });
});

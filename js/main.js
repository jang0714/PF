$(function(){
    const videosrc = ["images/찐막.mp4", "images/물결(색변경).mp4", "images/낙엽.mp4", "images/눈배경.mp4"];
    const word = ["앱광고", "씨즐영상", "자기소개"];
    $('.pro').click(function(e){
        e.preventDefault();
        let idx = $(this).index();
        $('.popup').addClass('active');
        // console.log(idx)
    })
    $('.gallery li:first').click(function(e){
        $('.popup-profile').addClass('active');
    })

    // if(idx === 0){
    //     $('.popup-profile').addClass('active');
    // } else {
    //     $('.popup').addClass('active');
    //     $('.popup video')[0].src = videosrc[idx]
    // }

    $('.popup button, .popup-profile .close-btn ').click(function(){
        $('.popup, .popup-profile').removeClass('active');
    })

    $(".gallery li").each(function(index){
        $(this).click(function(){
            $(".popup video")[0].src = videosrc[index];
        })
    })

    $()

});
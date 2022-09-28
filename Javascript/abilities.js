$(document).ready(function () {
    $('.skill').click(function () {
        const skillArr = ['https://thumbs.gfycat.com/IgnorantThreadbareGrebe-mobile.mp4', 'https://thumbs.gfycat.com/VictoriousHugeIndianjackal-mobile.mp4', 'https://thumbs.gfycat.com/WeirdImpossibleGerenuk-mobile.mp4', 'https://thumbs.gfycat.com/MemorableSnappyKestrel-mobile.mp4', 'https://thumbs.gfycat.com/ShockedUnsungDwarfrabbit-mobile.mp4', 'https://thumbs.gfycat.com/SardonicFloweryCatfish-mobile.mp4', 'https://thumbs.gfycat.com/JampackedDangerousAmericanlobster-mobile.mp4', 'https://thumbs.gfycat.com/EmptyDecimalBongo-mobile.mp4', 'https://thumbs.gfycat.com/DangerousEssentialKarakul-mobile.mp4', 'https://thumbs.gfycat.com/SnoopyLittleBeaver-mobile.mp4'];
        $('.skill').removeClass("active");
        $(this).addClass("active");
        if ($('#top :nth-of-type(1)').hasClass('active')) {
            $("#src").attr('src', skillArr[0]);
        } else if ($('#top :nth-of-type(2)').hasClass('active')) {
            $("#src").attr('src', skillArr[1]);
        } else if ($('#top :nth-of-type(3)').hasClass('active')) {
            $("#src").attr('src', skillArr[2]);
        } else if ($('#top :nth-of-type(4)').hasClass('active')) {
            $("#src").attr('src', skillArr[3]);
        } else if ($('#top :nth-of-type(5)').hasClass('active')) {
            $("#src").attr('src', skillArr[4]);
        } else if ($('#top :nth-of-type(6)').hasClass('active')) {
            $("#src").attr('src', skillArr[5]);
        } else if ($('#top :nth-of-type(7)').hasClass('active')) {
            $("#src").attr('src', skillArr[6]);
        } else if ($('#top :nth-of-type(8)').hasClass('active')) {
            $("#src").attr('src', skillArr[7]);
        } else if ($('#top :nth-of-type(9)').hasClass('active')) {
            $("#src").attr('src', skillArr[8]);
        } else if ($('#top :nth-of-type(10)').hasClass('active')) {
            $("#src").attr('src', skillArr[9]);
        } else {
            $("#src").attr('src', skillArr[0]);
        }
    });
});
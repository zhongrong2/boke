//banner轮播
{
    $(".pagerbox li").click(function () {
        let index = $(this).index();
        // console.log("index");
        $(".pagerbox li").removeClass("active").eq(index).addClass("active");
        $(".imgbox li").removeClass("active").eq(index).addClass("active");
        n=index;
    })


    let n = 0;
    let flag = true;

    let t=setInterval(move,3000);
    $("#banner").mouseenter(function(){
        clearInterval(t);
    });
    $("#banner").mouseleave(function(){
        t=setInterval(move,3000);
    });

    function move() {
        n++;
        if (n === $(".imgbox li").length) {
            n = 0;
        }
        if (n < 0) {
            n = $(".imgbox li").length - 1;
        }
        $(".imgbox li").each(function () {
            flag = true;
            $(".imgbox li").removeClass("active").eq(n).addClass("active");
            $(".pagerbox li").removeClass("active").eq(n).addClass("active");
        });
    }
}
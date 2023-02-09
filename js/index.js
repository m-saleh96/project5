

let aboutOffest = $('#about').offset().top; //بحدد نهاية الناف بار عن طريق بداية العنصر الي بعديه
$(window).scroll(()=>{
    let windowScroll = $(window).scrollTop(); // دي ميسود جاهزة بتعرفني انا ااتعمل اسكرول توب ادئية وفي اسكرول ليفت
    if (windowScroll > aboutOffest) {
        $('#main-nav').css('backgroundColor' , 'rgba(0,0,0,0.7)')
        $('#btnUp').fadeIn(500) // عملت الزرار في الاتش وبعد كدا روحت السي اس ادتلو بوزشن فيكسد وخفيته وحددت مكانه بعد كدا جيت جافا
    } else {
        $('#main-nav').css('backgroundColor' , 'transparent')
        $('#btnUp').fadeOut(500)
    }
})

// let x = $('#test').offset(); // جيكويري ميسود بترجع التوب الشمال بتاع الالمنت ده في الموقع علشان اعمل اسكرول لحد فين
// console.log(x)

$("#btnUp").click(()=>{
    // $(window).scrollTop(0);  // دي بتطلع بداية الصفحة بسرعة فعملتها انميت ومينفعش احط ويندو فبحط البودي والاتش
    $("html,body").animate({scrollTop: '0'} , 2000) // ممكن احط الاتش او البودي بس المشكله اني في متصفحات بتشتغل ب ده و ف بالتاني فبحط الاتنين
})


$("a[href^='#']").click(function () {  // لو حطيت اي بس كدا هيجبلي كل اللينكات وهتعمل ايرور لو حطيت لينك مثلا لجوجل فهحددله يمسك العناصر الي بتبدا بهاش
    let ahref = $(this).attr('href')
    sectionOffest = $(ahref).offset().top;
    $('html,body').animate({scrollTop:sectionOffest} , 2000)
})






let colorItem = $('.color-item')
colorItem.eq(0).css('backgroundColor' , " orange")
colorItem.eq(1).css('backgroundColor' , " #09c")
colorItem.eq(1).css('backgroundColor' , " tomato")
colorItem.eq(3).css('backgroundColor' , " teal")
colorItem.eq(4).css('backgroundColor' , " #333")


colorItem.click(function () {
    let myColor = $(this).css('backgroundColor')
    $('p,h1,h2').css('color' , myColor)
})

$('#sideBarToggle').click(function () {
    // $('.color-box').toggle(500)
    let widthBox = $('.color-box').outerWidth(true)
    if ($('.sideBar').css('left') == "0px") {
        $(".sideBar").animate({ left : `-${widthBox}` } , 1000)
    } else {
        $(".sideBar").animate({ left : `0px` } , 1000)
    }
})






//window.onload //javascript  بعد ما كله يخلص لود تظهر الصفحة
$(document).ready(function () { //jquery تظهر الالمنت وتظهر كل حاجه بعد كدا يبدا يحمل الصور والكلام ده
    $('.spinner').fadeOut(1000 , function () {
        $('#loading').fadeOut(1000 , function () {
            $('body').css('overflow' , 'auto')
            $('#loading').remove()
        })
    })
})


function designSelect(){
    let $designSelect = $(".designSelect");
    let $designSelect_select = $designSelect.find(".designSelect-select");
    let $designSelect_option = $designSelect.find(".designSelect-option");
    let $designSelect_radio = $designSelect_option.find("input[type='radio']");

    $designSelect_select.on("click",function(){
        $designSelect_option.toggleClass("active");
    })

    $designSelect_radio.on("change",function(){
        let text = $(this).siblings("label").text();
        $designSelect_option.toggleClass("active");
        $designSelect_select.text(text);
    })
}

$(function(){
    designSelect();
})
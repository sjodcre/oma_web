function SubForm(){
    $.ajax({
        url:'https://calm-island-44171.herokuapp.com/submitform/',
        type:'post',
        data:$('#form-for-contact').serialize(),
        success:function(){
            alert("Thank you for contacting! I have received your message and will respond as soon as possible!\n\n Cheers!");
            location.href="./index.html";
        }
    });
}

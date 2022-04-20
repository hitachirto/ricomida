var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})

var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip2"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})



$(function(){
  $('#enviarCorreo').click(function(){
    alert("El correo fue enviado correctamente....");
  });
});


$("u").click(function(){
$(this).css({
"color": "red",
});
});

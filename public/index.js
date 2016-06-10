var source = $("#some-template").html(); 
var template = Handlebars.compile(source); 

Handlebars.registerHelper('image', function(fhs, image_id) {
  var html = "";
  //if( image_id != "0"){
    var html = '<img onerror="this.src=\'http://siliconvalleyrealtyworld.com/files/2011/09/Crash_Test_Dummy.jpg\'" src="img/pics/'+fhs+'.jpeg">';
  //}
  return new Handlebars.SafeString(html);
});

Handlebars.registerHelper('eqKA', function(func){
  if(func[0] === 'k.a.' || func[0] === 'k.A.'){
    return '';
  }
  return func;
})

Handlebars.registerHelper('eqWS', function(sex){
  if(sex[0] === 'w/s'){
    return 'ws';
  }
  return sex;
})

$('#search').on("keyup", function(e){
  if($('#search').val().length >= 3){
    $('#wrapper').addClass("smooth");
    search($('#search').val());
  }
  if(e.which === 13){
    $('#search').blur();
  }
});

function search(q) {
  return fetch(`/query/${q}`)
  .then((response) => {
   return response.json()
 })
  .then((json) => {
    var docs = json.response;
    $('#wrapper').html("");
    $('#wrapper').append(template(docs));
    $('#wrapper').removeClass("smooth");
  }); 
}
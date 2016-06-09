var source = $("#some-template").html(); 
var template = Handlebars.compile(source); 

Handlebars.registerHelper('image', function(fhs, className, image_id) {
  var cssClass = '';
  if(className != null) {
    cssClass = 'class="'+className+'" ';
  }
  if( image_id[0] === 0){
    var html = "";
  }
  else{
    var html = '<img '+cssClass+'src="img/pics/'+fhs+'.jpeg">';
  }
  return new Handlebars.SafeString(html);
});

Handlebars.registerHelper('eqKA', function(func){
  if(func === 'k.a.' || func === 'k.A.'){
    return ;
  }
  return func;
})

Handlebars.registerHelper('eqWS', function(sex){
  if(sex === 'w/s'){
    return 'ws';
  }
  return sex;
})

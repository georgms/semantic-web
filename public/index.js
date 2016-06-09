var source = $("#some-template").html(); 
var template = Handlebars.compile(source); 

var data = { 
  persons: [
    {
      "index": 3,
      "id": 37229,
      "forename": "Aisha",
      "surname": "Abdulaziz",
      "function": "k.A.",
      "type": "Studierende",
      "sex": "female",
      "image_id": "test"
    },
    {
      "index": 5,
      "id": 24234,
      "forename": "Alan Masato",
      "surname": "Abe",
      "function": "k.a.",
      "type": "Incoming",
      "sex": "w/s",
      "image_id": "test"
    },
    {
      "index": 5,
      "id": 24234,
      "forename": "Alan Masato",
      "surname": "Abe",
      "function": "badass",
      "type": "Incoming",
      "sex": "male",
      "image_id": "test"
    }
  ]
};

Handlebars.registerHelper('image', function(image_id, className) {
  var cssClass = '';
  if(className != null) {
    cssClass = 'class="'+className+'" ';
  }
  var html = '<img '+cssClass+'src="img/'+image_id+'.jpeg">';
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

$('body').append(template(data));
function getAge(button){
  store.populateAge = []
  store.populateMood = []
  store.user = []
  store.populateAge = button.value  
  $('#generation').fadeOut("slow");return false;
  getMood()
}

function getMood(){
  store.populateMood = $('#mood').val()
   $('#mood').fadeOut("slow");return false;
}
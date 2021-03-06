function insertAtCursor(myField, myValue) {
  //IE support
  if (document.selection) {
    myField.focus();
    sel = document.selection.createRange();
    sel.text = myValue;
  }

  //MOZILLA/NETSCAPE support
  else if (myField.selectionStart || myField.selectionStart == '0') {
    var startPos = myField.selectionStart;
    var endPos = myField.selectionEnd;
    myField.value = myField.value.substring(0, startPos)
                  + myValue
                  + myField.value.substring(endPos, myField.value.length);
  } else {
    myField.value += myValue;
  }
}

// calling the function
// insertAtCursor(document.formName.fieldName, ?this value?);

Drupal.contemplate = new Object();

Drupal.contemplate.toggle = function() {
  var target = $(this).attr('rel');
  if (this.checked) {
    $(target).attr('disabled', false);
  }
  else {
    $(target).attr('disabled', true);
  }
  $(target + '-keys').css('opacity', this.checked ? 1 : .2)
}


$(document).ready(function(){
  $("input[id*=enable]")
    .click(Drupal.contemplate.toggle)
});

// Saves options to chrome.storage.sync.
function save_options() {
  var linkSet = document.getElementById('like').value;
  chrome.storage.sync.set({
    linkSet: linkSet
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });


//thumbnail
    //http://img.youtube.com/vi/ya4yyg9XiI4/0.jpg
  var item = document.getElementById("thumb-image");
  var thumbnail = document.getElementById('like').value;
  var src = 'http://img.youtube.com/vi/'+ thumbnail +'/0.jpg';
  item.setAttribute("src", src);
    }

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value 
  chrome.storage.sync.get({
    linkSet: ''
  }, function(items) {
    document.getElementById('like').value = items.linkSet;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);



chrome.storage.sync.get({
    linkSet: ''
  }, function(items) {
   var thumbnail = items.linkSet;
    //thumbnail
    //http://img.youtube.com/vi/ya4yyg9XiI4/0.jpg
  var item = document.getElementById("thumb-image");
  var src = 'http://img.youtube.com/vi/'+ thumbnail +'/0.jpg';
  item.setAttribute("src", src);
   });



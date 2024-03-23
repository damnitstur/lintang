function gallery() {
  $('#welcomeText').text('Gallery');
  $('.content audio').remove();
  $('.gallery-container').show().empty();
  
  var paragraph = document.createElement("p");
  var text = document.createTextNode("Ini adalah galeri foto Lintang.");
  paragraph.appendChild(text);
  document.querySelector('.gallery-container').appendChild(paragraph);

  var images = [
    'url_gambar_1.jpg',
    'url_gambar_2.jpg',
    'url_gambar_3.jpg',
  ];

  images.forEach(function(imageUrl) {
    var img = document.createElement('img');
    img.src = imageUrl;
    document.querySelector('.gallery-container').appendChild(img);
  });
}

function home() {
  $('#welcomeText').text('Selamat datang di website resmi Lintang');
  $('.gallery-container').hide();
  $('.content p').remove();
  $('.content audio').remove();
}

function about() {
  $('#welcomeText').text('Tentang Lintang');
  $('.gallery-container').hide();
  $('.content p').remove();
  $('.content audio').remove();
}

function admin() {
  $('#welcomeText').text('Admin');
  $('.gallery-container').hide();
  $('.content p').remove();
  $('.content audio').remove();
}

function addMedia() {
  $('.content p').remove();
  $('.content audio').remove();
  $('#welcomeText').text('Audio Lintang');
  $('.gallery-container').hide();
  
  var audio = document.createElement("audio");
  audio.controls = true;
  audio.src = "https://drive.google.com/uc?export=download&id=1koF_3qQH-SWPNmSDS-PUgCDnwg4Am08E";
  document.querySelector('.content').appendChild(audio);
}

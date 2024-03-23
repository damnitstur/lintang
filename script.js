function gallery() {
  $('#welcomeText').text('Logo');
  $('.content audio').remove();
  $('.gallery-container').show().empty();
  
  var paragraph = document.createElement("p");
  var text = document.createTextNode("Ini adalah galeri foto Lintang.");
  paragraph.appendChild(text);
  document.querySelector('.gallery-container').appendChild(paragraph);

  var images = [
    'img/Artboard 10.jpg',
    'img/Artboard 20.jpg',
    'img/Artboard 30.jpg',
    'img/Artboard 40.jpg',
  ];

  images.forEach(function(imageUrl) {
    var img = document.createElement('img');
    img.src = imageUrl;
    document.querySelector('.gallery-container').appendChild(img);
  });

  // Menyembunyikan konten utama pada halaman lain jika ada
  $('.content p').remove();
  $('.content audio').remove();
}

function home() {
  $('#welcomeText').text('Selamat datang di website resmi Lintang');
  $('.gallery-container').hide();
}

function about() {
  $('#welcomeText').text('Tentang Lintang');
  $('.gallery-container').hide();
}

function admin() {
  $('#welcomeText').text('Admin');
  $('.gallery-container').hide();
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

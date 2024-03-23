function home() {
    $('#welcomeText').text('Selamat datang di website resmi Lintang Family').show(); // Menampilkan kembali #welcomeText
    $('.gallery-container').hide();
    $('.content audio').remove();
    $('.content p').remove();
    $('#aboutDescription').hide(); // Sembunyikan #aboutDescription di halaman home
    $('#anggotaFamily').hide(); // Sembunyikan #anggotaFamily di halaman home
}

function about() {
    $('#welcomeText').hide();
    $('.gallery-container').hide();
    $('.content p').hide();
    $('#aboutDescription').show();
    $('#anggotaFamily').hide();

   
    $('#aboutDescription').html(`
        <h3>Tentang Lintang : </h3>
        <div class="aboutDescriptionContent">
            <p>Nama Lintang diciptakan oleh Devi yang saat ini menjabat sebagai admin. Lintang didirikan pada tanggal 5 September 2022, dengan 60% anggota berasal dari migrasi NET Family, dengan Je sebagai ketua. Lintang dibuat sebagai respons terhadap hiruk-pikuk yang ada di aplikasi Litmatch. bahkan mungkin tidak peduli dengan semua aturan yg ada di Litmatch</p>
            <p>Tidak ada aturan pendaftaran yang kaku, dan tidak diwajibkan menggunakan title namun anggota dihimbau untuk tetap menjaga kewajiban solat</p>
            <p>Saat ini, Lintang memiliki dua title, yaitu L dan its. Title "its" (In TFOT Squad) merupakan generasi komunitas atau aliansi dari TFOT (The Family Of Tatalosa) atau Bogor Tatalosa, sebuah komunitas yang berdiri sejak tahun 2012 dengan anggota aktif sebanyak 200 orang, yang dipimpin oleh Its Tur.</p>
            <p>Jadi jika ingin bergabung sebaiknya dipikirkan terlebih dahulu karena kami benar tidak peduli dengan apapun yang ada di aplikasi lismet</p>
        </div>
    `);
}

function admin() {
    $('#welcomeText').hide();
    $('.gallery-container').hide();
    $('.content p').hide();
    $('#aboutDescription').hide(); 
    $('#anggotaFamily').html(`
        <h3>Anggota Family : </h3>
        <div class="anggotaFamilyContent">
            <p>Je - Kapten</p>
            <p>its Ar - Co Kapten</p>
            <p>its Tur - Co Kapten</p>
            <p>its Ap - Co Kapten</p>
            <p>Yila - Admin</p>
            <p>Iyo - Admin</p>
            <p>Icha - Admin</p>
            <p>Aren - Admin</p>
            <p>Lov - Admin</p>
            <p>Ris - Admin</p>
            <p>Yaya - Admin</p>
        </div>
    `).show(); 
}

function gallery() {
    $('#welcomeText').text('Logo').show();
    $('.content audio').remove();
    $('.gallery-container').show();
    $('#aboutDescription').hide(); 
    $('#anggotaFamily').hide(); 

    
    $('.gallery-container').empty();

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

 
    $('.content p').remove();
    $('.content audio').remove();
}

function addMedia() {
    $('.content p').remove();
    $('.content audio').remove();
    $('#welcomeText').text('Audio Lintang').show(); 
    $('.gallery-container').hide();
    $('#aboutDescription').hide();
    $('#anggotaFamily').hide(); 

    var audio = document.createElement("audio");
    audio.controls = true;
    audio.src = "https://drive.google.com/uc?export=download&id=1koF_3qQH-SWPNmSDS-PUgCDnwg4Am08E";
    document.querySelector('.content').appendChild(audio);
}

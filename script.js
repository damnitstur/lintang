function home(event) {
    event.preventDefault(); // Menghentikan aksi default dari hyperlink
    $('#welcomeText').text('Selamat datang di website resmi Lintang Family').show(); 
    $('.gallery-container').hide();
    $('.content audio').remove();
    $('.content p').remove();
    $('#aboutDescription').hide();
    $('#anggotaFamily').hide();
    $('#audioContent').hide(); // Sembunyikan elemen audio
}

function about() {
    $('#welcomeText').hide();
    $('.gallery-container').hide();
    $('.content p').hide();
    $('#aboutDescription').show(); // Menampilkan kembali #aboutDescription
    $('#aboutDescriptionContent').show(); // Menampilkan kembali konten di dalam #aboutDescription
    $('#anggotaFamily').hide();
        $('#aboutDescription').html(`
            <h3> Tentang Lintang : </h3>
            <div class="aboutDescriptionContent">
                <p>Nama Lintang diciptakan oleh Devi yang saat ini menjabat sebagai admin. Lintang didirikan pada tanggal 5 September 2022, dengan 60% anggota berasal dari migrasi NET Family, dengan Je sebagai ketua. Lintang dibuat sebagai respons terhadap hiruk-pikuk yang ada di aplikasi Litmatch. bahkan mungkin tidak peduli dengan semua aturan yg ada di Litmatch</p>
                <p>Tidak ada aturan pendaftaran yang kaku, dan tidak diwajibkan menggunakan title namun anggota dihimbau untuk tetap menjaga kewajiban solat</p>
                <p>Saat ini, Lintang memiliki dua title, yaitu L dan its. Title "its" (In TFOT Squad) merupakan generasi komunitas atau aliansi dari TFOT (The Family Of Tatalosa) atau Bogor Tatalosa, sebuah komunitas yang berdiri sejak tahun 2012 dengan anggota aktif sebanyak 200 orang, yang dipimpin oleh Its Tur.</p>
                <p>Jadi jika ingin bergabung sebaiknya dipikirkan terlebih dahulu karena kami benar tidak peduli dengan apapun yang ada di aplikasi lismet</p>
            </div>
            `).show();
    
}


function addMedia(event) {
    event.preventDefault(); // Menghentikan aksi default dari hyperlink
    $('.content p').remove();
    $('.content audio').remove();
    $('#welcomeText').text('Audio Lintang').show(); 
    $('.gallery-container').hide();
    $('#aboutDescription').hide();
    $('#anggotaFamily').hide(); 
    $('#audioContent').show(); // Tampilkan elemen audio

    var div = document.createElement("div");
    div.innerHTML = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1782701706&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/its-tur" title="It&#x27;s Tur" target="_blank" style="color: #cccccc; text-decoration: none;">It&#x27;s Tur</a> · <a href="https://soundcloud.com/its-tur/l-lintang" title="L~ Lintang" target="_blank" style="color: #cccccc; text-decoration: none;">L~ Lintang</a></div>';
    
    document.querySelector('#audioContent').innerHTML = ''; // Kosongkan konten audio sebelum menambahkan iframe baru
    document.querySelector('#audioContent').appendChild(div); // Tambahkan iframe baru ke dalam elemen audio
}

function admin(event) {
    event.preventDefault(); // Menghentikan aksi default dari hyperlink
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
    $('#audioContent').hide(); // Sembunyikan elemen audio
}

function gallery(event) {
    event.preventDefault(); // Menghentikan aksi default dari hyperlink
    $('#welcomeText').text('Logo').show();
    $('.content audio').remove();
    $('.gallery-container').show();
    $('#aboutDescription').hide(); 
    $('#anggotaFamily').hide(); 
    $('#audioContent').hide(); // Sembunyikan elemen audio

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
}


function home(event) {
    event.preventDefault();
    $('#welcomeText').text('Selamat datang di website resmi Lintang Family').show(); 
    $('.gallery-container').hide();
    $('.content audio').remove();
    $('.content p').remove();
    $('#aboutDescription').hide();
    $('#anggotaFamily').hide();
    $('#audioContent').hide();
}

function about() {
    $('#welcomeText').hide();
    $('.gallery-container').hide();
    $('.content p').hide();
    $('#aboutDescription').show();
    $('#aboutDescriptionContent').show();
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


function admin(event) {
    event.preventDefault(); 
    $('#welcomeText').hide();
    $('.gallery-container').hide();
    $('.content p').hide();
    $('#aboutDescription').hide(); 
    $('#anggotaFamily').html(`
        <h3>Anggota Family :</h3>
        <table class="anggotaFamilyTable">
            <tr>
                <th>Nama</th>
                <th>Jabatan</th>
            </tr>
            <tr>
                <td>Je</td>
                <td>Kapten</td>
            </tr>
            <tr>
                <td>its Ar</td>
                <td>Co Kapten</td>
            </tr>
            <tr>
                <td>its Tur</td>
                <td>Co Kapten</td>
            </tr>
            <tr>
                <td>its Ap</td>
                <td>Co Kapten</td>
            </tr>
            <tr>
                <td>Yila</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>Iyo</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>Icha</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>Aren</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>Lov</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>Ris</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>Yaya</td>
                <td>Admin</td>
            </tr>
        </table>
    `).show(); 
    $('#audioContent').hide();
}


function gallery(event) {
    event.preventDefault();
    $('#welcomeText').text('Logo').show();
    $('.content audio').remove();
    $('.gallery-container').show();
    $('#aboutDescription').hide(); 
    $('#anggotaFamily').hide(); 
    $('#audioContent').hide();

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


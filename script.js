alert ("Selamat Datang di Ticket App \n Yang Bisa Masuk Hanya Umur 13 Tahun Keatas");
const umur = prompt("Masukkan umur anda");
if (umur >= 13) {
    const studio = prompt("Masukkan studio yang ingin anda pesan \n A : Studio A \n B : Studio B \n C : Studio C");
    if (studio == "A" || studio == "B" || studio == "C") {
        const film = prompt("Pilih film \n 1 : Avangers \n 2 : Star Wars \n 3 : Ancika");
        let namaFilm
         if (film == "1") {
            namaFilm = "Avangers";
         } else if  (film == "2") {
            namaFilm = "Star Wars"
         } else if (film == "3"){
            namaFilm = "Ancika"
         }
        if (film == "1" || film == "2" || film == "3") {
            const nama = prompt("Masukkan nama anda");

        alert(`Berikut Ticket Anda! \n Nama : ${nama} \n Umur : ${umur} \n Studio : ${studio} \n Film : ${film}`);
    } else { 
        aleryt("Maaf film yang anda pilih tidak tersedia");
    }
    } else {
       alert("Anda harus memilih studio");
    } 
} else {
    alert("Maaf tidak bisa masuk, umur anda dibawah 13 Tahun");
}
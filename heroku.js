var convertbtn = document.getElementById("convertBtn"); //index.html sayfasında buton olayını gerçekleştirmek için çağırıyoruz
var UrlInput = document.getElementById("VideoId");      // Videonun url adresini yollayabilmemiz için işleme sokabilmemiz için index.html sayfasındaki input:text çağırıyoruz

convertbtn.addEventListener('click', function () { //event demek olayın yaşanması anlamına geliyor ve butonun tıklanma(click) yapılmasından sonra ES5-ES6 özelliği ile default bir fonksiyon oluşturduk
    SendUrl(UrlInput.value);//sendUrl fonksiyonuna input:text üzerinde yazıdığımız url değerini yolluyoruz
});

function SendUrl(URL) {
    window.location.href = 'https://rocky-sierra-89381.herokuapp.com/download?URL=' + URL; // Web adresinin URL kısmına href attribute dediklerimiz yönlendirme kısmına şu adresi ekliyoruz ve indirme olayını gerçekleştiriyor... mp3 müzik indirme
    UrlInput.value = ""; ///indirme işlemi yapıldıktan sonra anasayfamızın input:text kısmını temizlemeye yarar
}
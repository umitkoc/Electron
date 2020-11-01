const { app, BrowserWindow } = require("electron") //yeni pencere oluşturmak için iki değişken kullanalım ve iki değişkeni de require(elektron) dosyası aktaralım
const path = require("path")                    // pencerenin arayüzüne bir html ekleyebilmek için dosya yolunu oluşturalım
const url = require("url")                      // bir web üzerindeki url ile adresini belirtmek için kullanalım
let win                                       //fonksiyon dışında pencere değişkeni kullanmamın nedeni ana(main) bir pencere oluşturmak tıpkı bir html anasayfa oluşturmak gibi 
function CreateWindow() {                    // CreateWindow fonksiyonu ile pencere özelliklerini hazırlayalım
    win = new BrowserWindow({ width: 800, height: 700 })
    //ilk penceremizi oluşturduk ve pencerenin genişlik x yükseklik özelliklerini belirtelim. Eğer OOP konusunu biliyorsanız burda size constructor özelliğinden faydalandığımızı görüyoruz
    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),   //dosyayı html eklemek için __direction name dediğimiz yolunu belirttik ve index.html arayüzüne ekledik.
        protocol: "file:",  //dosyanın file olduğunu belirttik
        slashes: true       // slashes kullanmamızın sebebi mac veya linux gibi adres kısımlarında normalde windows un adres slashını farklı kullandığını bildiğimiz için sistemin kendi karar vermesi için true yaptık
    }))
    win.removeMenu()//üst menü kaldırır, isterseniz bunu aktif dışı yapın ve hangi menüden bahsettiğimi görebilirsiniz
    win.resizable = false         //burada pencerenin 800 x 600 demiştim ve pencerenin  boyutlarını sabitleyebilmem için resizable özelliği false yaptım
    //win.setOpacity(0.5)  pencerenin saydamlığını oluşturduk

}
app.on("ready", CreateWindow)  // ve geldik en son kısmına pencerenin çalışabilmesi için on ifadesini kullanıyoruz. Burada on dedikten sonra ready komutunu yazmamızın sebei tüm olaylar hazırlandıktan sonra pencerenin açılmasını istedik ve açılması için createwindow fonksiyonu çağırdık



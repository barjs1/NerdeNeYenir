/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

function svgturkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');
  const modal = document.getElementById('cityModal');
  const cityName = document.getElementById('cityName');
  const cityFoods = document.getElementById('cityFoods');
  const closeModal = document.querySelector('.close');

  // Yöresel yemek verileri
  const cityFoodsData = {
    adana: [
      { name: "Adana Kebap", image: "yemekResimleri/adanakepap.jpg" },
      { name: "Şalgam", image: "yemekResimleri/salgam.jpg" },
    ],
    adiyaman: [
      { name: "Çiğ Köfte", image: "yemekResimleri/cig-kofte.jpg" },
      { name: "İçli Köfte", image: "yemekResimleri/icli-kofte.jpg" },
    ],
    afyonkarahisar: [
      { name: "Sucuk", image: "yemekResimleri/sucuk.jpg" },
      { name: "Kaymaklı Ekmek Kadayıfı", image: "yemekResimleri/kaymakli-ekmek-kadayifi.jpg" },
    ],
    agri: [
      { name: "Abdigör Köftesi", image: "yemekResimleri/abdigor-koftesi.jpg" },
      { name: "Haşıl", image: "yemekResimleri/hasil.jpg" },
    ],
    amasya: [
      { name: "Amasya Çöreği", image: "yemekResimleri/amasya-coregi.jpg" },
      { name: "Baklalı Dolma", image: "yemekResimleri/baklali-dolma.jpg" },
    ],
    ankara: [
      { name: "Ankara Tava", image: "yemekResimleri/ankara-tava.jpg" },
      { name: "Beypazarı Kurusu", image: "yemekResimleri/beypazari-kurusu.jpg" },
    ],
    antalya: [
      { name: "Piyaz", image: "yemekResimleri/piyaz.jpg" },
      { name: "Serpme Börek", image: "yemekResimleri/serpme-borek.jpg" },
    ],
    artvin: [
      { name: "Kuymak", image: "yemekResimleri/kuymak.jpg" },
      { name: "Laz Böreği", image: "yemekResimleri/laz-boregi.jpg" },
    ],
    aydin: [
      { name: "Çingene Pilavı", image: "yemekResimleri/cingene-pilavi.jpg" },
      { name: "Paşa Böreği", image: "yemekResimleri/pasa-boregi.jpg" },
    ],
    balikesir: [
      { name: "Höşmerim", image: "yemekResimleri/hosmerim.jpg" },
      { name: "Tirit", image: "yemekResimleri/tirit.jpg" },
    ],
    bilecik: [
      { name: "Büzme Tatlısı", image: "yemekResimleri/buzme-tatlisi.jpg" },
      { name: "Nohutlu Mantı", image: "yemekResimleri/nohutlu-manti.jpg" },
    ],
    bingol: [
      { name: "Köftür", image: "yemekResimleri/koftur.jpg" },
      { name: "Lor Dolması", image: "yemekResimleri/lor-dolmasi.jpg" },
    ],
    bitlis: [
      { name: "İçli Köfte", image: "yemekResimleri/icli-kofte.jpg" },
      { name: "Şemşemok", image: "yemekResimleri/semsemok.jpg" },
    ],
    bolu: [
      { name: "Bolu Kebabı", image: "yemekResimleri/bolu-kebabi.jpg" },
      { name: "Mengen Pilavı", image: "yemekResimleri/mengen-pilavi.jpg" },
    ],
    burdur: [
      { name: "Burdur Şiş", image: "yemekResimleri/burdur-sis.jpg" },
      { name: "Ceviz Ezmesi", image: "yemekResimleri/ceviz-ezmesi.jpg" },
    ],
    bursa: [
      { name: "İskender Kebap", image: "https://gelecekpartisi.org.tr/uploads/teskilat_tanitim/galeri-bursa-kebabi-iskender-kebap-bursa-09_10_2022_17_01_01.jpg" },
      { name: "Kestane Şekeri", image: "yemekResimleri/kestane-sekeri.jpg" },
    ],
    canakkale: [
      { name: "Peynir Helvası", image: "yemekResimleri/peynir-helvasi.jpg" },
      { name: "Ezine Peyniri", image: "yemekResimleri/ezine-peyniri.jpg" },
    ],
    cankiri: [
      { name: "Yaren Güveci", image: "yemekResimleri/yaren-guveci.jpg" },
      { name: "Tutmaç Çorbası", image: "yemekResimleri/tutmac-corbasi.jpg" },
    ],
    corum: [
      { name: "İskilip Dolması", image: "yemekResimleri/iskilip-dolmasi.jpg" },
      { name: "Çorum Leblebisi", image: "yemekResimleri/corum-leblebisi.jpg" },
    ],
    denizli: [
      { name: "Kuyu Kebabı", image: "yemekResimleri/kuyu-kebabi.jpg" },
      { name: "Denizli Tandırı", image: "yemekResimleri/denizli-tandiri.jpg" },
    ],
    diyarbakir: [
      { name: "Kaburga Dolması", image: "yemekResimleri/kaburga-dolmasi.jpg" },
      { name: "Meftune", image: "yemekResimleri/meftune.jpg" },
    ],
    edirne: [
      { name: "Ciğer Tava", image: "yemekResimleri/ciger-tava.jpg" },
      { name: "Edirne Peyniri", image: "yemekResimleri/edirne-peyniri.jpg" },
    ],
    elazig: [
      { name: "Harput Köftesi", image: "yemekResimleri/harput-koftesi.jpg" },
      { name: "Lobik Çorbası", image: "yemekResimleri/lobik-corbasi.jpg" },
    ],
    erzincan: [
      { name: "Tulum Peyniri", image: "yemekResimleri/tulum-peyniri.jpg" },
      { name: "Kesme Çorbası", image: "yemekResimleri/kesme-corbasi.jpg" },
    ],
    erzurum: [
      { name: "Cağ Kebabı", image: "yemekResimleri/cag-kebabi.jpg" },
      { name: "Kadayıf Dolması", image: "yemekResimleri/kadayif-dolmasi.jpg" },
    ],
    eskisehir: [
      { name: "Çibörek", image: "yemekResimleri/ciborek.jpg" },
      { name: "Balaban Kebap", image: "yemekResimleri/balaban-kebap.jpg" },
    ],
    gaziantep: [
      { name: "Baklava", image: "yemekResimleri/baklava.jpg" },
      { name: "Ali Nazik", image: "yemekResimleri/ali-nazik.jpg" },
    ],
    giresun: [
      { name: "Karalahana Çorbası", image: "yemekResimleri/karalahana-corbasi.jpg" },
      { name: "Hamsi Pilavı", image: "yemekResimleri/hamsi-pilavi.jpg" },
    ],
    gumushane: [
      { name: "Pestil", image: "yemekResimleri/pestil.jpg" },
      { name: "Siron", image: "yemekResimleri/siron.jpg" },
    ],
    hakkari: [
      { name: "Doğaba", image: "yemekResimleri/dogaba.jpg" },
      { name: "Kepaye", image: "yemekResimleri/kepaye.jpg" },
    ],
    hatay: [
      { name: "Tepsi Kebabı", image: "yemekResimleri/tepsi-kebabi.jpg" },
      { name: "Künefe", image: "yemekResimleri/kunefe.jpg" },
    ],
    isparta: [
      { name: "Kabune Pilavı", image: "yemekResimleri/kabune-pilavi.jpg" },
      { name: "Gül Reçeli", image: "yemekResimleri/gul-receli.jpg" },
    ],
    mersin: [
      { name: "Tantuni", image: "yemekResimleri/tantuni.jpg" },
      { name: "Cezerye", image: "yemekResimleri/cezerye.jpg" },
    ],
    istanbul: [
      { name: "Sultanahmet Köftesi", image: "yemekResimleri/sultanahmet-koftesi.jpg" },
      { name: "Islak Hamburger", image: "yemekResimleri/islak-hamburger.jpg" },
    ],
    izmir: [
      { name: "Boyoz", image: "yemekResimleri/boyoz.jpg" },
      { name: "Kumru", image: "yemekResimleri/kumru.jpg" },
    ],
    kars: [
      { name: "Kars Kazı", image: "yemekResimleri/kars-kazi.jpg" },
      { name: "Hangel", image: "yemekResimleri/hangel.jpg" },
    ],
    kastamonu: [
      { name: "Etli Ekmek", image: "yemekResimleri/etli-ekmek.jpg" },
      { name: "Cide Pidesi", image: "yemekResimleri/cide-pidesi.jpg" },
    ],
    kayseri: [
      { name: "Mantı", image: "yemekResimleri/manti.jpg" },
      { name: "Yağlama", image: "yemekResimleri/yaglama.jpg" },
    ],
    kirklareli: [
      { name: "Papara", image: "yemekResimleri/papara.jpg" },
      { name: "Sütlü Hamur Tatlısı", image: "yemekResimleri/sutlu-hamur-tatlisi.jpg" },
    ],
    kirsehir: [
      { name: "Çullama", image: "yemekResimleri/cullama.jpg" },
      { name: "Seyfe Pilavı", image: "yemekResimleri/seyfe-pilavi.jpg" },
    ],
    kocaeli: [
      { name: "Ciğceli Kavurma", image: "yemekResimleri/cigceli-kavurma.jpg" },
      { name: "Kocaeli Simidi", image: "yemekResimleri/kocaeli-simidi.jpg" },
    ],
    konya: [
      { name: "Etli Ekmek", image: "yemekResimleri/etli-ekmek-konya.jpg" },
      { name: "Fırın Kebabı", image: "yemekResimleri/firin-kebabi.jpg" },
    ],
    kutahya: [
      { name: "Simit Tiridi", image: "yemekResimleri/simit-tiridi.jpg" },
      { name: "Ilıca Helvası", image: "yemekResimleri/ilica-helvasi.jpg" },
    ],
    malatya: [
      { name: "Kayısı Tatlısı", image: "yemekResimleri/kayisi-tatlisi.jpg" },
      { name: "Analı Kızlı", image: "yemekResimleri/anali-kizli.jpg" },
    ],
    manisa: [
      { name: "Manisa Kebabı", image: "yemekResimleri/manisa-kebabi.jpg" },
      { name: "Mesir Macunu", image: "yemekResimleri/mesir-macunu.jpg" },
    ],
    kahramanmaras: [
      { name: "Maraş Dondurması", image: "yemekResimleri/maras-dondurmasi.jpg" },
      { name: "Tarhana Çorbası", image: "yemekResimleri/tarhana-corbasi.jpg" },
    ],
    mardin: [
      { name: "İkbebet", image: "yemekResimleri/ikbebet.jpg" },
      { name: "Soğanlı Kebap", image: "yemekResimleri/soganli-kebap.jpg" },
    ],
    mugla: [
      { name: "Çökertme Kebabı", image: "yemekResimleri/cokertme-kebabi.jpg" },
      { name: "Keşkek", image: "yemekResimleri/keskek.jpg" },
    ],
    mus: [
      { name: "Muş Köftesi", image: "yemekResimleri/mus-koftesi.jpg" },
      { name: "Herise", image: "yemekResimleri/herise.jpg" },
    ],
    nevsehir: [
      { name: "Testi Kebabı", image: "yemekResimleri/testi-kebabi.jpg" },
      { name: "Düğün Çorbası", image: "yemekResimleri/dugun-corbasi.jpg" },
    ],
    nigde: [
      { name: "Niğde Tava", image: "yemekResimleri/nigde-tava.jpg" },
      { name: "Kaygana", image: "yemekResimleri/kaygana.jpg" },
    ],
    ordu: [
      { name: "Mısır Ekmeği", image: "yemekResimleri/misir-ekmegi.jpg" },
      { name: "Pancar Çorbası", image: "yemekResimleri/pancar-corbasi.jpg" },
    ],
    rize: [
      { name: "Muhlama", image: "yemekResimleri/muhlama.jpg" },
      { name: "Hamsikoli", image: "yemekResimleri/hamsikoli.jpg" },
    ],
    sakarya: [
      { name: "Islama Köfte", image: "yemekResimleri/islama-kofte.jpg" },
      { name: "Sakarca", image: "yemekResimleri/sakarca.jpg" },
    ],
    samsun: [
      { name: "Bafra Pidesi", image: "yemekResimleri/bafra-pidesi.jpg" },
      { name: "Kaz Tiridi", image: "yemekResimleri/kaz-tiridi.jpg" },
    ],
    siirt: [
      { name: "Perde Pilavı", image: "yemekResimleri/perde-pilavi.jpg" },
      { name: "Kitel", image: "yemekResimleri/kitel.jpg" },
    ],
    sinop: [
      { name: "Sinop Mantısı", image: "yemekResimleri/sinop-mantisi.jpg" },
      { name: "Islama", image: "yemekResimleri/islama.jpg" },
    ],
    sivas: [
      { name: "Sivas Köftesi", image: "yemekResimleri/sivas-koftesi.jpg" },
      { name: "Hingel", image: "yemekResimleri/hingel.jpg" },
    ],
    sanliurfa: [
      { name: "Urfa Kebabı", image: "yemekResimleri/urfa-kebabi.jpg" },
      { name: "Çiğ Köfte", image: "yemekResimleri/cig-kofte.jpg" },
    ],
    sirnak: [
      { name: "Serbidev", image: "yemekResimleri/serbidev.jpg" },
      { name: "Kipe", image: "yemekResimleri/kipe.jpg" },
    ],
    tekirdag: [
      { name: "Tekirdağ Köftesi", image: "yemekResimleri/tekirdagkofte.jpg" },
      { name: "Hayrabolu Tatlısı", image: "yemekResimleri/hayrabolu-tatlisi.jpg" },
    ],
    tokat: [
      { name: "Tokat Kebabı", image: "yemekResimleri/tokat-kebabi.jpg" },
      { name: "Bat", image: "yemekResimleri/bat.jpg" },
    ],
    trabzon: [
      { name: "Hamsiköy Sütlacı", image: "yemekResimleri/hamsikoy-sutlaci.jpg" },
      { name: "Akçaabat Köftesi", image: "yemekResimleri/akcabat-koftesi.jpg" },
    ],
    tunceli: [
      { name: "Gulik", image: "yemekResimleri/gulik.jpg" },
      { name: "Kete", image: "yemekResimleri/kete.jpg" },
    ],
    usak: [
      { name: "Tarhana Çorbası", image: "yemekResimleri/tarhana-corbasi-usak.jpg" },
      { name: "Cendere Tatlısı", image: "yemekResimleri/cendere-tatlisi.jpg" },
    ],
    van: [
      { name: "Van Kahvaltısı", image: "yemekResimleri/van-kahvaltisi.jpg" },
      { name: "Otlu Peynir", image: "yemekResimleri/otlu-peynir.jpg" },
    ],
    yozgat: [
      { name: "Yozgat Tandır Kebabı", image: "yemekResimleri/yozgat-tandir.jpg" },
      { name: "Desti Kebabı", image: "yemekResimleri/desti-kebabi.jpg" },
    ],
    zonguldak: [
      { name: "Zılbıt", image: "yemekResimleri/zilbit.jpg" },
      { name: "Uğmaç Çorbası", image: "yemekResimleri/ugmac-corbasi.jpg" },
    ],
    yalova: [
      { name: "Yalova sütlüsü", image: "yemekResimleri/zilbit.jpg" },
      { name: "Termal tatlısı", image: "yemekResimleri/ugmac-corbasi.jpg" },
    ],
    karabuk: [
      { name: "Safranbolu lokumu", image: "yemekResimleri/zilbit.jpg" },
      { name: "Bükme", image: "yemekResimleri/ugmac-corbasi.jpg" },
    ],
    bartin: [
      { name: "Pumpum çorbası", image: "yemekResimleri/zilbit.jpg" },
      { name: "Tatlı böreği", image: "yemekResimleri/ugmac-corbasi.jpg" },
    ],
    ardahan: [
      { name: "Erişte pilavı", image: "yemekResimleri/zilbit.jpg" },
      { name: "Hingel", image: "yemekResimleri/ugmac-corbasi.jpg" },
    ],
    kilis: [
      { name: "Kilis tava", image: "yemekResimleri/zilbit.jpg" },
      { name: "Cennet çamuru", image: "yemekResimleri/ugmac-corbasi.jpg" },
    ],    
    igdir: [
      { name: "Iğdır ketesi", image: "yemekResimleri/zilbit.jpg" },
      { name: "Bozbaş", image: "yemekResimleri/ugmac-corbasi.jpg" },
    ],
    bayburt: [
      { name: "Lahana dolması", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBq57G3hnEwfgvqM4m3Rqp35MiG-FSg5-nfg&s" },
      { name: "Tatlı çorba", image: "yemekResimleri/ugmac-corbasi.jpg" },
    ],
    osmaniye: [
      { name: "Etli kömbe", image: "yemekResimleri/zilbit.jpg" },
      { name: "Kabak tatlısı", image: "yemekResimleri/ugmac-corbasi.jpg" },
    ],
    duzce: [
      { name: "Düzce köftesi", image: "yemekResimleri/zilbit.jpg" },
      { name: "Melengüçceği tatlısı", image: "yemekResimleri/ugmac-corbasi.jpg" },
    ],
    
  };
  
    
    
   
    // Diğer iller için benzer şekilde ekleyin

  // İl üzerine gelindiğinde bilgi göster
  element.addEventListener('mouseover', function (event) {
    if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris') {
      info.innerHTML = `<div>${event.target.parentNode.getAttribute('data-iladi')}</div>`;
    }
  });

  // Fare hareketiyle bilgi kutusunu takip ettir
  element.addEventListener('mousemove', function (event) {
    info.style.top = event.pageY + 25 + 'px';
    info.style.left = event.pageX + 'px';
  });

  // Fare il üzerinden çıktığında bilgiyi temizle
  element.addEventListener('mouseout', function () {
    info.innerHTML = '';
  });

  // İl tıklandığında modal aç ve yemek bilgilerini göster
  element.addEventListener('click', function (event) {
    if (event.target.tagName === 'path') {
      const parent = event.target.parentNode;
      const id = parent.getAttribute('id');
      const name = parent.getAttribute('data-iladi');

      if (id === 'guney-kibris') {
        return;
      }

      // İl adını modal başlığına ekle
      cityName.textContent = name;

      // Yöresel yemekleri modal içeriğine ekle
      cityFoods.innerHTML = '';
      if (cityFoodsData[id]) {
        cityFoodsData[id].forEach(food => {
          const foodItem = document.createElement('div');
          foodItem.classList.add('food-item');
          foodItem.innerHTML = `
            <img src="${food.image}" alt="${food.name}" />
            <h4>${food.name}</h4>
          `;
          cityFoods.appendChild(foodItem);
        });
      } else {
        cityFoods.innerHTML = '<p>Bu il için yemek bilgisi bulunmamaktadır.</p>';
      }

      // Modal'ı göster
      modal.style.display = 'block';
      modal.style.maxHeight = '80vh'; // Modal yüksekliği ekranın %80'ini geçmesin
    }
  });
  

  // Modal'ı kapatma
  closeModal.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
  
  
}

// Haritayı başlat
document.addEventListener('DOMContentLoaded', svgturkiyeharitasi);


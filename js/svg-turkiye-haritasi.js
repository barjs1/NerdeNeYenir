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
      { name: "Adana Kebap", image: "https://i.lezzet.com.tr/images-xxlarge-secondary/adana-da-kebap-nerede-yenir-adananin-en-iyi-10-kebapcisi-fdf55840-dd4c-4aa4-9435-96aac5296cf5.jpg" },
      { name: "Şalgam", image: "https://www.sokakyemekleri.com/wp-content/uploads/2016/07/salgam-nedir.jpg" },
    ],
    adiyaman: [
      { name: "Çiğ Köfte", image: "https://images.deliveryhero.io/image/fd-tr/LH/lkx9-listing.jpg" },
      { name: "İçli Köfte", image: "https://turuncupazar.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-16-at-13.58.50.jpeg" },
    ],
    afyonkarahisar: [
      { name: "Sucuk", image: "https://www.suleymanpasa.bel.tr/icerikresimleri/img/sucukkk.jpg" },
      { name: "Kaymaklı Lokum", image: "https://lh5.googleusercontent.com/proxy/FP3N5lT5xAUeoBjz0oRP9iPh0N4J0W411kxdRFjhlO21DFuKf4-ih_veVMyF5e8XQ09gkQped75g2KAICErKe0vX350n2enTlWyMN5H9RcfZ3EY0bANJnFetJ79GnVY_" },
    ],
    agri: [
      { name: "Abdigör Köftesi", image: "https://www.kulturportali.gov.tr/contents/images/25022013_e51430f2-4d28-45ff-8c44-131a03eb301b.JPG" },
      { name: "Haşıl", image: "https://turkiye.influence.cool/img/tr/max/agri/merkez/yerel-lezzetler/agri-usulu-hasil/agri-usulu-hasil.jpg" },
    ],
    amasya: [
      { name: "Amasya Çöreği", image: "https://i.ytimg.com/vi/BV4og3iZUWo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBwu_o94NUaH_WZ7oPhPNFhNtAVFA" },
      { name: "Baklalı Dolma", image: "https://img3.aksam.com.tr/imgsdisk/2021/06/01/t25_tokatin-meshur-bakla-dolm-799.jpg" },
    ],
    ankara: [
      { name: "Ankara Tava", image: "https://blog.tatilsepeti.com/wp-content/uploads/2025/02/ankara-tava.jpg" },
      { name: "Beypazarı Kurusu", image: "https://www.kulturportali.gov.tr/repoKulturPortali/large/10012013/d42a7e98-8fea-4ea4-b60f-120cb2998977.jpg?format=jpg&quality=50" },
    ],
    antalya: [
      { name: "Piyaz", image: "https://cdn.karar.com/news/1631729.jpg" },
      { name: "Serpme Börek", image: "https://i.ytimg.com/vi/_TnPPDIdRuA/maxresdefault.jpg" },
    ],
    artvin: [
      { name: "Kuymak", image: "https://image.cnnturk.com/i/cnnturk/75/770x0/65ca0f5363722bfd50d98b3c.jpg" },
      { name: "Laz Böreği", image: "https://www.yesiltopuklar.com/wp-content/uploads/2021/01/Laz-B%C3%B6re%C4%9Fi-470x359.jpg" },
    ],
    aydin: [
      { name: "Çingene Pilavı", image: "https://i.ytimg.com/vi/nA7jONy-Mz4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDd4ivNovqHW-qKyt3oVTH3orXJMQ" },
      { name: "Paşa Böreği", image: "https://turkiye.influence.cool/img/tr/max/aydin/buharkent/yerel-lezzetler/pasa-boregi/pasa-boregi.jpg" },
    ],
    balikesir: [
      { name: "Höşmerim", image: "https://cdn.ye-mek.net/App_UI/Img/out/650/2014/02/hosmerim-tatlisi-resimli-yemek-tarifi(15).jpg" },
      { name: "Tirit", image: "https://i.ytimg.com/vi/0QuCN1U7MoE/maxresdefault.jpg" },
    ],
    batman: [
      { name: "Höşmerim", image: "https://cdn.ye-mek.net/App_UI/Img/out/650/2014/02/hosmerim-tatlisi-resimli-yemek-tarifi(15).jpg" },
      { name: "Tirit", image: "https://i.ytimg.com/vi/0QuCN1U7MoE/maxresdefault.jpg" },
    ],
    bilecik: [
      { name: "Büzme Tatlısı", image: "https://i.ytimg.com/vi/jedrMTiXti0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBNs_T2RdCnjsX9RobvCOvQDyYxAA" },
      { name: "Nohutlu Mantı", image: "https://cdn.karar.com/news/1441401.jpg" },
    ],
    bingol: [
      { name: "Löl böreği", image: "https://www.gidelimmi.com/wp-content/uploads/2023/01/lol.jpg" },
      { name: "Sorina Pel", image: "https://www.gidelimmi.com/wp-content/uploads/2023/01/sorina-pel.jpg" },
    ],
    bitlis: [
      { name: "Büryan", image: "https://siirtburyansalonu.wordpress.com/wp-content/uploads/2017/12/siirt-bc3bcryanc4b1.jpg" },
      { name: "Şemşemok", image: "https://i.ytimg.com/vi/a1csilBNsyg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDyvfKxBDIOF_-isVmPKni2Fayhng" },
    ],
    bolu: [
      { name: "Bolu Kebabı", image: "https://www.ardaninmutfagi.com/wp-content/uploads/2018/04/bolu-kebabi.jpeg" },
      { name: "Mengen Pilavı", image: "https://image.hurimg.com/i/hurriyet/75/0x0/5ddbea8b7152d812946becdc.jpg" },
    ],
    burdur: [
      { name: "Burdur Şiş", image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Burdur_%C5%9Fi%C5%9F_%2823955085040%29.jpg" },
      { name: "Ceviz Ezmesi", image: "https://static.daktilo.com/sites/71/uploads/2021/10/20/burdur-usulu-ceviz-ezmesi-nasil-yapilir.jpg" },
    ],
    bursa: [
      { name: "İskender Kebap", image: "https://gelecekpartisi.org.tr/uploads/teskilat_tanitim/galeri-bursa-kebabi-iskender-kebap-bursa-09_10_2022_17_01_01.jpg" },
      { name: "Kestane Şekeri", image: "https://www.sehrinmeshuru.com/wp-content/uploads/2021/11/kestane-sekeri-.jpg" },
    ],
    canakkale: [
      { name: "Peynir Helvası", image: "https://www.shopsa.com.tr/news/peynirtatlisii.jpg" },
      { name: "Tumbi", image: "https://mo.ciner.com.tr/video/2016/02/24/ver1726038663/78825AF230ACF66A0DD81EAB279BFFC6_640x360.jpg" },
    ],
    cankiri: [
      { name: "Yaren Güveci", image: "https://i12.haber7.net//fotogaleri/haber7/album/2017/47/cankirinin_meshur_lezzetleri_1511253365_6482.png" },
      { name: "Tutmaç Çorbası", image: "https://cdn.ye-mek.net/App_UI/Img/out/650/2020/04/tutmac-corbasi-resimli-yemek-tarifi(11).jpg" },
    ],
    corum: [
      { name: "İskilip Dolması", image: "https://i.ytimg.com/vi/3KKhtXT8_IQ/maxresdefault.jpg" },
      { name: "Çorum Leblebisi", image: "https://www.tunahankayisi.com/media/products/1200x1200/corum-leblebisi-1743918.jpg" },
    ],
    denizli: [
      { name: "Kuyu Kebabı", image: "https://taskoprupostasicom.teimg.com/taskoprupostasi-com/uploads/2023/10/kuyu-kebabi.jpg" },
      { name: "Denizli Tandırı", image: "https://www.denizlikebabi.net/icerikResimler/61_866443235_30025.jpg" },
    ],
    diyarbakir: [
      { name: "Kaburga Dolması", image: "https://iasbh.tmgrup.com.tr/86f2aa/812/468/0/1248/1804/2287?u=http://i.tmgrup.com.tr/sfr/2013/10/02/Orjinal/605709677843.jpg" },
      { name: "Meftune", image: "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/ogt/meftune.webp" },
    ],
    edirne: [
      { name: "Ciğer Tava", image: "https://cdn.ye-mek.net/App_UI/Img/out/650/2024/01/ciger-kavurma-resimli-yemek-tarifi(12).jpg" },
      { name: "Zirva", image: "https://www.tekirdagbakis.com/sites/1683/uploads/2024/08/26/large/6109-6.jpg?" },
    ],
    elazig: [
      { name: "Harput Köftesi", image: "https://i.ytimg.com/vi/I37T2aPzXIU/maxresdefault.jpg" },
      { name: "Lobik Çorbası", image: "https://i.superhaber.com/storage/files/images/2021/09/14/eriste-corbasi.jpg" },
    ],
    erzincan: [
      { name: "Tulum Peyniri", image: "https://blog-biletall.mncdn.com/wp-content/uploads/2021/12/tulum-peynir.jpg" },
      { name: "Kesme Çorbası", image: "https://i.ytimg.com/vi/59cwB8FrLmY/maxresdefault.jpg" },
    ],
    erzurum: [
      { name: "Cağ Kebabı", image: "https://cdn.getiryemek.com/products/1579178664726_1000x750.png" },
      { name: "Kadayıf Dolması", image: "https://www.hastelgida.com/images/tarifler/kadayif-dolmasi-1.jpg" },
    ],
    eskisehir: [
      { name: "Çibörek", image: "https://turkishfoodie.com/wp-content/uploads/2018/12/Ciborek.jpg" },
      { name: "Balaban Kebap", image: "https://silivribalabankebap.com/wp-content/uploads/2024/06/postbalaban1.jpg" },
    ],
    gaziantep: [
      { name: "Baklava", image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Baklava%281%29.png" },
      { name: "Ali Nazik", image: "https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/9247/uploads/urunresimleri/buyuk/ali-nazik-4970.jpg" },
    ],
    giresun: [
      { name: "Karalahana Çorbası", image: "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/4_16_11zon.webp" },
      { name: "Hamsi Pilavı", image: "https://sukrankaymak.com/wp-content/uploads/2021/07/hamsili-pilav-tarifi.jpg" },
    ],
    gumushane: [
      { name: "Pestil", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJ80TpfQzYh4j-ivX09dPMLMBthagFkFLPQ&s" },
      { name: "Siron", image: "https://s8k8w4m8.delivery.rocketcdn.me/wp-content/uploads/2017/05/kiymali_siron_tarifi-640x445.jpg" },
    ],
    hakkari: [
      { name: "Doğaba", image: "https://egepazarindan.com/wp-content/uploads/2023/11/dogaba-tarifi.jpg" },
      { name: "Kepaye", image: "https://turkiye.influence.cool/img/tr/max/hakkari/semdinli/yerel-lezzetler/kepaye/kepaye.jpg" },
    ],
    hatay: [
      { name: "Tepsi Kebabı", image: "https://i.pinimg.com/736x/4b/5e/d5/4b5ed522538ce2704d3c20772b1a57f6.jpg" },
      { name: "Künefe", image: "https://ziyadeqr.mg-qr.com/wp-content/uploads/2024/05/kunefe.webp" },
    ],
    isparta: [
      { name: "Kabune Pilavı", image: "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/3_1_11zon.webp" },
      { name: "Banak", image: "https://gastromanya.com/wp-content/uploads/2016/12/banak-226.jpg" },
    ],
    mersin: [
      { name: "Tantuni", image: "https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/68211/uploads/urunresimleri/buyuk/ekmek-arasi-tavuk-tantuni-e111a6.jpg" },
      { name: "Cezerye", image: "https://www.bulutlarshop.com.tr/images/urunler/r_r_antep-fistikli-yaprak-cezerye-resim-472.webp" },
    ],
    istanbul: [
      { name: "Sultanahmet Köftesi", image: "https://iaahbr.tmgrup.com.tr/f22754/1200/627/0/26/880/487?u=https://iahbr.tmgrup.com.tr/album/2019/04/10/sultanahmet-koftesi-nedir-en-leziz-sultanahmet-koftesi-tarifi-1554907271878.jpg" },
      { name: "Islak Hamburger", image: "https://static.ticimax.cloud/cdn-cgi/image/width=540,quality=99/9247/uploads/blog/islak-hamburger-nedir-ve-nasil-yapilir-e3ec.jpeg" },
    ],
    izmir: [
      { name: "Boyoz", image: "https://cdn.ye-mek.net/App_UI/Img/out/650/2022/09/yufkadan-yalanci-boyoz-resimli-yemek-tarifi(19).jpg" },
      { name: "Kumru", image: "https://www.cumhuriyet.com.tr/Archive/2024/7/11/105504932-kumru1.jpg" },
    ],
    kars: [
      { name: "Kars Kazı", image: "https://www.bizevdeyokuz.com/wp-content/uploads/karsta-ne-yenir.jpg" },
      { name: "Hangel", image: "https://i.ytimg.com/vi/UH5X3QSqwb8/sddefault.jpg" },
    ],
    kastamonu: [
      { name: "Ecevit Çorbası", image: "https://i.lezzet.com.tr/images-xxlarge-recipe/ecevit_corbasi_kastamonu-9df12d21-86e3-4694-9b41-df9c764ea935.jpg" },
      { name: "Banduma", image: "https://i.ytimg.com/vi/lVWprxdY3KY/maxresdefault.jpg" },
    ],
    kayseri: [
      { name: "Mantı", image: "https://www.shopsa.com.tr/upload/news/960x600/mant.jpg" },
      { name: "Yağlama", image: "https://www.datocms-assets.com/43891/1710937454-shutterstock_2139918249.jpg?auto=compress%2Cformat" },
    ],
    kirklareli: [
      { name: "Papara", image: "https://ticarihayatcom.teimg.com/ticarihayat-com/uploads/2024/12/papara-2.jpg" },
      { name: "Papaz yahnisi", image: "https://cdn.yemek.com/uploads/2015/06/yahni-tarifi.jpg" },
    ],
    kirsehir: [
      { name: "Çullama", image: "https://i.lezzet.com.tr/images-xxlarge-recipe/cullama-786244ed-45ab-4a35-a72b-76900dbc5902.jpg" },
      { name: "Seyfe Pilavı", image: "https://www.ardaninmutfagi.com/wp-content/uploads/2017/06/tel-sehriye-pilav.jpg" },
    ],
    kocaeli: [
      { name: "Ciğceli Kavurma", image: "https://img.piri.net/mnresize/640/-/piri/upload/image/2019/2/21/9df978c7-2_8cf709b0.jpg" },
      { name: "Kocaeli Simidi", image: "https://i.kocaelibarisgazetesi.com/2/1280/720/storage/old/uploads/2025/04/11/kocaelide-simit-fiyatlarina-valilik-el-atti-iste-belirlenen-fiyatlar.jpeg" },
    ],
    konya: [
      { name: "Etli Ekmek", image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Etliekmek.jpg" },
      { name: "Fırın Kebabı", image: "https://image.hurimg.com/i/hurriyet/75/750x422/5dc1486bc9de3d1cd46a6e70.jpg" },
    ],
    kutahya: [
      { name: "Simit Tiridi", image: "https://www.ardaninmutfagi.com/wp-content/uploads/2019/08/simit-tiridi.jpg" },
      { name: "Ilıca Helvası", image: "https://image.milimaj.com/i/milliyet/75/869x477/6172a6bd86b244458c3e1f5e.jpg" },
    ],
    malatya: [
      { name: "Kayısı Tatlısı", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfECln49FVHARziwGj_pvoaN1cEgjfdLdk8A&s" },
      { name: "Analı Kızlı", image: "https://turkiyeturizmansiklopedisi.com/uploads/img/2024/02/16/b4b1dce2f1d0c6ab4db603793adbd0bdb64e449d.jpg" },
    ],
    manisa: [
      { name: "Manisa Kebabı", image: "https://manisayasam.com/uploads/manisa%20kebab%C4%B1%20tarifi%20malzemeleri-i65b120a2820a1.jpg" },
      { name: "Mesir Macunu", image: "https://i.nefisyemektarifleri.com/2023/08/31/mesir-macunu-faydalari-nelerdir-1.jpg" },
    ],
    kahramanmaras: [
      { name: "Maraş Dondurması", image: "https://kahramanmaras.bel.tr/fs/dosyalar/resimler/344.jpg" },
      { name: "Tarhana Çorbası", image: "https://glutensiztarifdefteri.com/wp-content/uploads/2024/06/glutensiz-tarhana-corbasi.webp" },
    ],
    mardin: [
      { name: "İkbebet", image: "https://www.ipekbulgurtarifleri.com/wp-content/uploads/2023/07/unnamed-3.jpg" },
      { name: "Soğanlı Kebap", image: "https://i.lezzet.com.tr/images-xxlarge-recipe/sogan_kebabi_gaziantep-eaa62a30-2e28-4e84-a20c-c3bd4c202e06.jpg" },
    ],
    mugla: [
      { name: "Çökertme Kebabı", image: "https://gezginbirchef.com/wp-content/uploads/2019/12/cokertme-kebabi-tarifi.jpg" },
      { name: "Keşkek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYtzZF4c7jkR7XR1IXbUDr1yiUO2fUTMvLgg&s" },
    ],
    mus: [
      { name: "Muş Köftesi", image: "https://www.kulturportali.gov.tr/repoKulturPortali/large/04022013/262d092f-beea-4521-be09-87bb5093d893.jpg?format=jpg&quality=50" },
      { name: "Herise", image: "https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//TurkMutfagi/20171214123530521_herise.htm1.jpg?format=jpg&quality=50" },
    ],
    nevsehir: [
      { name: "Testi Kebabı", image: "https://foto.haberler.com/haber/2024/07/18/masterchef-testi-kebabi-tarifi-l-masterchef-testi-17533088_8183_amp.jpg" },
      { name: "Düğün Çorbası", image: "https://image.hurimg.com/i/hurriyet/75/750x422/5e467fbf0f25442fb4007565.jpg" },
    ],
    nigde: [
      { name: "Niğde Tava", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_u7U_q2o7kKeR9VmPlTME0xJZEObMOpRp1w&s" },
      { name: "Kaygana", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5TeJkomQEFVRSghPRep5Wco2GZ9vDCHwP8A&s" },
    ],
    ordu: [
      { name: "Mısır Ekmeği", image: "https://i.lezzet.com.tr/images-xxlarge/misir-ekmegi-453708-9ecbc3c7-a1dd-4d22-acf1-013414fb52de" },
      { name: "Pancar Çorbası", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfg5ewjPA3v-D5tmG9aJAfKctgKAgXICCSoA&s" },
    ],
    rize: [
      { name: "Muhlama", image: "https://image.hurimg.com/i/hurriyet/75/750x422/5ddfbe150f25441c6cc752a4.jpg" },
      { name: "Hamsikoli", image: "https://karadenizgazete.com.tr/External/News/f702dd4a4c044e02882b659878baf621.jpg" },
    ],
    sakarya: [
      { name: "Islama Köfte", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ZNyjgQq7q5mml2xyVenWyToLnjTvLqCaxA&s" },
      { name: "Sakarca", image: "https://image.gazetevatan.com/i/gazetevatan/75/1200x675/62fba61b7862ae5fa13f5c24.jpg" },
    ],
    samsun: [
      { name: "Bafra Pidesi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-KjfjCky1MxuinGzO91xyL-Pq7hZ4RLFGHA&s" },
      { name: "Kaz Tiridi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyjzmyuDOKEuKSgczc8GT3rzlgMmmT9CFdQ&s" },
    ],
    siirt: [
      { name: "Perde Pilavı", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtT3EoLtUpuAzMRVqip1Qn6-3hUXIfzBZ5Ig&s" },
      { name: "Kitel", image: "https://i.pinimg.com/736x/7f/ac/13/7fac13d7eabef5fa08c7365fd9ec419d.jpg" },
    ],
    sinop: [
      { name: "Sinop Mantısı", image: "https://i.lezzet.com.tr/images-xxlarge-recipe/sinop_mantisi-066e8c61-8ce1-404f-b2d8-ef0bb7d6ed82.jpg" },
      { name: "Islama", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWPRisa6UlhosM0VYEvnvSiQ5WkCUd79NMwg&s" },
    ],
    sivas: [
      { name: "Sivas Köftesi", image: "https://i.lezzet.com.tr/images-xxlarge-recipe/sivas-koftesi-e9413349-bb8f-47a9-86d9-a27f8445ae84.jpg" },
      { name: "Hingel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4fTu1NSHSCFhIh6itP0f9rrrS_ekqnNLMw&s" },
    ],
    sanliurfa: [
      { name: "Urfa Kebabı", image: "https://static.wixstatic.com/media/403236_2f670136074b499d851986079f78333b~mv2.png/v1/fill/w_568,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/403236_2f670136074b499d851986079f78333b~mv2.png" },
      { name: "Çiğ Köfte", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4T6n9UCg3uR-qVeCRULltqSYtof79zyG4wQ&s" },
    ],
    sirnak: [
      { name: "Serbidev", image: "https://www.kulturportali.gov.tr/repoKulturPortali/large/06062014/f9c6be15-f7b6-4f68-a7a5-61429c23be2b.JPG?format=jpg&quality=50" },
      { name: "Kipe", image: "https://turkiye.influence.cool/img/tr/max/sirnak/guclukonak/yerel-lezzetler/sirnak-usulu-kipe/sirnak-usulu-kipe.jpg" },
    ],
    tekirdag: [
      { name: "Tekirdağ Köftesi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXe0IF2u_KGhmsfqTqEWPpW5Cn30NDwYabA&s" },
      { name: "Hayrabolu Tatlısı", image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Hayrabolu_Dessert.jpg" },
    ],
    tokat: [
      { name: "Tokat Kebabı", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxrM1y47CGGIrUI41F41LjgiNvVccMEEZktA&s" },
      { name: "Bat", image: "https://www.ardaninmutfagi.com/wp-content/uploads/2017/04/bat-tokat-yoresi-2.jpg" },
    ],
    trabzon: [
      { name: "Hamsiköy Sütlacı", image: "https://images.deliveryhero.io/image/fd-tr/LH/gqi4-listing.jpg" },
      { name: "Akçaabat Köftesi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMVAuLOwFw5USitXpE81elQVhaUtYWoU93A&s" },
    ],
    tunceli: [
      { name: "Gulik", image: "https://mucadelegazetesicomtr.teimg.com/mucadelegazetesi-com-tr/uploads/2024/01/tunceli-yemek-gulik-ot.jpg" },
      { name: "Kete", image: "https://m.yemekev.com/uploads/images/gallery/unlukete.jpg" },
    ],
    usak: [
      { name: "Tarhana Çorbası", image: "https://glutensiztarifdefteri.com/wp-content/uploads/2024/06/glutensiz-tarhana-corbasi.webp" },
      { name: "Cendere Tatlısı", image: "https://i0.wp.com/farm9.staticflickr.com/8056/8115543692_0f24b93995_z.jpg?resize=400%2C200" },
    ],
    van: [
      { name: "Van Kahvaltısı", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwbsKHqvgxYnRfNz9ROBSmDxYU0HAnhGt8g&s" },
      { name: "Otlu Peynir", image: "https://i.nefisyemektarifleri.com/2023/07/24/van-otlu-peyniri-nasil-yapilir-saklanir-icindeki-otlar-nelerdir.jpg" },
    ],
    yozgat: [
      { name: "Yozgat Tandır Kebabı", image: "https://www.kulturportali.gov.tr/repoKulturPortali/small/PetekIcon/yozgattandirkebabai_20180710165526382.jpg" },
      { name: "Desti Kebabı", image: "https://image.hurimg.com/i/hurriyet/75/750x422/601023b1c9de3d2278d87560.jpg" },
    ],
    zonguldak: [
      { name: "Zılbıt", image: "https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//TurkMutfagi/20190506111403172_kasarli%20zilbit.jpg?format=jpg&quality=50" },
      { name: "Uğmaç Çorbası", image: "https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//TurkMutfagi/20190208153937636_Bulgurlu%20Ugmac.jpg?format=jpg&quality=50" },
    ],
    yalova: [
      { name: "Yalova sütlüsü", image: "https://i.lezzet.com.tr/images-xxlarge-recipe/yalova-sutlusu-25cc564c-2eeb-44e3-8c5a-5cc87d2f04de.jpg" },
      { name: "Termal tatlısı", image: "https://cdn.hellovillam.com/HelloVillam/images/w596/2022-06/termal-tatlisi_QJ394HV4W3SOA8LYB2DQR04QOFF4T4.jpg" },
    ],
    karabuk: [
      { name: "Safranbolu lokumu", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBLxEjd4lF0gH21COJ8BhbXys9kAPQj5UScg&s" },
      { name: "Bükme", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbzmy8KRmJCHn2Bdc43AkmOZuq-jXSNC7eg&s" },
    ],
    bartin: [
      { name: "Pumpum çorbası", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLbu4Vv3VmXIVlOw1j8MdmLHL_5qp_Nb70Q&s" },
      { name: "Tatlı böreği", image: "https://www.bakab.gov.tr/wp-content/uploads/2023/12/TATLI-BOREK-575x431.jpeg" },
    ],
    ardahan: [
      { name: "Erişte pilavı", image: "https://cdn.ye-mek.net/App_UI/Img/out/650/2023/10/sebzeli-eriste-pilavi-resimli-yemek-tarifi(12).jpg" },
      { name: "Hingel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4fTu1NSHSCFhIh6itP0f9rrrS_ekqnNLMw&s" },
    ],
    kilis: [
      { name: "Kilis tava", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3HUrsHqBgbYl8yMwMJwSoDrq1sASRFl1lhw&s" },
      { name: "Cennet çamuru", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeKpODZmDLjeesW1ndVVx-Wd0-zJbD1xoeLg&s" },
    ],    
    igdir: [
      { name: "Iğdır ketesi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8LkAfskDc1NeKBly49R7MXZ3CItTH0aS-g&s" },
      { name: "Bozbaş", image: "https://image.hurimg.com/i/hurriyet/75/750x422/5c6a9c59c03c0e3b50fa23e8.jpg" },
    ],
    bayburt: [
      { name: "Lahana dolması", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiYSOmQ7UeUHtgTAirdxC0l_5IzCIRj7INQ&s" },
      { name: "Tatlı çorba", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMj7T71V1wgoLxWJvf40nHKRjx4FH2Mvw4eA&s" },
    ],
    osmaniye: [
      { name: "Etli kömbe", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ElHSOQzTCt1bLaccw2uiClQmbpzVaXwjvQ&s" },
      { name: "Kabak tatlısı", image: "https://i.lezzet.com.tr/images-xxlarge-recipe/kabak_tatlisi-92bdccc7-ea10-44d3-a83e-90a8ed9a9e07.jpg" },
    ],
    duzce: [
      { name: "Düzce köftesi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ldtrtp0xaXCDk12SdcnBAi9PNSduXoC6UQ&s" },
      { name: "Melengüçceği tatlısı", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfbw6DSSAJ8YRG709LaxTCro2e-9MI-AP3g&s" },
    ],
    
  };

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
  
      if (id === 'guney-kibris') return;
  
      cityName.textContent = name;
      cityFoods.innerHTML = '';
  
      // Yemek verilerini göster
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
  
      showComments(id); // 🟨 BU satır yeni yorumlar için
  
      modal.style.display = 'block'; // 🟥 BU SATIR MUTLAKA OLMALI
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
  function searchCity(cityName) {
    const paths = document.querySelectorAll("#svg-turkiye-haritasi [data-iladi]");
    let found = false;
  
    paths.forEach(path => {
      const ilAdi = path.getAttribute("data-iladi").toLowerCase();
      if (ilAdi === cityName.toLowerCase()) {
        document.querySelectorAll("#svg-turkiye-haritasi path").forEach(p => p.classList.remove("selected"));
        path.classList.add("selected"); // Seçilen ili vurgulamak için
        path.scrollIntoView({ behavior: "smooth", block: "center" });
  
        // Yanıp sönme efekti
        path.style.animation = "blink 1s ease-in-out";
        setTimeout(() => path.style.animation = "", 1000);
  
        found = true;
      }
    });
  
    if (!found) {
      alert("Şehir bulunamadı.");
    }
  }

}


// 🌟 BU KISIMI svgturkiyeharitasi() fonksiyonunun DIŞINA AL
const cityComments = {};

function addComment() {
  const commentInput = document.getElementById('commentInput');
  const ratingInput = document.getElementById('ratingInput');
  const cityName = document.getElementById('cityName').textContent;

  const comment = commentInput.value.trim();
  const rating = ratingInput.value;
  const city = cityName.toLowerCase();

  if (!comment) {
    alert("Yorum boş olamaz.");
    return;
  }

  if (!cityComments[city]) {
    cityComments[city] = [];
  }

  cityComments[city].push({ text: comment, rating: rating });

  commentInput.value = '';
  showComments(city);
}

function showComments(city) {
  const list = document.getElementById('commentList');
  list.innerHTML = '<h4>Yorumlar</h4>';

  if (cityComments[city] && cityComments[city].length > 0) {
    cityComments[city].forEach(entry => {
      const item = document.createElement('div');
      item.style.borderBottom = '1px solid #ccc';
      item.style.marginBottom = '10px';
      item.innerHTML = `<strong>Puan: ${entry.rating}/5</strong><br>${entry.text}`;
      list.appendChild(item);
    });
  } else {
    list.innerHTML += '<p>Henüz yorum yapılmamış.</p>';
  }
}


// Haritayı başlat
document.addEventListener('DOMContentLoaded', svgturkiyeharitasi);


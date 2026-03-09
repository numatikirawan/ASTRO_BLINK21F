// Data soal khusus LATIHAN MANDIRI — terpisah dari materi dan game quiz
// Edit file ini untuk mengubah konten Latihan Mandiri tanpa mempengaruhi Materi atau Game Quiz

export interface LatihanSoal {
  no: number;
  soal: string;
  options?: string[]; // opsional: untuk soal essay tidak perlu options
}

export interface LatihanMandiriContent {
  title: string;
  kelas: string;
  backPath: string;
  backLabel: string;
  soal: LatihanSoal[];
}

export const latihanMandiriData: Record<string, LatihanMandiriContent> = {

  // ===== BILANGAN BULAT - PENJUMLAHAN ===== 
  "bilangan-bulat/penjumlahan": {
    title: "LATIHAN MANDIRI — PENJUMLAHAN BILANGAN BULAT",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      {
        no: 1,
        soal: "Perubahan Suhu — Pada suatu pagi, suhu di sebuah ruangan pendingin adalah 4°C. Berapa derajat suhu di ruangan tersebut jika mengalami perubahan berikut?\na. Suhu naik 7°C.\nb. Suhu turun 12°C.",
      },
      {
        no: 2,
        soal: "Posisi Ketinggian/Kedalaman — Pasangan bilangan berikut menunjukkan posisi ketinggian suatu tempat atau kedalaman penyelam dari permukaan air laut. Dari tiap-tiap pasangan bilangan berikut, manakah posisi yang lebih tinggi?\na. 15 m dan -25 m\nb. -50 m dan -10 m",
      },
      {
        no: 3,
        soal: "Selisih Suhu — Suhu sebuah ruangan biasa tercatat 25°C. Suhu di dalam lemari pembeku (freezer) 33°C lebih rendah dari suhu ruangan tersebut. Berapa suhu di dalam lemari pembeku saat ini?",
      },
      {
        no: 4,
        soal: "Perbandingan Suhu — Tentukan, suhu manakah yang lebih tinggi dari pasangan suhu berikut?\na. 18°C dan 14°C\nb. 5°C dan 0°C\nc. 0°C dan -7°C\nd. -3°C dan -1°C\ne. -8°C dan 2°C\nf. -4°C dan -9°C",
      },
      {
        no: 5,
        soal: "Menyisipkan Tanda Ketidaksamaan — Sisipkan lambang > atau < sehingga menjadi kalimat matematika yang benar!\na. 52 ... -31\nb. 74 ... -92\nc. -41 ... 55\nd. -95 ... 112\ne. -18 ... -14\nf. -35 ... -60",
      },
      {
        no: 6,
        soal: "Mengurutkan Bilangan Bulat — Susunlah deretan bilangan berikut menurut urutan naik (dari yang terkecil ke yang terbesar), dan sisipkan lambang < sehingga menjadi kalimat yang benar!\na. 9, 21, 14\nb. -7, 15, 0\nc. 11, -14, 5\nd. -20, -25, 18",
      },
      {
        no: 7,
        soal: "Penjumlahan dengan Garis Bilangan — Pergunakan garis bilangan untuk menghitung hasil operasi penjumlahan berikut!\na. 4 + 6\nb. 8 + (-3)\nc. 6 + (-10)\nd. -4 + 7\ne. -8 + 5\nf. -7 + (-2)",
      },
      {
        no: 8,
        soal: "Penjumlahan Bilangan Bulat — Hitunglah hasil penjumlahan bilangan bulat berikut tanpa menggunakan alat bantu (kalkulator)!\na. 35 + (-15)\nb. 12 + (-21)\nc. 25 + (-36)\nd. -9 + (-15)\ne. -22 + (-8)\nf. 56 + (-24)\ng. 73 + (-85)\nh. -58 + (-64)",
      },
    ],
  },

  // ===== BILANGAN BULAT - PENGURANGAN ===== 
  "bilangan-bulat/pengurangan": {
    title: "LATIHAN MANDIRI — PENGURANGAN BILANGAN BULAT",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      {
        no: 1,
        soal: "a. Hitunglah hasil pengurangan bilangan berikut ini!\n(i) 7 - 15 dan 15 - 7\n(ii) -12 - 6 dan 6 - (-12)\n(iii) 30 - (-9) dan -9 - 30\nb. Bila x dan y sembarang bilangan bulat, apakah x - y = y - x?\nc. Berdasarkan hasil di atas, apakah pengurangan pada bilangan bulat bersifat komutatif?",
      },
      {
        no: 2,
        soal: "Posisi sebuah drone pengintai (A), kapal selam (B), dan terumbu karang (C) berturut-turut adalah 85 m (di atas permukaan laut), -45 m, dan -15 m dari permukaan air laut. Berapa meter selisih ketinggian posisi-posisi berikut?\na. A dengan B\nb. C dengan B\nc. A dengan C",
      },
      {
        no: 3,
        soal: "Sederhanakanlah bentuk-bentuk operasi bilangan berikut!\na. 8 - 21 + 15\nb. 14 + (-9) + (-18)\nc. -11 - 32 + 25\nd. 26 + (-14) - (-8)\ne. -22 - (-35) - (-12)\nf. -27 + 18 - (-24)\ng. -9 - 18 - 25\nh. -45 - (-14) + 22",
      },
      {
        no: 4,
        soal: "Kecepatan jelajah sebuah pesawat baling-baling pada kondisi udara tenang adalah 250 km/jam. Jika pesawat tersebut terbang melintasi area pegunungan yang memiliki kecepatan hembusan angin 30 km/jam, hitunglah kecepatan aktual pesawat tersebut jika bergerak dengan kondisi berikut:\na. terbang searah dengan dorongan angin,\nb. terbang berlawanan arah dengan dorongan angin (melawan angin).",
      },
      {
        no: 5,
        soal: "Pada proses pembuatan baja, lelehan logam cair yang bersuhu 1.250°C didinginkan secara cepat menggunakan cairan pendingin khusus hingga suhunya turun tajam dan mencapai -15°C. Berapa derajatkah perbedaan suhu antara lelehan awal dan setelah didinginkan tersebut?",
      },
    ],
  },

  // ===== BILANGAN BULAT - PERKALIAN ===== 
  "bilangan-bulat/perkalian": {
    title: "LATIHAN MANDIRI — PERKALIAN BILANGAN BULAT",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      {
        no: 1,
        soal: "Hitunglah perkalian bilangan berikut!\na. 7 x (-9)\nb. -6 x (-11)\nc. -4 x 0 x (-25)",
      },
      {
        no: 2,
        soal: "Tentukan angka pengganti huruf-huruf berikut sehingga menjadi persamaan matematika yang benar!\na. p x (-7) = -63\nb. q x (-12) = 96\nc. 20 x (-4) x r = 160\nd. -6 x 15 x s = 270",
      },
      {
        no: 3,
        soal: "Hitunglah hasil dari operasi bilangan campuran berikut!\na. -7 x (-25 + 14)\nb. [-15 - (-40)] x (-12)\nc. [18 x (-6)] + [-22 x (-5)]",
      },
      {
        no: 4,
        soal: "Suhu di dalam sebuah lemari pendingin daging adalah -6°C. Ketika terjadi pemadaman listrik, suhu di dalam lemari pendingin tersebut naik sebesar 2°C setiap 5 menit. Tentukan suhu akhir di dalam lemari pendingin tersebut jika listrik mati selama 30 menit!",
      },
      {
        no: 5,
        soal: "Dalam sebuah olimpiade matematika tingkat daerah yang terdiri dari 40 soal, peserta akan mendapat nilai 4 untuk setiap jawaban yang benar, nilai -2 untuk setiap jawaban yang salah, dan nilai -1 untuk soal yang dibiarkan kosong (tidak dijawab). Jika seorang peserta berhasil menjawab 31 soal dengan benar dan ada 3 soal yang tidak dijawab, berapakah total nilai akhir yang diperoleh peserta tersebut?",
      },
    ],
  },

  // ===== BILANGAN BULAT - PEMBAGIAN ===== 
  "bilangan-bulat/pembagian": {
    title: "LATIHAN MANDIRI — PEMBAGIAN BILANGAN BULAT",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      {
        no: 1,
        soal: "Tentukan hasil pembagian berikut:\na. -120 : 8 = ...\nb. 144 : (-12) = ...\nc. -105 : (-7) = ...\nd. 0 : (-25) = ...\ne. -85 : 0 = ... (Coba cek apakah ini bisa dihitung?)",
      },
      {
        no: 2,
        soal: "Hitunglah hasil operasi berikut:\na. [(-80) : 4] : (-5) = ...\nb. 150 : [(-30) : 2] = ...\nc. [(-144) : (-12)] : 3 = ...",
      },
      {
        no: 3,
        soal: "Selesaikan perhitungan berikut:\na. [15 × (-4)] : [(-10) + 4] = ...\nb. [(-25) - 15] : [60 : (-12)] = ...\nc. [0 × (-99)] : [14 + (-16)] = ...",
      },
      {
        no: 4,
        soal: "Jika x = -36, y = 9, dan z = -3, hitunglah:\na. (x × y) : z = ...\nb. (x + y) : z = ...\nc. x : (y - z) = ...",
      },
      {
        no: 5,
        soal: "Sebuah sekolah akan karyawisata dengan total peserta 185 siswa dan 15 guru. Mereka menyewa beberapa minibus yang masing-masing berkapasitas 16 tempat duduk.\na. Berapa jumlah minimal minibus yang harus disewa agar semua peserta bisa duduk?\nb. Jika semua bus sudah terisi peserta, berapa total kursi yang masih kosong?",
      },
    ],
  },

  // ===== BILANGAN BULAT - OPERASI HITUNG CAMPURAN ===== 
  "bilangan-bulat/campuran": {
    title: "LATIHAN MANDIRI — OPERASI HITUNG CAMPURAN BILANGAN BULAT",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      {
        no: 1,
        soal: "25 + 48 : (-8) = …",
      },
      {
        no: 2,
        soal: "64 - 26 x (-4) = …",
      },
      {
        no: 3,
        soal: "-35 - 9 x (-6) = …",
      },
      {
        no: 4,
        soal: "12 + 120 : 10 x (-5) = …",
      },
      {
        no: 5,
        soal: "21 - 24 x (-6) : 12 = …",
      },
      {
        no: 6,
        soal: "45 + 144 : 16 x (-7) = …",
      },
      {
        no: 7,
        soal: "80 : 5 + 9 x (-11) = …",
      },
      {
        no: 8,
        soal: "14 + 90 : (-18) - 8 x 6 = …",
      },
      {
        no: 9,
        soal: "30 - 7 x 9 + 156 : (-12) = …",
      },
      {
        no: 10,
        soal: "126 : 9 x (-13) - 6 x 17 = …",
      },
      {
        no: 11,
        soal: "-25 x (8 + (-9)) + (2 – 7) = …",
      },
      {
        no: 12,
        soal: "(-20) + 8 x 5 – 18 : (-3) = …",
      },
      {
        no: 13,
        soal: "Dalam kompetensi Bahasa Inggris yang terdiri dari 50 soal, peserta akan mendapatkan skor 4 untuk setiap jawaban benar, skor – 2 untuk setiap jawaban salah, dan skor -1 untuk soal yang tidak dijawab. Jika Budi menjawab 44 soal dan yang benar 36 soal, maka skor yang diperoleh Budi adalah ...",
      },
      {
        no: 14,
        soal: "Dalam suatu pertandingan setiap kemenangan mendapat nilai 3, seri bernilai 1 dan kalah bernilai -2. Jika tim SMPN 28 BDG bermain sebanyak 20 kali dengan meraih 10 kemenangan dan 4 seri, maka nilai yang diperoleh SMPN 28 BDG adalah …",
      },
      {
        no: 15,
        soal: "Bus Trans Jakarta berisi penumpang berangkat dari terminal ke pasar, di halte pertama turun 4 orang, di halte kedua naik 2 orang sampai di pasar ternyata ada 15 orang. Berapa banyak penumpang yang naik pada terminal?",
      },
      {
        no: 16,
        soal: "Perhatikan suhu udara di beberapa negara berikut!\nWina -7°C\nSoul -10°C\nBaghdad 39°C\nSurabaya 33°C\nSelisih suhu udara yang benar di bawah ini adalah.....\n• Selisih suhu udara Wina dan Soul -60°C\n• Selisih suhu udara Baghdad dan Wina 30°C\n• Selisih suhu udara Surabaya dan Soul adalah 34°C\n• Selisih suhu udara Surabaya dan Wina adalah 39°C",
      },
      {
        no: 17,
        soal: "Pa Bangun menjual gorengan dengan harga Rp. 5.000 per 4 gorengan. Bagus membeli 32 gorengan. Jika Ia membayar dengan uang lima puluh ribu, uang kembali yang diterima Bagus adalah sebesar........",
      },
      {
        no: 18,
        soal: "Suhu di kota Moskow 11°C. Pada saat turun salju, suhunya turun 4°C setiap 15 menit. Suhu di kota tersebut setelah turun salju 1 jam adalah ..",
      },
      {
        no: 19,
        soal: "Operasi \"*\" berarti kalikan bilangan pertama dengan dua kali bilangan kedua, kemudian tambahkan hasilnya dengan bilangan kedua. Hasil dari 5 * 3 adalah ......",
      },
      {
        no: 20,
        soal: "Operasi \"#\" artinya kalikan bilangan pertama dengan bilangan kedua, kemudian kurangkan hasilnya dengan dua kali bilangan kedua. Hasil dari 5 # -4 adalah.....",
      },
    ],
  },

  // ===== BILANGAN BULAT -KPK DAN FPB ===== 
  "bilangan-bulat/kpk-fpb": {
    title: "LATIHAN MANDIRI —KPK DAN FPB",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      {
        no: 1,
        soal: "a. Tulislah bilangan-bilangan kelipatan 6 dan kelipatan 8 yang kurang dari 60!\nb. Tentukan kelipatan persekutuan dari 6 dan 8!\nc. Berapakah KPK dari 6 dan 8?",
      },
      {
        no: 2,
        soal: "a. Tulislah bilangan-bilangan kelipatan 3, 6, dan 9 yang kurang dari 50!\nb. Tentukan kelipatan persekutuan dari 3, 6, dan 9!\nc. Berapakah KPK dari 3, 6, dan 9?",
      },
      {
        no: 3,
        soal: "a. Tulislah faktor-faktor dari 42 dan 56!\nb. Tentukan faktor-faktor persekutuan dari 42 dan 56!\nc. Berapakah FPB dari 42 dan 56?",
      },
      {
        no: 4,
        soal: "a. Tulislah faktor-faktor dari 40, 60, dan 100!\nb. Tentukan faktor-faktor persekutuan dari 40, 60, dan 100!\nc. Berapakah FPB dari 40, 60, dan 100?",
      },
      {
        no: 5,
        soal: "Tentukan KPK dari pasangan bilangan berikut dengan cara memfaktorkan (pohon faktor)!\na. 18 dan 45\nb. 20 dan 50\nc. 28, 42, dan 70",
      },
      {
        no: 6,
        soal: "Tentukan FPB dari pasangan bilangan berikut dengan cara memfaktorkan (pohon faktor)!\na. 48 dan 72\nb. 90 dan 120\nc. 36, 54, dan 90",
      },
      {
        no: 7,
        soal: "Sebuah toko lampu memiliki tiga jenis lampu hias. Lampu warna merah menyala setiap 20 menit, lampu kuning setiap 30 menit, dan lampu hijau setiap 40 menit. Jika pada pukul 19.00 ketiga lampu tersebut menyala bersamaan, pada pukul berapakah ketiga lampu akan menyala bersamaan lagi berikutnya?",
      },
      {
        no: 8,
        soal: "Roni berenang setiap 4 hari sekali. Dimas dan Edo berenang masing-masing setiap 8 hari dan 10 hari sekali. Jika pada tanggal 15 Januari mereka berenang bersama-sama, pada tanggal berapa mereka akan berenang bersama-sama lagi untuk kedua kalinya?",
      },
      {
        no: 9,
        soal: "Petugas keamanan A berjaga setiap 3 hari sekali, petugas B setiap 4 hari sekali, dan petugas C setiap 5 hari sekali. Jika tanggal 1 Mei mereka berjaga bersama, kapan mereka akan berjaga bersama lagi berikutnya?",
      },
      {
        no: 10,
        soal: "Tersedia 72 butir telur asin, 54 butir telur ayam, dan 90 butir telur bebek yang akan dimasukkan ke dalam beberapa wadah. Jika setiap wadah berisi jenis telur dengan jumlah yang sama rata, berapa wadah sebanyak-banyaknya yang dibutuhkan?",
      },
      {
        no: 11,
        soal: "Panitia bakti sosial menyediakan 120 buku tulis dan 80 pensil. Jika buku dan pensil tersebut akan dibagikan secara merata kepada anak-anak kurang mampu, berapa orang terbanyak yang dapat menerima paket bantuan tersebut?",
      },
    ],
  },

  // ===== ARITMETIKA SOSIAL - DISKON =====
  "aritmetika-sosial/diskon": {
    title: "LATIHAN MANDIRI — DISKON",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      {
        no: 1,
        soal: "Sebuah toko sepatu memberikan diskon 15% untuk semua produk. Jika harga awal sepasang sepatu adalah Rp200.000, berapa besar potongan harga yang didapatkan pembeli?",
        options: ["A. Rp30.000", "B. Rp170.000", "C. Rp20.000", "D. Rp15.000"],
      },
      {
        no: 2,
        soal: "Sebuah buku seharga Rp80.000 sedang didiskon sebesar 25%. Berapakah harga akhir yang harus dibayar oleh pembeli?",
        options: ["A. Rp55.000", "B. Rp20.000", "C. Rp60.000", "D. Rp75.000"],
      },
      {
        no: 3,
        soal: "Kemeja yang awalnya berharga Rp150.000 dijual dengan harga Rp120.000. Berapa persentase diskon yang diberikan untuk kemeja tersebut?",
        options: ["A. 15%", "B. 20%", "C. 25%", "D. 30%"],
      },
      {
        no: 4,
        soal: "Setelah mendapat diskon 20%, Andi membayar sebuah tas seharga Rp160.000. Berapa harga awal tas tersebut sebelum diberi diskon?",
        options: ["A. Rp240.000", "B. Rp192.000", "C. Rp220.000", "D. Rp200.000"],
      },
      {
        no: 5,
        soal: "Data harga dan diskon sepatu dan kaos dari ke-empat toko sebagai berikut:\nBarang\tHarga (Rp)\tDiskon Toko\n\t\tDamai\tTentram\tRukun\tSentosa\nSepatu\t140.000\t20%\t25%\t15%\t30%\nKaos\t100.000\t25%\t20%\t30%\t15%\nJika Febian akan membeli sepatu dan kaos, maka toko yang dipilihnya adalah",
        options: ["A. Toko Damai", "B. Toko Tentram", "C. Toko Rukun", "D. Toko Sentosa"],
      },
      {
        no: 6,
        soal: "Untuk barang seharga Rp250.000, Toko A memberikan potongan langsung sebesar Rp50.000, sedangkan Toko B memberikan diskon 25%. Manakah pernyataan yang benar?",
        options: ["A. Harga di Toko B lebih murah.", "B. Diskon Toko A setara dengan 25%.", "C. Toko A dan Toko B memberikan potongan yang sama.", "D. Harga di Toko A lebih murah."],
      },
      {
        no: 7,
        soal: "Sebuah toko pakaian memasang plang promo 'Diskon 50% + 20%'. Jika harga awal jaket adalah Rp400.000, berapakah harga yang harus dibayar di kasir?",
        options: ["A. Rp140.000", "B. Rp280.000", "C. Rp160.000", "D. Rp120.000"],
      },
      {
        no: 8,
        soal: "Sebuah minimarket mengadakan promo 'Beli 2 Gratis 1' untuk produk sabun mandi. Jika dilihat secara matematis, promo ini setara dengan diskon per item sebesar...",
        options: ["A. 33,33%", "B. 25%", "C. 66,67%", "D. 50%"],
      },
      {
        no: 9,
        soal: "Seorang pedagang membeli suatu barang dengan modal Rp100.000. Ia ingin memberikan diskon 20% pada pelanggannya, namun tetap ingin mendapat keuntungan bersih 20% dari modal awalnya. Berapa harga label yang harus dipasang pedagang tersebut?",
        options: ["A. Rp150.000", "B. Rp140.000", "C. Rp120.000", "D. Rp144.000"],
      },
      {
        no: 10,
        soal: "Sebuah barang dinaikkan harganya sebesar 25% dari harga normal. Seminggu kemudian, toko tersebut mengadakan 'Sale' dan memberikan diskon 20% pada barang tersebut. Bagaimana perbandingan harga akhir barang tersebut terhadap harga normalnya (harga awal)?",
        options: ["A. Lebih mahal 5%", "B. Lebih murah 5%", "C. Lebih mahal 10%", "D. Harganya tetap sama dengan harga awal"],
      },
      {
        no: 11,
        soal: "Untuk barang elektronik dengan harga awal yang sama, Toko X menawarkan diskon bertingkat '30% + 10%', sedangkan Toko Y menawarkan diskon '20% + 20%'. Manakah pilihan yang memberikan harga paling murah bagi pembeli?",
        options: ["A. Toko Y lebih murah", "B. Keduanya sama murah", "C. Toko X lebih murah", "D. Tidak dapat ditentukan"],
      },
      {
        no: 12,
        soal: "Menjelang tahun baru, harga sebuah kacamata dipotong (didiskon) dua kali seperti dinyatakan pada tanda berikut. Seorang pembeli membayar Rp168.750,00 untuk kacamata tersebut. Berapa harga kecamata tersebut sebelum dipotong harganya?\nDiskon 50% + 10%",
        options: ["A. Rp262.500,00", "B. Rp281.250,00", "C. Rp375.000,00", "D. Rp421.675,00"],
      },
    ],
  },

  // ===== ARITMETIKA SOSIAL - BRUTO, NETTO DAN TARA =====
  "aritmetika-sosial/bruto-netto-tara": {
    title: "LATIHAN MANDIRI — BRUTO, NETTO DAN TARA",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      {
        no: 1,
        soal: "Apa yang dimaksud dengan Netto dalam istilah perdagangan?",
        options: ["A. Potongan harga dari suatu barang.", "B. Berat kemasan suatu barang.", "C. Berat kotor barang beserta kemasannya.", "D. Berat bersih barang tanpa kemasannya."],
      },
      {
        no: 2,
        soal: "Sekarung beras memiliki Bruto 50 kg dan Tara 1 kg. Berapakah Netto beras tersebut?",
        options: ["A. 50 kg", "B. 51 kg", "C. 48 kg", "D. 49 kg"],
      },
      {
        no: 3,
        soal: "Sekotak buah jeruk memiliki Bruto 25 kg dan Netto 24 kg. Berapa persentase Tara kotak jeruk tersebut?",
        options: ["A. 10%", "B. 2%", "C. 5%", "D. 4%"],
      },
      {
        no: 4,
        soal: "Sebuah peti telur memiliki Bruto 20 kg dengan Tara 5%. Berapakah Netto telur tersebut?",
        options: ["A. 21 kg", "B. 15 kg", "C. 19 kg", "D. 18 kg"],
      },
      {
        no: 5,
        soal: "Sebuah drum berisi minyak goreng memiliki Netto 95 liter. Jika diketahui Tara drum tersebut adalah 5%, berapakah Bruto drum beserta isinya?",
        options: ["A. 110 liter", "B. 105 liter", "C. 90 liter", "D. 100 liter"],
      },
      {
        no: 6,
        soal: "Ibu membeli sekarung gula pasir dengan Bruto 50 kg dan Tara 2%. Jika harga gula pasir Rp12.000,00 per kg, berapa uang yang harus dibayarkan Ibu untuk gula tersebut?",
        options: ["A. Rp588.000,00", "B. Rp500.000,00", "C. Rp600.000,00", "D. Rp576.000,00"],
      },
      {
        no: 7,
        soal: "Sebuah toko memberi diskon 10% untuk pembelian 1 peti mangga. Peti memiliki Bruto 40 kg dan Tara 5%. Harga mangga (berdasarkan Netto) sebelum diskon adalah Rp15.000,00/kg. Berapa yang harus dibayar pembeli untuk 1 peti mangga?",
        options: ["A. Rp570.000,00", "B. Rp513.000,00", "C. Rp486.000,00", "D. Rp540.000,00"],
      },
      {
        no: 8,
        soal: "Pak Budi membeli 2 karung kedelai dengan Bruto masing-masing 100 kg dan Tara 2%. Harga beli keseluruhan adalah Rp1.960.000,00. Jika ia menjual kembali kedelai tersebut dengan harga Rp12.000,00 per kg netto, berapakah keuntungan totalnya?",
        options: ["A. Rp292.000,00", "B. Rp400.000,00", "C. Rp440.000,00", "D. Rp392.000,00"],
      },
      {
        no: 9,
        soal: "Terdapat dua merek tepung terigu. Merek A: Bruto 25 kg, Tara 2%, dijual Rp245.000,00. Merek B: Netto 24 kg dijual Rp235.200,00. Pernyataan mana yang paling tepat untuk mencari harga termurah per kilogram netto?",
        options: ["A. Merek A lebih murah karena harga per kilogramnya Rp10.000,00.", "B. Merek B lebih murah karena harga per kilogramnya Rp9.800,00.", "C. Merek A dan Merek B sama murahnya karena harga per kilogramnya Rp10.000,00.", "D. Merek A lebih murah karena harga per kilogramnya Rp9.800,00."],
      },
      {
        no: 10,
        soal: "Pak Ali membeli 5 kaleng cat dengan harga total Rp2.500.000,00. Tiap kaleng memiliki Bruto 26 kg dan Netto 25 kg. Setelah cat habis, kaleng kosong (Tara) laku dijual Rp2.000,00/kg ke pengepul. Berapakah harga pokok cat per kilogram (netto) yang sebenarnya ditanggung Pak Ali?",
        options: ["A. Rp20.000,00", "B. Rp19.800,00", "C. Rp19.920,00", "D. Rp20.080,00"],
      },
      {
        no: 11,
        soal: "Seorang pedagang membeli satu karung beras dengan Bruto 50 kg dan Tara 2%. Harga pembelian karung beras tersebut adalah Rp5.000,00. Pedagang itu kemudian menjual beras tersebut secara eceran dengan harga Rp12.000,00 per kg (netto). Berapakah total uang yang diperoleh pedagang tersebut dari penjualan satu karung beras?",
        options: ["A. Rp600.000,00", "B. Rp588.000,00", "C. Rp583.000,00", "D. Rp88.000,00"],
      },
      {
        no: 12,
        soal: "Seorang pembeli ingin mendapatkan harga beras (netto) yang paling murah. Ia membandingkan dua penawaran:\n•\tToko A: Menjual 1 karung dengan Bruto 100 kg, Tara 2%, seharga Rp1.000.000,00.\n•\tToko B: Menjual 1 karung dengan Bruto 100 kg, Tara 3%, seharga Rp990.000,00.\nDi toko manakah pembeli tersebut seharusnya berbelanja untuk mendapatkan harga per kg netto termurah?",
        options: ["A. Toko A, karena harga per kg netto sekitar Rp10.204", "B. Toko B, karena harga per kg netto sekitar Rp10.206", "C. Toko B, karena harga karungnya lebih murah (Rp990.000)", "D. Sama saja, karena brutonya sama-nama 100 kg"],
      },
      {
        no: 13,
        soal: "Seorang penjual mendapat keuntungan total Rp100.000,00 setelah berhasil menjual habis satu peti buah. Ia menjual buah tersebut dengan harga Rp15.000,00 per kg (netto). Peti buah yang ia beli memiliki Bruto 60 kg dan Tara (berat peti) 2 kg. Berapakah harga beli (modal) peti buah tersebut pada awalnya?",
        options: ["A. Rp900.000,00", "B. Rp870.000,00", "C. Rp800.000,00", "D. Rp770.000,00"],
      },
      {
        no: 14,
        soal: "Sebuah kargo berisi 20 kaleng biskuit identik ditimbang dan berat kotor (Bruto) totalnya adalah 25 kg. Diketahui berat kardus kargo (Tara kargo) adalah 1 kg. Jika berat netto (biskuit) di setiap kaleng adalah 900 gram, berapakah berat tara (kemasan kaleng) dari satu kaleng biskuit?",
        options: ["A. 300 gram", "B. 500 gram", "C. 1.200 gram", "D. 1.150 gram"],
      },
      {
        no: 15,
        soal: "Sebuah toko membeli satu drum minyak goreng dengan diskon tara (potongan berat) 3%. Setelah ditimbang, berat bersih (Netto) minyak yang diterima toko adalah 97 kg. Berapakah Bruto drum minyak tersebut sebelum dihitung diskon taranya?",
        options: ["A. 99,91 kg", "B. 94,09 kg", "C. 100 kg", "D. 103 kg"],
      },
    ],
  },

  // ===== ARITMETIKA SOSIAL - BUNGA TUNGGAL =====
  "aritmetika-sosial/bunga-tunggal": {
    title: "LATIHAN MANDIRI — BUNGA TUNGGAL",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      {
        no: 1,
        soal: "Siska menabung sebesar Rp3.000.000,00 di sebuah bank yang memberikan suku bunga tunggal 12% per tahun. Besar bunga yang diterima Siska jika ia menabung selama 6 bulan adalah ...",
        options: ["A. Rp120.000,00", "B. Rp150.000,00", "C. Rp360.000,00", "D. Rp180.000,00"],
      },
      {
        no: 2,
        soal: "Andi meminjam uang di koperasi sebesar Rp2.000.000,00 dengan bunga tunggal 8% per tahun. Total uang yang harus dikembalikan Andi setelah 1 tahun adalah ...",
        options: ["A. Rp2.800.000,00", "B. Rp2.008.000,00", "C. Rp2.080.000,00", "D. Rp2.160.000,00"],
      },
      {
        no: 3,
        soal: "Dina menabung sebesar Rp4.000.000,00. Setelah beberapa bulan, tabungannya menjadi Rp4.320.000,00. Jika bank memberikan suku bunga tunggal 12% per tahun, lama Dina menabung adalah ...",
        options: ["A. 9 bulan", "B. 10 bulan", "C. 8 bulan", "D. 6 bulan"],
      },
      {
        no: 4,
        soal: "Modal sebesar Rp5.000.000,00 ditabung di bank. Setelah 8 bulan, uang tersebut menjadi Rp5.400.000,00. Suku bunga tunggal per tahun yang diberikan oleh bank adalah ...",
        options: ["A. 12%", "B. 14%", "C. 10%", "D. 15%"],
      },
      {
        no: 5,
        soal: "Setelah 1 tahun menabung di bank yang memberikan bunga tunggal 10% per tahun, tabungan Anton menjadi Rp2.200.000,00. Besar tabungan awal Anton adalah ...",
        options: ["A. Rp1.900.000,00", "B. Rp2.100.000,00", "C. Rp1.800.000,00", "D. Rp2.000.000,00"],
      },
      {
        no: 6,
        soal: "Sebuah lembaga keuangan memberikan suku bunga tunggal 1,5% per bulan. Jika seseorang menabung Rp2.000.000,00 selama 10 bulan, maka jumlah tabungan akhirnya adalah ...",
        options: ["A. Rp2.600.000,00", "B. Rp2.150.000,00", "C. Rp2.030.000,00", "D. Rp2.300.000,00"],
      },
      {
        no: 7,
        soal: "Pak Rudi meminjam uang di bank sebesar Rp6.000.000,00 dengan bunga tunggal 10% per tahun. Pinjaman tersebut akan dilunasi dengan cara diangsur selama 10 bulan. Besar angsuran yang harus dibayar Pak Rudi setiap bulannya adalah ...",
        options: ["A. Rp650.000,00", "B. Rp700.000,00", "C. Rp600.000,00", "D. Rp660.000,00"],
      },
      {
        no: 8,
        soal: "Bank A memberikan bunga tunggal 10% per tahun, sedangkan Bank B memberikan bunga tunggal 12% per tahun. Jika Rio menabung Rp5.000.000,00 di Bank A dan Rian menabung dengan jumlah yang sama di Bank B, selisih bunga yang mereka peroleh setelah 9 bulan adalah ...",
        options: ["A. Rp50.000,00", "B. Rp100.000,00", "C. Rp150.000,00", "D. Rp75.000,00"],
      },
      {
        no: 9,
        soal: "Seseorang meminjam uang sebesar Rp10.000.000,00 dengan bunga tunggal 9% per tahun. Jika ia mengembalikan pinjaman tersebut setelah 120 hari, besar bunga yang harus dibayarkan adalah ... (Anggap 1 tahun = 360 hari)",
        options: ["A. Rp400.000,00", "B. Rp350.000,00", "C. Rp250.000,00", "D. Rp300.000,00"],
      },
      {
        no: 10,
        soal: "Deni menabung di bank dengan suku bunga tunggal 5% per tahun. Waktu yang dibutuhkan agar uang Deni menjadi dua kali lipat dari tabungan awalnya adalah ...",
        options: ["A. 20 tahun", "B. 15 tahun", "C. 25 tahun", "D. 10 tahun"],
      },
      {
        no: 11,
        soal: "Sebuah investasi menawarkan bunga tunggal sehingga modal yang diinvestasikan menjadi dua kali lipat dalam waktu 8 tahun. Persentase suku bunga per tahun dari investasi tersebut adalah ...",
        options: ["A. 12,5%", "B. 18%", "C. 15%", "D. 12%"],
      },
      {
        no: 12,
        soal: "Pak Ali memiliki uang Rp10.000.000,00. Ia membaginya menjadi dua bagian untuk ditabung di Bank A dengan bunga tunggal 10% per tahun dan di Bank B dengan bunga tunggal 12% per tahun. Jika total bunga yang diterima Pak Ali dari kedua bank setelah 1 tahun adalah Rp1.160.000,00, maka besar uang yang ditabung di Bank A adalah ...",
        options: ["A. Rp2.000.000,00", "B. Rp8.000.000,00", "C. Rp6.000.000,00", "D. Rp4.000.000,00"],
      },
      {
        no: 13,
        soal: "Tia menabung uang sebesar Rp2.000.000,00 dengan bunga tunggal 12% per tahun, sedangkan Mia menabung sebesar Rp2.500.000,00 dengan bunga tunggal 8% per tahun. Setelah berapa tahun jumlah tabungan (modal beserta bunga) mereka akan menjadi sama?",
        options: ["A. 10 tahun", "B. 17,5 tahun", "C. 15 tahun", "D. 12,5 tahun"],
      },
      {
        no: 14,
        soal: "Harga tunai sebuah sepeda motor adalah Rp10.000.000,00. Motor tersebut dapat dibeli secara kredit dengan uang muka Rp2.000.000,00 dan sisanya dicicil sebanyak 10 kali sebesar Rp900.000,00 per bulan. Suku bunga tunggal per tahun yang dibebankan pada pembelian kredit tersebut adalah ...",
        options: ["A. 10%", "B. 15%", "C. 18%", "D. 12%"],
      },
      {
        no: 15,
        soal: "Arman menabung Rp5.000.000,00. Pada 6 bulan pertama, bank memberikan bunga tunggal 10% per tahun. Pada 6 bulan berikutnya, suku bunga naik menjadi 12% per tahun. Total bunga yang diterima Arman pada akhir tahun pertama adalah ...",
        options: ["A. Rp600.000,00", "B. Rp650.000,00", "C. Rp550.000,00", "D. Rp500.000,00"],
      },
      {
        no: 16,
        soal: "Akibat kesalahan sistem, bunga deposito seorang nasabah dihitung menggunakan suku bunga tunggal 12% per tahun, padahal seharusnya 10% per tahun. Jika untuk periode 8 bulan selisih bunga akibat kesalahan tersebut adalah Rp80.000,00, maka nilai deposito nasabah tersebut adalah ...",
        options: ["A. Rp8.000.000,00", "B. Rp6.000.000,00", "C. Rp4.000.000,00", "D. Rp5.000.000,00"],
      },
      {
        no: 17,
        soal: "Perbandingan uang Tono dan Tini adalah 2:3. Tono menginvestasikan uangnya dengan bunga tunggal 15% per tahun, sedangkan Tini dengan bunga 10% per tahun. Jika jumlah bunga yang mereka berdua terima setelah 1 tahun adalah Rp1.200.000,00, maka uang awal Tono adalah ...",
        options: ["A. Rp2.000.000,00", "B. Rp6.000.000,00", "C. Rp4.000.000,00", "D. Rp3.000.000,00"],
      },
      {
        no: 18,
        soal: "Faraz menyimpan uang sebesar Rp1.200.000,00 di sebuah bank dengan bunga tunggal 15% setahun. Setelah beberapa bulan ia mengambil seluruh tabungan beserta bunganya menjadi Rp1.260.000,00. Lama Faraz menabung adalah ...",
        options: ["A. 3 bulan", "B. 4 bulan", "C. 5 bulan", "D. 6 bulan"],
      },
      {
        no: 19,
        soal: "Hasan menyimpan uang di bank sebesar Rp800.000,00 dengan bunga tunggal 12% pertahun. Agar jumlah tabungannya menjadi Rp872.000,00, Hasan harus menabung selama ...",
        options: ["A. 9 bulan", "B. 7 bulan", "C. 6 bulan", "D. 4 bulan"],
      },
      {
        no: 20,
        soal: "Kaliluna menabung Rp600.000,00 pada sebuah bank. Setelah 10 bulan tabungan Kaliluna menjadi Rp640.000,00. Persentase bunga per tahun pada bank tersebut adalah ...",
        options: ["A. 6%", "B. 6,7%", "C. 8%", "D. 8,5%"],
      },
      {
        no: 21,
        soal: "Rafa menabung pada sebuah bank dengan bunga tunggal 16% setahun. Setelah 9 bulan uangnya menjadi Rp2.240.000,00. Tabungan awal Rafa adalah ...",
        options: ["A. Rp1.800.000,00", "B. Rp1.900.000,00", "C. Rp2.000.000,00", "D. Rp2.100.000,00"],
      },
      {
        no: 22,
        soal: "Pak Dindin meminjam uang di koperasi sebesar Rp4.800.000,00. Ia dikenakan bunga 24% setahun. Ia berencana mengembalikan dalam 2 tahun. Besar cicilan yang harus dibayar tiap bulan adalah ...",
        options: ["A. Rp296.000,00", "B. Rp269.000,00", "C. Rp260.000,00", "D. Rp209.000,00"],
      },
      {
        no: 23,
        soal: "Budi menabung di bank sebesar Rp1.000.000,00 dengan suku bunga tunggal 10% per tahun. Besar bunga yang diperoleh Budi setelah menabung selama 1 tahun adalah ...",
        options: ["A. Rp100.000,00", "B. Rp10.000,00", "C. Rp110.000,00", "D. Rp50.000,00"],
      },
      {
        no: 24,
        soal: "Pak Joko menyimpan uang di bank sebesar Rp1.500.000,00 dengan bunga tunggal 10% per tahun. Jumlah tabungan Pak Joko setelah 9 bulan adalah ...",
        options: ["A. Rp1.700.000,00", "B. Rp1.612.500,00", "C. Rp1.650.000,00", "D. Rp1.512.500,00"],
      },
      {
        no: 25,
        soal: "Ibu meminjam uang dengan sistem bunga tunggal 12% per tahun. Setelah 8 bulan, total pinjaman yang harus dikembalikan adalah Rp3.240.000,00. Besar pinjaman awal Ibu adalah ...",
        options: ["A. Rp3.000.000,00", "B. Rp3.100.000,00", "C. Rp2.900.000,00", "D. Rp2.800.000,00"],
      },
    ],
  },

  // ===== ARITMETIKA SOSIAL - PAJAK PERTAMBAHAN NILAI (PPN) =====
  "aritmetika-sosial/ppn": {
    title: "LATIHAN MANDIRI — PAJAK PERTAMBAHAN NILAI (PPN)",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      {
        no: 1,
        soal: "Sebuah televisi dijual dengan harga Rp2.000.000. Jika pembeli dikenakan PPN sebesar 11%, berapakah nominal PPN yang harus dibayar?",
        options: ["A. Rp200.000", "B. Rp211.000", "C. Rp220.000", "D. Rp2.220.000"],
      },
      {
        no: 2,
        soal: "Ayah membeli kulkas seharga Rp3.000.000. Karena dikenakan PPN 10%, berapakah total uang yang harus dibayarkan ayah?",
        options: ["A. Rp3.000.000", "B. Rp3.100.000", "C. Rp3.300.000", "D. Rp3.500.000"],
      },
      {
        no: 3,
        soal: "PPN sebesar 11% dari sebuah barang adalah Rp55.000. Berapakah harga awal barang tersebut sebelum dikenakan PPN?",
        options: ["A. Rp500.000", "B. Rp550.000", "C. Rp600.000", "D. Rp605.000"],
      },
      {
        no: 4,
        soal: "Andi membeli laptop dan membayar total sebesar Rp4.440.000. Jika harga tersebut sudah termasuk PPN 11%, berapakah harga laptop sebelum PPN?",
        options: ["A. Rp3.900.000", "B. Rp4.000.000", "C. Rp4.100.000", "D. Rp4.400.000"],
      },
      {
        no: 5,
        soal: "Rina membeli sepatu seharga Rp250.000. Saat di kasir, ia harus membayar Rp275.000. Berapa persentase PPN yang dibebankan kepada Rina?",
        options: ["A. 5%", "B. 10%", "C. 11%", "D. 12%"],
      },
      {
        no: 6,
        soal: "Budi membeli buku dengan harga Rp100.000 dan dikenakan PPN 11%. Jika ia membayar dengan uang selembar Rp150.000, berapakah uang kembaliannya?",
        options: ["A. Rp39.000", "B. Rp40.000", "C. Rp45.000", "D. Rp50.000"],
      },
      {
        no: 7,
        soal: "Sebuah jaket harganya Rp500.000. Toko memberikan diskon 20%, namun setelah diskon dikenakan PPN 10%. Berapakah harga akhir yang harus dibayar?",
        options: ["A. Rp350.000", "B. Rp400.000", "C. Rp440.000", "D. Rp450.000"],
      },
      {
        no: 8,
        soal: "Pak Rahmat memborong 5 lusin buku tulis. Harga 1 lusin adalah Rp30.000 belum termasuk PPN 11%. Jika Pak Rahmat mendapat potongan harga total Rp15.000 sebelum pajak, berapakah yang harus ia bayar?",
        options: ["A. Rp145.000", "B. Rp149.850", "C. Rp151.500", "D. Rp166.500"],
      },
      {
        no: 9,
        soal: "Toko A menjual sepeda seharga Rp1.000.000 dengan diskon 20% (tanpa PPN). Toko B menjual sepeda yang sama seharga Rp900.000 dengan diskon 10% namun dikenakan PPN 11% setelah diskon. Jika kamu ingin membeli sepeda yang paling murah, selisih harga dari kedua toko tersebut adalah...",
        options: ["A. Toko A lebih murah Rp99.100", "B. Toko A lebih murah Rp89.100", "C. Toko B lebih murah Rp10.000", "D. Toko B lebih murah Rp11.100"],
      },
      {
        no: 10,
        soal: "Pemerintah mengumumkan kenaikan tarif PPN dari 10% menjadi 11%. Jika Dimas rutin berbelanja bulanan dengan nilai Rp2.000.000 (sebelum PPN), berapa tambahan pengeluaran ekstra yang harus ditanggung Dimas dalam setahun hanya karena kenaikan tarif PPN tersebut?",
        options: ["A. Rp20.000", "B. Rp120.000", "C. Rp240.000", "D. Rp440.000"],
      },
    ],
  },

  // ===== ARITMETIKA SOSIAL - PAJAK PENGHASILAN (PPH) =====
  "aritmetika-sosial/pph": {
    title: "LATIHAN MANDIRI — PAJAK PENGHASILAN (PPH)",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      {
        no: 1,
        soal: "Ayah menerima gaji sebesar Rp5.000.000. Jika gaji tersebut dipotong Pajak Penghasilan (PPh) sebesar 5%, berapa potongan pajaknya?",
        options: ["A. Rp50.000", "B. Rp200.000", "C. Rp250.000", "D. Rp500.000"],
      },
      {
        no: 2,
        soal: "Pak Rahmat memenangkan kuis berhadiah Rp10.000.000. Hadiah tersebut dikenakan PPh final sebesar 20%. Berapa uang tunai yang diterima Pak Rahmat?",
        options: ["A. Rp2.000.000", "B. Rp8.000.000", "C. Rp9.800.000", "D. Rp12.000.000"],
      },
      {
        no: 3,
        soal: "Jika potongan PPh dari gaji seorang karyawan adalah Rp150.000 dan gaji bersih yang diterimanya adalah Rp2.850.000, berapakah gaji kotor karyawan tersebut?",
        options: ["A. Rp2.700.000", "B. Rp3.000.000", "C. Rp3.150.000", "D. Rp3.300.000"],
      },
      {
        no: 4,
        soal: "Seorang karyawan menerima gaji bersih Rp4.750.000 setelah dipotong PPh 5%. Berapakah gaji kotor (gaji sebelum pajak) karyawan tersebut?",
        options: ["A. Rp4.500.000", "B. Rp4.987.500", "C. Rp5.000.000", "D. Rp5.250.000"],
      },
      {
        no: 5,
        soal: "Gaji awal Kakak adalah Rp8.000.000. Namun, negara memberikan kebijakan bebas pajak (Penghasilan Tidak Kena Pajak/PTKP) untuk Rp3.000.000 pertama. Jika sisa gajinya dikenakan PPh 5%, berapa pajak yang harus dibayar Kakak?",
        options: ["A. Rp150.000", "B. Rp250.000", "C. Rp400.000", "D. Rp550.000"],
      },
      {
        no: 6,
        soal: "Potongan PPh gaji seorang karyawan sebuah PT adalah Rp400.000, yang merupakan 10% dari gaji totalnya. Berapakah gaji bersih yang dibawa pulang karyawan PT tersebut?",
        options: ["A. Rp3.600.000", "B. Rp4.000.000", "C. Rp4.400.000", "D. Rp4.600.000"],
      },
      {
        no: 7,
        soal: "Anton mendapat bonus tahunan Rp2.500.000 dan dipotong PPh 15%. Berapa total uang bonus bersih yang Anton terima?",
        options: ["A. Rp375.000", "B. Rp2.125.000", "C. Rp2.350.000", "D. Rp2.875.000"],
      },
      {
        no: 8,
        soal: "Gaji kotor Pak Anton adalah Rp7.000.000 per bulan. Diketahui Penghasilan Tidak Kena Pajak (PTKP) adalah Rp4.000.000. Jika atas Penghasilan Kena Pajaknya dikenakan tarif PPh 5%, berapakah total gaji bersih Pak Anton dalam 1 tahun?",
        options: ["A. Rp81.600.000", "B. Rp82.200.000", "C. Rp83.800.000", "D. Rp84.000.000"],
      },
      {
        no: 9,
        soal: "Tante Siska menerima gaji bersih Rp6.650.000. Jika gaji tersebut telah dipotong PPh 5% dari Penghasilan Kena Pajak, dan diketahui Penghasilan Tidak Kena Pajak (PTKP) Tante Siska adalah Rp3.000.000, berapakah gaji kotornya?",
        options: ["A. Rp6.800.000", "B. Rp6.900.000", "C. Rp7.000.000", "D. Rp7.150.000"],
      },
      {
        no: 10,
        soal: "Fajar ditawari dua pekerjaan. Perusahaan A menawarkan gaji Rp8.000.000 dengan PPh 5%. Perusahaan B menawarkan gaji Rp8.500.000 dengan PPh 10%. Perusahaan mana yang memberikan gaji bersih lebih besar dan berapa selisihnya?",
        options: ["A. Perusahaan A lebih besar Rp50.000", "B. Perusahaan B lebih besar Rp50.000", "C. Perusahaan A lebih besar Rp100.000", "D. Perusahaan B lebih besar Rp100.000"],
      },
    ],
  },

  // ===== ARITMETIKA SOSIAL - JUAL BELI =====
  "aritmetika-sosial/jual-beli": {
    title: "LATIHAN MANDIRI — HARGA BELI, HARGA JUAL, UNTUNG & RUGI",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      {
        no: 1,
        soal: "Seorang penjual tas membeli sebuah tas ransel seharga Rp150.000,00. Ia kemudian berhasil menjual tas tersebut kepada pelanggannya dengan harga Rp180.000,00. Hitunglah berapa rupiah keuntungan yang didapatkan oleh penjual tersebut! Nyatakan pula keuntungan itu dalam bentuk persentase.",
      },
      {
        no: 2,
        soal: "Pemilik toko elektronik menjual sebuah smartwatch bekas dengan harga Rp900.000,00. Dari penjualan tersebut, ia mengklaim telah mengantongi keuntungan sebesar 20%. Berapakah modal awal yang dikeluarkan pemilik toko saat menebus smartwatch itu?",
      },
      {
        no: 3,
        soal: "Ibu Darni memborong 30 kg telur ayam langsung dari peternak dengan total harga Rp750.000,00. Telur-telur tersebut kemudian ia ecerkan di warungnya dengan harga Rp28.000,00 per kilogram. Analisislah, apakah Ibu Darni mengalami keuntungan atau kerugian? Nyatakan status untung atau ruginya dalam nominal rupiah dan persen.",
      },
      {
        no: 4,
        soal: "Pak Anton memborong 20 helai kaus polos seharga Rp600.000,00. Kaus-kaus tersebut kemudian ia jual kembali secara eceran. Sebanyak 10 helai kaus berhasil terjual dengan harga Rp45.000,00 per helai, 8 helai laku terjual saat promo seharga Rp35.000,00 per helai, dan sisanya ia pakai sendiri untuk olahraga. Tentukan apakah Pak Anton mendapatkan keuntungan atau menelan kerugian, lalu nyatakan dalam rupiah dan persen!",
      },
      {
        no: 5,
        soal: "Sebuah kedai membeli 50 cup puding premium dengan total modal Rp750.000,00. Sebanyak 20 cup diborong oleh panitia acara rapat dengan margin keuntungan 10% (dari harga modal per cup), sedangkan sisanya dipajang di etalase dan laku terjual eceran seharga Rp18.000,00 per cup. Hitunglah keseluruhan keuntungan yang diraup kedai tersebut dalam wujud rupiah dan persentasenya!",
      },
      {
        no: 6,
        soal: "Kak Rina membeli sebuah meja lipat seharga Rp350.000,00 saat ia baru masuk kuliah. Setelah lulus dan harus pindah kota, ia terpaksa menjual meja lipat preloved tersebut dan laku seharga Rp245.000,00. Berapa rupiah nilai penyusutan (kerugian) yang dialami Kak Rina? Nyatakan pula kerugian tersebut ke dalam bentuk persen!",
      },
      {
        no: 7,
        soal: "Pak Rendi terpaksa menjual ponsel pintarnya karena sedang membutuhkan dana cepat. Ia menjual ponsel tersebut dengan harga Rp1.600.000,00. Dari hasil penjualan itu, Pak Rendi harus menelan kerugian sebesar 20% dari modal awalnya. Berapakah harga beli ponsel tersebut saat pertama kali Pak Rendi membelinya?",
      },
      {
        no: 8,
        soal: "Deni membeli sebuah sepeda gunung bekas di pasar loak seharga Rp450.000,00. Karena kondisinya kurang prima, Deni membawa sepeda tersebut ke bengkel dan menghabiskan biaya Rp150.000,00 untuk mengganti rantai dan ban yang aus. Setelah sepeda kembali bagus, Deni menjualnya ke teman sekolahnya dan berhasil meraup keuntungan sebesar 25%. Berapa rupiahkah harga jual sepeda tersebut?",
      },
      {
        no: 9,
        soal: "Bu Tari memborong 100 kg buah mangga dari petani dengan total harga Rp1.500.000,00. Setelah disortir, ternyata ada 10 kg mangga yang busuk dan tidak bisa dijual sama sekali. Jika Bu Tari ingin tetap mendapatkan keuntungan total sebesar 20% dari modal awalnya, berapakah harga jual per kilogram yang harus ia tetapkan untuk sisa mangga yang kondisinya masih bagus?",
      },
      {
        no: 10,
        soal: "Pak Johan ingin membeli sebuah sepeda motor listrik. Harga tunai motor tersebut adalah Rp20.000.000,00. Namun, dealer menawarkan opsi kredit dengan syarat: Uang Muka (DP) sebesar Rp5.000.000,00 dan cicilan per bulan sebesar Rp700.000,00 selama 3 tahun. Berapa persentase total biaya tambahan yang harus ditanggung Pak Johan jika ia memilih opsi kredit dibandingkan dengan jika ia membelinya secara tunai?",
      },
    ],
  },

  // ===== PERBANDINGAN - UMUM, SATUAN PEMBANDING DAN RASIO =====
  "perbandingan/umum": {
    title: "LATIHAN MANDIRI — PERBANDINGAN UMUM, SATUAN PEMBANDING DAN RASIO",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      {
        no: 1,
        soal: "Tinggi Gedung A adalah 120 meter dan tinggi Gedung B adalah 150 meter. Tentukan rasio tinggi Gedung B terhadap Gedung A dalam bentuk paling sederhana!",
      },
      {
        no: 2,
        soal: "Dalam sebuah keranjang buah terdapat 24 buah apel merah dan 16 buah apel hijau. Berapakah perbandingan antara jumlah apel merah terhadap total keseluruhan apel di dalam keranjang tersebut (sajikan dalam bentuk yang paling sederhana)?",
      },
      {
        no: 3,
        soal: "Umur Ayah saat ini adalah 45 tahun, sedangkan umur Budi adalah 15 tahun. Tentukan perbandingan umur Ayah dan Budi pada 5 tahun yang lalu!",
      },
      {
        no: 4,
        soal: "Jarak rumah Ali ke sekolah adalah 2,5 km, sedangkan jarak rumah Cici ke sekolah hanya 500 meter. Berapakah perbandingan jarak rumah Ali dan rumah Cici ke sekolah dalam bentuk paling sederhana?",
      },
      {
        no: 5,
        soal: "Waktu yang dihabiskan Dika untuk belajar di malam hari adalah 2 jam, sedangkan waktu untuk bermain game adalah 45 menit. Tentukan rasio waktu belajar Dika terhadap waktu bermainnya!",
      },
      {
        no: 6,
        soal: "Sebuah botol minum besar berisi 1,5 liter air. Air tersebut dituangkan ke dalam sebuah gelas yang memiliki kapasitas 300 ml. Berapa rasio volume air di botol besar terhadap gelas tersebut?",
      },
      {
        no: 7,
        soal: "Sebuah peternakan ayam petelur memiliki lahan seluas 2,5 hektar yang menampung 75.000 ekor ayam. Tentukan rasio kepadatan ayam terhadap luas lahan peternakan tersebut dalam satuan ekor/m². (Catatan: 1 hektar = 10.000 m²)",
      },
      {
        no: 8,
        soal: "Perbandingan panjang, lebar, dan tinggi sebuah balok adalah 4 : 3 : 2. Jika volume balok itu adalah 192 cm³, tentukan luas permukaan balok tersebut.",
      },
      {
        no: 9,
        soal: "Perbandingan panjang, lebar, dan tinggi sebuah wadah penyimpanan air berbentuk balok adalah 6 : 4 : 3. Jika luas seluruh permukaan wadah tersebut adalah 4.320 cm², berapakah liter volume air maksimal yang dapat ditampung dalam wadah tersebut? (Catatan: 1 liter = 1.000 cm³)",
      },
      {
        no: 10,
        soal: "Hasil panen buah mangga, jeruk, dan apel di sebuah perkebunan memiliki perbandingan 4 : 5 : 7. Jika diketahui selisih berat panen buah apel dan buah mangga adalah 450 kg, tentukanlah total keseluruhan berat hasil panen ketiga buah tersebut!",
      },
      {
        no: 11,
        soal: "Uang tabungan Siska berbanding uang tabungan Tari adalah 2 : 3. Sedangkan perbandingan uang tabungan Tari dan Uci adalah 4 : 5. Jika jumlah seluruh uang tabungan mereka bertiga jika digabungkan adalah Rp700.000,00, berapakah besar uang tabungan mereka masing-masing?",
      },
      {
        no: 12,
        soal: "Dalam sebuah kemitraan bisnis, perbandingan modal investasi antara Pak Rendi dan Pak Surya adalah 3 : 4. Sementara itu perbandingan modal Pak Surya dan Pak Tono adalah 6 : 5. Jika total modal yang terkumpul dari ketiganya adalah Rp186.000.000,00, berapakah besar modal yang disetorkan oleh Pak Tono?",
      },
      {
        no: 13,
        soal: "Perbandingan uang saku mingguan Bima dan Candra adalah 3 : 4. Sementara itu perbandingan uang saku Candra dan Dika adalah 2 : 5. Jika diketahui selisih uang saku antara Dika dan Bima adalah Rp35.000,00, tentukanlah jumlah uang saku yang dimiliki oleh Bima, Candra, dan Dika masing-masing!",
      },
      {
        no: 14,
        soal: "Sebuah taman berbentuk persegi panjang memiliki perbandingan panjang dan lebar 5 : 3. Jika luas taman tersebut adalah 1.350 m², berapakah total biaya yang dibutuhkan untuk memasang lampu hias di sekeliling taman, jika setiap 2 meter dipasang satu lampu dengan harga Rp150.000,00 per lampu?",
      },
      {
        no: 15,
        soal: "Perbandingan uang Ali dan Budi adalah 2 : 3, sedangkan perbandingan uang Budi dan Citra adalah 4 : 5. Jika uang Ali Rp. 30.000,00, maka uang Citra adalah",
      },
    ],
  },

  // ===== PERBANDINGAN - SENILAI DAN BERBALIK NILAI =====
  "perbandingan/senilai-berbalik": {
    title: "LATIHAN MANDIRI — PERBANDINGAN SENILAI DAN BERBALIK NILAI",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      {
        no: 1,
        soal: "Di antara pernyataan-pernyataan berikut, tentukan mana yang merupakan perbandingan senilai, perbandingan berbalik nilai, atau bukan keduanya!\na. Kecepatan rata-rata sebuah mobil dengan waktu tempuh untuk mencapai kota tujuan.\nb. Jumlah porsi resep kue dengan takaran gram tepung terigu yang dibutuhkan.\nc. Usia seseorang dengan ukuran sepatu yang dipakainya.\nd. Jarak tempuh sebuah taksi dengan total argo yang harus dibayar penumpang.\ne. Jumlah halaman sebuah novel dengan waktu yang dibutuhkan untuk membacanya sampai tamat.\nf. Banyaknya pompa air yang dihidupkan dengan waktu yang dibutuhkan untuk mengosongkan kolam renang.\ng. Jumlah saudara kandung yang dimiliki seorang siswa dengan nilai ujian matematikanya.\nh. Debit air yang keluar dari keran dengan volume air yang tertampung di dalam ember pada waktu tertentu.",
      },
      {
        no: 2,
        soal: "Sebuah mobil membutuhkan 4 liter bensin untuk menempuh jarak sejauh 60 km. Jika mobil tersebut diisi dengan 10 liter bensin, tentukan jarak maksimal yang dapat ditempuh oleh mobil tersebut!",
      },
      {
        no: 3,
        soal: "Seorang peternak memiliki persediaan makanan ternak yang cukup untuk memberi makan 30 ekor sapi selama 15 hari. Jika peternak tersebut baru saja membeli 15 ekor sapi lagi, berapa hari persediaan makanan tersebut akan habis?",
      },
      {
        no: 4,
        soal: "Sebuah mesin cetak foto digital membutuhkan waktu 5 menit untuk mencetak 60 lembar foto beresolusi tinggi. Berapa menit waktu yang diperlukan mesin tersebut jika harus mencetak pesanan sebanyak 84 lembar foto?",
      },
      {
        no: 5,
        soal: "Adi dapat menyelesaikan suatu pekerjaan selama 4 jam. Budi dapat menyelesaikan pekerjaan yang sama dalam waktu 6 jam. Jika pekerjaan tersebut dikerjakan adi dan budi bersama sama, maka pekerjaan tersebut akan selesai dalam waktu … jam",
      },
      {
        no: 6,
        soal: "Suatu pekerjaan jika dikerjakan oleh Anto dan Dini dapat diselesaikan dalam waktu 6 jam. Jika pekerjaan itu dikerjakan oleh Dini sendirian akan selesai 5 jam lebih lambat dibandingkan Anto. Pekerjaan itu dapat diselesaikan Anto sendirian dalam waktu … jam",
      },
      {
        no: 7,
        soal: "Persiapan sebuah panggung festival budaya diperkirakan selesai dalam waktu 24 hari jika dikerjakan oleh 6 orang teknisi. Setelah dikerjakan selama 4 hari, pekerjaan terpaksa dihentikan selama 8 hari karena badai. Agar persiapan panggung selesai tepat waktu sesuai rencana awal, berapa banyak tambahan teknisi yang diperlukan?",
      },
      {
        no: 8,
        soal: "Sebuah pesanan seragam sekolah dapat diselesaikan oleh 4 orang penjahit dalam waktu 20 hari. Setelah mereka bekerja selama 4 hari, pasokan listrik terputus sehingga pekerjaan terhenti total selama 12 hari. Berapa banyak tambahan penjahit yang dibutuhkan agar pesanan seragam tersebut dapat diselesaikan tepat waktu?",
      },
      {
        no: 9,
        soal: "Sebuah tempat penampungan hewan (shelter) memiliki persediaan makanan (dry food) yang cukup untuk 20 ekor kucing peliharaan selama 25 hari. Berapa hari persediaan makanan tersebut akan habis jika shelter tersebut menerima tambahan penghuni sebanyak 5 ekor kucing lagi?",
      },
      {
        no: 10,
        soal: "Sebuah pesanan katering pernikahan raksasa jika dikerjakan oleh 3 orang Chef utama akan selesai dalam waktu 10 hari, sedangkan jika dikerjakan oleh 8 orang asisten dapur akan selesai dalam waktu 9 hari. Jika pesanan tersebut dikerjakan secara bersama-sama oleh 5 Chef utama dan 6 asisten dapur, dalam waktu berapa hari pesanan katering itu akan selesai?",
      },
    ],
  },

  // ===== PERBANDINGAN - CAMPURAN =====
  "perbandingan/campuran": {
    title: "LATIHAN MANDIRI — PERBANDINGAN CAMPURAN",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      {
        no: 1,
        soal: "Tujuh ekor kambing menghasilkan rumput seluas 7 kali ukuran lapangan sepak bola dalam waktu 7 hari. Waktu yang diperlukan oleh 3 ekor kambing untuk menghabiskan rumput seluas 3 kali ukuran lapangan sepak bola adalah … hari",
      },
      {
        no: 2,
        soal: "Jika 4 orang tukang kayu dapat membuat 12 kursi dalam waktu 3 hari, berapa hari yang dibutuhkan oleh 6 orang tukang kayu untuk membuat 24 kursi?",
      },
      {
        no: 3,
        soal: "Sebuah perusahaan konstruksi mengerahkan 12 pekerja untuk menyelesaikan 2 unit rumah dalam waktu 30 hari. Jika perusahaan tersebut ingin menyelesaikan 3 unit rumah serupa dalam waktu 24 hari, berapa banyak pekerja yang harus mereka kerahkan?",
      },
      {
        no: 4,
        soal: "Seorang peternak memiliki 40 ekor sapi yang dapat menghabiskan 60 karung pakan dalam waktu 15 hari. Jika peternak tersebut menjual 10 ekor sapinya (tersisa 30 ekor) dan ia hanya memiliki 45 karung pakan, berapa lama (dalam hari) persediaan pakan tersebut akan habis?",
      },
      {
        no: 5,
        soal: "Tiga mesin cetak tipe A dapat mencetak 3.000 buku dalam 5 jam. Empat mesin cetak tipe B dapat mencetak 4.800 buku dalam 6 jam. Jika perusahaan menggunakan 2 mesin tipe A dan 3 mesin tipe B secara bersamaan, berapa jam waktu yang dibutuhkan untuk mencetak 8.000 buku?",
      },
      {
        no: 6,
        soal: "Sebuah pabrik kain jika memproduksi pesanannya menggunakan 2 mesin tenun modern (kapasitas besar) akan selesai dalam waktu 12 hari, sedangkan jika dikerjakan menggunakan 4 mesin tenun tradisional (kapasitas kecil) selesai dalam waktu 18 hari. Jika pabrik tersebut mengoperasikan 3 mesin tenun modern dan 3 mesin tenun tradisional secara bersamaan, dalam waktu berapa hari pesanan kain tersebut dapat diselesaikan?",
      },
    ],
  },

  // ===== PERBANDINGAN - SKALA =====
  "perbandingan/skala": {
    title: "LATIHAN MANDIRI — SKALA",
    kelas: "Kelas 7",
    backPath: "/latihan-mandiri",
    backLabel: "Latihan Mandiri",
    soal: [
      {
        no: 1,
        soal: "Arti dari skala peta 1 : 500.000 adalah...\nA. 1 cm pada peta mewakili 500.000 cm jarak sebenarnya.\nB. 1 cm pada peta mewakili 500.000 km jarak sebenarnya.\nC. 1 km pada peta mewakili 500.000 cm jarak sebenarnya.\nD. 500.000 cm pada peta mewakili 1 cm jarak sebenarnya.",
        options: ["A", "B", "C", "D"],
      },
      {
        no: 2,
        soal: "Peta wilayah X memiliki skala 1 : 50.000. Peta wilayah Y memiliki skala 1 : 250.000. Pernyataan yang benar mengenai kedua peta tersebut adalah...\nA. Peta X menunjukkan wilayah yang lebih luas dengan detail yang lebih sedikit daripada peta Y.\nB. Satu sentimeter pada peta X mewakili jarak yang lebih jauh di lapangan dibandingkan peta Y.\nC. Kedua peta memiliki tingkat kedetailan yang sama.\nD. Peta X lebih detail daripada peta Y untuk ukuran kertas yang sama.",
        options: ["A", "B", "C", "D"],
      },
      {
        no: 3,
        soal: "Jarak dua kota pada peta adalah 20 cm. Jika skala peta 1 : 600.000, jarak dua kota sebenarnya adalah...\nA. 1.200 km\nB. 120 km\nC. 30 km\nD. 12 km",
        options: ["A", "B", "C", "D"],
      },
      {
        no: 4,
        soal: "Jarak antara kota A dan kota B sebenarnya adalah 120 km. Jika jarak kedua kota tersebut pada peta adalah 6 cm, berapakah skala peta tersebut?\nA. 1 : 2.000.000\nB. 1 : 200.000\nC. 1 : 20.000.000\nD. 1 : 720.000",
        options: ["A", "B", "C", "D"],
      },
      {
        no: 5,
        soal: "Sebuah kebun pada denah berukuran 12 cm x 15 cm. Jika ukuran kebun yang sebenarnya 50 m x 40 m, maka skala yang digunakan adalah....\nA. 3 : 100\nB. 3 : 800\nC. 3 : 1.250\nD. 3 : 1.000",
        options: ["A", "B", "C", "D"],
      },
      {
        no: 6,
        soal: "Jarak sebenarnya antara dua gedung adalah 4,5 km. Jika gedung tersebut digambar pada denah dengan skala 1 : 15.000, maka jarak pada denah adalah...\nA. 3 cm\nB. 30 cm\nC. 300 cm\nD. 0,3 cm",
        options: ["A", "B", "C", "D"],
      },
      {
        no: 7,
        soal: "Perhatikan denah sebuah rumah berikut ! Jika skala denah rumah adalah 1 : 200, maka luas bangunan rumah sebenarnya adalah ...\nA. 46 m²\nB. 92 m²\nC. 184 m²\nD. 368 m²",
        options: ["A", "B", "C", "D"],
      },
      {
        no: 8,
        soal: "Denah sebuah gedung berskala 1 : 300. Jika luas denah 125 cm², maka luas gedung sebenarnya adalah ...\nA. 375 m²\nB. 1.125 m²\nC. 3.750 m²\nD. 11.250 m²",
        options: ["A", "B", "C", "D"],
      },
      {
        no: 9,
        soal: "Jarak dua kota pada peta berskala 1 : 1.200.000 adalah 5 cm. Andi berangkat dari kota A ke kota B mengendarai motor dengan kecepatan rata-rata 40 km/jam. Jika ia berangkat pukul 07.15 dan beristirahat selama 30 menit di perjalanan, pada pukul berapa ia akan tiba di kota B?\nA. 09.45\nB. 08.45\nC. 09.15\nD. 10.15",
        options: ["A", "B", "C", "D"],
      },
      {
        no: 10,
        soal: "Sebuah perusahaan properti membuat maket (model miniatur 3D) apartemen dengan skala 1 : 100. Jika kolam renang pada maket tersebut bervolume 2 liter air saat penuh, berapakah kapasitas air kolam renang tersebut di dunia nyata?\nA. 2.000 liter\nB. 20.000 liter\nC. 200 liter\nD. 2.000.000 liter",
        options: ["A", "B", "C", "D"],
      },
    ],
  },

  // Tambahkan topik lain di sini sesuai kebutuhan
  // Contoh:
  // "bilangan-bulat/penjumlahan": {
  //   title: "LATIHAN MANDIRI — PENJUMLAHAN BILANGAN BULAT",
  //   kelas: "Kelas 7",
  //   backPath: "/tugas-mandiri",
  //   backLabel: "Latihan Mandiri",
  //   soal: [ ... ],
  // },
};

export interface SubTopic {
  label: string;
  slug: string;
}

export interface Topic {
  label: string;
  slug: string;
  subtopics: SubTopic[];
}

export const latihanMandiriStructure: Record<string, Topic[]> = {
  "KELAS 7": [
    {
      label: "BILANGAN BULAT",
      slug: "bilangan-bulat",
      subtopics: [
        { label: "PENJUMLAHAN BILANGAN BULAT", slug: "penjumlahan" },
        { label: "PENGURANGAN BILANGAN BULAT", slug: "pengurangan" },
        { label: "PERKALIAN BILANGAN BULAT", slug: "perkalian" },
        { label: "PEMBAGIAN BILANGAN BULAT", slug: "pembagian" },
        { label: "OPERASI HITUNG CAMPURAN BILANGAN BULAT", slug: "campuran" },
        { label: "KPK DAN FPB", slug: "kpk-fpb" },
      ]
    },
    {
      label: "BILANGAN RASIONAL",
      slug: "bilangan-rasional",
      subtopics: [
        { label: "ARTI PECAHAN, PECAHAN SENILAI DAN MEMBANDINGKAN PECAHAN", slug: "arti-pecahan" },
        { label: "PECAHAN CAMPURAN DAN PERSEN", slug: "campuran-persen" },
        { label: "PENJUMLAHAN PECAHAN", slug: "penjumlahan" },
        { label: "PENGURANGAN PECAHAN", slug: "pengurangan" },
        { label: "PERKALIAN PECAHAN", slug: "perkalian" },
        { label: "PEMBAGIAN PECAHAN", slug: "pembagian" },
        { label: "BENTUK DESIMAL", slug: "desimal" },
        { label: "PENJUMLAHAN BENTUK DESIMAL", slug: "penjumlahan-desimal" },
        { label: "PENGURANGAN BENTUK DESIMAL", slug: "pengurangan-desimal" },
        { label: "PERKALIAN BENTUK DESIMAL", slug: "perkalian-desimal" },
        { label: "PEMBAGIAN BENTUK DESIMAL", slug: "pembagian-desimal" },
        { label: "PEMBULATAN BENTUK DESIMAL", slug: "pembulatan-desimal" },
      ]
    },
    {
      label: "ALJABAR",
      slug: "aljabar",
      subtopics: [
        { label: "PENGERTIAN DAN UNSUR-UNSUR BENTUK ALJABAR", slug: "pengertian" },
        { label: "PENJUMLAHAN DAN PENGURANGAN BENTUK ALJABAR", slug: "penjumlahan-pengurangan" },
        { label: "PERKALIAN BENTUK ALJABAR", slug: "perkalian" },
        { label: "PEMBAGIAN BENTUK ALJABAR", slug: "pembagian" },
        { label: "PEMANGKATAN BENTUK ALJABAR", slug: "pemangkatan" },
        { label: "SUBSTITUSI BILANGAN PADA BENTUK ALJABAR", slug: "substitusi" },
        { label: "FAKTORISASI BENTUK ALJABAR", slug: "faktorisasi" },
        { label: "OPERASI PECAHAN BENTUK ALJABAR", slug: "operasi-pecahan" },
      ]
    },
    {
      label: "PERSAMAAN DAN PERTIDAKSAMAAN LINEAR SATU VARIABEL",
      slug: "persamaan",
      subtopics: [
        { label: "KALIMAT TERBUKA DAN TERTUTUP (PERNYATAAN)", slug: "pernyataan" },
        { label: "PENGERTIAN PLSV, KESAMAAN, DAN PERNYATAAAN EKUIVALEN", slug: "pengertian-plsv" },
        { label: "PENYELESAIAN PERSAMAAN LINEAR SATU VARIABEL", slug: "penyelesaian-plsv" },
        { label: "MODEL MATEMATIKA DAN PENERAPAN PERSAMAAN PADA SOAL CERITA", slug: "penerapan-plsv" },
        { label: "PENGERTIAN KETIDAKSAMAAN, PERTIDAKSAMAAN DAN PtLSV", slug: "pengertian-ptlsv" },
        { label: "PENYELESAIAN PERTIDAKSAMAAN LINEAR SATU VARIABEL", slug: "penyelesaian-ptlsv" },
        { label: "MODEL MATEMATIKA DAN PENERAPAN PERTIDAKSAMAAN PADA SOAL CERITA", slug: "penerapan-ptlsv" },
      ]
    },
    {
      label: "PERBANDINGAN",
      slug: "perbandingan",
      subtopics: [
        { label: "PERBANDINGAN UMUM, SATUAN PEMBANDING DAN RASIO", slug: "umum" },
        { label: "PERBANDINGAN SENILAI DAN BERBALIK NILAI", slug: "senilai-berbalik" },
        { label: "PERBANDINGAN CAMPURAN", slug: "campuran" },
        { label: "SKALA", slug: "skala" },
      ]
    },
    {
      label: "ARITMETIKA SOSIAL",
      slug: "aritmetika-sosial",
      subtopics: [
        { label: "JUAL BELI, UNTUNG DAN RUGI", slug: "jual-beli" },
        { label: "DISKON", slug: "diskon" },
        { label: "BRUTO, NETTO DAN TARA", slug: "bruto-netto-tara" },
        { label: "BUNGA TUNGGAL", slug: "bunga-tunggal" },
        { label: "PAJAK PERTAMBAHAN NILAI (PPN)", slug: "ppn" },
        { label: "PAJAK PENGHASILAN (PPH)", slug: "pph" },
      ]
    },
    {
      label: "GARIS DAN SUDUT",
      slug: "garis-dan-sudut",
      subtopics: [
        { label: "HUBUNGAN 2 GARIS", slug: "hubungan-garis" },
        { label: "SUDUT PELURUS, SUDUT PENYIKUT DAN SUDUT BERTOLAK BELAKANG", slug: "sudut" },
        { label: "SIFAT SUDUT DUA GARIS SEJAJAR JIKA DIPOTONG GARIS LAIN", slug: "garis-sejajar" },
        { label: "JUMLAH SUDUT PADA SEGI BANYAK", slug: "jumlah-sudut" },
      ]
    },
    {
      label: "SEGITIGA DAN SEGIEMPAT",
      slug: "segitiga-dan-segiempat",
      subtopics: [
        { label: "GARIS BERAT, GARIS BAGI DAN GARIS TINGGI PADA SEGITIGA", slug: "garis-segitiga" },
        { label: "SEGITIGA (KELILING)", slug: "segitiga-keliling" },
        { label: "SEGITIGA (LUAS)", slug: "segitiga-luas" },
        { label: "SEGIEMPAT (KELILING)", slug: "segiempat-keliling" },
        { label: "SEGIEMPAT (LUAS)", slug: "segiempat-luas" },
      ]
    },
    {
      label: "HIMPUNAN",
      slug: "himpunan",
      subtopics: [
        { label: "PENGERTIAN DAN KEANGGOTAAAN SUATU HIMPUNAN", slug: "pengertian" },
        { label: "MENYATAKAN SUATU HIMPUNAN, HIMPUNAN KOSONG DAN HIMPUNAN SEMESTA", slug: "jenis-himpunan" },
        { label: "DIAGRAM VENN", slug: "diagram-venn" },
        { label: "HIMPUNAN BAGIAN", slug: "himpunan-bagian" },
        { label: "OPERASI HIMPUNAN", slug: "operasi-himpunan" },
      ]
    },
  ],
  "KELAS 8": [
    {
      label: "POLA BILANGAN",
      slug: "pola-bilangan",
      subtopics: [
        { label: "PENGERTIAN POLA DAN BARISAN BILANGAN", slug: "pengertian" },
        { label: "POLA-POLA KHUSUS", slug: "pola-khusus" },
        { label: "POLA ARITMETIKA", slug: "pola-aritmetika" },
        { label: "POLA GEOMETRI", slug: "pola-geometri" },
      ]
    },
    {
      label: "KOORDINAT CARTECIUS",
      slug: "koordinat-cartesius",
      subtopics: [
        { label: "UNSUR-UNSUR PADA DIAGRAM CARTECIUS", slug: "unsur" },
        { label: "JARAK ANTAR DUA TITIK DAN JARAK TITIK KE GARIS", slug: "jarak" },
        { label: "POSISI RELATIF SUATU TITIK TERHADAP SUATU GARIS", slug: "posisi-relatif" },
      ]
    },
    {
      label: "RELASI DAN FUNGSI",
      slug: "relasi-dan-fungsi",
      subtopics: [
        { label: "PENGERTIAN RELASI DAN PENYAJIANNYA", slug: "relasi" },
        { label: "PENGERTIAN FUNGSI DAN PENYAJIANNYA", slug: "fungsi" },
        { label: "MENENTUKAN BANYAK FUNGSI DAN KORESPONDENSI SATU-SATU", slug: "korespondensi" },
        { label: "NOTASI DAN RUMUS FUNGSI", slug: "notasi-rumus" },
        { label: "GRAFIK FUNGSI", slug: "grafik" },
      ]
    },
    {
      label: "SISTEM PERSAMAAN LINEAR DUA VARIABEL",
      slug: "spldv",
      subtopics: [
        { label: "DEFINISI DAN BENTUK UMUM SPLDV BESERTA KAITANNYA DENGAN PLDV", slug: "definisi" },
        { label: "PENYELESAIAN SPLDV DENGAN METODE GRAFIK", slug: "grafik" },
        { label: "PENYELESAIAN SPLDV DENGAN METODE SUBSTITUSI", slug: "substitusi" },
        { label: "PENYELESAIAN SPLDV DENGAN METODE ELIMINASI", slug: "eliminasi" },
        { label: "PENYELESAIAN SPLDV DENGAN METODE CAMPURAN", slug: "campuran" },
        { label: "MEMBUAT MODEL DARI PERMASALAHAN YANG BERKAITAN DENGAN SPLDV", slug: "model" },
        { label: "PENYELESAIAN MASALAH YANG BERKAITAN DENGAN SPLDV", slug: "penerapan" },
      ]
    },
    {
      label: "PERSAMAAN GARIS LURUS",
      slug: "persamaan-garis-lurus",
      subtopics: [
        { label: "GRAFIK PERSAMAAN GARIS LURUS", slug: "grafik" },
        { label: "GRADIEN (KEMIRINGAN GARIS)", slug: "gradien" },
        { label: "MENENTUKAN PERSAMAAN GARIS LURUS", slug: "menentukan-persamaan" },
        { label: "HUBUNGAN 2 GARIS", slug: "hubungan-garis" },
        { label: "APLIKASI PERSAMAAN GARIS PADA SOAL KONTEKSTUAL", slug: "aplikasi" },
      ]
    },
    {
      label: "TEOREMA PYTHAGORAS",
      slug: "teorema-pythagoras",
      subtopics: [
        { label: "PEMBUKTIAN TEOREMA PYTHAGORAS", slug: "pembuktian" },
        { label: "MENGHITUNG PANJANG SEGITIGA SIKU-SIKU", slug: "hitung-panjang" },
        { label: "TRIPLE PYTHAGORAS", slug: "triple" },
        { label: "PYHTAGORAS DAN JENIS-JENIS SEGITIGA", slug: "jenis-segitiga" },
        { label: "PERBANDINGAN SISI SEGITIGA SIKU-SIKU SUDUT KHUSUS", slug: "sudut-khusus" },
        { label: "PENERAPAN TEOREMA PYTHAGORAS PADA MASALAH KONTEKSTUAL", slug: "penerapan" },
      ]
    },
    {
      label: "LINGKARAN",
      slug: "lingkaran",
      subtopics: [
        { label: "UNSUR-UNSUR LINGKARAN", slug: "unsur" },
        { label: "KELILING DAN LUAS LINGKARAN", slug: "keliling-luas" },
        { label: "KAITAN LINGKARAN DENGAN BANGUN DATAR LAINNYA", slug: "kaitan-bangun-datar" },
        { label: "PANJANG BUSUR DAN LUAS JURING", slug: "busur-juring" },
        { label: "SUDUT PUSAT DAN SUDUT KELILING", slug: "sudut" },
        { label: "PENERAPAN KONSEP LINGKARAN PADA PERMASALAHAN KONTEKSTUAL", slug: "penerapan" },
      ]
    },
    {
      label: "GARIS SINGGUNG LINGKARAN",
      slug: "garis-singgung-lingkaran",
      subtopics: [
        { label: "PENGERTIAN DAN SIFAT GARIS SINGGUNG LINGKARAN", slug: "pengertian" },
        { label: "MENGHITUNG PANJANG GARIS SINGGUNG DARI TITIK DI LUAR LINGKARAN", slug: "hitung-panjang" },
        { label: "GARIS SINGGUNG PERSEKUTUAN LUAR (GSPL)", slug: "gspl" },
        { label: "GARIS SINGGUNG PERSEKUTUAN DALAM (GSPD)", slug: "gspd" },
        { label: "SABUK LILITAN MINIMAL (PENERAPAN)", slug: "sabuk-lilitan" },
      ]
    },
    {
      label: "BANGUN RUANG SISI DATAR",
      slug: "bangun-ruang-sisi-datar",
      subtopics: [
        { label: "UNSUR-UNSUR BANGUN RUANG", slug: "unsur" },
        { label: "KUBUS", slug: "kubus" },
        { label: "BALOK", slug: "balok" },
        { label: "PRISMA", slug: "prisma" },
        { label: "LIMAS", slug: "limas" },
        { label: "BANGUN RUANG SISI DATAR GABUNGAN", slug: "gabungan" },
        { label: "MASALAH KONTEKSTUAL YANG BERKAITAN DENGAN BANGUN RUANG SISI DATAR", slug: "penerapan" },
      ]
    },
  ],
  "KELAS 9": [
    {
      label: "BILANGAN BERPANGKAT",
      slug: "bilangan-berpangkat",
      subtopics: [
        { label: "PENGERTIAN DAN NOTASI PANGKAT", slug: "pengertian" },
        { label: "SIFAT-SIFAT OPERASI BILANGAN BERPANGKAT", slug: "sifat-operasi" },
        { label: "PANGKAT NOL, PANGKAT NEGATIF DAN PANGKAT PECAHAN", slug: "pangkat-khusus" },
        { label: "BENTUK AKAR", slug: "bentuk-akar" },
        { label: "NOTASI ILMIAH", slug: "notasi-ilmiah" },
      ]
    },
    {
      label: "KESEBANGUNAN DAN KEKONGRUENAN",
      slug: "kesebangunan",
      subtopics: [
        { label: "KEKONGRUENAN BANGUN DATAR", slug: "kekongruenan-datar" },
        { label: "KEKONGRUENAN DUA SEGITIGA", slug: "kekongruenan-segitiga" },
        { label: "KESEBANGUNAN BANGUN DATAR", slug: "kesebangunan-datar" },
        { label: "KESEBANGUNAN DUA SEGITIGA", slug: "kesebangunan-segitiga" },
        { label: "KESEBANGUNAN KHUSUS PADA TRAPESIUM", slug: "kesebangunan-trapesium" },
        { label: "PENERAPAN KESEBANGUNAN (MASALAH KONTEKSTUAL)", slug: "penerapan" },
      ]
    },
    {
      label: "TRANSFORMASI GEOMETRI",
      slug: "transformasi-geometri",
      subtopics: [
        { label: "TRANSLASI (PERGESERAN)", slug: "translasi" },
        { label: "REFLEKSI (PENCERMINAN)", slug: "refleksi" },
        { label: "ROTASI (PERPUTARAN)", slug: "rotasi" },
        { label: "DILATASI (PERKALIAN/PERUBAHAN UKURAN)", slug: "dilatasi" },
      ]
    },
    {
      label: "BANGUN RUANG SISI LENGKUNG",
      slug: "bangun-ruang-sisi-lengkung",
      subtopics: [
        { label: "TABUNG", slug: "tabung" },
        { label: "KERUCUT", slug: "kerucut" },
        { label: "BOLA", slug: "bola" },
        { label: "PERUBAHAN VOLUME BANGUN RUANG SISI LENGKUNG", slug: "perubahan-volume" },
        { label: "BANGUN RUANG SISI LENGKUNG GABUNGAN", slug: "gabungan" },
      ]
    },
    {
      label: "STATISTIKA",
      slug: "statistika",
      subtopics: [
        { label: "PENGANTAR STATISTIKA DAN PENGUMPULAN DATA", slug: "pengantar" },
        { label: "PENYAJIAN DATA", slug: "penyajian" },
        { label: "UKURAN PEMUSATAN DATA (RATA- RATA DAN RATA-RATA GABUNGAN)", slug: "rata-rata" },
        { label: "UKURAN PEMUSATAN DATA (MEDIAN DAN MODUS)", slug: "median-modus" },
        { label: "UKURAN LETAK DATA (KUARTIL)", slug: "kuartil" },
        { label: "UKURAN PENYEBARAN DATA (JANGKAUAN, JANGKAUAN INTERKUARTIL, SIMPANGAN KUARTIL)", slug: "penyebaran" },
      ]
    },
    {
      label: "PELUANG",
      slug: "peluang",
      subtopics: [
        { label: "RUANG SAMPEL DAN TITIK SAMPEL", slug: "ruang-sampel" },
        { label: "PELUANG TEORETIK", slug: "peluang-teoretik" },
        { label: "PELUANG EMPIRIK", slug: "peluang-empirik" },
        { label: "FREKUENSI HARAPAN", slug: "frekuensi-harapan" },
      ]
    },
    {
      label: "PERSAMAAN KUADRAT (PENGAYAAN)",
      slug: "persamaan-kuadrat",
      subtopics: [
        { label: "BENTUK UMUM PERSAMAAN KUADRAT", slug: "bentuk-umum" },
        { label: "MENENTUKAN AKAR-AKAR PERSAMAAN KUADRAT DENGAN PEMFAKTORAN", slug: "pemfaktoran" },
        { label: "MENENTUKAN AKAR-AKAR PERSAMAAN KUADRAT DENGAN RUMUS KUADRATIK", slug: "rumus-kuadratik" },
        { label: "AKAR-AKAR PERSAMAAN KUADRAT DENGAN PELENGKAP KUADRAT", slug: "pelengkap-kuadrat" },
        { label: "DISKRIMINAN", slug: "diskriminan" },
        { label: "MENYUSUN PERSAMAAN KUADRAT BARU", slug: "menyusun-persamaan" },
        { label: "PENERAPAN PERSAMAAN KUADRAT PADA PERMASALAHAN KONTEKSTUAL", slug: "penerapan" },
      ]
    },
    {
      label: "FUNGSI KUADRAT (PENGAYAAN)",
      slug: "fungsi-kuadrat",
      subtopics: [
        { label: "BENTUK UMUM DAN KARAKTERISTIK GRAFIK", slug: "bentuk-umum" },
        { label: "TITIK POTONG TERHADAP SUMBU-SUMBU", slug: "titik-potong" },
        { label: "SUMBU SIMETRI DAN TITIK PUNCAK (OPTIMUM)", slug: "simetri-puncak" },
        { label: "MENGGAMBAR GRAFIK FUNGSI KUADRAT", slug: "gambar-grafik" },
        { label: "MENYUSUN FUNGSI KUADRAT", slug: "menyusun-fungsi" },
        { label: "PENERAPAN FUNGSI KUADRAT (NILAI MAKSIMUM/MINIMUM)", slug: "penerapan" },
      ]
    },
  ]
};

const pesanList = [
    "Kamu itu alasan aku senyum tiap hari",
    "Frenkkkkkk🤪",
    "Serius deh, bayar tapi",
    "1 Agustus = hari buat ngingetin kalau aku sayang kamu banget",
    "Makasih udah jadi tempat paling nyaman buat aku",
    "btw ada 200k ga",
    "pi boonk🤪🤪🤪"
  ];
  let i = 0;
  function ubahPesan() {
    document.getElementById('pesan').innerHTML = pesanList[i];
    i = (i + 1) % pesanList.length;
  }

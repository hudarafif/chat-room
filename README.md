# 💬 Chat Room

Proyek **Chat Room** ini adalah aplikasi percakapan sederhana berbasis React, di mana pengguna (customer) bisa mengirim pesan teks maupun file (gambar, PDF, dan dokumen lain). Aplikasi ini cocok untuk implementasi sistem customer support atau live chat sederhana.

---

## 🚀 Fitur

- 🔹 Menampilkan daftar pesan antar pengguna (customer dan agent)
- 📝 Mengirim pesan teks secara real-time (dummy tanpa backend)
- 📎 Attach file apa saja (gambar, PDF, dokumen, dll)
- 🧠 UI interaktif dengan tampilan pesan berbeda untuk agent dan customer
- 💅 Dibangun menggunakan **React + Tailwind CSS**

---

## 🛠️ Tech Stack

| Teknologi | Deskripsi |
|------------|------------|
| **React.js** | Framework utama untuk membangun UI |
| **Tailwind CSS** | Styling cepat dan responsif |
| **Vercel** | Hosting dan deployment |
| **JSON Data** | Data dummy untuk mensimulasikan chat |

---

## 📂 Struktur Folder

```bash
chat-room/
├── public/
│   ├── data/
│   │   └── chatData.json        # Data chat dummy
│   └── images/                  # Gambar profil atau asset lainnya
├── src/
│   ├── components/              # Komponen tambahan
│   ├── pages/
│   │   └── ChatPage.jsx         # Halaman utama chat
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md

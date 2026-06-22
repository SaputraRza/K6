# K6 Load Testing Framework

Repository ini berisi framework pengujian performa (Load Testing) modular menggunakan **k6** oleh Grafana. Framework ini dirancang dengan struktur terpisah (modular) agar mudah dipelihara (*maintainable*), mudah ditingkatkan skala pengujiannya (*scalable*), dan mematuhi asas *DRY (Don't Repeat Yourself)*.

## 🚀 Tech Stack
* **k6 (Grafana)**: Core tool untuk performance & load testing.
* **JavaScript (ES6+)**: Bahasa penulisan skrip pengujian k6.
* **Node.js & npm**: Runtime & package manager.
* **Postman Echo API**: Endpoint dummy target pengujian.

---

## 📂 Struktur Project
Pemisahan folder dirancang secara modular dengan tugas masing-masing:

```text
├── src/
│   ├── baseUrl/
│   │   └── url.js            # Konfigurasi URL lingkungan (dev, canary, prod)
│   ├── headers/
│   │   └── header.js         # Header HTTP terpusat (Cookie, Auth Token)
│   ├── scenarios/
│   │   ├── get.js            # Skenario GET request
│   │   └── post.js           # Skenario POST request
│   ├── stages/
│   │   ├── stages-min.js     # Profil beban minimal (smoke test)
│   │   ├── stages-ave.js     # Profil beban rata-rata (load test)
│   │   └── stages-max.js     # Profil beban maksimal (stress test)
│   └── main.js               # Entry point utama k6
├── utils/
│   ├── body-helpers.js       # Helper payload data request
│   ├── http-helpers.js       # Wrapper HTTP client k6 + assertions & logging
│   └── payload-helpers.js    # Helper payload registrasi & login dinamis
├── .gitignore                # Daftar file/folder yang diabaikan oleh Git
├── package.json              # Metadata konfigurasi npm
└── README.md                 # Dokumentasi project
```

---

## ⚙️ Persyaratan
Sebelum menjalankan, pastikan Anda telah memasang **k6** di sistem Anda.

* **macOS (via Homebrew)**:
  ```bash
  brew install k6
  ```
* **Windows (via Winget)**:
  ```cmd
  winget install grafana.k6
  ```
* **Linux (Debian/Ubuntu)**:
  ```bash
  sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD194E8CE01A618C59C95A7C2038961900788B
  echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
  sudo apt-get update
  sudo apt-get install k6
  ```

---

## 🏃 Cara Menjalankan

Jalankan perintah berikut di terminal pada direktori root project:

### 1. Menjalankan Default (Environment `dev`)
```bash
k6 run src/main.js
```

### 2. Menjalankan dengan Environment Tertentu
Anda bisa menentukan target environment (`dev`, `canary`, atau `prod`) menggunakan option `-e` / `--env`:

* **Canary**:
  ```bash
  k6 run -e env=canary src/main.js
  ```
* **Production**:
  ```bash
  k6 run -e env=prod src/main.js
  ```

### 3. Mengganti Load Profile (Stages)
Untuk menyesuaikan skenario beban (misalnya beralih dari beban minimal ke beban maksimal), buka file [src/main.js](src/main.js) dan ubah bagian import opsi tahapannya:

```javascript
// Ganti impor ini sesuai kebutuhan (stages-min, stages-ave, atau stages-max)
import { minUser } from "./stages/stages-min.js"; 

export const options = minUser;
```

---

## 🔒 Praktik Terbaik & Keamanan (Best Practices)
Untuk menghindari *hardcoding* data sensitif seperti cookies atau token ke dalam repository publik (GitHub/GitLab), disarankan menggunakan **Environment Variables** k6.

Contoh akses dinamis di file Header:
```javascript
export const header = {
    'Cookie': __ENV.COOKIE_GET || 'default-value-if-any',
}
```
Jalankan tes dengan mempassing token/cookie secara langsung:
```bash
k6 run -e COOKIE_GET="sails.sid=your_cookie_value" src/main.js
```

// Toggle Navbar Mobile
const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('#nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animasi Bar Toggler
    menuToggle.classList.toggle('is-active');
});

// Tutup menu saat link diklik (untuk mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll Active Link Highlighting
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navItems.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-links a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};


// spreadshett

 const scriptURL = 'https://script.google.com/macros/s/AKfycbzQMPclX05N5R7w76Sb37OCz-vYKRk6n1itlyHpCHOXrXa5Eooqn-6Xw-T4mNEaUF_1/exec'
  const form = document.forms['submit-to-google-sheet']
  const btn = document.querySelector('#submit-btn')
  const statusMsg = document.querySelector('#status-message')

 form.addEventListener('submit', e => {
    e.preventDefault()
    
    // 1. Aksi dimulai: Kunci tombol dan tampilkan status
    btn.disabled = true
    btn.innerHTML = "Processing..."
    statusMsg.innerHTML = "⏳ Mengirim ke Google Sheets..."
    statusMsg.style.color = "orange"

    // Mengambil data dari form
    const formData = new FormData(form)
    // 2. Proses pengiriman data
    fetch(scriptURL, { method: 'POST', body: formData})
      .then(response => {
          // 3. Aksi Berhasil
          statusMsg.innerHTML = "✅ Data berhasil disimpan di Spreadsheet!";
          statusMsg.style.color = "green";
          btn.disabled = false
          btn.innerHTML = "Kirim Data Lagi"
          form.reset()
      })
      .catch(error => {
          // 4. Aksi Gagal
          console.error('Error!', error.message)
          statusMsg.innerHTML = "❌ Gagal: " + error.message;
          statusMsg.style.color = "red";
          btn.disabled = false
          btn.innerHTML = "Coba Lagi"
      })
  })




  
 
               




  
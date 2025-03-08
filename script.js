document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Event: Ubah teks saat tombol diklik
    document.getElementById("change-text-btn").addEventListener("click", () => {
        document.getElementById("text-content").textContent = "Teks telah diubah!";
    });

    // 2. Event: Tambah efek saat scroll (ubah warna header)
    window.addEventListener("scroll", () => {
        const header = document.getElementById("main-header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 3. Event: Form Submission
    document.getElementById("contact-form").addEventListener("submit", (event) => {
        event.preventDefault();
        document.getElementById("form-status").textContent = "Pesan terkirim!";
        document.getElementById("form-status").style.color = "green";
    });

    // 4. Event: Ganti background saat hover di galeri
    document.querySelectorAll(".gallery-container img").forEach(img => {
        img.addEventListener("mouseenter", () => {
            document.body.style.background = "#e0e0e0";
        });
        img.addEventListener("mouseleave", () => {
            document.body.style.background = "#f4f4f4";
        });
    });

});

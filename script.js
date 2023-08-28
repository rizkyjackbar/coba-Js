// Baris ini mengambil elemen dengan ID "taskInput" dari halaman HTML dan menyimpannya dalam variabel taskInput
const taskInput = document.getElementById("taskInput");
// aris ini mengambil elemen dengan ID "addButton" dari halaman HTML dan menyimpannya dalam variabel addButton.
const addButton = document.getElementById("addButton");
// aris ini mengambil elemen dengan ID "taskList" dari halaman HTML dan menyimpannya dalam variabel taskList.
const taskList = document.getElementById("taskList");

// Ini adalah event listener yang mengaitkan fungsi addTask dengan event "click" pada tombol dengan ID "addButton". Artinya, setiap kali tombol "Tambah" diklik, fungsi addTask akan dipanggil.
addButton.addEventListener("click", addTask);

// Fungsi ini akan dijalankan saat tombol "Tambah" diklik atau tombol Enter ditekan pada input taskInput.
function addTask() {
  // mengambil teks dari input taskInput dan menyimpannya dalam variabel taskText.
  const taskText = taskInput.value;

  // memeriksa apakah teks tugas tidak kosong setelah menghapus spasi di awal dan akhirnya.
  if (taskText.trim() !== "") {
    // Jika tugas tidak kosong, const li = document.createElement("li"); membuat elemen <li> baru (item daftar) dan menyimpannya dalam variabel li.
    const li = document.createElement("li");
    // mengatur HTML dalam elemen <li> yang berisi teks tugas dan tombol "Hapus".
    li.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteButton">Hapus</button>
        `;
    //  memasukkan elemen <li> ke dalam daftar tugas (taskList).
    taskList.appendChild(li);

    // mengosongkan input setelah tugas ditambahkan.
    taskInput.value = "";
    li.querySelector(".deleteButton").addEventListener("click", () => {
      li.remove();
    });
  }
}

// Ini mendengarkan event "keypress" pada input taskInput
taskInput.addEventListener("keypress", (event) => {
  // jika tombol yang ditekan adalah tombol Enter (event.key === "Enter"), maka addTask() akan dipanggil, yaitu tugas baru akan ditambahkan saat tombol Enter ditekan.
  if (event.key === "Enter") {
    addTask();
  }
});

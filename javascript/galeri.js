// Galeri verileri
const galleryData = [
  { id: 1, category: 'is' },
  { id: 2, category: 'is' },
  { id: 3, category: 'is' },
  { id: 4, category: 'agir' },
  { id: 5, category: 'agir' },
  { id: 6, category: 'stok' },
  { id: 7, category: 'stok' },
  { id: 8, category: 'stok' },
  { id: 9, category: 'stok' },
  { id: 10, category: 'stok' },
  { id: 11, category: 'trak' },
  { id: 12, category: 'stok' },
  { id: 13, category: 'arac' },
  { id: 14, category: 'stok' },
  { id: 15, category: 'stok' },
  { id: 16, category: 'agir' },
  { id: 17, category: 'trak' },
  { id: 18, category: 'trak' },
  { id: 19, category: 'stok' },
  { id: 20, category: 'degis' },
  { id: 21, category: 'trak' },
  { id: 22, category: 'stok' },
  { id: 23, category: 'trak' },
  { id: 24, category: 'stok' },
  { id: 25, category: 'stok' },
  { id: 26, category: 'arac' },
  { id: 27, category: 'trak' },
  { id: 28, category: 'trak' },
  { id: 29, category: 'degis' },
  { id: 30, category: 'trak' },
  { id: 31, category: 'degis' },
  { id: 32, category: 'trak' },
  { id: 33, category: 'stok' },
  { id: 34, category: 'degis' },
  { id: 35, category: 'trak' },
  { id: 36, category: 'trak' },
  { id: 37, category: 'trak' },
  { id: 38, category: 'trak' },
  { id: 39, category: 'trak' },
  { id: 40, category: 'trak' },
  { id: 41, category: 'degis' },
  { id: 42, category: 'trak' },
  { id: 43, category: 'trak' },
  { id: 44, category: 'trak' },
  { id: 45, category: 'trak' },
  { id: 46, category: 'trak' },
  { id: 47, category: 'trak' },
  { id: 48, category: 'degis' },
  { id: 49, category: 'trak' },
  { id: 50, category: 'degis' },
  { id: 51, category: 'degis' },
  { id: 52, category: 'trak' },
  { id: 53, category: 'trak' },
  { id: 54, category: 'trak' },
  { id: 55, category: 'trak' },
  { id: 56, category: 'degis' },
  { id: 57, category: 'degis' },
  { id: 58, category: 'trak' },
  { id: 59, category: 'trak' },
  { id: 60, category: 'trak' },
  { id: 61, category: 'trak' },
  { id: 62, category: 'trak' },
  { id: 63, category: 'trak' },
  { id: 64, category: 'degis' },
  { id: 65, category: 'degis' },
  { id: 66, category: 'trak' },
  { id: 67, category: 'trak' },
  { id: 68, category: 'trak' },
  { id: 69, category: 'trak' },
  { id: 70, category: 'stok' },
  { id: 71, category: 'arac' },
  { id: 72, category: 'trak' },
  { id: 73, category: 'degis' },
  { id: 74, category: 'trak' },
  { id: 75, category: 'trak' },
  { id: 76, category: 'trak' },
  { id: 77, category: 'arac' },
  { id: 78, category: 'trak' },
  { id: 79, category: 'arac' },
  { id: 80, category: 'trak' },
  { id: 81, category: 'stok' },
  { id: 82, category: 'arac' },
  { id: 83, category: 'trak' },
  { id: 84, category: 'trak' },
  { id: 85, category: 'trak' },
  { id: 86, category: 'stok' },
  { id: 87, category: 'trak' },
  { id: 88, category: 'trak' },
  { id: 89, category: 'trak' },
  { id: 90, category: 'trak' },
  { id: 91, category: 'trak' },
  { id: 92, category: 'trak' },
  { id: 93, category: 'trak' },
  { id: 94, category: 'trak' },
  { id: 95, category: 'trak' },
  { id: 96, category: 'trak' },
  { id: 97, category: 'trak' },
  { id: 98, category: 'dukkan' },
  { id: 99, category: 'trak' },
  { id: 100, category: 'trak' },
  { id: 101, category: 'trak' },
  { id: 102, category: 'trak' },
  { id: 103, category: 'trak' },
  { id: 104, category: 'trak' },
  { id: 105, category: 'degis' },
  { id: 106, category: 'trak' },
  { id: 107, category: 'trak' },
  { id: 108, category: 'bicer' },
  { id: 109, category: 'trak' },
  { id: 110, category: 'trak' },
  { id: 111, category: 'trak' },
  { id: 112, category: 'degis' },
  { id: 113, category: 'trak' },
  { id: 114, category: 'bicer' },
  { id: 115, category: 'trak' },
  { id: 116, category: 'trak' },
  { id: 117, category: 'bicer' },
  { id: 118, category: 'dukkan' },
  { id: 119, category: 'trak' },
  { id: 120, category: 'dukkan' },
  { id: 121, category: 'trak' },
  { id: 122, category: 'bicer' },
  { id: 123, category: 'trak' },
  { id: 124, category: 'trak' },
  { id: 125, category: 'stok' },
  { id: 126, category: 'trak' },
  { id: 127, category: 'trak' },
  { id: 128, category: 'trak' },
  { id: 129, category: 'trak' },
  { id: 130, category: 'bicer' },
  { id: 131, category: 'trak' },
  { id: 132, category: 'trak' },
  { id: 133, category: 'trak' },
  { id: 134, category: 'trak' },
  { id: 135, category: 'bicer' },
  { id: 136, category: 'trak' },
  { id: 137, category: 'stok' },
  { id: 138, category: 'trak' },
  { id: 139, category: 'arac' },
  { id: 140, category: 'arac' },
  { id: 141, category: 'arac' },
  { id: 142, category: 'trak' },
  { id: 143, category: 'trak' },
  { id: 144, category: 'trak' },
  { id: 145, category: 'trak' },
  { id: 146, category: 'bicer' },
  { id: 147, category: 'trak' },
  { id: 148, category: 'trak' },
  { id: 149, category: 'trak' },
  { id: 150, category: 'trak' },
  { id: 151, category: 'bicer' },
  { id: 152, category: 'trak' }
];

// Kategori isimleri
const categoryNames = {
  'is': 'İş Makinesi',
  'agir': 'Ağır Vasıta',
  'stok': 'Stok-Sevkiyat',
  'trak': 'Traktör',
  'arac': 'Otomobil',
  'degis': 'Lastik Değişim',
  'dukkan': 'Dükkan',
  'bicer': 'Biçerdöver',
};

let currentFilter = 'all';

function createGalleryCards(filter = 'all') {
    const container = document.getElementById('gallery-container');
    container.innerHTML = ''; // Mevcut kartları temizle

    const filteredData = filter === 'all' 
        ? galleryData 
        : galleryData.filter(item => item.category === filter);

    filteredData.forEach(item => {
        const card = `
            <div class="col-md-3 col-sm-6 mb-4">
                <figure class="snip1581">
                    <img src="images/galeri/img (${item.id}) ${item.category}.webp" alt="Galeri ${item.id}"/>
                    <a href="images/galeri/img (${item.id}) ${item.category}.webp" data-lightbox="gallery" data-title="Bulvar Oto Lastik"></a>
                </figure>
            </div>
        `;
        container.innerHTML += card;
    });
}

function populateCategories() {
    const container = document.getElementById('categoryContainer');
    const categories = [...new Set(galleryData.map(item => item.category))];
    
    categories.forEach(category => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            <button class="btn btn-outline-primary btn-sm w-100 text-left category-btn" data-category="${category}">
                ${categoryNames[category] || 'Genel'} (${galleryData.filter(item => item.category === category).length})
            </button>
        `;
        container.appendChild(li);
    });
}

function setupFiltering() {
    // Kategori arama
    const categorySearch = document.getElementById('categorySearch');
    const clearCategorySearch = document.getElementById('clearCategorySearch');
    const allCategoryBtn = document.getElementById('allCategory');
    const categoryContainer = document.getElementById('categoryContainer');

    categorySearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const buttons = categoryContainer.querySelectorAll('.category-btn');
        
        buttons.forEach(button => {
            const text = button.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                button.parentElement.style.display = 'block';
            } else {
                button.parentElement.style.display = 'none';
            }
        });
    });

    clearCategorySearch.addEventListener('click', function() {
        categorySearch.value = '';
        const buttons = categoryContainer.querySelectorAll('.category-btn');
        buttons.forEach(button => {
            button.parentElement.style.display = 'block';
        });
    });

    allCategoryBtn.addEventListener('click', function() {
        currentFilter = 'all';
        createGalleryCards('all');
        updateActiveButton(this);
    });

    // Kategori butonlarına tıklama olayı
    categoryContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('category-btn')) {
            const category = e.target.dataset.category;
            currentFilter = category;
            createGalleryCards(category);
            updateActiveButton(e.target);
        }
    });
}

function updateActiveButton(activeButton) {
    // Tüm butonlardan active sınıfını kaldır
    document.querySelectorAll('.category-btn, #allCategory').forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline-primary');
    });
    
    // Aktif butona active sınıfını ekle
    activeButton.classList.remove('btn-outline-primary');
    activeButton.classList.add('btn-primary');
}

// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    populateCategories();
    setupFiltering();
    // createGalleryCards();
});

// Lightbox ayarları
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': "Resim %1 / %2",
    'fadeDuration': 300,
    'imageFadeDuration': 300,
    'positionFromTop': 100,
    'maxWidth': 1200,
    'maxHeight': 800
});
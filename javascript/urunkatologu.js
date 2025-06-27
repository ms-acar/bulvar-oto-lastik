document.addEventListener('DOMContentLoaded', function() {
  // 1. Veriler
  const brands = [
    { id: 'pirelli', name: 'Pirelli', image: 'images/markalar/pirelli.png' },
    { id: 'michelin', name: 'Michelin', image: 'images/markalar/michelin.png' },
    { id: 'petlas', name: 'Petlas', image: 'images/markalar/petlas.jpg' },
    { id: 'bkt', name: 'BKT', image: 'images/markalar/bkt.png' },
    { id: 'ozka', name: 'Özka', image: 'images/markalar/ozka.png' },
    { id: 'mutlu', name: 'Mutlu', image: 'images/markalar/mutlu.png' },
    { id: 'starmaxx', name: 'Starmaxx', image: 'images/markalar/starmaxx.png' },
    { id: 'jantsan', name: 'Jantsan', image: 'images/markalar/jantsan.png' },
    { id: 'lassa', name: 'Lassa', image: 'images/markalar/lassa.jpg' },
    { id: 'yigit', name: 'Yiğit', image: 'images/markalar/yigit.jpg' },
    { id: 'alliance', name: 'Alliance', image: 'images/markalar/alliance.jpg' },
    { id: 'continental', name: 'Continental', image: 'images/markalar/continental.png' },
    { id: 'goodyear', name: 'Goodyear', image: 'images/markalar/goodyear.png' },
    { id: 'nysa', name: 'Nysa', image: 'images/markalar/nysa.png' },
    { id: 'apollo', name: 'Apollo', image: 'images/markalar/apollo.jpg' },
    // { id: 'dunlop', name: 'Dunlop', image: '../images/markalar/pirelli.png' }
  ];

  const types = [
    { id:'lastik', name: 'Lastik'},
    { id:'aku', name: 'Akü'}
  ];

  const tires = [
    { id:'ticari', name: 'Otobüs/Kamyon Lastikleri'},
    { id:'binek', name: 'Binek-SUV-Hafif Ticari Lastikleri'},
    { id:'zirai', name: 'Zirai Lastikler'},
    { id:'is', name: 'İş Makinası Lastikleri'},
  ];

  const catalogItems = [
    { id: 1, brandId: 'petlas', typeId:'lastik', tireId:'ticari', title: 'Otobüs/Kamyon Lastikleri', image: 'images/katalog/petlasticari.png', text: 'Uzun yol ve ağır yük ticari grubu araçlar (Kamyon-TIR-Otobüs) lastikleri katoloğu', color:'danger', link:'pdf/petlasticari.pdf'},
    { id: 2, brandId: 'petlas', typeId:'lastik',tireId:'binek', title: 'Binek-SUV-Hafif Ticari Lastikleri', image: 'images/katalog/petlasbinek.png', text: 'Binek araç, SUV ve panelvan grubu araç lastikleri katoloğu', color:'danger', link:'pdf/petlasbinek.pdf'},
    { id: 3, brandId: 'petlas', typeId:'lastik',tireId:'zirai', title: 'Zirai Lastikler', image: 'images/katalog/petlaszirai.png', text: 'Tarım makineleri için yüksek çekiş gücü ve zorlu arazi koşullarına dayanıklı traktör ve biçerdöver lastik çeşitleri.', color:'danger', link:'pdf/petlaszirai.pdf'},
    { id: 4, brandId: 'petlas', typeId:'lastik',tireId:'is', title: 'İş Makinası Lastikleri', image: 'images/katalog/petlasis.png', text: 'Şantiye, maden ve endüstriyel alanlarda kullanılan iş makinelerine özel dayanıklı lastik çeşitleri.', color:'danger', link:'pdf/petlasis.pdf'},
    { id: 5, brandId: 'lassa', typeId:'lastik',tireId:'binek', title: 'Binek-SUV-Hafif Ticari Lastikleri', image: 'images/katalog/lassabinek.png', text: 'Binek araç, SUV ve panelvan grubu araç lastikleri katoloğu', color:'danger', link:'pdf/lassa.pdf'},
    { id: 6, brandId: 'starmaxx', typeId:'lastik',tireId:'ticari', title: 'Otobüs/Kamyon Lastikleri', image: 'images/katalog/starmaxxticari.png', text: 'Uzun yol ve ağır yük ticari grubu araçlar (Kamyon-TIR-Otobüs) lastikleri katoloğu', color:'info', link:'pdf/starmaxxticari.pdf'},
    { id: 7, brandId: 'starmaxx', typeId:'lastik',tireId:'binek', title: 'Binek-SUV-Hafif Ticari Lastikleri', image: 'images/katalog/starmaxxbinek.png', text: 'Binek araç, SUV ve panelvan grubu araç lastikleri katoloğu', color:'info', link:'pdf/starmaxxbinek.pdf'},
    { id: 8, brandId: 'starmaxx', typeId:'lastik',tireId:'zirai', title: 'Zirai Lastikler', image: 'images/katalog/starmaxxzirai.png', text: 'Tarım makineleri için yüksek çekiş gücü ve zorlu arazi koşullarına dayanıklı traktör ve biçerdöver lastik çeşitleri.', color:'info', link:'pdf/starmaxxzirai.pdf'},
    { id: 9, brandId: 'bkt', typeId:'lastik',tireId:'zirai', title: 'Zirai Lastikler', image: 'images/katalog/bktzirai.png', text: 'Tarım makineleri için yüksek çekiş gücü ve zorlu arazi koşullarına dayanıklı traktör ve biçerdöver lastik çeşitleri.', color:'success', link:'pdf/bkt.pdf'},    
    { id: 10, brandId: 'ozka', typeId:'lastik',tireId:'zirai', title: 'Zirai Lastikler', image: 'images/katalog/ozkazirai.png', text: 'Tarım makineleri için yüksek çekiş gücü ve zorlu arazi koşullarına dayanıklı traktör ve biçerdöver lastik çeşitleri.', color:'warning', link:'pdf/ozka.pdf'}, 
    { id: 11, brandId: 'alliance', typeId:'lastik',tireId:'zirai', title: 'Zirai Lastikler', image: 'images/katalog/alliancezirai.png', text: 'Tarım makineleri için yüksek çekiş gücü ve zorlu arazi koşullarına dayanıklı traktör ve biçerdöver lastik çeşitleri.', color:'danger', link:'pdf/alliance.pdf'},
    { id: 12, brandId: 'pirelli', typeId:'lastik',tireId:'binek', title: 'Binek-SUV-Hafif Ticari Lastikleri', image: 'images/katalog/pirellibinek.png', text: 'Binek araç, SUV ve panelvan grubu araç lastikleri katoloğu.', color:'warning', link:'pdf/pirelli.pdf'},
    { id: 13, brandId: 'continental', typeId:'lastik',tireId:'binek', title: 'Binek-SUV-Hafif Ticari Lastikleri', image: 'images/katalog/continental.png', text: 'Binek araç, SUV ve panelvan grubu araç lastikleri katoloğu.', color:'warning', link:'pdf/continental.pdf'},
    { id: 14, brandId: 'goodyear', typeId: 'lastik',tireId:'binek', title: 'Binek-SUV-Hafif Ticari Lastikleri', image: 'images/katalog/goodyear.png', text: 'Binek araç, SUV ve panelvan grubu araç lastikleri katoloğu.', color:'info', link:'#'},
    { id: 15, brandId: 'mutlu', typeId:'aku', title: 'Binek/Hafif Ticari Araç Aküleri', image: 'images/katalog/mutlu.png', text: 'Binek araç, SUV ve panelvan grubu araç akü modellerini bu katalogda bulabilirsiniz.', color:'danger', link:'pdf/mutlu.pdf'},
    { id: 16, brandId: 'inci', typeId:'aku', title: 'Tüm Araçlar İçin Aküler', image: 'images/katalog/inci.png', text: 'Markaya dair tüm araçlara göre akü modellerini bu katalogda bulabilirsiniz.', color:'info', link:'pdf/inci.pdf'},
    { id: 17, brandId: 'yigit', typeId:'aku', title: 'Tüm Araçlar İçin Aküler', image: 'images/katalog/yigitaku.png', text: 'Markaya dair tüm araçlara göre akü modellerini bu katalogda bulabilirsiniz.', color:'secondary', link:'pdf/yigit.pdf'},
  ];

  function displayBrands(filteredBrands = brands) {
    const container = document.getElementById('brandContainer');
    container.innerHTML = '';
    filteredBrands.forEach(brand => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item d-flex align-items-center';
      listItem.style.cursor = 'pointer';
      listItem.innerHTML = `
        <img src="${brand.image}" alt="${brand.name}" style="width: 30px; height: 30px; object-fit: contain; margin-right: 10px;">
        <span>${brand.name}</span>
      `;
      listItem.addEventListener('click', () => filterCatalogByBrand(brand.id));
      container.appendChild(listItem);
    });
  }

  function displayType(filteredTypes = types) {
    const container = document.getElementById('typeContainer');
    container.innerHTML = '';
    filteredTypes.forEach(type => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item d-flex align-items-center';
      listItem.style.cursor = 'pointer';
      listItem.innerHTML = `<span>${type.name}</span>`;
      listItem.addEventListener('click', () => filterCatalogByType(type.id));
      container.appendChild(listItem);
    });
  }

  function displayTire(filteredTires = tires) {
    const container = document.getElementById('tireContainer');
    container.innerHTML = '';
    filteredTires.forEach(tire => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item d-flex align-items-center';
      listItem.style.cursor = 'pointer';
      listItem.innerHTML = `<span>${tire.name}</span>`;
      listItem.addEventListener('click', () => filterCatalogByTire(tire.id));
      container.appendChild(listItem);
    });
  }

  function displayCatalogItems(items = catalogItems) {
    const container = document.getElementById('catalogContainer');
    container.innerHTML = '';
    items.forEach(item => {
      const card = `
      <div class="col-md-6 mb-4">
        <div class="card h-100 shadow">
          <div class="row g-0">
            <div class="col-md-6">
              <img src="${item.image}" class="img-fluid rounded-start" alt="${item.title}" style="width: 100%;">
            </div>
            <div class="col-md-6">
              <div class="card-body urun">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.text}</p>
                <p class="card-text"><small class="text-body-secondary">${item.brandId}-2025 Bülteni</small></p>
                <div class="button-container">
                    <a href="${item.link}" target="_blank" class="btn btn-outline-${item.color}">İnceleyin...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;  
      container.innerHTML += card;
    });
  }

  function scrollView(){
    if (window.innerWidth < 768) {
      document.getElementById('catalogContainer').scrollIntoView({ behavior: 'smooth' });
    }
  }

  function filterCatalogByBrand(brandId) {
    const filteredItems = catalogItems.filter(item => item.brandId === brandId);
    displayCatalogItems(filteredItems);
    scrollView();
  }

  function filterCatalogByType(typeId) {
    const filteredItems = catalogItems.filter(item => item.typeId === typeId);
    displayCatalogItems(filteredItems);
    scrollView();
  }

  function filterCatalogByTire(tireId) {
    const filteredItems = catalogItems.filter(item => item.tireId === tireId);
    displayCatalogItems(filteredItems);
    scrollView();
  }

  function filterBrands(searchTerm) {
    const filtered = brands.filter(brand => 
      brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayBrands(filtered);
  }

  function filterTypes(searchTerm) {
    const filtered = types.filter(type => 
      type.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayType(filtered);
  }

  function filterTires(searchTerm) {
    const filtered = tires.filter(tire => 
      tire.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayTire(filtered);
  }

  document.getElementById('brandSearch').addEventListener('input', (e) => {
    filterBrands(e.target.value);
  });
  document.getElementById('clearBrandSearch').addEventListener('click', () => {
    document.getElementById('brandSearch').value = '';
    displayBrands();
  });
  document.getElementById('typeSearch').addEventListener('input', (e) => {
    filterTypes(e.target.value);
  });
  document.getElementById('clearTypeSearch').addEventListener('click', () => {
    document.getElementById('typeSearch').value = '';
    displayType();
  });
  document.getElementById('tireSearch').addEventListener('input', (e) => {
    filterTires(e.target.value);
  });
  document.getElementById('clearTireSearch').addEventListener('click', () => {
    document.getElementById('tireSearch').value = '';
    displayTire();
  });
  document.getElementById('allBrand').addEventListener('click', () => {
    displayCatalogItems(catalogItems);
  });
  document.getElementById('allType').addEventListener('click', () => {
    displayCatalogItems(catalogItems);
  });
  document.getElementById('allTire').addEventListener('click', () => {
    displayCatalogItems(catalogItems);
  });

  displayBrands();
  displayType();
  displayTire();
  displayCatalogItems();
}); 
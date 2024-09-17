// Henter kategorierne fra DummyJSON API'et
function fetchAndRenderCategories() {
    fetch('https://dummyjson.com/products/categories')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(categories => {
        renderCategories(categories);
      })
      .catch(error => {
        console.error('Failed to fetch categories:', error);
      });
  }

  
  // Opret dynamisk en container til kategorier og tilføj den til body
  function renderCategories(categories) {
    const categoryContainer = document.createElement('div');
    categoryContainer.id = 'category-container';  // Tildel et ID til containeren
    document.body.appendChild(categoryContainer); // Tilføj containeren til body
  
    // For enkelhedens skyld, pakker vi alle kategorier ind under én hovedkategori
    const mainCategory = "All Categories";  // Dette kan tilpasses
    renderMainCategory(mainCategory, categories, categoryContainer);
  }
  
  // Render en hovedkategori med dropdown-menu
  function renderMainCategory(mainCategory, subCategories, categoryContainer) {
    const mainCategoryElement = document.createElement('div');
    mainCategoryElement.classList.add('main-category');
    mainCategoryElement.textContent = mainCategory;
  
    const dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('dropdown-menu');
  
    // Tilføj hver sub-kategori til dropdown-menuen
    subCategories.forEach(subCategory => {
      const subCategoryElement = document.createElement('div');
      subCategoryElement.classList.add('sub-category');
      subCategoryElement.textContent = subCategory;
      dropdownMenu.appendChild(subCategoryElement);
    });
  
    mainCategoryElement.appendChild(dropdownMenu);
    categoryContainer.appendChild(mainCategoryElement); // Tilføj til den dynamisk oprettede container
  }
  
  // Start hele processen når siden er loadet
  document.addEventListener('DOMContentLoaded', () => {
    fetchAndRenderCategories();
  });
  
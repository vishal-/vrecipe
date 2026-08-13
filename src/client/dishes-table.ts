import {
  constructTable,
  coreFeatures,
  createCoreRowModel,
  createPaginatedRowModel,
  createFilteredRowModel,
  createSortedRowModel,
} from '@tanstack/table-core';
import { Dish } from '../types/dish';

let globalDishesData: Dish[] = [];
let tableInstance: any = null;

// Columns definition for TanStack Table
const columns: any[] = [
  {
    accessorKey: 'name',
    header: 'Dish Name',
    cell: (info: any) => info.getValue(),
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: (info: any) => info.getValue(),
  },
  {
    accessorKey: 'cuisine',
    header: 'Cuisine',
    cell: (info: any) => info.getValue(),
  },
  {
    accessorKey: 'prepTime',
    header: 'Prep / Cook',
    cell: (info: any) => info.getValue(),
  },
  {
    accessorKey: 'calories',
    header: 'Servings / Cal',
    cell: (info: any) => info.getValue(),
  },
  {
    accessorKey: 'mealType',
    header: 'Meal Type',
    cell: (info: any) => info.getValue(),
  },
  {
    accessorKey: 'yt_url',
    header: 'Media',
    cell: (info: any) => info.getValue(),
  },
  {
    id: 'actions',
    header: 'Actions',
  },
];

async function initDishesTable() {
  const container = document.getElementById('table-mount');
  if (!container) return;

  try {
    const res = await fetch('/api/dishes');
    const json: any = await res.json();
    if (json && json.success && Array.isArray(json.data)) {
      globalDishesData = json.data;
    }
  } catch (err) {
    console.error('Error fetching dishes for TanStack Table:', err);
  }

  // Initialize TanStack Table with 50 dishes per page
  const tableOptions: any = {
    data: globalDishesData,
    columns,
    tableFeatures: coreFeatures,
    state: {
      pagination: {
        pageIndex: 0,
        pageSize: 50, // Display 50 dishes at a time as requested!
      },
    },
    getCoreRowModel: createCoreRowModel(),
    getPaginationRowModel: createPaginatedRowModel(),
    getFilteredRowModel: createFilteredRowModel(),
    getSortedRowModel: createSortedRowModel(),
    onStateChange: () => {},
    renderFallbackValue: null,
  };

  try {
    tableInstance = (constructTable as any)(tableOptions);
  } catch (e) {
    console.warn('Constructing table fallback:', e);
  }

  renderTableUI();
  setupSearchAndFilters();
}

function renderTableUI() {
  const tbody = document.getElementById('dishes-tbody');
  const paginationInfo = document.getElementById('pagination-info');
  const btnPrev = document.getElementById('btn-prev') as HTMLButtonElement | null;
  const btnNext = document.getElementById('btn-next') as HTMLButtonElement | null;
  const totalCountEl = document.getElementById('total-dishes-count');

  let rowsToRender = globalDishesData;

  if (tableInstance && typeof tableInstance.getRowModel === 'function') {
    try {
      rowsToRender = tableInstance.getRowModel().rows.map((r: any) => r.original);
    } catch {
      rowsToRender = globalDishesData;
    }
  }

  if (totalCountEl) {
    totalCountEl.textContent = `${rowsToRender.length} Dishes`;
  }

  if (tbody) {
    if (rowsToRender.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align: center; padding: 3rem; color: #94a3b8;">
            <i class="fa-solid fa-utensils" style="font-size: 2.5rem; margin-bottom: 1rem; color: #475569; display: block;"></i>
            No dishes found matching your criteria.
          </td>
        </tr>
      `;
    } else {
      tbody.innerHTML = rowsToRender.slice(0, 50).map((dish: Dish) => {
        const categoryBadge = getCategoryBadgeHtml(dish.category);
        const mealTypeTags = (dish.mealType || []).map((m: string) => `<span class="tag-pill">${m}</span>`).join(' ');
        const ytLink = dish.yt_url 
          ? `<a href="${dish.yt_url}" target="_blank" class="yt-btn" title="Watch Recipe Video"><i class="fa-brands fa-youtube"></i> Watch</a>`
          : `<span style="color: #64748b; font-size: 0.8rem;">No Video</span>`;
        
        const fallbackImg = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&auto=format&fit=crop";

        return `
          <tr data-dish-id="${dish.id}">
            <td>
              <div class="dish-cell-name">
                <img src="${dish.image || fallbackImg}" alt="${dish.name}" class="dish-thumb" onerror="this.src='${fallbackImg}'" />
                <div class="dish-info">
                  <span class="dish-title">${escapeHtml(dish.name)}</span>
                  <span class="dish-desc-short">${escapeHtml(dish.description || '')}</span>
                </div>
              </div>
            </td>
            <td>${categoryBadge}</td>
            <td><span class="tag-pill" style="background: rgba(99,102,241,0.15); color: #818cf8;">${escapeHtml(dish.cuisine)}</span></td>
            <td>
              <div style="display: flex; flex-direction: column; font-size: 0.825rem; color: #cbd5e1;">
                <span><i class="fa-regular fa-clock"></i> Prep: ${escapeHtml(dish.prepTime || 'N/A')}</span>
                <span style="color: #94a3b8;">Cook: ${escapeHtml(dish.cookTime || 'N/A')}</span>
              </div>
            </td>
            <td>
              <div style="display: flex; flex-direction: column; font-size: 0.825rem;">
                <span style="font-weight: 600; color: #f8fafc;">${dish.calories} kcal</span>
                <span style="color: #94a3b8;">${dish.servings} Servings</span>
              </div>
            </td>
            <td>${mealTypeTags || '<span style="color:#64748b;">-</span>'}</td>
            <td>${ytLink}</td>
            <td>
              <div class="action-btns">
                <button type="button" class="btn-icon btn-view-dish" data-id="${dish.id}" title="View Dish Details">
                  <i class="fa-solid fa-eye"></i>
                </button>
                <a href="/dishes/edit/${dish.id}" class="btn-icon" title="Edit Dish">
                  <i class="fa-solid fa-pen-to-square"></i>
                </a>
                <button type="button" class="btn-icon danger btn-delete-dish" data-id="${dish.id}" data-name="${escapeHtml(dish.name)}" title="Delete Dish">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    }
  }

  // Update Pagination Controls
  if (paginationInfo) {
    paginationInfo.textContent = `Page 1 of 1`;
  }

  if (btnPrev) btnPrev.disabled = true;
  if (btnNext) btnNext.disabled = true;

  bindActionListeners();
}

function setupSearchAndFilters() {
  const searchInput = document.getElementById('search-input') as HTMLInputElement | null;
  const categoryFilter = document.getElementById('category-filter') as HTMLSelectElement | null;
  const cuisineFilter = document.getElementById('cuisine-filter') as HTMLSelectElement | null;

  function applyFilters() {
    const query = searchInput?.value.toLowerCase() || '';
    const cat = categoryFilter?.value || 'all';
    const cuis = cuisineFilter?.value || 'all';

    const filtered = globalDishesData.filter(d => {
      const matchQuery = !query || 
        d.name.toLowerCase().includes(query) ||
        d.description.toLowerCase().includes(query) ||
        d.cuisine.toLowerCase().includes(query) ||
        d.ingredients.some(i => i.toLowerCase().includes(query));

      const matchCat = cat === 'all' || d.category.toLowerCase() === cat.toLowerCase();
      const matchCuis = cuis === 'all' || d.cuisine.toLowerCase() === cuis.toLowerCase();

      return matchQuery && matchCat && matchCuis;
    });

    globalDishesData = filtered;
    renderTableUI();
  }

  searchInput?.addEventListener('input', applyFilters);
  categoryFilter?.addEventListener('change', applyFilters);
  cuisineFilter?.addEventListener('change', applyFilters);
}

function bindActionListeners() {
  // View detail modal
  document.querySelectorAll('.btn-view-dish').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
      if (id) openViewModal(id);
    });
  });

  // Delete dish
  document.querySelectorAll('.btn-delete-dish').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
      const name = (e.currentTarget as HTMLElement).getAttribute('data-name');
      if (!id) return;

      if (confirm(`Are you sure you want to delete "${name}"?`)) {
        try {
          const res = await fetch(`/api/dishes/${id}`, { method: 'DELETE' });
          const json: any = await res.json();
          if (json && json.success) {
            globalDishesData = globalDishesData.filter(d => d.id !== id);
            renderTableUI();
          } else {
            alert(`Error deleting dish: ${json?.error || 'Unknown error'}`);
          }
        } catch (err) {
          alert('Network error deleting dish.');
        }
      }
    });
  });
}

function openViewModal(id: string) {
  const dish = globalDishesData.find(d => d.id === id);
  if (!dish) return;

  const modalOverlay = document.getElementById('dish-modal-overlay');
  const modalContent = document.getElementById('dish-modal-content');
  if (!modalOverlay || !modalContent) return;

  const fallbackImg = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop";

  modalContent.innerHTML = `
    <div style="position: relative; margin: -1.5rem -1.5rem 1.5rem -1.5rem; height: 220px; overflow: hidden; border-radius: 16px 16px 0 0;">
      <img src="${dish.image || fallbackImg}" alt="${escapeHtml(dish.name)}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='${fallbackImg}'" />
      <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(15,23,42,0.95)); padding: 1.5rem 1.5rem 0.75rem 1.5rem;">
        <span style="font-size: 0.8rem; text-transform: uppercase; tracking: 0.05em; color: #38bdf8; font-weight: 700;">${escapeHtml(dish.cuisine)} • ${escapeHtml(dish.category)}</span>
        <h2 style="font-family: Outfit, sans-serif; font-size: 1.6rem; color: #fff; margin-top: 0.2rem;">${escapeHtml(dish.name)}</h2>
      </div>
    </div>

    <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.25rem;">${escapeHtml(dish.description)}</p>

    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; background: #0f172a; padding: 1rem; border-radius: 10px; margin-bottom: 1.5rem; text-align: center;">
      <div>
        <div style="font-size: 0.75rem; color: #94a3b8;">Prep Time</div>
        <div style="font-weight: 600; color: #f8fafc; font-size: 0.9rem;">${escapeHtml(dish.prepTime || 'N/A')}</div>
      </div>
      <div>
        <div style="font-size: 0.75rem; color: #94a3b8;">Cook Time</div>
        <div style="font-weight: 600; color: #f8fafc; font-size: 0.9rem;">${escapeHtml(dish.cookTime || 'N/A')}</div>
      </div>
      <div>
        <div style="font-size: 0.75rem; color: #94a3b8;">Servings</div>
        <div style="font-weight: 600; color: #f8fafc; font-size: 0.9rem;">${dish.servings}</div>
      </div>
      <div>
        <div style="font-size: 0.75rem; color: #94a3b8;">Calories</div>
        <div style="font-weight: 600; color: #f8fafc; font-size: 0.9rem;">${dish.calories} kcal</div>
      </div>
    </div>

    ${dish.yt_url ? `
      <div style="margin-bottom: 1.5rem;">
        <a href="${dish.yt_url}" target="_blank" class="yt-btn" style="display: inline-flex; width: 100%; justify-content: center; padding: 0.75rem; font-size: 0.95rem; border-radius: 10px;">
          <i class="fa-brands fa-youtube" style="font-size: 1.2rem;"></i> Watch Recipe Video on YouTube
        </a>
      </div>
    ` : ''}

    <div style="margin-bottom: 1.5rem;">
      <h3 style="font-size: 1rem; font-weight: 700; color: #f8fafc; margin-bottom: 0.6rem;">Ingredients</h3>
      <ul style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.4rem; list-style: none; padding-left: 0;">
        ${(dish.ingredients || []).map(ing => `<li style="font-size: 0.875rem; color: #cbd5e1; display: flex; align-items: center; gap: 0.4rem;"><i class="fa-solid fa-circle-check" style="color: #10b981; font-size: 0.75rem;"></i> ${escapeHtml(ing)}</li>`).join('')}
      </ul>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h3 style="font-size: 1rem; font-weight: 700; color: #f8fafc; margin-bottom: 0.6rem;">Step-by-Step Instructions</h3>
      <ol style="padding-left: 1.25rem; color: #cbd5e1; font-size: 0.875rem; line-height: 1.6;">
        ${(dish.instructions || []).map(inst => `<li style="margin-bottom: 0.4rem;">${escapeHtml(inst)}</li>`).join('')}
      </ol>
    </div>

    ${(dish.variations && dish.variations.length > 0) ? `
      <div style="margin-bottom: 1rem; background: rgba(56,189,248,0.08); border-left: 3px solid #38bdf8; padding: 0.85rem; border-radius: 0 8px 8px 0;">
        <h4 style="font-size: 0.875rem; font-weight: 700; color: #38bdf8; margin-bottom: 0.3rem;">Recipe Variations</h4>
        <ul style="padding-left: 1rem; font-size: 0.85rem; color: #cbd5e1;">
          ${dish.variations.map(v => `<li>${escapeHtml(v)}</li>`).join('')}
        </ul>
      </div>
    ` : ''}
  `;

  modalOverlay.classList.add('active');

  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) closeBtn.onclick = () => modalOverlay.classList.remove('active');
  modalOverlay.onclick = (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove('active');
  };
}

function getCategoryBadgeHtml(cat: string): string {
  const c = (cat || '').toLowerCase();
  if (c.includes('non-veg') || c.includes('meat') || c.includes('chicken') || c.includes('seafood')) {
    return `<span class="badge badge-nonveg"><i class="fa-solid fa-drumstick-bite"></i> ${escapeHtml(cat)}</span>`;
  }
  if (c.includes('vegan')) {
    return `<span class="badge badge-vegan"><i class="fa-solid fa-leaf"></i> ${escapeHtml(cat)}</span>`;
  }
  if (c.includes('dessert') || c.includes('sweet')) {
    return `<span class="badge badge-dessert"><i class="fa-solid fa-ice-cream"></i> ${escapeHtml(cat)}</span>`;
  }
  if (c.includes('beverage') || c.includes('drink')) {
    return `<span class="badge badge-beverage"><i class="fa-solid fa-glass-water"></i> ${escapeHtml(cat)}</span>`;
  }
  return `<span class="badge badge-veg"><i class="fa-solid fa-seedling"></i> ${escapeHtml(cat)}</span>`;
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

document.addEventListener('DOMContentLoaded', initDishesTable);

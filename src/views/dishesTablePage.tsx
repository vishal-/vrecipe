import { Dish } from '../types/dish';

interface DishesTablePageProps {
  categories: string[];
  cuisines: string[];
}

export function DishesTablePage({ categories, cuisines }: DishesTablePageProps) {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="header-top">
          <div>
            <h1 className="page-title">
              <i className="fa-solid fa-bowl-food" style={{ color: '#6366f1' }}></i> Dish Management
            </h1>
            <p className="page-subtitle">
              Manage your recipes and dishes with real-time TanStack Table & Cloudflare D1 database.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button id="btn-reseed-d1" className="nav-btn" style={{ background: '#334155', boxShadow: 'none' }} title="Seed/Reset 50+ Dishes in D1">
              <i className="fa-solid fa-database"></i> Seed D1 DB
            </button>
            <a href="/dishes/new" className="nav-btn">
              <i className="fa-solid fa-plus"></i> Add New Dish
            </a>
          </div>
        </div>
      </div>

      {/* Toolbar Controls */}
      <div className="toolbar-card">
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            id="search-input"
            className="search-input"
            placeholder="Search by dish name, description, cuisine, or ingredients..."
          />
        </div>

        <div className="filter-group">
          <select id="category-filter" className="select-input">
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select id="cuisine-filter" className="select-input">
            <option value="all">All Cuisines</option>
            {cuisines.map(cuis => (
              <option key={cuis} value={cuis}>{cuis}</option>
            ))}
          </select>

          <span id="total-dishes-count" className="stats-pill">
            Loading...
          </span>
        </div>
      </div>

      {/* TanStack Table Container */}
      <div className="table-container" id="table-mount">
        <div className="table-responsive">
          <table className="dishes-table">
            <thead>
              <tr>
                <th className="sortable">Dish & Description</th>
                <th className="sortable">Category</th>
                <th className="sortable">Cuisine</th>
                <th>Prep / Cook Time</th>
                <th className="sortable">Servings / Calories</th>
                <th>Meal Type</th>
                <th>Media</th>
                <th style={{ width: '110px' }}>Actions</th>
              </tr>
            </thead>
            <tbody id="dishes-tbody">
              <tr>
                <td colSpan={8} style={{ textAlign: 'center', padding: '3rem', color: '#94a3b8' }}>
                  <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '2rem', marginBottom: '0.75rem', display: 'block', color: '#6366f1' }}></i>
                  Loading dishes from Cloudflare D1...
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 50 Items/Page Pagination Bar */}
        <div className="pagination-card">
          <div>
            Showing <strong style={{ color: '#f8fafc' }}>50</strong> dishes per page
          </div>
          <div className="pagination-controls">
            <button id="btn-prev" className="page-btn" disabled>
              <i className="fa-solid fa-chevron-left"></i> Previous
            </button>
            <span id="pagination-info" className="page-info">
              Page 1
            </span>
            <button id="btn-next" className="page-btn" disabled>
              Next <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Detail View Modal */}
      <div id="dish-modal-overlay" className="modal-overlay">
        <div className="modal-card">
          <div className="modal-header">
            <h3 className="modal-title">Dish Details</h3>
            <button id="modal-close-btn" className="btn-icon" style={{ border: 'none', background: 'transparent', fontSize: '1.2rem' }}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div id="dish-modal-content" className="modal-body">
            {/* Dynamic modal content rendered by dishes-table.ts */}
          </div>
        </div>
      </div>

      {/* Mount Client Script */}
      <script type="module" src="/src/client/dishes-table.ts"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          document.getElementById('btn-reseed-d1')?.addEventListener('click', async () => {
            if (confirm('Re-seed database with 50+ complete dishes?')) {
              const res = await fetch('/api/dishes/seed', { method: 'POST' });
              const json = await res.json();
              alert(json.message || 'Seeded successfully!');
              window.location.reload();
            }
          });
        `
      }} />
    </div>
  );
}

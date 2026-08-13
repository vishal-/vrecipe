import { Dish } from '../types/dish';

interface DishFormPageProps {
  dish?: Dish | null;
  isEdit?: boolean;
}

const CATEGORIES = ['Vegetarian', 'Non-Vegetarian', 'Vegan', 'Dessert', 'Beverage'];
const MEAL_TYPES = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Appetizer', 'Dessert', 'Beverage'];
const FLAVOR_PROFILES = ['spicy', 'savory', 'sweet', 'tangy', 'rich', 'smoky', 'bitter', 'herbaceous', 'salty'];

export function DishFormPage({ dish, isEdit = false }: DishFormPageProps) {
  const pageTitle = isEdit ? `Edit Dish: ${dish?.name || ''}` : 'Add New Recipe / Dish';
  const pageSubtitle = isEdit ? 'Update recipe details, timing, ingredients, and instructions.' : 'Create a new dish entry to publish to your recipe collection.';

  const defaultIngredients = dish?.ingredients && dish.ingredients.length > 0
    ? dish.ingredients
    : ['Potatoes', 'Wheat flour', 'Amchur powder', 'Garam masala', 'Salt'];

  const defaultInstructions = dish?.instructions && dish.instructions.length > 0
    ? dish.instructions
    : ['Boil and mash potatoes.', 'Mix with spices.', 'Stuff dough and cook on tawa.'];

  const defaultVariations = dish?.variations && dish.variations.length > 0
    ? dish.variations
    : ['Add spinach for healthier version.'];

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="header-top">
          <div>
            <h1 className="page-title">
              <i className={isEdit ? "fa-solid fa-pen-to-square" : "fa-solid fa-utensils"} style={{ color: '#6366f1' }}></i> {pageTitle}
            </h1>
            <p className="page-subtitle">{pageSubtitle}</p>
          </div>
          <a href="/dishes" className="btn-secondary">
            <i className="fa-solid fa-arrow-left"></i> Back to Dishes
          </a>
        </div>
      </div>

      {/* Form Container */}
      <div className="form-card">
        <form id="dish-form" data-mode={isEdit ? 'edit' : 'create'} data-dish-id={dish?.id || ''}>
          <div className="form-grid">
            {/* Basic Info */}
            <div className="form-group col-8">
              <label className="form-label" htmlFor="name">
                Dish Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="e.g. Aloo parantha"
                defaultValue={dish?.name || ''}
                required
              />
            </div>

            <div className="form-group col-4">
              <label className="form-label" htmlFor="category">
                Category <span className="required">*</span>
              </label>
              <select id="category" name="category" className="form-control" defaultValue={dish?.category || 'Vegetarian'}>
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="form-group col-12">
              <label className="form-label" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                placeholder="Describe the dish taste, origin, texture, and appeal..."
                defaultValue={dish?.description || ''}
              ></textarea>
            </div>

            {/* Media URLs */}
            <div className="form-group col-6">
              <label className="form-label" htmlFor="image">
                Dish Image URL
              </label>
              <input
                type="url"
                id="image"
                name="image"
                className="form-control"
                placeholder="https://images.unsplash.com/..."
                defaultValue={dish?.image || ''}
              />
              <div id="image-preview" className="preview-box" style={{ marginTop: '0.6rem' }}>
                {dish?.image ? (
                  <img src={dish.image} className="preview-img" alt="Preview" />
                ) : (
                  <div className="preview-placeholder">
                    <i className="fa-regular fa-image" style={{ fontSize: '1.75rem', marginBottom: '0.4rem', display: 'block' }}></i>
                    Image preview will appear here
                  </div>
                )}
              </div>
            </div>

            <div className="form-group col-6">
              <label className="form-label" htmlFor="yt_url">
                YouTube Recipe Video URL
              </label>
              <input
                type="url"
                id="yt_url"
                name="yt_url"
                className="form-control"
                placeholder="https://www.youtube.com/watch?v=..."
                defaultValue={dish?.yt_url || ''}
              />
              <div className="preview-box" style={{ marginTop: '0.6rem', padding: '1rem', textAlign: 'center' }}>
                <i className="fa-brands fa-youtube" style={{ fontSize: '2rem', color: '#ef4444', marginBottom: '0.4rem', display: 'block' }}></i>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Provide YouTube video link to enable video player button in table & detail view
                </span>
              </div>
            </div>

            {/* Timings & Servings */}
            <div className="form-group col-3">
              <label className="form-label" htmlFor="cuisine">
                Cuisine <span className="required">*</span>
              </label>
              <input
                type="text"
                id="cuisine"
                name="cuisine"
                className="form-control"
                placeholder="e.g. Indian, Italian"
                defaultValue={dish?.cuisine || 'Indian'}
                required
              />
            </div>

            <div className="form-group col-3">
              <label className="form-label" htmlFor="prepTime">
                Prep Time
              </label>
              <input
                type="text"
                id="prepTime"
                name="prepTime"
                className="form-control"
                placeholder="e.g. 20 minutes"
                defaultValue={dish?.prepTime || '20 minutes'}
              />
            </div>

            <div className="form-group col-3">
              <label className="form-label" htmlFor="cookTime">
                Cook Time
              </label>
              <input
                type="text"
                id="cookTime"
                name="cookTime"
                className="form-control"
                placeholder="e.g. 20 minutes"
                defaultValue={dish?.cookTime || '20 minutes'}
              />
            </div>

            <div className="form-group col-3">
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ flex: 1 }}>
                  <label className="form-label" htmlFor="servings">Servings</label>
                  <input type="number" id="servings" name="servings" className="form-control" min={1} defaultValue={dish?.servings ?? 4} />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="form-label" htmlFor="calories">Calories</label>
                  <input type="number" id="calories" name="calories" className="form-control" min={0} defaultValue={dish?.calories ?? 350} />
                </div>
              </div>
            </div>

            {/* Meal Type Checkboxes */}
            <div className="form-group col-12">
              <label className="form-label">Meal Type (Select all that apply)</label>
              <div className="pills-container">
                {MEAL_TYPES.map(mt => {
                  const isChecked = dish?.mealType ? dish.mealType.includes(mt) : ['Breakfast', 'Lunch', 'Dinner'].includes(mt);
                  return (
                    <div className="pill-checkbox" key={mt}>
                      <input type="checkbox" id={`mt-${mt}`} name="mealType" value={mt} defaultChecked={isChecked} />
                      <label htmlFor={`mt-${mt}`}>{mt}</label>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Flavor Profile Checkboxes */}
            <div className="form-group col-12">
              <label className="form-label">Flavor Profile</label>
              <div className="pills-container">
                {FLAVOR_PROFILES.map(fp => {
                  const isChecked = dish?.flavorProfile ? dish.flavorProfile.includes(fp) : ['spicy', 'savory'].includes(fp);
                  return (
                    <div className="pill-checkbox" key={fp}>
                      <input type="checkbox" id={`fp-${fp}`} name="flavorProfile" value={fp} defaultChecked={isChecked} />
                      <label htmlFor={`fp-${fp}`}>#{fp}</label>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Ingredients Dynamic List */}
            <div className="form-group col-12">
              <label className="form-label">Ingredients List</label>
              <div id="ingredients-container" className="list-builder">
                {defaultIngredients.map((ing, idx) => (
                  <div className="list-item-row" key={idx}>
                    <input type="text" className="form-control ingredient-item-input" defaultValue={ing} placeholder="Ingredient name..." />
                    <button type="button" className="btn-icon danger btn-remove-item" title="Remove Ingredient">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                ))}
              </div>
              <button type="button" id="btn-add-ingredient" className="btn-add-item">
                <i className="fa-solid fa-plus"></i> Add Ingredient
              </button>
            </div>

            {/* Instructions Dynamic List */}
            <div className="form-group col-12">
              <label className="form-label">Step-by-Step Instructions</label>
              <div id="instructions-container" className="list-builder">
                {defaultInstructions.map((inst, idx) => (
                  <div className="list-item-row" key={idx}>
                    <input type="text" className="form-control instruction-item-input" defaultValue={inst} placeholder="Step instruction..." />
                    <button type="button" className="btn-icon danger btn-remove-item" title="Remove Step">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                ))}
              </div>
              <button type="button" id="btn-add-instruction" className="btn-add-item">
                <i className="fa-solid fa-plus"></i> Add Step
              </button>
            </div>

            {/* Variations Dynamic List */}
            <div className="form-group col-12">
              <label className="form-label">Variations & Substitutions</label>
              <div id="variations-container" className="list-builder">
                {defaultVariations.map((varItem, idx) => (
                  <div className="list-item-row" key={idx}>
                    <input type="text" className="form-control variation-item-input" defaultValue={varItem} placeholder="Variation note..." />
                    <button type="button" className="btn-icon danger btn-remove-item" title="Remove Variation">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                ))}
              </div>
              <button type="button" id="btn-add-variation" className="btn-add-item">
                <i className="fa-solid fa-plus"></i> Add Variation
              </button>
            </div>
          </div>

          {/* Form Action Buttons */}
          <div className="form-actions">
            <a href="/dishes" className="btn-secondary">Cancel</a>
            <button type="submit" id="btn-submit-form" className="btn-primary">
              <i className="fa-solid fa-check"></i> {isEdit ? 'Save Changes' : 'Create Dish'}
            </button>
          </div>
        </form>
      </div>

      {/* Mount Client Script */}
      <script type="module" src="/src/client/dish-form.ts"></script>
    </div>
  );
}

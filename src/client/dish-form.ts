document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('dish-form') as HTMLFormElement | null;
  if (!form) return;

  const isEditMode = form.getAttribute('data-mode') === 'edit';
  const dishId = form.getAttribute('data-dish-id');

  // Dynamic Array Builders
  setupDynamicList('ingredients-container', 'btn-add-ingredient', 'Ingredient name...');
  setupDynamicList('instructions-container', 'btn-add-instruction', 'Step instruction...');
  setupDynamicList('variations-container', 'btn-add-variation', 'Variation note...');

  // Image Preview Handler
  const imageUrlInput = document.getElementById('image') as HTMLInputElement | null;
  const imagePreviewContainer = document.getElementById('image-preview') as HTMLElement | null;

  function updateImagePreview() {
    if (!imagePreviewContainer || !imageUrlInput) return;
    const url = imageUrlInput.value.trim();
    if (url) {
      imagePreviewContainer.innerHTML = `<img src="${url}" class="preview-img" alt="Preview" onerror="this.parentElement.innerHTML='<div class=\\'preview-placeholder\\'>Invalid Image URL</div>'" />`;
    } else {
      imagePreviewContainer.innerHTML = `<div class="preview-placeholder"><i class="fa-regular fa-image" style="font-size: 2rem; margin-bottom: 0.5rem; display: block;"></i>Enter image URL to view preview</div>`;
    }
  }

  imageUrlInput?.addEventListener('input', updateImagePreview);

  // Form Submit Handler
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('btn-submit-form') as HTMLButtonElement | null;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Saving...`;
    }

    const formData = new FormData(form);
    
    // Gather Meal Types checked
    const mealTypesChecked: string[] = [];
    document.querySelectorAll<HTMLInputElement>('input[name="mealType"]:checked').forEach(cb => {
      mealTypesChecked.push(cb.value);
    });

    // Gather Flavor Profiles checked
    const flavorProfilesChecked: string[] = [];
    document.querySelectorAll<HTMLInputElement>('input[name="flavorProfile"]:checked').forEach(cb => {
      flavorProfilesChecked.push(cb.value);
    });

    // Gather Ingredients list
    const ingredients: string[] = [];
    document.querySelectorAll<HTMLInputElement>('.ingredient-item-input').forEach(inp => {
      const val = inp.value.trim();
      if (val) ingredients.push(val);
    });

    // Gather Instructions list
    const instructions: string[] = [];
    document.querySelectorAll<HTMLInputElement>('.instruction-item-input').forEach(inp => {
      const val = inp.value.trim();
      if (val) instructions.push(val);
    });

    // Gather Variations list
    const variations: string[] = [];
    document.querySelectorAll<HTMLInputElement>('.variation-item-input').forEach(inp => {
      const val = inp.value.trim();
      if (val) variations.push(val);
    });

    const payload = {
      name: (formData.get('name') as string || '').trim(),
      description: (formData.get('description') as string || '').trim(),
      image: (formData.get('image') as string || '').trim(),
      yt_url: (formData.get('yt_url') as string || '').trim(),
      prepTime: (formData.get('prepTime') as string || '').trim(),
      cookTime: (formData.get('cookTime') as string || '').trim(),
      cuisine: (formData.get('cuisine') as string || '').trim(),
      category: (formData.get('category') as string || 'Vegetarian').trim(),
      servings: Number(formData.get('servings')) || 1,
      calories: Number(formData.get('calories')) || 0,
      mealType: mealTypesChecked,
      flavorProfile: flavorProfilesChecked,
      ingredients: ingredients.length > 0 ? ingredients : ['Default ingredient'],
      instructions: instructions.length > 0 ? instructions : ['Prepare according to recipe.'],
      variations,
    };

    try {
      const url = isEditMode && dishId ? `/api/dishes/${dishId}` : '/api/dishes';
      const method = isEditMode ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (json.success) {
        window.location.href = '/dishes';
      } else {
        alert(`Error saving dish: ${json.error || 'Unknown error'}`);
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<i class="fa-solid fa-check"></i> Save Dish`;
        }
      }
    } catch (err) {
      alert('Network error submitting dish form.');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i class="fa-solid fa-check"></i> Save Dish`;
      }
    }
  });
});

function setupDynamicList(containerId: string, addBtnId: string, placeholder: string) {
  const container = document.getElementById(containerId);
  const addBtn = document.getElementById(addBtnId);
  if (!container || !addBtn) return;

  const type = containerId.split('-')[0]; // 'ingredients', 'instructions', 'variations'

  addBtn.addEventListener('click', () => {
    const row = document.createElement('div');
    row.className = 'list-item-row';
    row.innerHTML = `
      <input type="text" class="form-control ${type.slice(0, -1)}-item-input" placeholder="${placeholder}" />
      <button type="button" class="btn-icon danger btn-remove-item" title="Remove Item">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;
    container.appendChild(row);

    row.querySelector('.btn-remove-item')?.addEventListener('click', () => {
      row.remove();
    });
  });

  // Bind remove on existing items
  container.querySelectorAll('.btn-remove-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      (e.currentTarget as HTMLElement).closest('.list-item-row')?.remove();
    });
  });
}

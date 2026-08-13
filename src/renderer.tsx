import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, ViteClient } from 'vite-ssr-components/hono'

declare module 'hono' {
  interface ContextRenderer {
    (children: any, props?: { title?: string }): Response | Promise<Response>
  }
}

export const renderer = jsxRenderer(({ children, title }: { children?: any; title?: string }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ? `${title} - vRecipe Dish Management` : 'vRecipe - Dish Management'}</title>

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet" />

        {/* FontAwesome icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

        <ViteClient />
        <Link href="/src/style.css" rel="stylesheet" />
      </head>
      <body>
        {/* Navigation Bar */}
        <header className="navbar">
          <div className="nav-container">
            <a href="/dishes" className="brand">
              <span className="brand-icon">🍳</span>
              <span className="brand-name">vRecipe</span>
              <span className="brand-badge">Cloudflare D1</span>
            </a>
            <nav className="nav-links">
              <a href="/dishes" className="nav-link active">
                <i className="fa-solid fa-list-check"></i> Dishes Management
              </a>
              <a href="/dishes/new" className="nav-btn">
                <i className="fa-solid fa-plus"></i> Add New Dish
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="main-content">
          {children}
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <p>© 2026 vRecipe • Powered by Hono, Cloudflare D1 & TanStack Table</p>
          </div>
        </footer>
      </body>
    </html>
  )
})

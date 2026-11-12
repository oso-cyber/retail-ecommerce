import { BrowserRouter, Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  CreditCard,
  Filter,
  Heart,
  Mail,
  MapPin,
  Menu,
  Minus,
  Package,
  Phone,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Trash2,
  Truck,
  User,
  Users,
  Warehouse,
  X,
} from 'lucide-react'
import './App.css'

const products = [
  {
    id: 'luna-knit-set',
    name: 'Luna Knit Set',
    category: 'Fashion & Clothing',
    brand: 'NOVA Atelier',
    price: 1899,
    originalPrice: 2399,
    rating: 4.9,
    reviews: 128,
    stock: 14,
    badge: 'Bestseller',
    featured: true,
    newArrival: true,
    offer: true,
    description:
      'A tailored knit duo crafted for elevated everyday layering with soft-touch comfort and polished structure.',
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    ],
    variants: ['S', 'M', 'L', 'XL'],
    colors: ['Ivory', 'Charcoal'],
    specs: [
      'Premium brushed knit',
      'Relaxed fit silhouette',
      'Machine washable blend',
    ],
  },
  {
    id: 'pulse-pro-headphones',
    name: 'Pulse Pro Headphones',
    category: 'Electronics',
    brand: 'NOVA Audio',
    price: 3499,
    originalPrice: 4299,
    rating: 4.8,
    reviews: 204,
    stock: 9,
    badge: 'Top Rated',
    featured: true,
    newArrival: false,
    offer: true,
    description:
      'Active noise cancelling headphones with spatial audio, 40-hour battery life, and premium studio-grade sound.',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80',
    ],
    variants: ['Black', 'Silver'],
    colors: ['Black', 'Silver'],
    specs: ['40hr battery', 'Adaptive ANC', 'Hi-res audio'],
  },
  {
    id: 'sienna-ceramic-lamp',
    name: 'Sienna Ceramic Lamp',
    category: 'Home & Living',
    brand: 'NOVA Living',
    price: 2199,
    originalPrice: 2699,
    rating: 4.7,
    reviews: 87,
    stock: 21,
    badge: 'New',
    featured: false,
    newArrival: true,
    offer: true,
    description:
      'A sculptural ceramic accent piece designed to create warmth, texture, and soft ambient lighting in modern interiors.',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    ],
    variants: ['Medium', 'Large'],
    colors: ['Sand', 'Stone'],
    specs: ['Hand-finished ceramic', 'Warm ambient glow', 'Touch dimming'],
  },
  {
    id: 'aster-skin-serum',
    name: 'Aster Skin Serum',
    category: 'Beauty & Personal Care',
    brand: 'NOVA Beauty',
    price: 1299,
    originalPrice: 1699,
    rating: 4.9,
    reviews: 320,
    stock: 18,
    badge: 'Editor Pick',
    featured: true,
    newArrival: false,
    offer: true,
    description:
      'A lightweight radiance serum infused with peptides and vitamins to visibly brighten and smooth the skin barrier.',
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
    ],
    variants: ['30ml', '50ml'],
    colors: ['Rose', 'Pearl'],
    specs: ['Vegan formula', 'Daily nourishment', 'Clinically tested'],
  },
  {
    id: 'apex-trail-sneaker',
    name: 'Apex Trail Sneaker',
    category: 'Sports & Lifestyle',
    brand: 'NOVA Sport',
    price: 2599,
    originalPrice: 3199,
    rating: 4.8,
    reviews: 176,
    stock: 12,
    badge: 'New',
    featured: false,
    newArrival: true,
    offer: false,
    description:
      'A lightweight trail runner designed for city movement, weekend escapes, and all-day comfort in every stride.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
    ],
    variants: ['6', '7', '8', '9', '10'],
    colors: ['Storm Grey', 'Volt'],
    specs: ['Responsive foam sole', 'Breathable mesh', 'Durable traction grip'],
  },
  {
    id: 'meridian-watch',
    name: 'Meridian Smart Watch',
    category: 'Electronics',
    brand: 'NOVA Motion',
    price: 4699,
    originalPrice: 5499,
    rating: 4.9,
    reviews: 241,
    stock: 8,
    badge: 'Limited',
    featured: true,
    newArrival: true,
    offer: true,
    description:
      'Track workouts, sleep, and recovery with premium materials, a bold display, and seamless everyday performance.',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988c761ca?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=900&q=80',
    ],
    variants: ['42mm', '46mm'],
    colors: ['Graphite', 'Champagne'],
    specs: ['7-day battery', 'GPS + heart rate', 'Water resistant'],
  },
  {
    id: 'solstice-leather-tote',
    name: 'Solstice Leather Tote',
    category: 'Accessories',
    brand: 'NOVA Studio',
    price: 2999,
    originalPrice: 3599,
    rating: 4.8,
    reviews: 118,
    stock: 16,
    badge: 'Giftable',
    featured: false,
    newArrival: false,
    offer: true,
    description:
      'A structured everyday tote with polished edges, spacious compartments, and soft Italian leather finish.',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
    ],
    variants: ['Classic', 'Large'],
    colors: ['Black', 'Camel'],
    specs: ['Full-grain finish', 'Interior organiser', 'Lifetime care support'],
  },
  {
    id: 'haven-linen-set',
    name: 'Haven Linen Set',
    category: 'Home & Living',
    brand: 'NOVA Home',
    price: 2499,
    originalPrice: 2999,
    rating: 4.7,
    reviews: 92,
    stock: 10,
    badge: 'Cozy',
    featured: true,
    newArrival: false,
    offer: true,
    description:
      'Natural linen layers that soften with each wash, bringing calm texture and elevated comfort to your home.',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    ],
    variants: ['Single', 'Queen', 'King'],
    colors: ['Stone', 'Sand'],
    specs: ['Organic linen blend', 'Wrinkle resistant', 'Breathable finish'],
  },
  {
    id: 'ember-speaker',
    name: 'Ember Wireless Speaker',
    category: 'Electronics',
    brand: 'NOVA Audio',
    price: 1899,
    originalPrice: 2299,
    rating: 4.6,
    reviews: 143,
    stock: 19,
    badge: 'Weekend Essential',
    featured: false,
    newArrival: true,
    offer: false,
    description:
      'A compact speaker with warm sound, deep bass response, and room-filling connectivity for every gathering.',
    images: [
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
    ],
    variants: ['Pebble', 'Midnight'],
    colors: ['Pebble', 'Midnight'],
    specs: ['360° sound', 'Bluetooth 5.3', 'Water resistant'],
  },
]

const categoryCards = [
  { name: 'Fashion & Clothing', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Electronics', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80' },
  { name: 'Home & Living', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80' },
  { name: 'Beauty & Personal Care', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80' },
  { name: 'Sports & Lifestyle', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80' },
]

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Categories', to: '/shop' },
  { label: 'New Arrivals', to: '/shop?filter=new' },
  { label: 'Special Offers', to: '/shop?filter=offer' },
  { label: 'About', to: '/account' },
  { label: 'Contact', to: '/account' },
]

const demoStats = [
  { label: 'Total sales', value: 'R 1.86M', detail: '+18.4% vs last month', icon: CircleDollarSign },
  { label: 'Total orders', value: '4,820', detail: '234 pending dispatch', icon: Package },
  { label: 'Total customers', value: '12,480', detail: '+8.1% repeat buyers', icon: User },
  { label: 'Low stock', value: '18 SKUs', detail: '4 require reorder', icon: Warehouse },
]

const demoInventory = [
  { name: 'Pulse Pro Headphones', sku: 'PN-5421', stock: 9, status: 'Low', category: 'Electronics' },
  { name: 'Apex Trail Sneaker', sku: 'SP-9001', stock: 12, status: 'Healthy', category: 'Sports' },
  { name: 'Aster Skin Serum', sku: 'BE-3182', stock: 18, status: 'Healthy', category: 'Beauty' },
  { name: 'Sienna Lamp', sku: 'HO-4410', stock: 6, status: 'Low', category: 'Home' },
]

const recentOrders = [
  { id: 'NV-1024', customer: 'Mila Jacobs', total: 'R 3,850', status: 'Packed' },
  { id: 'NV-1025', customer: 'Kian Ndlovu', total: 'R 1,480', status: 'Out for delivery' },
  { id: 'NV-1026', customer: 'Ari van Wyk', total: 'R 8,240', status: 'Completed' },
]

const demoAccounts = [
  { name: 'Aisha Mokoena', email: 'aisha@example.com', city: 'Johannesburg' },
  { name: 'Liam Dlamini', email: 'liam@example.com', city: 'Cape Town' },
]

const savedAddresses = [
  { name: 'Home', line: '14 Oak Road, Rosebank', city: 'Johannesburg', code: '2196' },
  { name: 'Office', line: '5 Main Road, Claremont', city: 'Cape Town', code: '7708' },
]

const formatPrice = (value) =>
  new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    maximumFractionDigits: 0,
  }).format(value)

const localStorageCartKey = 'nova-store-cart'
const localStorageOrdersKey = 'nova-demo-orders'

const readStoredCart = () => {
  try {
    const value = localStorage.getItem(localStorageCartKey)
    return value ? JSON.parse(value) : []
  } catch {
    return []
  }
}

const readStoredOrders = () => {
  try {
    const value = localStorage.getItem(localStorageOrdersKey)
    return value ? JSON.parse(value) : []
  } catch {
    return []
  }
}

function App() {
  const [cart, setCart] = useState(readStoredCart)
  const [orderHistory, setOrderHistory] = useState(readStoredOrders)
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    localStorage.setItem(localStorageCartKey, JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem(localStorageOrdersKey, JSON.stringify(orderHistory))
  }, [orderHistory])

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const addToCart = (product, quantity = 1, selectedValue = 'Default') => {
    setCart((current) => {
      const matchIndex = current.findIndex(
        (item) => item.product.id === product.id && item.variant === selectedValue,
      )

      if (matchIndex >= 0) {
        const next = [...current]
        next[matchIndex].quantity += quantity
        return next
      }

      return [...current, { id: `${product.id}-${selectedValue}`, product, quantity, variant: selectedValue }]
    })
  }

  const updateCartItemQuantity = (targetId, change) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === targetId ? { ...item, quantity: Math.max(0, item.quantity + change) } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeCartItem = (targetId) => {
    setCart((current) => current.filter((item) => item.id !== targetId))
  }

  const toggleWishlist = (productId) => {
    setWishlist((current) =>
      current.includes(productId) ? current.filter((item) => item !== productId) : [...current, productId],
    )
  }

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
        <main className="page-shell">
          <Routes>
            <Route
              path="/"
              element={<HomePage addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />}
            />
            <Route
              path="/shop"
              element={<ShopPage addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />}
            />
            <Route path="/product/:productId" element={<ProductDetailPage addToCart={addToCart} />} />
            <Route
              path="/cart"
              element={
                <CartPage
                  cart={cart}
                  updateCartItemQuantity={updateCartItemQuantity}
                  removeCartItem={removeCartItem}
                />
              }
            />
            <Route path="/checkout" element={<CheckoutPage cart={cart} setCart={setCart} setOrderHistory={setOrderHistory} />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

function Navbar({ cartCount, wishlistCount }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" aria-label="Nova Store home">
          <span className="brand-mark">N</span>
          <span>NOVA STORE</span>
        </Link>

        <nav className={`main-nav ${mobileOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button type="button" className="nav-icon" aria-label="Search products">
            <Search size={18} />
          </button>
          <Link to="/account" className="nav-icon" aria-label="Account area">
            <User size={18} />
          </Link>
          <Link to="/account" className="nav-icon badge-wrap" aria-label="Wishlist">
            <Heart size={18} />
            {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
          </Link>
          <Link to="/cart" className="nav-icon badge-wrap" aria-label="Shopping cart">
            <ShoppingBag size={18} />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  )
}

function HomePage({ addToCart, toggleWishlist, wishlist }) {
  const featuredProducts = products.filter((product) => product.featured)
  const newArrivals = products.filter((product) => product.newArrival)
  const specialOffers = products.filter((product) => product.offer)

  return (
    <>
      <section className="hero-section container">
        <div className="hero-copy">
          <span className="eyebrow">Curated for modern living</span>
          <h1>Upgrade your everyday essentials.</h1>
          <p>
            Discover elevated staples for style, wellness, work, and home in a premium retail experience built for growing brands.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="primary-btn">
              Shop now <ArrowRight size={16} />
            </Link>
            <Link to="/shop" className="secondary-btn">
              Explore bestsellers
            </Link>
          </div>
          <ul className="hero-metrics">
            <li>
              <strong>14k+</strong>
              <span>happy customers</span>
            </li>
            <li>
              <strong>24h</strong>
              <span>dispatch window</span>
            </li>
            <li>
              <strong>4.9/5</strong>
              <span>average rating</span>
            </li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-card card-one">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"
              alt="Model wearing premium fashion items"
            />
          </div>
          <div className="hero-badge">
            <span className="badge-icon">N</span>
            <div>
              <strong>Spring drop</strong>
              <small>Up to 30% off</small>
            </div>
          </div>
        </div>
      </section>

      <section className="container categories-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow dark">Shop by category</span>
            <h2>Find exactly what fits your lifestyle.</h2>
          </div>
          <Link to="/shop" className="text-link">
            Browse all products <ChevronRight size={16} />
          </Link>
        </div>

        <div className="category-grid">
          {categoryCards.map((category) => (
            <Link to="/shop" key={category.name} className="category-card">
              <img src={category.image} alt={category.name} />
              <div className="category-overlay">
                <span>{category.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container product-section" id="featured">
        <div className="section-heading">
          <div>
            <span className="eyebrow dark">Featured products</span>
            <h2>Best sellers our customers love.</h2>
          </div>
          <Link to="/shop" className="text-link">
            View catalog <ChevronRight size={16} />
          </Link>
        </div>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={wishlist.includes(product.id)}
            />
          ))}
        </div>
      </section>

      <section className="container feature-band">
        <div className="feature-copy">
          <span className="eyebrow dark">Designed for discerning shoppers</span>
          <h2>Premium quality across work, play, and home.</h2>
        </div>
        <div className="feature-metrics">
          <div>
            <ShieldCheck size={20} />
            <span>Secure checkout</span>
          </div>
          <div>
            <Truck size={20} />
            <span>Fast nationwide shipping</span>
          </div>
          <div>
            <Sparkles size={20} />
            <span>Curated new arrivals</span>
          </div>
        </div>
      </section>

      <section className="container product-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow dark">New arrivals</span>
            <h2>Fresh finds to elevate your routine.</h2>
          </div>
        </div>
        <div className="product-grid">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={wishlist.includes(product.id)}
            />
          ))}
        </div>
      </section>

      <section className="container product-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow dark">Special offers</span>
            <h2>Limited-time deals worth adding to cart.</h2>
          </div>
        </div>
        <div className="product-grid">
          {specialOffers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={wishlist.includes(product.id)}
            />
          ))}
        </div>
      </section>
    </>
  )
}

function ShopPage({ addToCart, toggleWishlist, wishlist }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [brand, setBrand] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [maxPrice, setMaxPrice] = useState(6000)
  const [availability, setAvailability] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const uniqueCategories = ['All', ...new Set(products.map((product) => product.category))]
  const uniqueBrands = ['All', ...new Set(products.map((product) => product.brand))]

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase()
    const list = products.filter((product) => {
      const matchesSearch =
        !query || product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query)
      const matchesCategory = category === 'All' || product.category === category
      const matchesBrand = brand === 'All' || product.brand === brand
      const matchesAvailability =
        availability === 'all' ? true : availability === 'in-stock' ? product.stock > 0 : product.stock === 0
      const matchesPrice = product.price <= maxPrice

      return matchesSearch && matchesCategory && matchesBrand && matchesAvailability && matchesPrice
    })

    switch (sortBy) {
      case 'price-low':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        list.sort((a, b) => b.price - a.price)
        break
      case 'popular':
        list.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        list.sort((a, b) => Number(b.newArrival) - Number(a.newArrival))
        break
      default:
        list.sort((a, b) => Number(b.featured) - Number(a.featured))
    }

    return list
  }, [availability, brand, category, maxPrice, search, sortBy])

  return (
    <div className="container shop-layout">
      <aside className="filter-panel">
        <div className="panel-title-row">
          <h3>Filters</h3>
          <div className="icon-chip">
            <Filter size={14} />
          </div>
        </div>

        <label>
          Search
          <input
            type="text"
            placeholder="Search products"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>

        <label>
          Category
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {uniqueCategories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label>
          Brand
          <select value={brand} onChange={(event) => setBrand(event.target.value)}>
            {uniqueBrands.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label>
          Max price: {formatPrice(maxPrice)}
          <input
            type="range"
            min="500"
            max="6000"
            step="100"
            value={maxPrice}
            onChange={(event) => setMaxPrice(Number(event.target.value))}
          />
        </label>

        <label>
          Availability
          <select value={availability} onChange={(event) => setAvailability(event.target.value)}>
            <option value="all">All products</option>
            <option value="in-stock">In stock</option>
            <option value="out-of-stock">Out of stock</option>
          </select>
        </label>

        <label>
          Sort by
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
            <option value="featured">Featured</option>
            <option value="popular">Popularity</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
            <option value="newest">Newest</option>
          </select>
        </label>
      </aside>

      <section className="catalog-panel">
        <div className="section-heading compact">
          <div>
            <span className="eyebrow dark">Catalog</span>
            <h2>{filteredProducts.length} products available</h2>
          </div>
        </div>

        <div className="product-grid catalog-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={wishlist.includes(product.id)}
              onQuickView={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </section>

      {selectedProduct && (
        <div className="modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="quick-view" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="close-modal" onClick={() => setSelectedProduct(null)}>
              <X size={16} />
            </button>
            <img src={selectedProduct.images[0]} alt={selectedProduct.name} />
            <div className="quick-view-copy">
              <span className="eyebrow dark">Quick view</span>
              <h3>{selectedProduct.name}</h3>
              <div className="rating-row">
                <Star size={15} fill="currentColor" /> {selectedProduct.rating} ({selectedProduct.reviews} reviews)
              </div>
              <p>{selectedProduct.description}</p>
              <div className="quick-view-footer">
                <strong>{formatPrice(selectedProduct.price)}</strong>
                <Link to={`/product/${selectedProduct.id}`} className="primary-btn compact" onClick={() => setSelectedProduct(null)}>
                  View details
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ProductCard({ product, addToCart, toggleWishlist, isWishlisted, onQuickView }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link to={`/product/${product.id}`}>
          <img src={product.images[0]} alt={product.name} />
        </Link>
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <div className="product-overlay-actions">
          <button type="button" className="ghost-icon" onClick={() => toggleWishlist(product.id)} aria-label="Add to wishlist">
            <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
          {onQuickView && (
            <button type="button" className="ghost-icon" onClick={() => onQuickView(product)}>
              <Search size={16} />
            </button>
          )}
        </div>
      </div>

      <div className="product-body">
        <div className="product-header-row">
          <span>{product.brand}</span>
          <span className="rating-row mini">
            <Star size={13} fill="currentColor" /> {product.rating}
          </span>
        </div>

        <Link to={`/product/${product.id}`} className="product-name">
          {product.name}
        </Link>

        <div className="product-price-row">
          <strong>{formatPrice(product.price)}</strong>
          {product.originalPrice && <span>{formatPrice(product.originalPrice)}</span>}
        </div>

        <div className="stock-row">
          <span className={product.stock > 0 ? 'stock positive' : 'stock negative'}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Sold out'}
          </span>
        </div>

        <div className="product-footer-row">
          <button type="button" className="secondary-btn small" onClick={() => addToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}

function ProductDetailPage({ addToCart }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)
  const [quantity, setQuantity] = useState(1)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] ?? 'Default')
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] ?? 'Default')

  if (!product) {
    return (
      <div className="container empty-state">
        <h2>Product not found</h2>
        <Link to="/shop" className="primary-btn">Return to shop</Link>
      </div>
    )
  }

  const addCurrentProduct = () => addToCart(product, quantity, selectedVariant)

  return (
    <div className="container product-detail-page">
      <div className="detail-gallery">
        <img src={product.images[0]} alt={product.name} className="main-image" />
        <div className="thumb-grid">
          {product.images.map((image, index) => (
            <img key={image} src={image} alt={`${product.name} view ${index + 1}`} />
          ))}
        </div>
      </div>

      <div className="detail-info">
        <span className="eyebrow dark">{product.brand}</span>
        <h1>{product.name}</h1>
        <div className="rating-row">
          <Star size={15} fill="currentColor" /> {product.rating} <span>({product.reviews} reviews)</span>
        </div>

        <div className="detail-price-row">
          <strong>{formatPrice(product.price)}</strong>
          {product.originalPrice && <span>{formatPrice(product.originalPrice)}</span>}
          <em>{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off</em>
        </div>

        <p className="detail-description">{product.description}</p>

        <div className="detail-option-block">
          <h4>Color</h4>
          <div className="pill-list">
            {product.colors.map((color) => (
              <button
                type="button"
                key={color}
                className={selectedColor === color ? 'pill active' : 'pill'}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <div className="detail-option-block">
          <h4>Size</h4>
          <div className="pill-list">
            {product.variants.map((variant) => (
              <button
                type="button"
                key={variant}
                className={selectedVariant === variant ? 'pill active' : 'pill'}
                onClick={() => setSelectedVariant(variant)}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>

        <div className="detail-purchase-row">
          <div className="quantity-box" aria-label="Quantity selector">
            <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
              <Minus size={16} />
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={() => setQuantity((value) => Math.min(product.stock, value + 1))}>
              <Plus size={16} />
            </button>
          </div>
          <button type="button" className="primary-btn large" onClick={addCurrentProduct}>
            Add to cart
          </button>
          <button type="button" className="secondary-btn large">
            Wishlist
          </button>
        </div>

        <div className="stock-status-row">
          <span className={product.stock > 0 ? 'stock positive' : 'stock negative'}>
            {product.stock > 0 ? `In stock: ${product.stock} available` : 'Currently unavailable'}
          </span>
        </div>

        <div className="delivery-info">
          <div>
            <Truck size={18} />
            <span>Free delivery over R 1,500</span>
          </div>
          <div>
            <ShieldCheck size={18} />
            <span>Secure checkout</span>
          </div>
        </div>

        <div className="spec-list">
          <h4>Product specs</h4>
          <ul>
            {product.specs.map((spec) => (
              <li key={spec}>✓ {spec}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function CartPage({ cart, updateCartItemQuantity, removeCartItem }) {
  const [promoCode, setPromoCode] = useState('')
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const deliveryFee = subtotal > 0 ? (subtotal >= 1500 ? 0 : 95) : 0
  const promoDiscount = promoCode.trim().toUpperCase() === 'NOVA15' ? subtotal * 0.15 : 0
  const total = subtotal + deliveryFee - promoDiscount

  return (
    <div className="container cart-page">
      <div className="section-heading compact">
        <div>
          <span className="eyebrow dark">Your cart</span>
          <h2>{cart.length} items in your basket</h2>
        </div>
        <Link to="/shop" className="text-link">
          Continue shopping <ChevronRight size={16} />
        </Link>
      </div>

      {cart.length === 0 ? (
        <div className="empty-state">
          <h3>Your cart is empty.</h3>
          <p>Pick a few essentials and return when you are ready to checkout.</p>
          <Link to="/shop" className="primary-btn">Browse products</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.product.images[0]} alt={item.product.name} />
                <div className="cart-item-copy">
                  <div className="cart-item-head">
                    <Link to={`/product/${item.product.id}`}>{item.product.name}</Link>
                    <button type="button" className="remove-btn" onClick={() => removeCartItem(item.id)}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <p>Variant: {item.variant}</p>
                  <div className="cart-item-row">
                    <div className="quantity-box small-box">
                      <button type="button" onClick={() => updateCartItemQuantity(item.id, -1)}>
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => updateCartItemQuantity(item.id, 1)}>
                        <Plus size={14} />
                      </button>
                    </div>
                    <strong>{formatPrice(item.product.price * item.quantity)}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="summary-panel">
            <h3>Order summary</h3>
            <div className="summary-line">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            <div className="summary-line">
              <span>Delivery</span>
              <strong>{deliveryFee === 0 ? 'Free' : formatPrice(deliveryFee)}</strong>
            </div>
            <div className="promo-box">
              <label htmlFor="promo-code">Promo code</label>
              <div className="promo-input">
                <input
                  id="promo-code"
                  type="text"
                  value={promoCode}
                  placeholder="NOVA15"
                  onChange={(event) => setPromoCode(event.target.value)}
                />
                <button type="button">Apply</button>
              </div>
            </div>
            <div className="summary-line total">
              <span>Total</span>
              <strong>{formatPrice(total)}</strong>
            </div>
            <Link to="/checkout" className="primary-btn wide">
              Proceed to checkout
            </Link>
          </aside>
        </div>
      )}
    </div>
  )
}

function CheckoutPage({ cart, setCart, setOrderHistory }) {
  const [step, setStep] = useState(1)
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [address, setAddress] = useState({
    street: '',
    suburb: '',
    city: '',
    province: '',
    postalCode: '',
  })
  const [deliveryMethod, setDeliveryMethod] = useState('standard')
  const [payment, setPayment] = useState('payfast')
  const [confirmedOrder, setConfirmedOrder] = useState(null)

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = deliveryMethod === 'express' ? 180 : 95
  const total = subtotal + shipping

  const handleFieldChange = (setter, field) => (event) => setter((current) => ({ ...current, [field]: event.target.value }))

  const nextStep = () => setStep((current) => Math.min(current + 1, 5))
  const previousStep = () => setStep((current) => Math.max(current - 1, 1))

  const placeOrder = () => {
    const orderReference = `NOVA-${Math.floor(Math.random() * 90000 + 10000)}`
    const order = {
      reference: orderReference,
      total: formatPrice(total),
      items: cart,
      status: 'Payment approved (demo)',
      createdAt: new Date().toLocaleDateString('en-ZA'),
    }

    setOrderHistory((current) => [order, ...current])
    setCart([])
    setConfirmedOrder(order)
    setStep(5)
  }

  const renderStepContent = () => {
    if (confirmedOrder) {
      return (
        <div className="confirmation-card">
          <div className="success-mark">✓</div>
          <span className="eyebrow dark">Demo order confirmed</span>
          <h2>Thank you, {customerInfo.name || 'Customer'}.</h2>
          <p>Your order reference is <strong>{confirmedOrder.reference}</strong>.</p>
          <div className="confirmation-list">
            <div>
              <span>Items</span>
              <strong>{cart.length || 1}</strong>
            </div>
            <div>
              <span>Total</span>
              <strong>{confirmedOrder.total}</strong>
            </div>
            <div>
              <span>Status</span>
              <strong>{confirmedOrder.status}</strong>
            </div>
          </div>
          <Link to="/shop" className="primary-btn">Continue shopping</Link>
        </div>
      )
    }

    if (step === 1) {
      return (
        <div className="checkout-step">
          <h3>Customer information</h3>
          <div className="field-grid">
            <label>
              Full name
              <input value={customerInfo.name} onChange={handleFieldChange(setCustomerInfo, 'name')} />
            </label>
            <label>
              Email address
              <input type="email" value={customerInfo.email} onChange={handleFieldChange(setCustomerInfo, 'email')} />
            </label>
            <label>
              Phone number
              <input value={customerInfo.phone} onChange={handleFieldChange(setCustomerInfo, 'phone')} />
            </label>
          </div>
        </div>
      )
    }

    if (step === 2) {
      return (
        <div className="checkout-step">
          <h3>Delivery address</h3>
          <div className="field-grid">
            <label>
              Street address
              <input value={address.street} onChange={handleFieldChange(setAddress, 'street')} />
            </label>
            <label>
              Suburb
              <input value={address.suburb} onChange={handleFieldChange(setAddress, 'suburb')} />
            </label>
            <label>
              City
              <input value={address.city} onChange={handleFieldChange(setAddress, 'city')} />
            </label>
            <label>
              Province
              <input value={address.province} onChange={handleFieldChange(setAddress, 'province')} />
            </label>
            <label>
              Postal code
              <input value={address.postalCode} onChange={handleFieldChange(setAddress, 'postalCode')} />
            </label>
          </div>
        </div>
      )
    }

    if (step === 3) {
      return (
        <div className="checkout-step">
          <h3>Delivery method</h3>
          <div className="delivery-options">
            <button
              type="button"
              className={deliveryMethod === 'standard' ? 'option-card selected' : 'option-card'}
              onClick={() => setDeliveryMethod('standard')}
            >
              <div>
                <strong>Standard</strong>
                <small>3-5 working days</small>
              </div>
              <span>{formatPrice(95)}</span>
            </button>
            <button
              type="button"
              className={deliveryMethod === 'express' ? 'option-card selected' : 'option-card'}
              onClick={() => setDeliveryMethod('express')}
            >
              <div>
                <strong>Express</strong>
                <small>1-2 working days</small>
              </div>
              <span>{formatPrice(180)}</span>
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="checkout-step">
        <h3>Payment</h3>
        <div className="payment-options">
          <button
            type="button"
            className={payment === 'payfast' ? 'option-card selected' : 'option-card'}
            onClick={() => setPayment('payfast')}
          >
            <div>
              <strong>PayFast</strong>
              <small>South African checkout</small>
            </div>
            <CreditCard size={18} />
          </button>
          <button
            type="button"
            className={payment === 'peach' ? 'option-card selected' : 'option-card'}
            onClick={() => setPayment('peach')}
          >
            <div>
              <strong>Peach Payments</strong>
              <small>Demo payment flow</small>
            </div>
            <Check size={18} />
          </button>
        </div>
        <div className="demo-warning">
          <strong>Demo mode only.</strong> No real card details are stored or processed in this storefront prototype.
        </div>
      </div>
    )
  }

  return (
    <div className="container checkout-layout">
      <section className="checkout-card">
        <div className="checkout-header">
          <span className="eyebrow dark">Secure demo checkout</span>
          <h2>Complete your order</h2>
        </div>

        <div className="progress-dots" aria-label="Checkout progress">
          {[1, 2, 3, 4].map((value) => (
            <span key={value} className={value <= step ? 'active' : ''} />
          ))}
        </div>

        {renderStepContent()}

        {!confirmedOrder && (
          <div className="checkout-footer">
            {step > 1 && (
              <button type="button" className="secondary-btn" onClick={previousStep}>
                Back
              </button>
            )}
            {step < 4 ? (
              <button type="button" className="primary-btn" onClick={nextStep}>
                Continue
              </button>
            ) : (
              <button type="button" className="primary-btn" onClick={placeOrder}>
                Place order
              </button>
            )}
          </div>
        )}
      </section>

      <aside className="summary-panel checkout-summary">
        <h3>Order summary</h3>
        {cart.length === 0 ? (
          <p className="muted">Your cart is empty.</p>
        ) : (
          <>
            <ul className="mini-items">
              {cart.map((item) => (
                <li key={item.id}>
                  <span>
                    {item.product.name} × {item.quantity}
                  </span>
                  <strong>{formatPrice(item.product.price * item.quantity)}</strong>
                </li>
              ))}
            </ul>
            <div className="summary-line">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            <div className="summary-line">
              <span>Delivery</span>
              <strong>{formatPrice(shipping)}</strong>
            </div>
            <div className="summary-line total">
              <span>Total</span>
              <strong>{formatPrice(total)}</strong>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

function AccountPage() {
  const [activeTab, setActiveTab] = useState('login')

  return (
    <div className="container account-layout">
      <div className="account-panel auth-panel">
        <div className="switch-row">
          <button type="button" className={activeTab === 'login' ? 'toggle active' : 'toggle'} onClick={() => setActiveTab('login')}>
            Login
          </button>
          <button type="button" className={activeTab === 'register' ? 'toggle active' : 'toggle'} onClick={() => setActiveTab('register')}>
            Register
          </button>
        </div>

        {activeTab === 'login' ? (
          <div className="auth-form">
            <label>
              Email
              <input type="email" defaultValue="hello@novastore.co.za" />
            </label>
            <label>
              Password
              <input type="password" defaultValue="password123" />
            </label>
            <button type="button" className="primary-btn wide">Sign in</button>
          </div>
        ) : (
          <div className="auth-form">
            <label>
              Full name
              <input type="text" defaultValue="Aimee Smith" />
            </label>
            <label>
              Email
              <input type="email" defaultValue="aimee@example.com" />
            </label>
            <label>
              Password
              <input type="password" defaultValue="password123" />
            </label>
            <button type="button" className="primary-btn wide">Create account</button>
          </div>
        )}
      </div>

      <div className="account-panel info-panel">
        <span className="eyebrow dark">Account overview</span>
        <h3>Welcome back, Aimee.</h3>

        <div className="info-card-grid">
          <div className="info-card">
            <MapPin size={18} />
            <div>
              <strong>Saved addresses</strong>
              <span>{savedAddresses.length} saved</span>
            </div>
          </div>
          <div className="info-card">
            <Package size={18} />
            <div>
              <strong>Order history</strong>
              <span>7 purchases</span>
            </div>
          </div>
          <div className="info-card">
            <Heart size={18} />
            <div>
              <strong>Wishlist</strong>
              <span>12 items</span>
            </div>
          </div>
        </div>

        <div className="mini-list-block">
          <h4>Recent orders</h4>
          <ul>
            {recentOrders.map((order) => (
              <li key={order.id}>
                <span>{order.id}</span>
                <strong>{order.status}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function AdminPage() {
  return (
    <div className="container admin-layout">
      <div className="section-heading compact admin-heading">
        <div>
          <span className="eyebrow dark">Administration dashboard</span>
          <h2>Demo retailer overview</h2>
        </div>
        <div className="chip">Demo data only</div>
      </div>

      <div className="stats-grid">
        {demoStats.map(({ label, value, detail, icon: Icon }) => (
          <div key={label} className="stats-card">
            <div className="stats-top">
              <span>{label}</span>
              <Icon size={18} />
            </div>
            <strong>{value}</strong>
            <small>{detail}</small>
          </div>
        ))}
      </div>

      <div className="admin-grid">
        <section className="admin-panel large-panel">
          <div className="panel-title-row">
            <h3>Revenue trend</h3>
            <BarChart3 size={18} />
          </div>
          <div className="bar-chart" aria-label="Revenue chart">
            {[40, 68, 52, 92, 78, 110, 128].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        </section>

        <section className="admin-panel">
          <div className="panel-title-row">
            <h3>Recent orders</h3>
            <Clock3 size={18} />
          </div>
          <ul className="table-list">
            {recentOrders.map((order) => (
              <li key={order.id}>
                <span>{order.customer}</span>
                <strong>{order.total}</strong>
                <em>{order.status}</em>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="admin-grid bottom-grid">
        <section className="admin-panel">
          <div className="panel-title-row">
            <h3>Inventory</h3>
            <Warehouse size={18} />
          </div>
          <ul className="table-list inventory-list">
            {demoInventory.map((item) => (
              <li key={item.sku}>
                <span>{item.name}</span>
                <strong>{item.stock}</strong>
                <em>{item.status}</em>
              </li>
            ))}
          </ul>
        </section>

        <section className="admin-panel">
          <div className="panel-title-row">
            <h3>Customer overview</h3>
            <Users size={18} />
          </div>
          <ul className="table-list">
            {demoAccounts.map((person) => (
              <li key={person.email}>
                <span>{person.name}</span>
                <strong>{person.city}</strong>
                <em>{person.email}</em>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">N</span>
            <span>NOVA STORE</span>
          </div>
          <p>Luxury essentials for modern life, delivered across South Africa with premium support.</p>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Journal</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li>Shipping & Returns</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li><Mail size={14} /> hello@novastore.co.za</li>
            <li><Phone size={14} /> +27 21 555 0123</li>
            <li><MapPin size={14} /> Cape Town, South Africa</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default App

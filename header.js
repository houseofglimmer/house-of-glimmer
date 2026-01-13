// Header content
const headerHTML = `
<!-- Header -->
<header class="fixed w-full top-0 z-50 transition-all duration-300" id="header">
    <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
            <!-- Logo -->
            <div class="text-black">
                <a href="index.html" class="hover:opacity-80 transition-opacity">
                    <h1 class="text-2xl font-serif font-bold tracking-wide">House of Glimmer</h1>
                </a>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-8">
                <a href="index.html" class="nav-link text-black text-sm font-light tracking-wider hover:text-gray-700">Home</a>
                <a href="shop.html" class="nav-link text-black text-sm font-light tracking-wider hover:text-gray-700">Shop</a>
                <a href="about.html" class="nav-link text-black text-sm font-light tracking-wider hover:text-gray-700">About</a>
                <a href="contact.html" class="btn-glimmer px-6 py-2 border-2 border-black text-black text-sm font-light tracking-wider rounded-md hover:bg-black hover:text-white transition-all duration-300">
                    Contact
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <button class="md:hidden text-black" id="mobileMenuBtn">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <!-- Mobile Navigation -->
        <div class="hidden md:hidden mt-4 pb-4" id="mobileMenu">
            <div class="flex flex-col space-y-4">
                <a href="index.html" class="text-black text-sm font-light tracking-wider hover:text-gray-700">Home</a>
                <a href="shop.html" class="text-black text-sm font-light tracking-wider hover:text-gray-700">Shop</a>
                <a href="about.html" class="text-black text-sm font-light tracking-wider hover:text-gray-700">About</a>
                <a href="contact.html" class="px-6 py-2 border-2 border-black text-black text-sm font-light tracking-wider rounded-md hover:bg-black hover:text-white transition-all duration-300 w-full text-center">
                    Contact
                </a>
            </div>
        </div>
    </nav>
</header>
`;

// Function to load header
function loadHeader() {
    const container = document.getElementById('header-container');
    if (container) {
        container.innerHTML = headerHTML;
        
        // Initialize header scroll behavior immediately after loading
        const header = document.getElementById('header');
        if (header) {
            // Set initial state
            if (window.pageYOffset > 50) {
                header.style.backgroundColor = '#F2D49B';
                header.classList.add('shadow-lg');
            }
            
            // Add scroll listener
            window.addEventListener('scroll', function() {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll > 50) {
                    header.style.backgroundColor = '#F2D49B';
                    header.classList.add('shadow-lg');
                } else {
                    header.style.backgroundColor = 'transparent';
                    header.classList.remove('shadow-lg');
                }
            });
            
            // Mobile menu toggle
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mobileMenu = document.getElementById('mobileMenu');

            if (mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener('click', function() {
                    mobileMenu.classList.toggle('hidden');
                });
            }
        }
    }
}

// Load header when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadHeader);
} else {
    loadHeader();
}
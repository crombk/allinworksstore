// ========================================
// Product Detail Page JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  initProductTabs();
  initProductImageGallery();
});

// ========================================
// Product Tabs
// ========================================
function initProductTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // Remove active class from all buttons and panels
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      
      // Add active class to clicked button and corresponding panel
      this.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
      
      // Scroll to tabs section on mobile
      if (window.innerWidth <= 768) {
        document.querySelector('.product-tabs').scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ========================================
// Product Image Gallery
// ========================================
function initProductImageGallery() {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.querySelector('.product-image-main');
  
  if (thumbnails.length > 0 && mainImage) {
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        // Remove active class from all thumbnails
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        
        // Add active class to clicked thumbnail
        this.classList.add('active');
        
        // Update main image (in a real scenario, you would change the src)
        // For demo purposes, we'll just add a visual effect
        mainImage.style.opacity = '0.5';
        setTimeout(() => {
          mainImage.style.opacity = '1';
        }, 200);
      });
    });
  }
}

// ========================================
// Product Actions
// ========================================

// Share Product
function shareProduct() {
  if (navigator.share) {
    navigator.share({
      title: document.querySelector('.product-title').textContent,
      text: document.querySelector('.product-subtitle').textContent,
      url: window.location.href
    }).catch(err => console.log('Error sharing:', err));
  } else {
    // Fallback: Copy URL to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
      if (window.AtlasCopcoStore && window.AtlasCopcoStore.showAlert) {
        window.AtlasCopcoStore.showAlert('링크가 복사되었습니다.', 'success');
      } else {
        alert('링크가 복사되었습니다.');
      }
    });
  }
}

// Add to Wishlist (demo function)
function addToWishlist(productId) {
  // Get existing wishlist from localStorage
  let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
  
  // Check if product already in wishlist
  if (wishlist.includes(productId)) {
    if (window.AtlasCopcoStore && window.AtlasCopcoStore.showAlert) {
      window.AtlasCopcoStore.showAlert('이미 관심상품에 추가되어 있습니다.', 'info');
    }
    return;
  }
  
  // Add to wishlist
  wishlist.push(productId);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  
  if (window.AtlasCopcoStore && window.AtlasCopcoStore.showAlert) {
    window.AtlasCopcoStore.showAlert('관심상품에 추가되었습니다.', 'success');
  }
}

// Request Quote (demo function)
function requestQuote() {
  const productName = document.querySelector('.product-title').textContent;
  
  // Store product info in sessionStorage
  sessionStorage.setItem('quoteProduct', productName);
  
  // Redirect to contact form
  window.location.href = 'index.html#contact';
}

// ========================================
// Review & Q&A Interactions
// ========================================

// Submit Review (demo function)
function submitReview(formData) {
  console.log('Review submitted:', formData);
  
  if (window.AtlasCopcoStore && window.AtlasCopcoStore.showAlert) {
    window.AtlasCopcoStore.showAlert('리뷰가 성공적으로 등록되었습니다.', 'success');
  }
  
  // In a real scenario, you would send this to a backend API
  // fetch('/api/reviews', { method: 'POST', body: JSON.stringify(formData) })
}

// Submit Question (demo function)
function submitQuestion(questionText) {
  console.log('Question submitted:', questionText);
  
  if (window.AtlasCopcoStore && window.AtlasCopcoStore.showAlert) {
    window.AtlasCopcoStore.showAlert('문의가 성공적으로 등록되었습니다.', 'success');
  }
  
  // In a real scenario, you would send this to a backend API
}

// ========================================
// Utility Functions
// ========================================

// Format price (for future use)
function formatPrice(price) {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW'
  }).format(price);
}

// Calculate discount percentage (for future use)
function calculateDiscount(originalPrice, salePrice) {
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
}

// Export functions
window.ProductDetail = {
  shareProduct: shareProduct,
  addToWishlist: addToWishlist,
  requestQuote: requestQuote,
  submitReview: submitReview,
  submitQuestion: submitQuestion,
  formatPrice: formatPrice,
  calculateDiscount: calculateDiscount
};

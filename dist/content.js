/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content/content.js":
/*!********************************!*\
  !*** ./src/content/content.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_content_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/content.css */ "./src/content/styles/content.css");
/* module decorator */ module = __webpack_require__.hmd(module);


// Amazon Fresh product selectors
const PRODUCT_SELECTORS = {
  // Product title selectors
  title: ['#productTitle', '[data-testid="product-title"]', '.product-title-word-break', '.a-size-large.product-title-word-break', '.a-text-bold'],
  // Brand/Product info
  brand: '.brand-store-link',
  // Amazon Fresh specific selectors
  freshTitle: '[data-testid="product-title"]',
  freshBrand: '[data-testid="product-brand"]'
};
class ProductAnalyzer {
  constructor() {
    this.analysisCache = new Map();
    this.setupObservers();
  }
  setupObservers() {
    // Observer for URL changes (SPA navigation)
    const observer = new MutationObserver(mutations => {
      if (window.location.href !== this.lastUrl) {
        this.lastUrl = window.location.href;
        this.checkAndAnalyze();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    this.lastUrl = window.location.href;
  }

  // In your analyze() method of ProductAnalyzer class
  async analyze() {
    try {
      console.log('Starting product analysis...');
      const currentUrl = window.location.href;
      if (this.analysisCache.has(currentUrl)) {
        console.log('Cache hit:', this.analysisCache.get(currentUrl));
        return this.analysisCache.get(currentUrl);
      }
      const productInfo = await this.extractProductInfo();
      console.log('Extracted product info:', productInfo);
      const analysisData = {
        ...productInfo,
        url: currentUrl,
        timestamp: new Date().toISOString()
      };
      this.analysisCache.set(currentUrl, analysisData);
      console.log('Sending to background script:', analysisData);

      // Send message and wait for response
      const response = await chrome.runtime.sendMessage({
        type: 'ANALYZE_PRODUCT',
        data: analysisData
      });
      console.log('Received response from background:', response);
      return analysisData;
    } catch (error) {
      console.error('Analysis error:', error);
      throw error;
    }
  }
  async extractProductInfo() {
    try {
      // Try all possible title selectors
      let title = null;
      for (const selector of PRODUCT_SELECTORS.title) {
        const element = document.querySelector(selector);
        if (element) {
          title = element.textContent.trim();
          break;
        }
      }

      // Try Fresh specific selector if no title found
      if (!title) {
        const freshTitle = document.querySelector(PRODUCT_SELECTORS.freshTitle);
        if (freshTitle) {
          title = freshTitle.textContent.trim();
        }
      }
      if (!title) {
        throw new Error('Could not find product title');
      }

      // Get brand info
      let brand = document.querySelector(PRODUCT_SELECTORS.brand)?.textContent?.trim() || document.querySelector(PRODUCT_SELECTORS.freshBrand)?.textContent?.trim();

      // If no explicit brand found, try to extract from title
      if (!brand && title) {
        const parts = title.split(' ');
        brand = parts[0]; // Usually, brand is the first word
      }

      // Get category from URL or breadcrumb
      const category = this.extractCategory();
      return {
        title,
        brand,
        category,
        searchQuery: this.createSearchQuery(title, brand)
      };
    } catch (error) {
      console.error('Error extracting product info:', error);
      throw error;
    }
  }
  createSearchQuery(title, brand) {
    // Clean up title for better search results
    let query = title.replace(/\([^)]*\)/g, '') // Remove parentheses and their contents
    .replace(/,/g, '') // Remove commas
    .replace(/\s+/g, ' ') // Normalize spaces
    .trim();

    // Add brand if it's not already in the title
    if (brand && !title.toLowerCase().includes(brand.toLowerCase())) {
      query = `${brand} ${query}`;
    }

    // Limit query length for API
    return query.slice(0, 100);
  }
  extractCategory() {
    // Try to get category from breadcrumb
    const breadcrumb = document.querySelector('.a-breadcrumb');
    if (breadcrumb) {
      const categories = Array.from(breadcrumb.querySelectorAll('a')).map(a => a.textContent.trim().toLowerCase());

      // Define category mapping
      const categoryMap = {
        'produce': 'fresh produce',
        'dairy': 'dairy',
        'meat': 'meat',
        'seafood': 'seafood',
        'bakery': 'bakery',
        'beverages': 'beverages',
        'snacks': 'snacks'
      };

      // Find matching category
      for (const [key, value] of Object.entries(categoryMap)) {
        if (categories.some(cat => cat.includes(key))) {
          return value;
        }
      }
    }

    // Try to get from URL
    const url = window.location.pathname.toLowerCase();
    if (url.includes('/fresh/')) {
      return 'fresh food';
    }
    if (url.includes('/grocery/')) {
      return 'grocery';
    }
    return 'food';
  }
  checkAndAnalyze() {
    // Only analyze if we're on a product page
    if (this.isProductPage()) {
      this.analyze().then(data => {
        chrome.runtime.sendMessage({
          type: 'ANALYZE_PRODUCT',
          data: data
        });
      }).catch(error => console.error('Analysis failed:', error));
    }
  }
  isProductPage() {
    // Check if any product title selector matches
    return PRODUCT_SELECTORS.title.some(selector => document.querySelector(selector)) || document.querySelector(PRODUCT_SELECTORS.freshTitle);
  }
}

// Initialize analyzer
const analyzer = new ProductAnalyzer();

// Handle messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Content script received message:", request);
  switch (request.type) {
    case 'ANALYZE_REQUEST':
      analyzer.analyze().then(response => sendResponse({
        data: response
      })).catch(error => sendResponse({
        error: error.toString()
      }));
      return true;
    case 'PING':
      sendResponse({
        status: 'alive'
      });
      return false;
  }
  return false;
});

// Export for testing
if ( true && module.exports) {
  module.exports = {
    ProductAnalyzer
  };
}

/***/ }),

/***/ "./src/content/styles/content.css":
/*!****************************************!*\
  !*** ./src/content/styles/content.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/content/content.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=content.js.map
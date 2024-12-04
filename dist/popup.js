/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/ui/alert.jsx":
/*!*************************************!*\
  !*** ./src/components/ui/alert.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Alert: () => (/* binding */ Alert),
/* harmony export */   AlertDescription: () => (/* binding */ AlertDescription),
/* harmony export */   AlertTitle: () => (/* binding */ AlertTitle)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
// src/components/ui/alert.jsx


const Alert = ({
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  const variantClasses = {
    default: 'bg-gray-800 text-gray-100',
    destructive: 'bg-red-900/50 text-red-300',
    success: 'bg-green-900/50 text-green-300'
  };
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: `rounded-lg p-3 ${variantClasses[variant]} ${className}`,
    ...props,
    children: children
  });
};
const AlertTitle = ({
  children,
  className = '',
  ...props
}) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h5", {
  className: `font-medium leading-none tracking-tight ${className}`,
  ...props,
  children: children
});
const AlertDescription = ({
  children,
  className = '',
  ...props
}) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
  className: `text-sm [&_p]:leading-relaxed ${className}`,
  ...props,
  children: children
});


/***/ }),

/***/ "./src/components/ui/theme.jsx":
/*!*************************************!*\
  !*** ./src/components/ui/theme.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Badge: () => (/* binding */ Badge),
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   Card: () => (/* binding */ Card),
/* harmony export */   Heading: () => (/* binding */ Heading),
/* harmony export */   IconButton: () => (/* binding */ IconButton),
/* harmony export */   Input: () => (/* binding */ Input),
/* harmony export */   Panel: () => (/* binding */ Panel),
/* harmony export */   Select: () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
// src/components/ui/theme.jsx


const Card = ({
  children,
  className = '',
  ...props
}) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
  className: `bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 
                rounded-xl shadow-xl text-gray-100 ${className}`,
  ...props,
  children: children
});
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-gray-100',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    ghost: 'hover:bg-gray-800 text-gray-300'
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
    className: `
        ${variants[variant]}
        ${sizes[size]}
        rounded-lg font-medium
        transition-all duration-200
        flex items-center justify-center gap-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `,
    disabled: loading,
    ...props,
    children: [loading && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
    }), children]
  });
};
const Badge = ({
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  const variants = {
    default: 'bg-gray-700 text-gray-100',
    success: 'bg-green-900/50 text-green-300',
    warning: 'bg-yellow-900/50 text-yellow-300',
    error: 'bg-red-900/50 text-red-300',
    purple: 'bg-purple-900/50 text-purple-300'
  };
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
    className: `
        ${variants[variant]}
        px-2.5 py-0.5 text-sm font-medium rounded-full
        inline-flex items-center gap-1
        ${className}
      `,
    ...props,
    children: children
  });
};
const Input = ({
  className = '',
  ...props
}) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
  className: `
      w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2
      text-gray-100 placeholder-gray-500
      focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500
      transition-all duration-200
      ${className}
    `,
  ...props
});
const Select = ({
  className = '',
  ...props
}) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("select", {
  className: `
      w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2
      text-gray-100
      focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500
      transition-all duration-200
      ${className}
    `,
  ...props
});
const Heading = ({
  level = 2,
  children,
  className = '',
  ...props
}) => {
  const Tag = `h${level}`;
  const sizes = {
    1: 'text-2xl',
    2: 'text-xl',
    3: 'text-lg',
    4: 'text-base'
  };
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Tag, {
    className: `
        ${sizes[level]}
        font-semibold text-gray-100
        ${className}
      `,
    ...props,
    children: children
  });
};
const Panel = ({
  children,
  className = '',
  ...props
}) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
  className: `
      bg-gray-800/80 backdrop-blur-sm
      border border-gray-700/50
      rounded-lg p-4
      ${className}
    `,
  ...props,
  children: children
});
const IconButton = ({
  children,
  className = '',
  ...props
}) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
  className: `
      p-2 rounded-lg
      text-gray-400 hover:text-gray-100
      hover:bg-gray-700
      transition-colors duration-200
      ${className}
    `,
  ...props,
  children: children
});

/***/ }),

/***/ "./src/popup/components/App.jsx":
/*!**************************************!*\
  !*** ./src/popup/components/App.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/brain.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/sparkles.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/refresh-cw.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/triangle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/user.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/beaker.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/arrow-right.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/shield-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/apple.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/rotate-ccw.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/settings.js");
/* harmony import */ var _NutritionAnalysis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NutritionAnalysis */ "./src/popup/components/NutritionAnalysis.jsx");
/* harmony import */ var _DietaryPreferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DietaryPreferences */ "./src/popup/components/DietaryPreferences.jsx");
/* harmony import */ var _components_ui_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/alert */ "./src/components/ui/alert.jsx");
/* harmony import */ var _components_ui_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/theme */ "./src/components/ui/theme.jsx");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");








const LoadingProgress = ({
  status,
  onCancel
}) => {
  const [loadingText, setLoadingText] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const thoughts = ["Analyzing nutritional content and ingredients...", "Evaluating health impact and benefits...", "Checking allergens and dietary restrictions...", "Finding alternative food suggestions...", "Calculating nutritional scores...", "Analyzing ingredient interactions...", "Evaluating preparation recommendations...", "Checking for potential health effects...", "Processing serving size information...", "Analyzing ingredient quality...", "Generating personalized recommendations..."];
  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setLoadingText(thoughts[currentIndex]);
      currentIndex = (currentIndex + 1) % thoughts.length;
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "flex flex-col items-center justify-center min-h-[400px] space-y-6 p-6",
    children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "relative",
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
        size: 48,
        className: "text-purple-400 animate-pulse"
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "absolute -inset-4",
        children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "w-24 h-24 rounded-full bg-purple-500/20 animate-ping"
        })
      })]
    }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "w-full max-w-sm",
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "bg-white/5 rounded-full p-1",
        children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-300",
          style: {
            width: `${((status?.stepIndex || 0) + 1) * (100 / (status?.totalSteps || 12))}%`
          }
        })
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex justify-between text-sm text-gray-400 mt-2",
        children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
          children: ["Step ", status?.stepIndex + 1 || 1, " of ", status?.totalSteps || 12]
        }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          onClick: onCancel,
          className: "text-gray-400 hover:text-gray-200 transition-colors",
          children: "Cancel"
        })]
      })]
    }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "text-center space-y-2",
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "text-xl font-medium bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent",
        children: status?.message || "Processing..."
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "text-sm text-gray-400",
        children: loadingText
      })]
    }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "flex gap-4",
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "px-4 py-1.5 rounded-full bg-white/5 flex items-center gap-2",
        children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
          size: 14,
          className: "text-purple-400"
        }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "text-sm text-gray-300",
          children: "AI Active"
        })]
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "px-4 py-1.5 rounded-full bg-white/5 flex items-center gap-2",
        children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
          size: 14,
          className: "text-green-400 animate-spin"
        }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "text-sm text-gray-300",
          children: "Processing"
        })]
      })]
    }), status?.allergenFound && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "w-full max-w-sm bg-red-500/10 rounded-lg p-4 border border-red-500/20",
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex items-center gap-2 text-red-400",
        children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
          size: 16
        }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "text-sm font-medium",
          children: "Allergen Alert"
        })]
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "text-sm text-red-300 mt-1",
        children: "Potential allergens detected. Please wait for complete analysis."
      })]
    })]
  });
};
const App = () => {
  const [activeTab, setActiveTab] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)('profile');
  const [loading, setLoading] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [analysis, setAnalysis] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [error, setError] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [currentUrl, setCurrentUrl] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [status, setStatus] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [initialized, setInitialized] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [userPreferences, setUserPreferences] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const loadInitialState = async () => {
      try {
        // Get persisted analysis state
        const result = await chrome.runtime.sendMessage({
          type: 'GET_PERSISTED_STATE'
        });
        if (result?.state) {
          setLoading(result.state.loading);
          setStatus(result.state.status);
          if (result.state.analysis) {
            setAnalysis(result.state.analysis);
            setActiveTab('nutrition');
          }
        }

        // Get user preferences
        const {
          userPreferences
        } = await chrome.storage.local.get('userPreferences');
        if (userPreferences) {
          setUserPreferences(userPreferences);
        } else {
          setActiveTab('profile');
        }

        // Get current tab analysis if exists
        const [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true
        });
        if (tab?.url) {
          setCurrentUrl(tab.url);
          const analysisResult = await chrome.runtime.sendMessage({
            type: 'GET_ANALYSIS',
            url: tab.url
          });
          if (analysisResult?.data) {
            setAnalysis(analysisResult.data);
            setActiveTab('nutrition');
          }
        }
      } catch (error) {
        console.error('Error loading initial state:', error);
      } finally {
        setInitialized(true);
      }
    };

    // Set up message listeners
    const messageListener = message => {
      console.log('Received message in popup:', message);
      switch (message.type) {
        case 'ANALYSIS_STATUS':
          setStatus(message.status);
          break;
        case 'ANALYSIS_COMPLETE':
          setLoading(false);
          setAnalysis(message.data);
          setActiveTab('nutrition');
          setError(null);
          setStatus(null);
          break;
        case 'ANALYSIS_ERROR':
          setLoading(false);
          setError(message.error);
          setStatus(null);
          break;
        case 'ALLERGEN_ALERT':
          setStatus(prev => ({
            ...prev,
            allergenFound: true
          }));
          break;
      }
    };
    chrome.runtime.onMessage.addListener(messageListener);
    loadInitialState();
    return () => {
      chrome.runtime.onMessage.removeListener(messageListener);
    };
  }, []);
  const handleAnalyze = async () => {
    setLoading(true);
    setError(null);
    setAnalysis(null);
    setStatus(null);
    try {
      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
      });
      if (!tab?.url?.startsWith('http')) {
        throw new Error('Please navigate to a product page to analyze');
      }
      setCurrentUrl(tab.url);
      await chrome.runtime.sendMessage({
        type: 'INITIALIZE_SERVICE'
      });
      try {
        await chrome.tabs.sendMessage(tab.id, {
          type: 'PING'
        });
      } catch {
        console.log('Injecting content script...');
        await chrome.scripting.executeScript({
          target: {
            tabId: tab.id
          },
          files: ['content.js']
        });
      }
      await chrome.tabs.sendMessage(tab.id, {
        type: 'ANALYZE_REQUEST'
      });
    } catch (error) {
      console.error('Analysis error:', error);
      setError(error.message);
      setLoading(false);
    }
  };
  const handleCancel = async () => {
    try {
      await chrome.runtime.sendMessage({
        type: 'CANCEL_ANALYSIS'
      });
      setLoading(false);
      setStatus(null);
    } catch (error) {
      console.error('Cancel error:', error);
    }
  };
  const handleReset = async () => {
    try {
      await chrome.runtime.sendMessage({
        type: 'CLEAR_ANALYSIS',
        url: currentUrl
      });
      setAnalysis(null);
      setError(null);
    } catch (error) {
      console.error('Reset error:', error);
    }
  };
  if (!initialized) {
    return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950",
      children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "w-8 h-8 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"
      })
    });
  }
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "flex flex-col h-full bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white",
    children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("header", {
      className: "sticky top-0 backdrop-blur-md bg-black/10 border-b border-white/10 p-4",
      children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("nav", {
        className: "flex gap-4",
        children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          onClick: () => setActiveTab('profile'),
          className: `flex-1 relative group overflow-hidden rounded-xl px-4 py-2 transition-all duration-300
              ${activeTab === 'profile' ? 'bg-gradient-to-r from-violet-600 to-purple-600 shadow-lg shadow-purple-500/25' : 'hover:bg-white/5'}`,
          children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
            className: "flex items-center justify-center gap-2",
            children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
              size: 18
            }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              children: "Profile"
            })]
          })
        }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          onClick: () => setActiveTab('nutrition'),
          className: `flex-1 relative group overflow-hidden rounded-xl px-4 py-2 transition-all duration-300
              ${activeTab === 'nutrition' ? 'bg-gradient-to-r from-violet-600 to-purple-600 shadow-lg shadow-purple-500/25' : 'hover:bg-white/5'}`,
          children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
            className: "flex items-center justify-center gap-2",
            children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
              size: 18
            }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              children: "Analysis"
            })]
          })
        })]
      })
    }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("main", {
      className: "flex-1 overflow-auto",
      children: loading ? (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(LoadingProgress, {
        status: status,
        onCancel: handleCancel
      }) : (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "p-4 space-y-4",
        children: activeTab === 'profile' ? (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_DietaryPreferences__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onComplete: prefs => {
            setUserPreferences(prefs);
            setActiveTab('nutrition');
          },
          currentPreferences: userPreferences
        }) : (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "space-y-4",
          children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            onClick: handleAnalyze,
            disabled: loading || !userPreferences,
            className: "w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 p-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg shadow-purple-500/25",
            children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
              size: 20
            }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "font-medium",
              children: "Analyze Product"
            }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
              size: 20
            })]
          }), !userPreferences && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_ui_alert__WEBPACK_IMPORTED_MODULE_4__.Alert, {
            variant: "default",
            children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_ui_alert__WEBPACK_IMPORTED_MODULE_4__.AlertDescription, {
              className: "flex items-center gap-2",
              children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
                className: "w-4 h-4"
              }), "Please set up your dietary preferences first"]
            })
          }), error && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "bg-red-500/10 border border-red-500/20 rounded-xl p-4",
            children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex items-start gap-3",
              children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"], {
                className: "w-5 h-5 text-red-400 flex-shrink-0"
              }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                  className: "font-medium text-red-400",
                  children: "Analysis Error"
                }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                  className: "text-sm text-red-300/80",
                  children: error
                })]
              })]
            })
          }), analysis && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_NutritionAnalysis__WEBPACK_IMPORTED_MODULE_2__["default"], {
            analysis: analysis,
            userPreferences: userPreferences
          }), !loading && !error && !analysis && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "text-center bg-white/5 rounded-xl p-8 backdrop-blur-sm",
            children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_16__["default"], {
              size: 48,
              className: "mx-auto mb-4 text-purple-400"
            }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
              className: "text-xl font-medium mb-2",
              children: "Ready to Analyze"
            }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "text-gray-400 mb-6",
              children: "Navigate to a product page and click analyze to get started"
            }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex items-center justify-center gap-4 text-sm text-gray-400",
              children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_17__["default"], {
                  className: "w-4 h-4 text-green-400"
                }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  children: "AI-Powered"
                })]
              }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_17__["default"], {
                  className: "w-4 h-4 text-green-400"
                }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  children: "Fast Analysis"
                })]
              }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_17__["default"], {
                  className: "w-4 h-4 text-green-400"
                }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  children: "Personalized"
                })]
              })]
            })]
          })]
        })
      })
    }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("footer", {
      className: "backdrop-blur-md bg-black/10 border-t border-white/10 p-3",
      children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex justify-between items-center text-sm text-gray-400",
        children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
            size: 14,
            className: "text-purple-400"
          }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            children: "Powered by Gemini & Nutritionix"
          })]
        }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex items-center gap-3",
          children: [analysis && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            onClick: handleReset,
            className: "p-1.5 hover:bg-white/5 rounded-lg transition-colors",
            title: "Reset Analysis",
            children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_18__["default"], {
              size: 14
            })
          }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            onClick: () => window.open('options.html', '_blank'),
            className: "p-1.5 hover:bg-white/5 rounded-lg transition-colors",
            title: "Settings",
            children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_19__["default"], {
              size: 14
            })
          })]
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/popup/components/DietaryPreferences.jsx":
/*!*****************************************************!*\
  !*** ./src/popup/components/DietaryPreferences.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/apple.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/loader-circle.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/save.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-alert.js");
/* harmony import */ var _components_ui_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/alert */ "./src/components/ui/alert.jsx");
/* harmony import */ var _components_ui_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/theme */ "./src/components/ui/theme.jsx");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");






const DIETARY_SCHEMA = {
  restrictions: {
    title: 'Dietary Restrictions',
    options: [{
      value: 'vegetarian',
      label: 'Vegetarian'
    }, {
      value: 'vegan',
      label: 'Vegan'
    }, {
      value: 'gluten-free',
      label: 'Gluten Free'
    }, {
      value: 'dairy-free',
      label: 'Dairy Free'
    }, {
      value: 'nut-free',
      label: 'Nut Free'
    }, {
      value: 'shellfish-free',
      label: 'Shellfish Free'
    }]
  },
  preferences: {
    title: 'Nutritional Preferences',
    options: [{
      value: 'low-sugar',
      label: 'Low Sugar'
    }, {
      value: 'low-sodium',
      label: 'Low Sodium'
    }, {
      value: 'low-fat',
      label: 'Low Fat'
    }, {
      value: 'high-protein',
      label: 'High Protein'
    }, {
      value: 'low-carb',
      label: 'Low Carb'
    }, {
      value: 'organic',
      label: 'Prefer Organic'
    }]
  },
  alerts: {
    title: 'Ingredient Alerts',
    options: [{
      value: 'artificial-colors',
      label: 'Artificial Colors'
    }, {
      value: 'artificial-sweeteners',
      label: 'Artificial Sweeteners'
    }, {
      value: 'preservatives',
      label: 'Preservatives'
    }, {
      value: 'msg',
      label: 'MSG'
    }, {
      value: 'added-sugars',
      label: 'Added Sugars'
    }, {
      value: 'trans-fats',
      label: 'Trans Fats'
    }]
  }
};
const DietaryPreferences = () => {
  const [preferences, setPreferences] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({
    restrictions: [],
    preferences: [],
    alerts: []
  });
  const [saving, setSaving] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [message, setMessage] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    loadPreferences();
  }, []);
  const loadPreferences = async () => {
    try {
      const result = await chrome.storage.local.get('userPreferences');
      if (result.userPreferences) {
        setPreferences(result.userPreferences);
      }
    } catch (error) {
      console.error('Failed to load preferences:', error);
      setMessage({
        type: 'error',
        text: 'Failed to load preferences'
      });
    }
  };
  const handleToggle = (category, value) => {
    setPreferences(prev => ({
      ...prev,
      [category]: prev[category].includes(value) ? prev[category].filter(v => v !== value) : [...prev[category], value]
    }));
  };
  const handleSave = async () => {
    setSaving(true);
    try {
      await chrome.storage.local.set({
        userPreferences: {
          ...preferences,
          lastUpdated: new Date().toISOString()
        }
      });
      setMessage({
        type: 'success',
        text: 'Preferences saved successfully'
      });
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error('Failed to save preferences:', error);
      setMessage({
        type: 'error',
        text: 'Failed to save preferences'
      });
    } finally {
      setSaving(false);
    }
  };
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "space-y-6",
    children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex justify-between items-center",
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h2", {
        className: "text-lg font-semibold flex items-center gap-2",
        children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "w-5 h-5"
        }), "Dietary Preferences"]
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
        onClick: handleSave,
        disabled: saving,
        className: "px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50 flex items-center gap-2 text-white",
        children: [saving ? (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "w-4 h-4 animate-spin"
        }) : (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: "w-4 h-4"
        }), "Save"]
      })]
    }), message && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_alert__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      variant: message.type === 'success' ? 'default' : 'destructive',
      children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_alert__WEBPACK_IMPORTED_MODULE_2__.AlertDescription, {
        children: message.text
      })
    }), Object.entries(DIETARY_SCHEMA).map(([category, section]) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_theme__WEBPACK_IMPORTED_MODULE_3__.Panel, {
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
        className: "text-lg font-medium text-gray-200 mb-4",
        children: section.title
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "space-y-3",
        children: section.options.map(option => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
          className: "flex items-center gap-3",
          children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            type: "checkbox",
            checked: preferences[category]?.includes(option.value),
            onChange: () => handleToggle(category, option.value),
            className: "w-4 h-4 rounded border-gray-600 bg-gray-700 text-purple-600 focus:ring-purple-500"
          }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "text-gray-300",
            children: option.label
          })]
        }, option.value))
      })]
    }, category)), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex items-start gap-2 text-sm text-gray-400",
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "w-4 h-4 flex-shrink-0 mt-0.5"
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "These preferences will be used to customize product recommendations and highlight relevant nutritional information."
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DietaryPreferences);

/***/ }),

/***/ "./src/popup/components/HealthAdvisory.jsx":
/*!*************************************************!*\
  !*** ./src/popup/components/HealthAdvisory.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/heart.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/triangle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/apple.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/arrow-right.js");
/* harmony import */ var _components_ui_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/theme */ "./src/components/ui/theme.jsx");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");




const HealthAdvisory = ({
  data
}) => {
  if (!data) return null;

  // Helper function to clean markdown formatting
  const cleanMarkdown = text => {
    if (!text) return '';
    return text.replace(/\*\*/g, '') // Remove bold markdown
    .replace(/^\* /gm, '') // Remove bullet points
    .trim();
  };

  // Helper to process alternatives by category
  const processAlternatives = alternatives => {
    const processed = [];
    let currentCategory = '';
    alternatives.forEach(alt => {
      if (alt.includes(':**')) {
        // This is a category header
        currentCategory = cleanMarkdown(alt.split(':')[0]);
      } else {
        // This is an alternative item
        processed.push({
          category: currentCategory,
          text: cleanMarkdown(alt)
        });
      }
    });

    // Group by category
    const grouped = processed.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item.text);
      return acc;
    }, {});
    return grouped;
  };

  // Process concerns to remove markdown formatting
  const concerns = data.concerns?.map(cleanMarkdown) || [];
  const effects = data.effects?.map(cleanMarkdown) || [];
  const alternatives = data.alternatives ? processAlternatives(data.alternatives) : {};
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "space-y-4",
    children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components_ui_theme__WEBPACK_IMPORTED_MODULE_1__.Panel, {
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex items-center gap-2 mb-4",
        children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "w-5 h-5 text-red-400"
        }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          className: "text-lg font-medium",
          children: "Health Overview"
        })]
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "space-y-4",
        children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "bg-gray-800/50 rounded-lg p-4",
          children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center",
              children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "text-2xl font-bold text-white",
                children: data.score || 0
              })
            }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex-1",
              children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "text-sm text-gray-400",
                children: "Health Score"
              }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "text-gray-300",
                children: data.score >= 80 ? 'Excellent choice' : data.score >= 60 ? 'Good with some concerns' : 'Improvement recommended'
              })]
            })]
          })
        })
      })]
    }), concerns.length > 0 && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components_ui_theme__WEBPACK_IMPORTED_MODULE_1__.Panel, {
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex items-center gap-2 mb-4",
        children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "w-5 h-5 text-yellow-400"
        }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          className: "text-lg font-medium",
          children: "Key Health Concerns"
        })]
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "space-y-3",
        children: concerns.map((concern, index) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20",
          children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "text-sm text-gray-300",
            children: concern
          })
        }, index))
      })]
    }), Object.keys(alternatives).length > 0 && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components_ui_theme__WEBPACK_IMPORTED_MODULE_1__.Panel, {
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex items-center gap-2 mb-4",
        children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "w-5 h-5 text-green-400"
        }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          className: "text-lg font-medium",
          children: "Recommended Alternatives"
        })]
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "space-y-4",
        children: Object.entries(alternatives).map(([category, items], categoryIndex) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "space-y-2",
          children: [category && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
            className: "text-sm font-medium text-green-400 ml-1",
            children: category
          }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "grid gap-2",
            children: items.map((item, itemIndex) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg",
              children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
                className: "w-4 h-4 text-green-400 flex-shrink-0 mt-1"
              }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "text-sm text-gray-300",
                children: item
              })]
            }, itemIndex))
          })]
        }, categoryIndex))
      })]
    }), effects.length > 0 && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components_ui_theme__WEBPACK_IMPORTED_MODULE_1__.Panel, {
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex items-center gap-2 mb-4",
        children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "w-5 h-5 text-orange-400"
        }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          className: "text-lg font-medium",
          children: "Potential Effects"
        })]
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "space-y-2",
        children: effects.map((effect, index) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-start gap-2 p-2",
          children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"
          }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "text-sm text-gray-300",
            children: effect
          })]
        }, index))
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HealthAdvisory);

/***/ }),

/***/ "./src/popup/components/NutritionAnalysis.jsx":
/*!****************************************************!*\
  !*** ./src/popup/components/NutritionAnalysis.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/scale.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/activity.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/heart.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/beaker.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/leaf.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/triangle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/info.js");
/* harmony import */ var _components_ui_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/theme */ "./src/components/ui/theme.jsx");
/* harmony import */ var _components_ui_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/alert */ "./src/components/ui/alert.jsx");
/* harmony import */ var _HealthAdvisory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HealthAdvisory */ "./src/popup/components/HealthAdvisory.jsx");
/* harmony import */ var _ProductHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductHeader */ "./src/popup/components/ProductHeader.jsx");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");








const ScoreBadge = ({
  score
}) => {
  let color;
  if (score >= 80) color = 'bg-green-500/20 border-green-500/20 text-green-400';else if (score >= 60) color = 'bg-yellow-500/20 border-yellow-500/20 text-yellow-400';else color = 'bg-red-500/20 border-red-500/20 text-red-400';
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: `px-3 py-1 rounded-full text-sm border flex items-center gap-2 ${color}`,
    children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "w-4 h-4"
    }), "Score: ", score, "/100"]
  });
};
const NutritionAnalysis = ({
  analysis
}) => {
  const [activeSection, setActiveSection] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)('overview');
  if (!analysis) {
    return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "p-6 text-center",
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "w-12 h-12 text-gray-400 mx-auto mb-4"
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
        className: "text-gray-300 font-medium",
        children: "No Analysis Available"
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "text-gray-500 text-sm mt-2",
        children: "Please analyze a product to see nutrition details"
      })]
    });
  }
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "space-y-4",
    children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "relative bg-gradient-to-br from-purple-600/20 to-purple-500/10 rounded-xl p-6 border border-purple-500/20",
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ProductHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: analysis.productInfo?.title,
        category: analysis.productInfo?.category,
        score: analysis.score
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "space-y-4",
        children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "space-y-2",
          children: analysis.healthInsights?.map((insight, i) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex items-start gap-2 text-gray-200",
            children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
              className: "w-5 h-5 text-green-400 flex-shrink-0"
            }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              children: insight
            })]
          }, i))
        })
      })]
    }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "flex gap-2 p-1 bg-gray-800/50 rounded-lg",
      children: ['overview', 'health', 'nutrition'].map(section => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
        onClick: () => setActiveSection(section),
        className: `flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-all duration-300
              ${activeSection === section ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25' : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'}`,
        children: [section === 'overview' && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
          size: 18
        }), section === 'health' && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
          size: 18
        }), section === 'nutrition' && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
          size: 18
        }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "capitalize",
          children: section
        })]
      }, section))
    }), activeSection === 'overview' && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_ui_theme__WEBPACK_IMPORTED_MODULE_2__.Panel, {
        children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h3", {
          className: "flex items-center gap-2 text-lg font-medium text-gray-200 mb-4",
          children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
            className: "w-5 h-5 text-red-400"
          }), "Key Nutrients"]
        }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "grid grid-cols-2 gap-3",
          children: analysis.keyNutrients?.map((nutrient, i) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "p-3 bg-gray-800/30 rounded-lg",
            children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "text-sm text-gray-400",
              children: nutrient
            })
          }, i))
        })]
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_ui_theme__WEBPACK_IMPORTED_MODULE_2__.Panel, {
        children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h3", {
          className: "flex items-center gap-2 text-lg font-medium text-gray-200 mb-4",
          children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
            className: "w-5 h-5 text-green-400"
          }), "Dietary Information"]
        }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "space-y-2",
          children: Object.entries(analysis.dietaryInfo || {}).map(([key, value]) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [value ? (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
              className: "w-4 h-4 text-green-400"
            }) : (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
              className: "w-4 h-4 text-gray-500"
            }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "text-gray-300 capitalize",
              children: key.replace(/([A-Z])/g, ' $1').trim()
            })]
          }, key))
        })]
      })]
    }), activeSection === 'health' && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [analysis.healthAdvisory && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HealthAdvisory__WEBPACK_IMPORTED_MODULE_4__["default"], {
        data: analysis.healthAdvisory
      }), analysis.allergens?.length > 0 && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "bg-red-500/10 rounded-xl p-6 border border-red-500/20",
        children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h3", {
          className: "flex items-center gap-2 text-lg font-medium text-red-400 mb-4",
          children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
            className: "w-5 h-5"
          }), "Allergen Alert"]
        }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "space-y-2",
          children: analysis.allergens.map((allergen, i) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex items-start gap-2 text-red-300",
            children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
              className: "w-4 h-4 flex-shrink-0 mt-1"
            }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              children: allergen
            })]
          }, i))
        })]
      })]
    }), activeSection === 'nutrition' && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_ui_theme__WEBPACK_IMPORTED_MODULE_2__.Panel, {
        children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h3", {
          className: "flex items-center gap-2 text-lg font-medium text-gray-200 mb-4",
          children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
            className: "w-5 h-5 text-blue-400"
          }), "Detailed Nutrition"]
        }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "space-y-3",
          children: analysis.nutritionData && Object.entries(analysis.nutritionData).map(([key, value]) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex justify-between items-center p-3 bg-gray-800/30 rounded-lg",
            children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "text-gray-300 capitalize",
              children: key.replace(/([A-Z])/g, ' $1').trim()
            }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "text-gray-400",
              children: value?.toFixed(1) || 'N/A'
            })]
          }, key))
        })]
      }), analysis.recommendations?.length > 0 && (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_ui_theme__WEBPACK_IMPORTED_MODULE_2__.Panel, {
        children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h3", {
          className: "flex items-center gap-2 text-lg font-medium text-gray-200 mb-4",
          children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"], {
            className: "w-5 h-5 text-blue-400"
          }), "Recommendations"]
        }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "space-y-2",
          children: analysis.recommendations.map((rec, i) => (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "p-3 bg-gray-800/30 rounded-lg text-gray-300",
            children: rec
          }, i))
        })]
      })]
    }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "flex items-start gap-2 text-sm text-gray-400 mt-4",
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: "w-4 h-4 flex-shrink-0 mt-0.5"
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        children: "Analysis based on product information and Nutritionix database. Results are for reference only. Always verify with product packaging."
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NutritionAnalysis);

/***/ }),

/***/ "./src/popup/components/ProductHeader.jsx":
/*!************************************************!*\
  !*** ./src/popup/components/ProductHeader.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/scale.js");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");


const ProductHeader = ({
  title,
  category,
  score
}) => {
  return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "space-y-4",
    children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "space-y-1",
      children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
        className: "text-xl font-bold text-white leading-tight",
        children: title
      }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        className: "text-gray-400 text-sm",
        children: category
      })]
    }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "flex items-center gap-2",
      children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-500/20",
        children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
            className: "w-5 h-5 text-purple-400"
          }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "text-2xl font-bold text-purple-400",
              children: [score, "/100"]
            }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              className: "text-xs text-purple-300",
              children: "Nutrition Score"
            })]
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductHeader);

/***/ }),

/***/ "./src/popup/index.js":
/*!****************************!*\
  !*** ./src/popup/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App */ "./src/popup/components/App.jsx");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/popup/styles.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");




const mount = () => {
  const root = document.getElementById('app');
  if (!root) {
    console.error('Root element not found');
    return;
  }
  (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], {}), root);
};

// Check if the DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount);
} else {
  mount();
}

/***/ }),

/***/ "./src/popup/styles.css":
/*!******************************!*\
  !*** ./src/popup/styles.css ***!
  \******************************/
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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksmart_fit"] = self["webpackChunksmart_fit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_lucide-react_dist_esm_icons_activity_js-node_modules_lucide-react_dist_e-9949a6"], () => (__webpack_require__("./src/popup/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map
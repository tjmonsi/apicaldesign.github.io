/*<![CDATA[*/

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'apical-design-llc.myshopify.com',
      apiKey: '4af5716fefa61897692ffa210098ad75',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      /* Budget */
      ui.createComponent('product', {
        id: [10128083910],
        node: document.getElementById('budget-plan'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "variantId": "all",
            "width": "320px",
            "contents": {
              "img": false,
              "imgWithCarousel": false,
              "title": false,
              "variantTitle": false,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "text": {
              "button": "ORDER REVIEW"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#70b3b8",
                "font-family": "Karla, sans-serif",
                "padding-left": "30px",
                "padding-right": "30px",
                ":hover": {
                  "background-color": "#65a1a6"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#65a1a6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "color": "#222222",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif",
                "font-size": "26px",
                "color": "#0d2132"
              },
              "description": {
                "color": "#222222",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-size": "18px",
                "color": "#b70303",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-size": "15px",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal",
                "color": "#b70303"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "cart": {
            "contents": {
              "button": true
            },
            "styles": {
              "button": {
                "background-color": "#70b3b8",
                "font-family": "Karla, sans-serif",
                ":hover": {
                  "background-color": "#65a1a6"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#65a1a6"
                },
                "font-weight": "normal"
              },
              "footer": {
                "background-color": "#ffffff"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "variantTitle": false,
              "buttonWithQuantity": true,
              "button": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "background-color": "#70b3b8",
                "font-family": "Karla, sans-serif",
                "padding-left": "30px",
                "padding-right": "30px",
                ":hover": {
                  "background-color": "#65a1a6"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#65a1a6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif"
              },
              "description": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Karla, sans-serif",
                "background-color": "#70b3b8",
                ":hover": {
                  "background-color": "#65a1a6"
                },
                ":focus": {
                  "background-color": "#65a1a6"
                },
                "font-weight": "normal"
              },
              "count": {
                "font-size": "16px",
                "color": "#ffffff",
                ":hover": {
                  "color": "#ffffff"
                }
              },
              "iconPath": {
                "fill": "#ffffff"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Karla, sans-serif"
              },
              "select": {
                "font-family": "Karla, sans-serif"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });

      /* Skype Follow-up */
      ui.createComponent('product', {
        id: [10128094918],
        node: document.getElementById('skype-follow-up'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "variantId": "all",
            "width": "320px",
            "contents": {
              "img": false,
              "imgWithCarousel": false,
              "title": false,
              "variantTitle": false,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "text": {
              "button": "+ Add Skype Follow-up ($50)"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "width": "100%",
                "font-family": "Karla, sans-serif",
                "padding": "16px",
                "text-align": "left",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "color": "#222222",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif",
                "font-size": "26px",
                "color": "#0d2132"
              },
              "description": {
                "color": "#222222",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-size": "18px",
                "color": "#b70303",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-size": "15px",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal",
                "color": "#b70303"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "cart": {
            "contents": {
              "button": true
            },
            "styles": {
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "font-family": "Karla, sans-serif",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "footer": {
                "background-color": "#ffffff"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "variantTitle": false,
              "buttonWithQuantity": true,
              "button": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "width": "100%",
                "font-family": "Karla, sans-serif",
                "padding": "16px",
                "text-align": "left",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif"
              },
              "description": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Karla, sans-serif",
                "background-color": "#ffffff",
                ":hover": {
                  "background-color": "#e6e6e6"
                },
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "count": {
                "font-size": "16px",
                "color": "#000000",
                ":hover": {
                  "color": "#000000"
                }
              },
              "iconPath": {
                "fill": "#000000"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Karla, sans-serif"
              },
              "select": {
                "font-family": "Karla, sans-serif"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });
      /* Content Strategy */
      ui.createComponent('product', {
        id: [10167228614],
        node: document.getElementById('content-strategy-audit'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "variantId": "all",
            "width": "320px",
            "contents": {
              "img": false,
              "imgWithCarousel": false,
              "title": false,
              "variantTitle": false,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "text": {
              "button": "+ Add Content Strategy Audit ($150)"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "width": "100%",
                "font-family": "Karla, sans-serif",
                "padding": "16px",
                "text-align": "left",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "color": "#222222",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif",
                "font-size": "26px",
                "color": "#0d2132"
              },
              "description": {
                "color": "#222222",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-size": "18px",
                "color": "#b70303",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-size": "15px",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal",
                "color": "#b70303"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "cart": {
            "contents": {
              "button": true
            },
            "styles": {
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "font-family": "Karla, sans-serif",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "footer": {
                "background-color": "#ffffff"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "variantTitle": false,
              "buttonWithQuantity": true,
              "button": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "width": "100%",
                "font-family": "Karla, sans-serif",
                "padding": "16px",
                "text-align": "left",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif"
              },
              "description": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Karla, sans-serif",
                "background-color": "#ffffff",
                ":hover": {
                  "background-color": "#e6e6e6"
                },
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "count": {
                "font-size": "16px",
                "color": "#000000",
                ":hover": {
                  "color": "#000000"
                }
              },
              "iconPath": {
                "fill": "#000000"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Karla, sans-serif"
              },
              "select": {
                "font-family": "Karla, sans-serif"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });
      /* Usability Tests */
      ui.createComponent('product', {
        id: [10167261062],
        node: document.getElementById('usability-tests'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "variantId": "all",
            "width": "320px",
            "contents": {
              "img": false,
              "imgWithCarousel": false,
              "title": false,
              "variantTitle": false,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "text": {
              "button": "+ Add 5 Usability Tests ($700)"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "width": "100%",
                "font-family": "Karla, sans-serif",
                "padding": "16px",
                "text-align": "left",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "color": "#222222",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif",
                "font-size": "26px",
                "color": "#0d2132"
              },
              "description": {
                "color": "#222222",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-size": "18px",
                "color": "#b70303",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-size": "15px",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal",
                "color": "#b70303"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "cart": {
            "contents": {
              "button": true
            },
            "styles": {
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "font-family": "Karla, sans-serif",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "footer": {
                "background-color": "#ffffff"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "variantTitle": false,
              "buttonWithQuantity": true,
              "button": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "width": "100%",
                "font-family": "Karla, sans-serif",
                "padding": "16px",
                "text-align": "left",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif"
              },
              "description": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Karla, sans-serif",
                "background-color": "#ffffff",
                ":hover": {
                  "background-color": "#e6e6e6"
                },
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "count": {
                "font-size": "16px",
                "color": "#000000",
                ":hover": {
                  "color": "#000000"
                }
              },
              "iconPath": {
                "fill": "#000000"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Karla, sans-serif"
              },
              "select": {
                "font-family": "Karla, sans-serif"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });
      /* Translated Copy */
      ui.createComponent('product', {
        id: [10167300230],
        node: document.getElementById('translated-copy'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "variantId": "all",
            "width": "320px",
            "contents": {
              "img": false,
              "imgWithCarousel": false,
              "title": false,
              "variantTitle": false,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "text": {
              "button": "+ Add a Translated Copy ($100)"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "width": "100%",
                "font-family": "Karla, sans-serif",
                "padding": "16px",
                "text-align": "left",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "color": "#222222",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif",
                "font-size": "26px",
                "color": "#0d2132"
              },
              "description": {
                "color": "#222222",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-size": "18px",
                "color": "#b70303",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-size": "15px",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal",
                "color": "#b70303"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "cart": {
            "contents": {
              "button": true
            },
            "styles": {
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "font-family": "Karla, sans-serif",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "footer": {
                "background-color": "#ffffff"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "variantTitle": false,
              "buttonWithQuantity": true,
              "button": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "width": "100%",
                "font-family": "Karla, sans-serif",
                "padding": "16px",
                "text-align": "left",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif"
              },
              "description": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Karla, sans-serif",
                "background-color": "#ffffff",
                ":hover": {
                  "background-color": "#e6e6e6"
                },
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "count": {
                "font-size": "16px",
                "color": "#000000",
                ":hover": {
                  "color": "#000000"
                }
              },
              "iconPath": {
                "fill": "#000000"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Karla, sans-serif"
              },
              "select": {
                "font-family": "Karla, sans-serif"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });

      /* Value */
      ui.createComponent('product', {
        id: [10128087302],
        node: document.getElementById('value-plan'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "variantId": "all",
            "width": "320px",
            "contents": {
              "img": false,
              "imgWithCarousel": false,
              "title": false,
              "variantTitle": false,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "text": {
              "button": "ORDER REVIEW"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#70b3b8",
                "font-family": "Karla, sans-serif",
                "padding-left": "30px",
                "padding-right": "30px",
                ":hover": {
                  "background-color": "#65a1a6"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#65a1a6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "color": "#222222",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif",
                "font-size": "26px",
                "color": "#0d2132"
              },
              "description": {
                "color": "#222222",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-size": "18px",
                "color": "#b70303",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-size": "15px",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal",
                "color": "#b70303"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "cart": {
            "contents": {
              "button": true
            },
            "styles": {
              "button": {
                "background-color": "#70b3b8",
                "font-family": "Karla, sans-serif",
                ":hover": {
                  "background-color": "#65a1a6"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#65a1a6"
                },
                "font-weight": "normal"
              },
              "footer": {
                "background-color": "#ffffff"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "variantTitle": false,
              "buttonWithQuantity": true,
              "button": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "background-color": "#70b3b8",
                "font-family": "Karla, sans-serif",
                "padding-left": "30px",
                "padding-right": "30px",
                ":hover": {
                  "background-color": "#65a1a6"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#65a1a6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif"
              },
              "description": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Karla, sans-serif",
                "background-color": "#70b3b8",
                ":hover": {
                  "background-color": "#65a1a6"
                },
                ":focus": {
                  "background-color": "#65a1a6"
                },
                "font-weight": "normal"
              },
              "count": {
                "font-size": "16px",
                "color": "#ffffff",
                ":hover": {
                  "color": "#ffffff"
                }
              },
              "iconPath": {
                "fill": "#ffffff"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Karla, sans-serif"
              },
              "select": {
                "font-family": "Karla, sans-serif"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });

      /* Content Strategy 2 */
      ui.createComponent('product', {
        id: [10167228614],
        node: document.getElementById('content-strategy-audit-2'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "variantId": "all",
            "width": "320px",
            "contents": {
              "img": false,
              "imgWithCarousel": false,
              "title": false,
              "variantTitle": false,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "text": {
              "button": "+ Add Content Strategy Audit ($150)"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "width": "100%",
                "font-family": "Karla, sans-serif",
                "padding": "16px",
                "text-align": "left",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "color": "#222222",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif",
                "font-size": "26px",
                "color": "#0d2132"
              },
              "description": {
                "color": "#222222",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-size": "18px",
                "color": "#b70303",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-size": "15px",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal",
                "color": "#b70303"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "cart": {
            "contents": {
              "button": true
            },
            "styles": {
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "font-family": "Karla, sans-serif",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "footer": {
                "background-color": "#ffffff"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "variantTitle": false,
              "buttonWithQuantity": true,
              "button": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "width": "100%",
                "font-family": "Karla, sans-serif",
                "padding": "16px",
                "text-align": "left",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif"
              },
              "description": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Karla, sans-serif",
                "background-color": "#ffffff",
                ":hover": {
                  "background-color": "#e6e6e6"
                },
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "count": {
                "font-size": "16px",
                "color": "#000000",
                ":hover": {
                  "color": "#000000"
                }
              },
              "iconPath": {
                "fill": "#000000"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Karla, sans-serif"
              },
              "select": {
                "font-family": "Karla, sans-serif"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });
      /* Usability Tests 2 */
      ui.createComponent('product', {
        id: [10167261062],
        node: document.getElementById('usability-tests-2'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "variantId": "all",
            "width": "320px",
            "contents": {
              "img": false,
              "imgWithCarousel": false,
              "title": false,
              "variantTitle": false,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "text": {
              "button": "+ Add 5 Usability Tests ($700)"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "width": "100%",
                "font-family": "Karla, sans-serif",
                "padding": "16px",
                "text-align": "left",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "color": "#222222",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif",
                "font-size": "26px",
                "color": "#0d2132"
              },
              "description": {
                "color": "#222222",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-size": "18px",
                "color": "#b70303",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-size": "15px",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal",
                "color": "#b70303"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "cart": {
            "contents": {
              "button": true
            },
            "styles": {
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "font-family": "Karla, sans-serif",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "footer": {
                "background-color": "#ffffff"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "variantTitle": false,
              "buttonWithQuantity": true,
              "button": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "width": "100%",
                "font-family": "Karla, sans-serif",
                "padding": "16px",
                "text-align": "left",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif"
              },
              "description": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Karla, sans-serif",
                "background-color": "#ffffff",
                ":hover": {
                  "background-color": "#e6e6e6"
                },
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "count": {
                "font-size": "16px",
                "color": "#000000",
                ":hover": {
                  "color": "#000000"
                }
              },
              "iconPath": {
                "fill": "#000000"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Karla, sans-serif"
              },
              "select": {
                "font-family": "Karla, sans-serif"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });
      /* Translated Copy 2 */
      ui.createComponent('product', {
        id: [10167300230],
        node: document.getElementById('translated-copy-2'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "variantId": "all",
            "width": "320px",
            "contents": {
              "img": false,
              "imgWithCarousel": false,
              "title": false,
              "variantTitle": false,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "text": {
              "button": "+ Add a Translated Copy ($100)"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "width": "100%",
                "font-family": "Karla, sans-serif",
                "padding": "16px",
                "text-align": "left",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "color": "#222222",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif",
                "font-size": "26px",
                "color": "#0d2132"
              },
              "description": {
                "color": "#222222",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-size": "18px",
                "color": "#b70303",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-size": "15px",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal",
                "color": "#b70303"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "cart": {
            "contents": {
              "button": true
            },
            "styles": {
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "font-family": "Karla, sans-serif",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "footer": {
                "background-color": "#ffffff"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "variantTitle": false,
              "buttonWithQuantity": true,
              "button": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "width": "100%",
                "font-family": "Karla, sans-serif",
                "padding": "16px",
                "text-align": "left",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif"
              },
              "description": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Karla, sans-serif",
                "background-color": "#ffffff",
                ":hover": {
                  "background-color": "#e6e6e6"
                },
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "count": {
                "font-size": "16px",
                "color": "#000000",
                ":hover": {
                  "color": "#000000"
                }
              },
              "iconPath": {
                "fill": "#000000"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Karla, sans-serif"
              },
              "select": {
                "font-family": "Karla, sans-serif"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });

      /* Suite */
      ui.createComponent('product', {
        id: [10128090118],
        node: document.getElementById('suite-plan'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "variantId": "all",
            "width": "320px",
            "contents": {
              "img": false,
              "imgWithCarousel": false,
              "title": false,
              "variantTitle": false,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "text": {
              "button": "ORDER REVIEW"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#70b3b8",
                "font-family": "Karla, sans-serif",
                "padding-left": "30px",
                "padding-right": "30px",
                ":hover": {
                  "background-color": "#65a1a6"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#65a1a6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "color": "#222222",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif",
                "font-size": "26px",
                "color": "#0d2132"
              },
              "description": {
                "color": "#222222",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-size": "18px",
                "color": "#b70303",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-size": "15px",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal",
                "color": "#b70303"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "cart": {
            "contents": {
              "button": true
            },
            "styles": {
              "button": {
                "background-color": "#70b3b8",
                "font-family": "Karla, sans-serif",
                ":hover": {
                  "background-color": "#65a1a6"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#65a1a6"
                },
                "font-weight": "normal"
              },
              "footer": {
                "background-color": "#ffffff"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "variantTitle": false,
              "buttonWithQuantity": true,
              "button": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "background-color": "#70b3b8",
                "font-family": "Karla, sans-serif",
                "padding-left": "30px",
                "padding-right": "30px",
                ":hover": {
                  "background-color": "#65a1a6"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#65a1a6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif"
              },
              "description": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Karla, sans-serif",
                "background-color": "#70b3b8",
                ":hover": {
                  "background-color": "#65a1a6"
                },
                ":focus": {
                  "background-color": "#65a1a6"
                },
                "font-weight": "normal"
              },
              "count": {
                "font-size": "16px",
                "color": "#ffffff",
                ":hover": {
                  "color": "#ffffff"
                }
              },
              "iconPath": {
                "fill": "#ffffff"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Karla, sans-serif"
              },
              "select": {
                "font-family": "Karla, sans-serif"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });

      /* Translated Copy 3 */
      ui.createComponent('product', {
        id: [10167300230],
        node: document.getElementById('translated-copy-3'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "variantId": "all",
            "width": "320px",
            "contents": {
              "img": false,
              "imgWithCarousel": false,
              "title": false,
              "variantTitle": false,
              "price": false,
              "description": false,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "text": {
              "button": "+ Add a Translated Copy ($100)"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "width": "100%",
                "font-family": "Karla, sans-serif",
                "padding": "16px",
                "text-align": "left",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "color": "#222222",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif",
                "font-size": "26px",
                "color": "#0d2132"
              },
              "description": {
                "color": "#222222",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-size": "18px",
                "color": "#b70303",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-size": "15px",
                "font-family": "Karla, sans-serif",
                "font-weight": "normal",
                "color": "#b70303"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "cart": {
            "contents": {
              "button": true
            },
            "styles": {
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "font-family": "Karla, sans-serif",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "footer": {
                "background-color": "#ffffff"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "variantTitle": false,
              "buttonWithQuantity": true,
              "button": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "background-color": "#ffffff",
                "color": "#000000",
                "width": "100%",
                "font-family": "Karla, sans-serif",
                "padding": "16px",
                "text-align": "left",
                ":hover": {
                  "background-color": "#e6e6e6",
                  "color": "#000000"
                },
                "border-radius": "0px",
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "variantTitle": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "title": {
                "font-family": "Karla, sans-serif"
              },
              "description": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "price": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              },
              "compareAt": {
                "font-family": "Karla, sans-serif",
                "font-weight": "normal"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla",
              "Karla"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "Karla, sans-serif",
                "background-color": "#ffffff",
                ":hover": {
                  "background-color": "#e6e6e6"
                },
                ":focus": {
                  "background-color": "#e6e6e6"
                },
                "font-weight": "normal"
              },
              "count": {
                "font-size": "16px",
                "color": "#000000",
                ":hover": {
                  "color": "#000000"
                }
              },
              "iconPath": {
                "fill": "#000000"
              }
            },
            "googleFonts": [
              "Karla"
            ]
          },
          "option": {
            "styles": {
              "label": {
                "font-family": "Karla, sans-serif"
              },
              "select": {
                "font-family": "Karla, sans-serif"
              }
            },
            "googleFonts": [
              "Karla",
              "Karla"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });
    });
  }
})();
/*]]>*/
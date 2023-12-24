import React from "react";
import ReactDOM from "react-dom/client";
/**  LOW LEVEL 
 *  Header
 *   - Logo
 *   - Nav Items (Home, About, Cart)
 *  Body
 *   - Search Bar
 *   - Restaurant Container
 *      - RestaurantCard
 *          - Img
 *          - NAme of Restaurant, Star Rating, Cuisine, Delivery Time
 *  Footer
 *   - Copyright
 *   - Links
 *   - Address
 *   - Contact 
 */
const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo" 
                    src={require('/FoodLogo.jpg')}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

// inline style for css using jsx
const styleCard = {
    backgroundColor: "#f0f0f0",
};
const RestaurantCard2 = (props) => {
    return (
        <div className="restaurant-card2" style={styleCard}>
            <img
                className="restaurant-logo2"
                alt="res-logo" 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf"
            />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.Deliverytime}</h4>
        </div>
    );
}
const RestaurantCard = (props) =>{
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
        costForTwo
    } = resData?.info;

    return (
        <div className="restaurant-card" style ={styleCard}>
            <img
                className="restaurant-logo"
                alt="res-logo"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                     cloudinaryImageId
                }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{costForTwo} </h4> 
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
};
const resObj = [
        {
          "info": {
            "id": "422210",
            "name": "The Pizza Bakery",
            "cloudinaryImageId": "0335dd45be555d0a4187255e57d2ca88",
            "locality": "Doddathoguru Village",
            "areaName": "Electronic City",
            "costForTwo": "₹700 for two",
            "cuisines": [
              "Pizzas",
              "Pastas",
              "Italian",
              "Desserts",
              "Continental"
            ],
            "avgRating": 4.2,
            "parentId": "11108",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "promoted": true,
            "adTrackingId": "cid=10078644~p=2~eid=0000018c-9c49-7cf7-70c9-81a8003a0261~srvts=1703429111031~45995",
            "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 0.5,
              "serviceability": "SERVICEABLE",
              "slaString": "19 mins",
              "lastMileTravelString": "0.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-24 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ],
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                      }
                    }
                  ]
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "description": "",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=422210",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "268782",
            "name": "Leon's - Burgers & Wings (Leon Grill)",
            "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
            "locality": "Electronic City",
            "areaName": "Electronic City",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "American",
              "Snacks",
              "Turkish",
              "Portuguese",
              "Continental"
            ],
            "avgRating": 4.3,
            "parentId": "371281",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 17,
              "lastMileTravel": 1.8,
              "serviceability": "SERVICEABLE",
              "slaString": "17 mins",
              "lastMileTravelString": "1.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-25 04:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                },
                "imageBased": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹499",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=268782",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "294128",
            "name": "Nandhana Palace",
            "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
            "locality": "Doddathoguru village",
            "areaName": "Electronic City",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Biryani",
              "Andhra",
              "South Indian",
              "North Indian"
            ],
            "avgRating": 4.2,
            "parentId": "2120",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 2.3,
              "serviceability": "SERVICEABLE",
              "slaString": "20 mins",
              "lastMileTravelString": "2.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-25 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=294128",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "570510",
            "name": "Bakingo",
            "cloudinaryImageId": "0c53fd8f62e3d25ba56d1b4cfe572cef",
            "locality": "Bettadasanapura",
            "areaName": "Bommanahalli",
            "costForTwo": "₹299 for two",
            "cuisines": [
              "Bakery",
              "Desserts",
              "Beverages",
              "Snacks"
            ],
            "avgRating": 4.3,
            "parentId": "3818",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 17,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "slaString": "17 mins",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-25 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹175 OFF",
              "subHeader": "ABOVE ₹999",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=570510",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "423592",
            "name": "Paris Panini - Gourmet Sandwiches & Wraps",
            "cloudinaryImageId": "pwafay0iaosiszbsuthn",
            "locality": "Doddathoguru",
            "areaName": "Hosur Road",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Continental",
              "Pastas",
              "Salads",
              "Snacks",
              "Desserts",
              "Fast Food",
              "French"
            ],
            "avgRating": 4.4,
            "parentId": "21019",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "promoted": true,
            "adTrackingId": "cid=10078641~p=3~eid=0000018c-9c49-7cf7-70c9-81a9003a036a~srvts=1703429111031~45995",
            "sla": {
              "deliveryTime": 18,
              "lastMileTravel": 0.4,
              "serviceability": "SERVICEABLE",
              "slaString": "18 mins",
              "lastMileTravelString": "0.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-24 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ],
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "description": "",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=423592",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "390049",
            "name": "NH1 Bowls - Highway To North",
            "cloudinaryImageId": "94654fdf308764cd0faf83dba35bcdc3",
            "locality": "Doddathogur",
            "areaName": "Electronic City",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "North Indian",
              "Punjabi",
              "Home Food"
            ],
            "avgRating": 4.4,
            "parentId": "22452",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "14-24 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-25 02:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "description": "",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹169"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=390049",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "20686",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Neeladri Road",
            "areaName": "Electronic City",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Burgers",
              "American"
            ],
            "avgRating": 4.2,
            "parentId": "166",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 2,
              "serviceability": "SERVICEABLE",
              "slaString": "19 mins",
              "lastMileTravelString": "2.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-25 04:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                  "shortDescription": "Kids Favourite options",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "shortDescription": "Kids Favourite options",
                        "fontColor": "#7E808C",
                        "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                        "description": ""
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=20686",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "803057",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "e5f54df4ed8bac458b801ede76ee37d0",
            "locality": "NEELADRI ROAD",
            "areaName": "Electronics City Phase 1",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Pizzas",
              "Pastas",
              "Italian",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 3.2,
            "parentId": "4961",
            "avgRatingString": "3.2",
            "totalRatingsString": "4",
            "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 2.5,
              "serviceability": "SERVICEABLE",
              "slaString": "19 mins",
              "lastMileTravelString": "2.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-25 03:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=803057",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "543867",
            "name": "Food Street",
            "cloudinaryImageId": "rtdt6whvmbul9tdjktij",
            "locality": "Konappana Agrahara",
            "areaName": "Electronic City",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Indian",
              "Chinese",
              "Biryani",
              "Fast Food",
              "Beverages"
            ],
            "avgRating": 4,
            "parentId": "15314",
            "avgRatingString": "4.0",
            "totalRatingsString": "100+",
            "promoted": true,
            "adTrackingId": "cid=10118385~p=4~eid=0000018c-9c49-7cf7-70c9-81aa003a0443~srvts=1703429111031~45995",
            "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 0.8,
              "serviceability": "SERVICEABLE",
              "slaString": "19 mins",
              "lastMileTravelString": "0.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-24 23:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹50 OFF",
              "subHeader": "ABOVE ₹999",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=543867",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "46879",
            "name": "McDonald's",
            "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
            "locality": "Doddatogur Village",
            "areaName": "Electronic City",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "630",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 18,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "18 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-25 03:45:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=46879",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "230758",
            "name": "Indian Grill House",
            "cloudinaryImageId": "dpwouj17phszuteazxij",
            "locality": "Electronic City",
            "areaName": "Electronic City",
            "costForTwo": "₹375 for two",
            "cuisines": [
              "Indian",
              "North Indian",
              "Seafood",
              "Tandoor"
            ],
            "avgRating": 4.2,
            "parentId": "14646",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 1.3,
              "serviceability": "SERVICEABLE",
              "slaString": "19 mins",
              "lastMileTravelString": "1.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-25 00:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=230758",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "170041",
            "name": "Mani's Dum Biryani",
            "cloudinaryImageId": "evo6szssd9gzvdmcfz8o",
            "locality": "1st Phase",
            "areaName": "Electronic City",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Andhra",
              "Biryani",
              "North Indian"
            ],
            "avgRating": 4.3,
            "parentId": "623",
            "avgRatingString": "4.3",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 18,
              "lastMileTravel": 2.7,
              "serviceability": "SERVICEABLE",
              "slaString": "18 mins",
              "lastMileTravelString": "2.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-24 23:30:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "description": "",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    }
                  ]
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=170041",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "644871",
            "name": "Millet Express",
            "cloudinaryImageId": "75f8103a06f57c043f26343fa42e23e2",
            "locality": "K&T's Sai nivas complex",
            "areaName": "Electronic City",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Healthy Food",
              "South Indian",
              "North Indian",
              "Biryani",
              "Chinese",
              "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "10639",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "promoted": true,
            "adTrackingId": "cid=10125193~p=5~eid=0000018c-9c49-7cf7-70c9-81ab003a056a~srvts=1703429111031~45995",
            "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "19 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-24 22:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "shortDescription": "brand",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "description": ""
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=644871",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "767745",
            "name": "Louis Burger",
            "cloudinaryImageId": "a3535141ce7f8db939e999c2a7e06a0c",
            "locality": "DODDATHOGUR VILLAGE",
            "areaName": "Electronics City",
            "costForTwo": "₹600 for two",
            "cuisines": [
              "Burgers",
              "American",
              "Fast Food"
            ],
            "avgRating": 4.3,
            "parentId": "22485",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 1.4,
              "serviceability": "SERVICEABLE",
              "slaString": "20 mins",
              "lastMileTravelString": "1.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-25 04:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                },
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹249",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=767745",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "358341",
            "name": "Truffles",
            "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
            "locality": "Doddathogur Village",
            "areaName": "Electronic City",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "American",
              "Beverages",
              "Continental",
              "Desserts",
              "Italian"
            ],
            "avgRating": 4.5,
            "parentId": "218065",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 18,
              "lastMileTravel": 0.5,
              "serviceability": "SERVICEABLE",
              "slaString": "18 mins",
              "lastMileTravelString": "0.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-24 23:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                },
                "imageBased": {
                  
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=358341",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          }
        },
        {
          "info": {
            "id": "86358",
            "name": "Meghana Foods",
            "cloudinaryImageId": "l7xlzfeh626mnmhecyy4",
            "locality": "Doddathoguru Village",
            "areaName": "Electronic City",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Biryani",
              "Andhra",
              "South Indian",
              "North Indian",
              "Chinese",
              "Seafood"
            ],
            "avgRating": 4.4,
            "parentId": "635",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 12,
              "lastMileTravel": 0.4,
              "serviceability": "SERVICEABLE",
              "slaString": "12 mins",
              "lastMileTravelString": "0.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-12-25 01:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                },
                "imageBased": {
                  
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
        }
        },
];
        

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
                {/* <RestaurantCard2 resName="Meghana Foods" cuisine="Biryani, North Indian, Asian" rating="4.4 stars" Deliverytime="38 minutes"/> */}
                 {
                    resObj.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                 }
            </div>
        </div>
    );
};
const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <BodyComponent />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);   //react element rendering
root.render(<AppLayout  />); // renders component

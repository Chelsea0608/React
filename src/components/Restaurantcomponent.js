import Restaurantcard, {restaurantcardPromoted} from "./Restaurantcard"; 
import Shimmer from "./Shimmer";
import resdata from "../utils/data";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import UserContext from "../utils/UserContext";

const Restaurantcomponent = () => {
   
    const [resDataState, setresDataState] = useState([]);
    const [filteredresDataState, setfilteredresDataState] = useState([]);
    const [searchText, setsearchText] = useState("");

    const RestaurantcardPromoted = restaurantcardPromoted(Restaurantcard);

    const {loggedInUser,setuserName} = useContext(UserContext);

    
// Empty dependency array means the useEffect is called only first time the component is rendered
//No dependency array mean the useEffect is called every time the component is rendered
// value inside a dependency array means the useEffect is called every time the state variable changes e.g. [filteredresDataState] mean 
//the useeffect is called when the value of "filteredresDataState" is changed
    useEffect(()=>{
      fetchData();
    },[])

    
    const fetchData = async () =>{
      // const data = await fetch("");
      // const json = await data.json();
      const json1 = [

      {
          "info": {
              "id": "24463",
              "name": "Domino's Pizza",
              "isPromoted":false,
              "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
              "locality": "Near Sanagam Theatre",
              "areaName": "Kurla West",
              "costForTwo": "₹400 for two",
              "cuisines": [
                  "Pizzas",
                  "Italian",
                  "Pastas",
                  "Desserts"
              ],
              "avgRating": 3.7,
              "parentId": "2456",
              "avgRatingString": "3.7",
              "totalRatingsString": "10K+",
              "sla": {
                  "deliveryTime": 30,
                  "lastMileTravel": 1.3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "30 mins",
                  "lastMileTravelString": "1.3 km",
                  "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                  "nextCloseTime": "2024-04-07 02:55:00",
                  "opened": true
              },
              "badges": {
                  "imageBadges": [
                      {
                          "imageId": "Rxawards/_CATEGORY-Pizza.png",
                          "description": "Delivery!"
                      }
                  ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                  "entityBadges": {
                      "imageBased": {
                          "badgeObject": [
                              {
                                  "attributes": {
                                      "description": "Delivery!",
                                      "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                  }
                              }
                          ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
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
                      "lottie": {},
                      "video": {}
                  }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
          },
          "analytics": {},
          "cta": {
              "link": "https://www.swiggy.com/restaurants/dominos-pizza-near-sanagam-theatre-kurla-west-mumbai-24463",
              "type": "WEBLINK"
          }
      },
      {
          "info": {
              "id": "81626",
              "name": "NIC Ice Creams",
              "isPromoted":true,
              "cloudinaryImageId": "18d8b8fb6bac8063a6fa886e20148110",
              "locality": "Mahmad Ummer Chawl",
              "areaName": "Siddharath Nagar",
              "costForTwo": "₹120 for two",
              "cuisines": [
                  "Ice Cream",
                  "Desserts"
              ],
              "avgRating": 4.7,
              "veg": true,
              "parentId": "6249",
              "avgRatingString": "4.7",
              "totalRatingsString": "5K+",
              "sla": {
                  "deliveryTime": 33,
                  "lastMileTravel": 4.6,
                  "serviceability": "SERVICEABLE",
                  "slaString": "30-35 mins",
                  "lastMileTravelString": "4.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                  "nextCloseTime": "2024-04-06 23:59:00",
                  "opened": true
              },
              "badges": {
                  "imageBadges": [
                      {
                          "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                          "description": "Delivery!"
                      }
                  ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                  "entityBadges": {
                      "imageBased": {
                          "badgeObject": [
                              {
                                  "attributes": {
                                      "description": "Delivery!",
                                      "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                                  }
                              }
                          ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
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
                      "lottie": {},
                      "video": {}
                  }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
          },
          "analytics": {},
          "cta": {
              "link": "https://www.swiggy.com/restaurants/nic-ice-creams-mahmad-ummer-chawl-siddharath-nagar-mumbai-81626",
              "type": "WEBLINK"
          }
      },
      {
          "info": {
              "id": "391816",
              "isPromoted":true,
              "name": "Louis Burger",
              "cloudinaryImageId": "19d3d352cc815b9d88b22617b41fa97b",
              "locality": "Trade Centre",
              "areaName": "Santacruz Bandra east",
              "costForTwo": "₹600 for two",
              "cuisines": [
                  "Burgers",
                  "American",
                  "Fast Food"
              ],
              "avgRating": 4.4,
              "parentId": "22485",
              "avgRatingString": "4.4",
              "totalRatingsString": "1K+",
              "sla": {
                  "deliveryTime": 30,
                  "lastMileTravel": 2.1,
                  "serviceability": "SERVICEABLE",
                  "slaString": "30-35 mins",
                  "lastMileTravelString": "2.1 km",
                  "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                  "nextCloseTime": "2024-04-07 04:00:00",
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
                      "imageBased": {
                          "badgeObject": [
                              {
                                  "attributes": {
                                      "description": "Gourmet",
                                      "imageId": "newg.png"
                                  }
                              }
                          ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
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
                      "lottie": {},
                      "video": {}
                  }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
          },
          "analytics": {},
          "cta": {
              "link": "https://www.swiggy.com/restaurants/louis-burger-trade-centre-santacruz-bandra-east-mumbai-391816",
              "type": "WEBLINK"
          }
      },
      {
          "info": {
              "isPromoted":false,
              "id": "11239",
              "name": "Thambbi",
              "cloudinaryImageId": "t6av3q7weumzdozcmowp",
              "locality": "Opposite SBI Bank",
              "areaName": "Kurla West",
              "costForTwo": "₹400 for two",
              "cuisines": [
                  "South Indian",
                  "Punjabi",
                  "Snacks",
                  "Thalis"
              ],
              "avgRating": 4.5,
              "veg": true,
              "parentId": "2527",
              "avgRatingString": "4.5",
              "totalRatingsString": "10K+",
              "sla": {
                  "deliveryTime": 29,
                  "lastMileTravel": 1.7,
                  "serviceability": "SERVICEABLE",
                  "slaString": "25-30 mins",
                  "lastMileTravelString": "1.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                  "nextCloseTime": "2024-04-06 23:00:00",
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
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {
                          "badgeObject": [
                              {
                                  "attributes": {
                                      "description": "",
                                      "fontColor": "#7E808C",
                                      "iconId": "guiltfree/GF_Logo_android_3x",
                                      "shortDescription": "options available"
                                  }
                              }
                          ]
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
                      "lottie": {},
                      "video": {}
                  }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
          },
          "analytics": {},
          "cta": {
              "link": "https://www.swiggy.com/restaurants/thambbi-opposite-sbi-bank-kurla-west-mumbai-11239",
              "type": "WEBLINK"
          }
      },
      {
          "info": {
              "id": "236162",
              "isPromoted":true,
              "name": "Theobroma",
              "cloudinaryImageId": "63dd75492c47fcec191132b8eb299ea5",
              "locality": "Lal Bahadur Shastri Rd",
              "areaName": "Kurla",
              "costForTwo": "₹400 for two",
              "cuisines": [
                  "Bakery",
                  "Desserts"
              ],
              "avgRating": 4.4,
              "parentId": "1040",
              "avgRatingString": "4.4",
              "totalRatingsString": "1K+",
              "sla": {
                  "deliveryTime": 42,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "40-45 mins",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                  "nextCloseTime": "2024-04-06 23:59:00",
                  "opened": true
              },
              "badges": {
                  "imageBadges": [
                      {
                          "imageId": "Rxawards/_CATEGORY-Desserts.png",
                          "description": "Delivery!"
                      }
                  ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                  "entityBadges": {
                      "imageBased": {
                          "badgeObject": [
                              {
                                  "attributes": {
                                      "description": "Delivery!",
                                      "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                  }
                              }
                          ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
                  }
              },
              "aggregatedDiscountInfoV3": {
                  "header": "15% OFF",
                  "discountTag": "FLAT DEAL"
              },
              "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                  }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
          },
          "analytics": {},
          "cta": {
              "link": "https://www.swiggy.com/restaurants/theobroma-lal-bahadur-shastri-rd-kurla-mumbai-236162",
              "type": "WEBLINK"
          }
      },
      {
          "info": {
              "id": "30889",
              "isPromoted":true,
              "name": "Natural Ice Cream",
              "cloudinaryImageId": "eibssqccoqhjgorsglso",
              "locality": "Pheonix Market City",
              "areaName": "Saki Naka",
              "costForTwo": "₹150 for two",
              "cuisines": [
                  "Ice Cream",
                  "Desserts"
              ],
              "avgRating": 4.6,
              "veg": true,
              "parentId": "2093",
              "avgRatingString": "4.6",
              "totalRatingsString": "1K+",
              "sla": {
                  "deliveryTime": 39,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "35-40 mins",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                  "nextCloseTime": "2024-04-06 23:30:00",
                  "opened": true
              },
              "badges": {
                  "imageBadges": [
                      {
                          "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                          "description": "Delivery!"
                      }
                  ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                  "entityBadges": {
                      "imageBased": {
                          "badgeObject": [
                              {
                                  "attributes": {
                                      "description": "Delivery!",
                                      "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                                  }
                              }
                          ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
                  }
              },
              "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "subHeader": "UPTO ₹100"
              },
              "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                  }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
          },
          "analytics": {},
          "cta": {
              "link": "https://www.swiggy.com/restaurants/natural-ice-cream-pheonix-market-city-saki-naka-mumbai-30889",
              "type": "WEBLINK"
          }
      },
      {
          "info": {
              "id": "328878",
              "isPromoted":true,
              "name": "Charcoal Eats - Biryani & Beyond",
              "cloudinaryImageId": "9c18db360f5bee01412a495b1a67372d",
              "locality": "Manipada Road",
              "areaName": "SANTACRUZ EAST, Kalina",
              "costForTwo": "₹499 for two",
              "cuisines": [
                  "Biryani",
                  "Kebabs",
                  "North Indian",
                  "Mughlai"
              ],
              "avgRating": 4.4,
              "parentId": "5338",
              "avgRatingString": "4.4",
              "totalRatingsString": "1K+",
              "sla": {
                  "deliveryTime": 30,
                  "lastMileTravel": 2.8,
                  "serviceability": "SERVICEABLE",
                  "slaString": "25-30 mins",
                  "lastMileTravelString": "2.8 km",
                  "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                  "nextCloseTime": "2024-04-06 23:45:00",
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
                      "imageBased": {},
                      "textBased": {},
                      "textExtendedBadges": {
                          "badgeObject": [
                              {
                                  "attributes": {
                                      "description": "",
                                      "fontColor": "#7E808C",
                                      "iconId": "guiltfree/GF_Logo_android_3x",
                                      "shortDescription": "options available"
                                  }
                              }
                          ]
                      }
                  }
              },
              "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "subHeader": "UPTO ₹100"
              },
              "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                  }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
          },
          "analytics": {},
          "cta": {
              "link": "https://www.swiggy.com/restaurants/charcoal-eats-biryani-and-beyond-manipada-road-santacruz-east-kalina-mumbai-328878",
              "type": "WEBLINK"
          }
      },
      {
          "info": {
              "id": "202836",
              "isPromoted":false,
              "name": "Hangout Cakes & More",
              "cloudinaryImageId": "377369343dcd983007e9156e8aa8f9da",
              "locality": "CST Road",
              "areaName": "Santacruz East",
              "costForTwo": "₹150 for two",
              "cuisines": [
                  "Bakery"
              ],
              "avgRating": 4.4,
              "veg": true,
              "parentId": "4508",
              "avgRatingString": "4.4",
              "totalRatingsString": "1K+",
              "sla": {
                  "deliveryTime": 20,
                  "lastMileTravel": 2.4,
                  "serviceability": "SERVICEABLE",
                  "slaString": "20-25 mins",
                  "lastMileTravelString": "2.4 km",
                  "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                  "nextCloseTime": "2024-04-06 23:59:00",
                  "opened": true
              },
              "badges": {
                  "imageBadges": [
                      {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                      }
                  ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                  "entityBadges": {
                      "imageBased": {
                          "badgeObject": [
                              {
                                  "attributes": {
                                      "description": "pureveg",
                                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                                  }
                              }
                          ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
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
                      "lottie": {},
                      "video": {}
                  }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
          },
          "analytics": {},
          "cta": {
              "link": "https://www.swiggy.com/restaurants/hangout-cakes-and-more-cst-road-santacruz-east-mumbai-202836",
              "type": "WEBLINK"
          }
      },
      {
          "info": {
              "id": "86155",
              "isPromoted":true,
              "name": "Kitchen Garden by Suzette",
              "cloudinaryImageId": "bttsvynpr8x77z6hu9b1",
              "locality": "Bandra East",
              "areaName": "Scruz Bandra East",
              "costForTwo": "₹1100 for two",
              "cuisines": [
                  "Salads"
              ],
              "avgRating": 4.6,
              "parentId": "5477",
              "avgRatingString": "4.6",
              "totalRatingsString": "1K+",
              "sla": {
                  "deliveryTime": 33,
                  "lastMileTravel": 2.8,
                  "serviceability": "SERVICEABLE",
                  "slaString": "30-35 mins",
                  "lastMileTravelString": "2.8 km",
                  "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                  "nextCloseTime": "2024-04-06 16:20:00",
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
              "aggregatedDiscountInfoV2": {},
              "type": "F",
              "badgesV2": {
                  "entityBadges": {
                      "imageBased": {
                          "badgeObject": [
                              {
                                  "attributes": {
                                      "description": "Gourmet",
                                      "imageId": "newg.png"
                                  }
                              }
                          ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
                  }
              },
              "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                  }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
          },
          "analytics": {},
          "cta": {
              "link": "https://www.swiggy.com/restaurants/kitchen-garden-by-suzette-bandra-east-scruz-bandra-east-mumbai-86155",
              "type": "WEBLINK"
          }
      },
      {
          "info": {
              "isPromoted":true,
              "id": "63961",
              "name": "Papacream - Icecreams & Popsicles",
              "cloudinaryImageId": "eeadaf18c6a5016701ba5467f70165eb",
              "locality": "Near fauziya hospital",
              "areaName": "Kurla",
              "costForTwo": "₹350 for two",
              "cuisines": [
                  "Ice Cream",
                  "Desserts",
                  "Rolls & Wraps",
                  "Healthy Food"
              ],
              "avgRating": 4.7,
              "veg": true,
              "parentId": "22414",
              "avgRatingString": "4.7",
              "totalRatingsString": "100+",
              "sla": {
                  "deliveryTime": 31,
                  "lastMileTravel": 1.8,
                  "serviceability": "SERVICEABLE",
                  "slaString": "30-35 mins",
                  "lastMileTravelString": "1.8 km",
                  "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                  "nextCloseTime": "2024-04-06 19:00:00",
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
                      "imageBased": {
                          "badgeObject": [
                              {
                                  "attributes": {
                                      "description": "Gourmet",
                                      "imageId": "newg.png"
                                  }
                              }
                          ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
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
                      "lottie": {},
                      "video": {}
                  }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
          },
          "analytics": {},
          "cta": {
              "link": "https://www.swiggy.com/restaurants/papacream-icecreams-and-popsicles-near-fauziya-hospital-kurla-mumbai-63961",
              "type": "WEBLINK"
          }
      },
      {
          "info": {
              "id": "32576",
              "isPromoted":false,
              "name": "Starbucks Coffee",
              "cloudinaryImageId": "2418209798927d733a50f5d2ebcc2aee",
              "locality": "Bandra Kurla Complex",
              "areaName": "Scruz Bandra East",
              "costForTwo": "₹400 for two",
              "cuisines": [
                  "Beverages",
                  "Cafe",
                  "Snacks",
                  "Desserts",
                  "Bakery",
                  "Ice Cream"
              ],
              "avgRating": 4.4,
              "parentId": "195515",
              "avgRatingString": "4.4",
              "totalRatingsString": "1K+",
              "sla": {
                  "deliveryTime": 28,
                  "lastMileTravel": 3.7,
                  "serviceability": "SERVICEABLE",
                  "slaString": "25-30 mins",
                  "lastMileTravelString": "3.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                  "nextCloseTime": "2024-04-06 23:59:00",
                  "opened": true
              },
              "badges": {
                  "imageBadges": [
                      {
                          "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                          "description": "Delivery!"
                      }
                  ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                  "entityBadges": {
                      "imageBased": {
                          "badgeObject": [
                              {
                                  "attributes": {
                                      "description": "Delivery!",
                                      "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                  }
                              }
                          ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
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
                      "lottie": {},
                      "video": {}
                  }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
          },
          "analytics": {},
          "cta": {
              "link": "https://www.swiggy.com/restaurants/starbucks-coffee-bandra-kurla-complex-scruz-bandra-east-mumbai-32576",
              "type": "WEBLINK"
          }
      },
      ]
      console.log(json1);
      setresDataState(json1);
      setfilteredresDataState(json1);
    }

    const isOnline = useIsOnline();
    if(isOnline===false) return(
        <h1>No internet Connection</h1>
    )



    return (resDataState.length===0)?  <Shimmer/> : (
      <div className='res-container'>
       <div className='maincard' >

       <button className='filter' onClick={
            ()=>{
              let resdata1 = filteredresDataState.filter((res)=>res.info.avgRating>=4)
              setfilteredresDataState(resdata1);
            }
          }>Filter</button>

          <input type = "text" className= "border border-black m-4" value={searchText} onChange={(e)=>{
              setsearchText(e.target.value)
          }}></input>

          <button className=''  onClick={()=>{
            const resTextSearch = resDataState.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setfilteredresDataState(resTextSearch);
          }}>Search</button>


          <input className=" border border-black m-4 " onChange={(e)=>{
            value = {loggedInUser}
            setuserName(e.target.value);
          }}>
          </input>

          
         
       </div>
        <div className="flex flex-wrap pointer rounded-md ">
          {
          filteredresDataState.map(
              (restaurant)=>   <Link key={restaurant?.info?.id} to={"/restaurant/"+restaurant?.info?.id}>{ (restaurant.info.isPromoted)? ( <RestaurantcardPromoted  resData={restaurant}   />)  :  (<Restaurantcard  resData={restaurant}/>) }</Link>  
          )
         }
        </div>
  
      </div>
    )
  }

export default Restaurantcomponent;
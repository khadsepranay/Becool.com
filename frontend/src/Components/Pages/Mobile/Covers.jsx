import "./Covers.css";
import { Link } from "react-router-dom";
import { ImStarFull } from "react-icons/im";
import { SlHeart } from "react-icons/sl";
import { ImHeart } from "react-icons/im";
import { TbCurrencyRupee } from "react-icons/tb";
import { useState } from "react";

const data = [
    // apple
    {
      comp: "Apple",
      cover: "Batman Rough",
      name: "iPhone 14 Pro Max",
      img_url:
        "https://images.bewakoof.com/t640/batman-rogue-premium-glass-cover-for-apple-iphone-14-pro-max-553056-1667982735-1.jpg",
      rating: 4.5,
      price: 499,
      ini_price: 1299,
      flag: true,
    },
    {
      comp: "Apple",
      cover: "Need my Space",
      name: "iPhone 14 Pro Max",
      img_url:
        "https://images.bewakoof.com/t640/need-my-space-premium-glass-cover-for-apple-iphone-14-pro-max-553072-1667982100-1.jpg",
      rating: 4.6,
      price: 499,
      ini_price: 1299,
      flag: false,
    },
    {
      comp: "Apple",
      cover: "Doodle space",
      name: "iPhone 14 Plus",
      img_url:
        "https://images.bewakoof.com/t640/doodle-space-premium-glass-cover-for-apple-iphone-14-plus-552994-1667982618-1.jpg",
      rating: 4.5,
      price: 499,
      ini_price: 1299,
      flag: false,
    },
    {
      comp: "Apple",
      cover: "Toxic friends",
      name: "iPhone 14 Plus",
      img_url:
        "https://images.bewakoof.com/t640/toxic-friends-premium-glass-cover-for-apple-iphone-14-plus-552999-1667982260-1.jpg",
      rating: 4.5,
      price: 499,
      ini_price: 1299,
      flag: false,
    },
    {
      comp: "Apple",
      cover: "Ready to Fight",
      name: "iPhone 13 Pro Max",
      img_url:
        "https://images.bewakoof.com/t640/zenitsu-premium-glass-cover-for-apple-iphone-13-pro-max-551391-1667365949-1.jpg",
      rating: 4.5,
      price: 499,
      ini_price: 1299,
      flag: false,
    },
    {
      comp: "Apple",
      cover: "Roaring Tiger",
      name: "iPhone 6",
      img_url:
        "https://images.bewakoof.com/t640/red-moon-tiger-printed-designer-hard-cover-for-iphone-6-impact-resistant-matte-finish-524624-1658838207-1.jpg",
      rating: 4.7,
      price: 499,
      ini_price: 1499,
      flag: false,
    },
    // samsung
    {
      comp: "Samsung",
      cover: "Wakanda Forever",
      name: "Samsung Note 10 Lite",
      img_url:
        "https://images.bewakoof.com/t640/wakanda-king-designer-hard-cover-for-samsung-galaxy-note-10-lite-553375-1668137718-1.jpg",
      rating: 4.6,
      price: 299,
      ini_price: 499,
      flag: false,
    },
    {
      comp: "Samsung",
      cover: "wolf Printed",
      name: "Samsung Galaxy Note 10 Plus",
      img_url:
        "https://images.bewakoof.com/t640/wolf-printed-premium-glass-cover-for-samsung-galaxy-note-10-plus-impact-resistant-matte-finish-531599-1659541000-1.jpg",
      rating: 4.4,
      price: 499,
      ini_price: 1499,
      flag: false,
    },
    {
      comp: "Samsung",
      cover: "Green Marble glass",
      name: "Samsung Galaxy Note 20",
      img_url:
        "https://images.bewakoof.com/t320/qrioh-green-marble-glass-case-for-samsung-galaxy-note-20-qrioh-unisex-samsung-galaxy-note-20-mobile-cover-373002-1624514975.jpg",
      rating: 4.3,
      price: 499,
      ini_price: 1499,
      flag: false,
    },
    {
      comp: "Samsung",
      cover: "disturb-typography",
      name: "Samsung Galaxy Note 9",
      img_url:
        "https://images.bewakoof.com/t640/disturb-typography-premium-glass-cover-for-samsung-galaxy-note-9-impact-resistant-matte-finish-531273-1659529043-1.jpg",
      rating: 4.8,
      price: 499,
      ini_price: 1499,
      flag: false,
    },
    {
      comp: "Samsung",
      cover: "worship-printed-premium-glass",
      name: "Samsung Galaxy s20 Ultra",
      img_url:
        "https://images.bewakoof.com/t640/worship-printed-premium-glass-cover-for-samsung-galaxy-s20-ultra-impact-resistant-matte-finish-531991-1659618925-1.jpg",
      rating: 4.8,
      price: 499,
      ini_price: 1499,
      flag: false,
    },
    {
      comp: "Samsung",
      cover: "anime-red-moon-premium-glass",
      name: "Samsung Galaxy s22 5G",
      img_url:
        "https://images.bewakoof.com/t640/anime-red-moon-premium-glass-case-for-samsung-galaxy-s22-5g-shock-proof-scratch-resistant-562520-1671089994-1.jpg",
      rating: 4.2,
      price: 499,
      ini_price: 1499,
      flag: false,
    },
    //   Realme
    {
      comp: "Realme",
      cover: "troublemakers-trio-designer-hard",
      name: "Realme 5 Pro",
      img_url:
        "https://images.bewakoof.com/t640/troublemakers-trio-designer-hard-cover-for-realme-5-pro-555683-1669217332-1.jpg",
      rating: 4.6,
      price: 299,
      ini_price: 499,
      flag: false,
    },
    {
      comp: "Realme",
      cover: "naruto-illustration-premium-glass",
      name: "Realme 9 Pro 5G",
      img_url:
        "https://images.bewakoof.com/t640/naruto-illustration-premium-glass-case-for-realme-9-pro-5g-shock-proof-scratch-resistant-562634-1671096538-1.jpg",
      rating: 4.7,
      price: 499,
      ini_price: 1499,
      flag: false,
    },
    {
      comp: "Realme",
      cover: "royal-bike-printed",
      name: "Realme 10 5G",
      img_url:
        "https://images.bewakoof.com/t640/royal-bike-printed-premium-glass-case-for-realme-10-5g-shock-proof-scratch-resistant-566287-1672389132-1.jpg",
      rating: 4.4,
      price: 499,
      ini_price: 1499,
      flag: false,
    },
    {
      comp: "Realme",
      cover: "mystic-aurora-printed",
      name: "Realme 7i",
      img_url:
        "https://images.bewakoof.com/t320/mystic-aurora-printed-premium-glass-cover-for-realme-7i-shock-proof-lightweight-486489-1649165853-1.jpg",
      rating: 4.3,
      price: 499,
      ini_price: 1499,
      flag: false,
    },
    {
      comp: "Realme",
      cover: "avengers-color-3d-designer",
      name: "Realme 6 Pro",
      img_url:
        "https://images.bewakoof.com/t320/avengers-color-3d-designer-cover-for-realme-6-pro-488911-1649852600-1.jpeg",
      rating: 4.5,
      price: 299,
      ini_price: 499,
      flag: false,
    },
    {
      comp: "Realme",
      cover: "coverspanda-black-premium-lions-roating-snakes-3d-printed",
      name: "Realme NAARZO 30A",
      img_url:
        "https://images.bewakoof.com/t320/coverspanda-black-premium-lions-roating-snakes-3d-printed-hard-back-case-for-realme-narzo30a-458736-1640172711-1.jpg",
      rating: 4.6,
      price: 299,
      ini_price: 499,
      flag: false,
    },
    //   OnePlus
    {
      comp: "OnePlus",
      cover: "true-genius-typography",
      name: "OnePlus 9RT",
      img_url:
        "https://images.bewakoof.com/t640/true-genius-typography-premium-glass-cover-for-oneplus-9rt-impact-resistant-matte-finish-526382-1659102520-1.jpg",
      rating: 4.6,
      price: 299,
      ini_price: 499,
      flag: false,
    },
    {
      comp: "OnePlus",
      cover: "immortal-demigod-designer-hard-cover-for-oneplus-9-pro",
      name: "OnePlus 9 PRO",
      img_url:
        "https://images.bewakoof.com/t640/immortal-demigod-designer-hard-cover-for-oneplus-9-pro-564423-1671623452-1.jpg",
      rating: 4.7,
      price: 499,
      ini_price: 1499,
      flag: false,
    },
    {
      comp: "OnePlus",
      cover: "weird-tom-jerry-designer-hard-cover",
      name: "OnePlus NORD",
      img_url:
        "https://images.bewakoof.com/t640/weird-tom-jerry-designer-hard-cover-for-oneplus-nord-558420-1670477239-1.jpg",
      rating: 4.4,
      price: 299,
      ini_price: 499,
      flag: false,
    },
    {
      comp: "OnePlus",
      cover: "blue-rough-pastel-premium-glass-cover",
      name: "OnePlus NORD N20",
      img_url:
        "https://images.bewakoof.com/t640/blue-rough-pastel-premium-glass-cover-for-oneplus-nord-n20-5g-impact-resistant-matte-finish-526461-1659101612-1.jpg",
      rating: 4.6,
      price: 499,
      ini_price: 1499,
      flag: false,
    },
    {
      comp: "OnePlus",
      cover: "anime-green-splash-premium-glass-case",
      name: "OnePlus NORD CE2 Lite",
      img_url:
        "https://images.bewakoof.com/t640/anime-green-splash-premium-glass-case-for-oneplus-nord-ce-2-lite-5g-561387-1670932056-1.jpg",
      rating: 4.3,
      price: 499,
      ini_price: 1499,
      flag: false,
    },
    {
      comp: "OnePlus",
      cover: "naruto-manga-designer-hard-cover-for-oneplus-7",
      name: "OnePlus 7",
      img_url:
        "https://images.bewakoof.com/t640/naruto-manga-designer-hard-cover-for-oneplus-7-565681-1672310649-1.jpg",
      rating: 4.3,
      price: 299,
      ini_price: 499,
      flag: false,
    },
    // Xiaome
    {
      comp: "Xiaome",
      cover: "king-life-printed-premium-glass-cover",
      name: "Xiame mi 12 PRO 5G",
      img_url:
        "https://images.bewakoof.com/t640/king-life-printed-premium-glass-cover-for-mi-12-pro-5g-impact-resistant-matte-finish-530313-1659444379-1.jpg",
      rating: 4.6,
      price: 499,
      ini_price: 1499,
      flag: false,
    },
    {
      comp: "Xiaome",
      cover: "jaake-puch-mere-baare-mein",
      name: "Xiame Redmi 9 power",
      img_url:
        "https://images.bewakoof.com/t320/jaake-puch-mere-baare-mein-xiaomi-redmi-9-power-mobile-cover-xiaomi-redmi-9-power-mobile-covers-345474-1620679391.jpg",
      rating: 4.7,
      price: 499,
      ini_price: 1499,
      flag: false,
    },
    {
      comp: "Xiaome",
      cover: "qrioh-xiaomi-mi-10-pro-space-doodles-glass-case",
      name: "Xiame Mi 10 PRO",
      img_url:
        "https://images.bewakoof.com/t320/qrioh-xiaomi-mi-10-pro-space-doodles-glass-case-qrioh-unisex-xiaomi-mi-10-pro-mobile-cover-379951-1631007504.jpg",
      rating: 4.5,
      price: 499,
      ini_price: 1499,
      flag: false,
    },
    {
      comp: "Xiaome",
      cover: "proto-mask-designer-hard-cover",
      name: "Xiame Mi 11 Ultra",
      img_url:
        "https://images.bewakoof.com/t640/proto-mask-designer-hard-cover-for-mi-11-ultra-550625-1667217149-1.jpg",
      rating: 4.7,
      price: 499,
      ini_price: 1499,
      flag: false,
    },
    {
      comp: "Xiaome",
      cover: "power-of-lord-printed-premium-glass-cover",
      name: "Xiaomi Mi 11 Lite NE 5G",
      img_url:
        "https://images.bewakoof.com/t640/power-of-lord-printed-premium-glass-cover-for-mi-11-lite-ne-5g-shock-proof-lightweight-554062-1667912464-1.jpg",
      rating: 4.9,
      price: 799,
      ini_price: 2499,
      flag: false,
    },
    {
      comp: "Xiaome",
      cover: "red-angry-lion-printed-premium-glass-cover",
      name: "Xiaomi Redmi K20",
      img_url:
        "https://images.bewakoof.com/t640/red-angry-lion-printed-premium-glass-cover-for-redmi-k20-impact-resistant-matte-finish-528568-1659380248-1.jpg",
      rating: 4.5,
      price: 399,
      ini_price: 999,
      flag: false,
    },
    // Vivo
    {
      comp: "Vivo",
      cover: "dark-grunge-printed-premium-glass-case",
      name: "Vivo Y20",
      img_url:
        "https://images.bewakoof.com/t640/dark-grunge-printed-premium-glass-case-for-vivo-y22-shock-proof-scratch-resistant-566068-1672386524-1.jpg",
      rating: 4.4,
      price: 399,
      ini_price: 499,
      flag: false,
    },
    {
      comp: "Vivo",
      cover: "chibi-iron-designer-hard-cover",
      name: "Vivo S1",
      img_url:
        "https://images.bewakoof.com/t640/chibi-iron-designer-hard-cover-for-vivo-s1-518422-1657787653-1.jpg",
      rating: 4.6,
      price: 499,
      ini_price: 1499,
      flag: false,
    },
    // Oppo
    {
      comp: "Oppo",
      cover: "struggling-panda-typography",
      name: "Oppo A74",
      img_url:
        "https://images.bewakoof.com/t640/struggling-panda-typography-premium-glass-cover-for-oppo-a74-impact-resistant-matte-finish-527167-1659101605-1.jpg",
      rating: 4.6,
      price: 499,
      ini_price: 1499,
      flag: false,
    },
    {
      comp: "Oppo",
      cover: "kitty-in-pocket-printed-premium-glass-cover-for-oppo-a57-4g",
      name: "Oppo A57 4G",
      img_url:
        "https://images.bewakoof.com/t640/kitty-in-pocket-printed-premium-glass-cover-for-oppo-a57-4g-shock-proof-scratch-resistant-543924-1663841304-1.jpg",
      rating: 4.7,
      price: 499,
      ini_price: 1499,
      flag: false,
    },
    // Huawei
    {
      comp: "Huawei",
      cover: "japanese-art-printed-premium-glass-cover",
      name: "Huawei P40 PRO",
      img_url:
        "https://images.bewakoof.com/t640/japanese-art-printed-premium-glass-cover-for-huawei-p40-pro-impact-resistant-matte-finish-534558-1660054853-1.jpg",
      rating: 4.4,
      price: 199,
      ini_price: 499,
      flag: false,
    },
    {
      comp: "Huawei",
      cover: "true-genius-typography-premium-glass-cover",
      name: "Huawei P30 PRO",
      img_url:
        "https://images.bewakoof.com/t640/true-genius-typography-premium-glass-cover-for-huawei-p30-pro-impact-resistant-matte-finish-534520-1660055297-1.jpg",
      rating: 4.6,
      price: 399,
      ini_price: 699,
      flag: false,
    },
    // Moto
    {
      comp: "Moto",
      cover: "apni-hatti-toh-sabki-fatti-moto-g7-power-mobile-cover",
      name: "Moto G7 Power",
      img_url:
        "https://images.bewakoof.com/t320/apni-hatti-toh-sabki-fatti-moto-g7-power-mobile-cover-moto-g7-power-mobile-covers-244464-1571315693.jpg",
      rating: 4.6,
      price: 399,
      ini_price: 699,
      flag: false,
    },
    {
      comp: "Moto",
      cover: "bulati-hai-books-moto-g7-power-mobile-cover",
      name: "Moto G7 Power",
      img_url:
        "https://images.bewakoof.com/t320/bulati-hai-books-moto-g7-power-mobile-cover-moto-g7-power-mobile-covers-271812-1582867384.jpg",
      rating: 4.5,
      price: 299,
      ini_price: 799,
      flag: false,
    },
  ];

const Covers = () => {
  const [sortData,setSortDat]=useState(data)
  const addToFav = () => {
    console.log("yes");
  };

  const toCoverPage = () => {
    console.log("redirect");
  };

  

  return (
    <div className="main_div">
      <h1>Mobile Covers ({data.length})</h1>
      <div className="main_cov_div">
        {sortData&&sortData.map((ele, ind) => {
          return (
            <div key={ind} className="cov_div">
              <div onClick={toCoverPage} className="cov_image">
                  <img src={ele.img_url} alt="cover image" />
              </div>
              <div className="cov_info">
                <h4>{ele.comp}</h4>
                <div className="name_heart">
                  <h4>{ele.name}</h4>
                  {ele.flag ? (
                    <ImHeart
                      onClick={addToFav}
                      fontSize={"20px"}
                      color={"red"}
                    />
                  ) : (
                    <SlHeart onClick={addToFav} fontSize={"20px"} />
                  )}
                </div>
                <p style={{ fontSize: "14px" }}>{ele.cover}</p>
                <p>
                  <ImStarFull color={"yellow"} /> {ele.rating}
                </p>
                <b>
                  <TbCurrencyRupee />
                  {ele.price}
                </b>
                <p style={{ textDecoration: "line-through", color: "grey" }}>
                  <TbCurrencyRupee />
                  {ele.ini_price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Covers;

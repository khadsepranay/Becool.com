import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./MobCovOpt.css";

const MobCovOpt = () => {
  const navigate = useNavigate();
  const clickRef = useRef();

  const toCoverPage = (e) => {
    const company=e.target.innerText
    console.log(company);
    localStorage.setItem("cover_company",JSON.stringify(company))
    navigate("/mobiles/covers");
  };

  const toCoverPage1 = (e) => {
    const option = clickRef.current.value;
    console.log(option);
    if (option) {
      localStorage.setItem("cover_company",JSON.stringify(option))
      navigate("/mobiles/covers");
    }
    else{
      alert("Please select brand or click on any popular brand")
    }
  };

  return (
    <>
      <div className="optDiv">
        <h1>Mobile covers And Cases</h1>
        <div className="opt_img">
          <div className="opt">
            <div className="inputsDiv">
              <select name="Select" ref={clickRef}>
                <option value="">Select Brand</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Realme">Realme</option>
                <option value="OnePlus">OnePlus</option>
                <option value="Xiaome">Xiaome</option>
              </select>
              <input type="text" placeholder="Select Model" />
              <button onClick={(e) => toCoverPage1(e)}>Search</button>
            </div>
            <div className="popular">
              <p>POPULAR</p>
              <div className="pop_opt">
                <p onClick={(e) => toCoverPage(e)}>Aple</p>
                <p onClick={(e) => toCoverPage(e)}>Samsung</p>
                <p onClick={(e) => toCoverPage(e)}>Realme</p>
                <p onClick={(e) => toCoverPage(e)}>OnePlus</p>
                <p onClick={(e) => toCoverPage(e)}>Xiaome</p>
                <p onClick={(e) => toCoverPage(e)}>Vivo</p>
              </div>
              <br />
              <p>OTHER BRANDS</p>
              <div className="pop_opt">
                <p onClick={(e) => toCoverPage(e)}>Oppo</p>
                <p onClick={(e) => toCoverPage(e)}>Huawei</p>
                <p onClick={(e) => toCoverPage(e)}>Moto</p>
              </div>
            </div>
          </div>
          <div className="image">
            <img
              src="https://images.bewakoof.com/nav_menu/landing-page-mobile-box-1558174497.jpg"
              alt="mbole case image"
            />
          </div>
        </div>
      </div>
      <div className="extra_info">
        <h4>Mobile Cases & Back Covers</h4>
        <b>MOBILE COVERS & CASES BY BEWAKOOF.COM</b>
        <p>
          Bewakoof.com offers an exclusive range of stylish and trendy phone
          covers and cases. Bewakoof has a wide variety of designs to choose
          from, so you can find the perfect cover or case to show off your
          personality. All of our covers and cases are made of high-quality
          materials that offer protection to your phone. So whether you're
          looking for a funky cover to show off your personality or a case to
          protect your phone from scratches and bumps, Bewakoof.com has you
          covered!
        </p>
        <b>MOBILE COVERS ON BEWAKOOF.COM</b>
        <p>
          Bewakoof.com is an online store that offers a wide range of phone
          cases. Bewakoof was founded in 2012 with the aim of providing
          high-quality and stylish mobile accessories at an affordable price.
          Bewakoof has since grown to become one of the leading online retailers
          for mobile covers and cases in India. Bewakoof offers a wide variety
          of designs and colours to choose from, so you can find the perfect
          cover or case for your phone.
        </p>
        <b>WHY CHOOSE BEWAKOOF FOR YOUR PHONE COVERS OR CASES?</b>
        <p>
          There are several reasons why you should choose Bewakoof for your
          phone case needs. Firstly, the company offers a wide range of designs
          and colours to choose from. Secondly, Bewakoof covers and cases are
          made from high-quality materials, so you can be sure your phone is
          well protected. And finally, Bewakoof offers great value for money you
          won't find better quality back covers and cases at a better price
          anywhere else.
        </p>
      </div>
      <div className="extra_info">
        <h3>Frequently asked questions</h3>
        <b>IS A BACK COVER NECESSARY FOR THE PHONE?</b>
        <p>
          Yes, the back covers are essential for the phones as it protects them
          from accidents; it will undoubtedly save the smartphone. Apart from
          safeguarding the phone, the excellent appearances of the covers also
          make it much more impressive, and you can opt for a different look
          according to the dress code or daily basis.
        </p>
        <b>BEST SITE TO BUY MOBILE COVERS ONLINE?</b>
        <p>
          Bewakoof is the precise place for everyone to buy phone covers online
          as it has mobile covers of different models and has them in various
          shades, colors, designs, patterns, etc at affordable rates. This makes
          it more attractive for buyers. Explore now.
        </p>
        <b>
          WHICH KIND OF COVER IS BEST FOR MOBILE? OR WHICH MATERIAL IS BEST FOR
          A MOBILE COVER?
        </b>
        <p>
          For optimal protection of your phone, it is important to buy a cover
          made of hard plastic, PU material, or silicone. Phone cases made from
          these materials protect your device from damage caused by impact,
          regular wear and tear, accidental drops, and more.
        </p>
      </div>
    </>
  );
};

export default MobCovOpt;
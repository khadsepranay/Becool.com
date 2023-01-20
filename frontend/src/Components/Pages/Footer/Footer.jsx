
import React from "react";
import Footer2 from "./Footer2";
import styles from "./Footer.module.css";
// import scrn from "../../Assets/scr.png";
import { RiFacebookBoxLine, RiInstagramLine } from "react-icons/ri";
import { BsApple, BsSnapchat, BsCash } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { ImPinterest2 } from "react-icons/im";
import { GiReturnArrow } from "react-icons/gi";
import { Box,Flex, Link,Text} from '@chakra-ui/react'
import {BsGithub,BsLinkedin} from "react-icons/bs"



const Footer = () => {

  return (

    <div className={styles.Footer}>
      <div className={styles.container}>
        <div>
          <ul>
            <li>CUSTOMER SERVICE</li>
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>Return Order</li>
            <li>Cancel Order</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>COMPANY</li>
            <li>About Us</li>
            <li>We're Hiring</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Blog</li>
          </ul>
         </div>
        <div>

          <Box>
            <Text color={"Yellow"}>CONNECT WITH US</Text>
          <Flex mt={3} gap={5} ml={50}>
          <Link href='https://www.facebook.com/bewakoofcom' isExternal>
          <RiFacebookBoxLine fontSize="2em" color="white" />
          </Link>
          <Link href='https://www.instagram.com/bewakoofofficial/' isExternal>
          <RiInstagramLine fontSize="2em" color="white"/>
          </Link> 
          </Flex> 

          <Flex mt={3} gap={5} ml={50}>
          <Link href='https://twitter.com/bewakoof' isExternal>
          <FiTwitter fontSize="2em" color="white"/>
          </Link>
          <Link href='https://www.pinterest.com/bewakoof/' isExternal>
          <ImPinterest2 fontSize="2em" color="white"/>
          </Link> 
          </Flex> 
          </Box>

        </div>  
        <div className={styles.Formm}>
          <ul>
            <li>KEEP UP TO DATE</li>
            <div className={styles.form}>
              <input
                type="text"
                className={styles.input}
                placeholder={"Enter Your Email"}
              />
              <button className={styles.btn}>Subsribe</button>
            </div>
          </ul>
        </div>
      </div>
      <div className={styles.container2}>
        <div>
          <p>
            {" "}
            <GiReturnArrow style={{ fontSize: "18px", marginRight: "20px" }} />
            15 Days return policy*
          </p>
          <p>
            <BsCash style={{ fontSize: "18px", marginRight: "20px" }} /> Cash on
            delivery*
          </p>
        </div>
        <div className={styles.Playstore}>
          <li>DOWNLOAD THE APP</li>
          <div className={styles.flex}>
            <img
              src="https://images.bewakoof.com/web/app_android_v1.png"
              alt=""
            />
            <img src="https://images.bewakoof.com/web/app_ios_v1.png" alt="" />
          </div>
        </div>
        <div className={styles.Links}>
          <li
            style={{ color: "#fdd835", fontSize: "16px", marginBottom: "10px" }}
          >
            100% SECURE PAYMENT
          </li>
         
        </div>
        <div className={styles.Noneee}></div>
      </div>


      
      <Footer2 />
    </div>
  );
};

export default Footer;
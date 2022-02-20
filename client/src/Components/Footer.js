import React from "react";
import {
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
  TiSocialDribbbleCircular,
  TiSocialPinterestCircular,
  TiSocialYoutubeCircular,
} from "react-icons/ti";

import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { HiPhone, HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="relative w-full  bg-[#f7f7f7]">
      <div className="grid grid-cols-3 items-start px-20 py-12">
        <div className="flex flex-col gap-y-5 px-10">
          <h2 className="text-3xl font-bold antialiased tracking-widest	">
            AnxelSchiffman
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt lorem consectetur tempor incididunt enim
            ad minim simply random text. It has pieceveniam.
          </p>
          <ul className="flex flex-row justify-start items-center">
            <li>
              <a>
                <TiSocialFacebookCircular
                  size={30}
                  className="cursor-pointer hover:scale-150"
                />
              </a>
            </li>
            <li>
              <a>
                <TiSocialInstagramCircular
                  size={30}
                  className="cursor-pointer hover:scale-150"
                />
              </a>
            </li>
            <li>
              <a>
                <TiSocialDribbbleCircular
                  size={30}
                  className="cursor-pointer hover:scale-150"
                />
              </a>
            </li>
            <li>
              <a>
                <TiSocialPinterestCircular
                  size={30}
                  className="cursor-pointer hover:scale-150"
                />
              </a>
            </li>
            <li>
              <a>
                <TiSocialYoutubeCircular
                  size={30}
                  className="cursor-pointer hover:scale-150"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5 border-r border-l border-black px-10">
          <h2 className="font-bold text-2xl tracking-wide">INFORMATION</h2>
          <ul className="flex flex-col gap-y-2 justify-center items-center">
            <li>
              <a className="hover:text-red-600 hover:font-bold">About Us</a>
            </li>
            <li>
              <a className="hover:text-red-600 hover:font-bold">
                Delivery Information
              </a>
            </li>
            <li>
              <a className="hover:text-red-600 hover:font-bold">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-red-600 hover:font-bold">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5   border-black px-10">
          <h2 className="font-bold text-2xl tracking-wide">CONTACT US</h2>
          <ul className="flex flex-col gap-y-2">
            <li className="flex flex-row justify-start items-center gap-x-2">
              <GoLocation size={20} /> Location:
              <span>Baltimore Maryland,USA</span>
            </li>
            <li className="flex flex-row justify-start items-center gap-x-2">
              <HiPhone size={20} /> Phone Number: 01-234-567-89
            </li>
            <li className="flex flex-row justify-start items-center gap-x-2">
              <HiOutlineMail size={20} /> Email: info@AnxelSchiffman.com
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-x-5 items-center border-t w-full px-20 py-4 border-black">
        <p>© Mehmet Hanifi Isik 2022 . All rights reserved</p>
        <img src={require("../Images/payment.png")} alt="payment" />
      </div>
    </div>
  );
};

export default Footer;

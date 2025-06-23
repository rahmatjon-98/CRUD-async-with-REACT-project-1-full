import { useState } from "react";
import "./App.css";

import logo from "./assets/Frame.png";
import img from "./assets/Rectangle.png";
import img1 from "./assets/Rectangle (1).png";
import img2 from "./assets/Rectangle (2).png";
import img3 from "./assets/Rectangle (3).png";
import img0 from "./assets/image 1.png";

import img4 from "./assets/Rectangle (4).png";
import img5 from "./assets/Rectangle (5).png";
import img6 from "./assets/Rectangle (6).png";
import img7 from "./assets/Rectangle (7).png";
import img8 from "./assets/Rectangle (8).png";
import img9 from "./assets/Rectangle (9).png";
import img10 from "./assets/Rectangle (10).png";
import img11 from "./assets/Rectangle (11).png";
import img12 from "./assets/Rectangle (12).png";
import img13 from "./assets/Rectangle (13).png";
import img14 from "./assets/Rectangle (14).png";
import img15 from "./assets/Rectangle (15).png";
import img16 from "./assets/Rectangle (16).png";
import img17 from "./assets/Rectangle (17).png";
import img18 from "./assets/Rectangle (18).png";
import img19 from "./assets/Rectangle (19).png";
import img20 from "./assets/Rectangle (20).png";
import img21 from "./assets/Rectangle (21).png";
import img22 from "./assets/Rectangle (22).png";
import img23 from "./assets/Rectangle (23).png";
import img24 from "./assets/Rectangle (24).png";
import img25 from "./assets/Rectangle (25).png";
import img26 from "./assets/Rectangle (26).png";
import img27 from "./assets/Rectangle (27).png";

import img28 from "./assets/Rectangle (28).png";
import Crud from "./components/crud";

let arrImg = [
  { img: img4 },
  { img: img5 },
  { img: img6 },
  { img: img7 },
  { img: img8 },
  { img: img9 },
  { img: img10 },
  { img: img11 },
  { img: img12 },
  { img: img13 },
  { img: img14 },
  { img: img15 },
  { img: img16 },
  { img: img17 },
  { img: img18 },
  { img: img19 },
  { img: img20 },
  { img: img21 },
  { img: img22 },
  { img: img23 },
  { img: img24 },
  { img: img25 },
  { img: img26 },
  { img: img27 },
];

function App() {
  
  return (
    <div>
      <header className="flex items-center justify-between px-2.5 lg:px-20 py-5">
        <div className="flex items-center gap-5">
          <a href="">Shop</a>
          <a href="">Explore</a>
        </div>

        <img className="lg:w-auto w-1/3" src={logo} alt="" />

        <a href="">My Cart</a>
      </header>

      <section>
        <div className="absolute text-center m-auto text-white inset-0 mt-20  lg:mt-60">
          <p className="text-[24px] lg:text-[43px]">The Desk Shelf System</p>
          <p className="text-[15px] pb-1 lg:pb-5">
            Available in Walnut or Maple
          </p>
          <a className="text-[13px]">LEARN MORE</a>
        </div>
        <img src={img} alt="" />
      </section>

      <section>
        <div className="text-center my-5 lg:my-14">
          <p className="text-[24px] lg:text-[43px]">Design Inspires</p>
          <p className="text-[15px]  pb-1 lg:pb-5">
            Build your dream workspace, so you can get your best work done.
          </p>
          <a className="text-[13px]">GET STARTED</a>
        </div>
      </section>

      <section className="flex justify-evenly py-5">
        <div className="w-[45%] text-center">
          <img src={img1} alt="" />
          <p className="pt-5 pb-2.5 text-[27px] font-semibold">Laptop Stands</p>
          <a className="text-[13px]">LEARN MORE</a>
        </div>
        <div className="w-[45%] text-center">
          <img src={img2} alt="" />
          <p className="pt-5 pb-2.5 text-[27px] font-semibold">Desk Pads</p>
          <a className="text-[13px]">LEARN MORE</a>
        </div>
      </section>

      {/* //crud */}
      <section className="py-2.5 lg:py-10">
        <p className="text-center text-[33px]">Featured Products</p>
        <p className="text-center text-[15px]  pb-10   text-[#A0A0A0]">
          See What’s Trending Right Now
        </p>

        <Crud />
      </section>

      <section className="my-2.5 lg:my-10">
        <div className="absolute text-center m-auto text-white inset-0 top-[730px] lg:top-[2200px] z-10">
          <p className="text-[24px] lg:text-[43px]">Home Office Inspiration</p>
          <p className="text-[15px] pb-1 lg:pb-5">
            Working from home can be a challenge—see some creative solutions to
            get it just right.
          </p>
          <a className="text-[13px]">LEARN MORE</a>
        </div>
        <img src={img3} alt="" />
      </section>

      <section className="w-4/5 mx-auto my-10 lg:my-20">
        <p className="text-center text-[33px]">Made The Hard Way</p>
        <p className="text-center text-[15px]  pb-5 text-[#A0A0A0] lg:px-42">
          Our signature craftsmanship has been honed over a decade of
          manufacturing innovation here in Portland, Oregon. We combine the
          skills of our small in-house team with the collective strength of
          collaborators throughout the US to deliver quality products worth
          investing in.
        </p>
        <img src={img0} alt="" />
      </section>

      <section className="w-[95%] mx-auto my-10 lg:my-20">
        <p className="text-center text-[33px]">Make Work Meaningful</p>
        <p className="text-center text-[15px]  pb-5 text-[#A0A0A0] w-5/6 lg:w-2/4 m-auto">
          We're here because we believe that your work deserves the best. A team
          that loves working together is the magic that makes it all happen.
        </p>
        <div className="flex flex-wrap justify-between gap-6 my-2.5 lg:my-10">
          {arrImg.map((e, index) => (
            <div key={index} className="w-[15%]">
              <img src={e.img} alt="" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-10">
        <p className="text-center text-[33px]">We Hope You'll Join Us</p>
        <p className="text-center text-[15px]  p-5 text-[#A0A0A0] w-2/4 m-auto">
          READ MORE ABOUT OUR STORY
        </p>
      </section>

      <section className="bg-[#9AA8B1] w-[95%] m-auto lg:py-20 p-10 my-2.5 lg:my-10">
        <div className="text-white flex flex-col items-center justify-center my-5 lg:my-14 text-center">
          <img src={img28} alt="" />
          <p className=" text-[24px] lg:text-[43px]">Design Inspires</p>
          <p className=" text-[15px]  pb-5">
            Build your dream workspace, so you can get your best work done.
          </p>
          <a className="text-[13px]">GET STARTED</a>
        </div>
      </section>

      <footer className=" w-[95%] m-auto">
        <article className="flex justify-between flex-wrap-reverse gap-10 lg:gap-0 text-base lg:text-2xl py-10">
          <div className="flex items-start gap-10">
            <div className="flex flex-col">
              <a href="">Shop</a>
              <a href="">About</a>
              <a href="">Journal</a>
              <a href="">Support</a>
              <a href="">COVID-19 Info</a>
              <a href="">Order Status</a>
              <a href="">Corporate Sales</a>
            </div>

            <div className="w-4/5 lg:w-2/6 border-b-2 pb-10">
              <p className="pb-5">Newsletter Signup</p>
              <p className="text-[#A0A0A0] text-[14px]">
                Sign up to our Newsletter to hear about new product releases,
                learn about our design process, and everything else going on
                behind the scenes at Grovemade.
              </p>
            </div>
          </div>

          <div className="">
            <button className="text-white text-[16px] bg-black p-2.5 px-5">
              GO <br /> UP
            </button>
          </div>
        </article>

        <div className="text-[#707A7F] text-[13px] flex gap-5 justify-end py-5">
          <p>©2020 Grovemade</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p className="text-black">Site by Department</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

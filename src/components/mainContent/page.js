import React from "react";
import list from "./testData";
import Cards from "./card";
import "../styles/page.scss";
import HeaderHomeContent from "./HeaderHomeContent";

const Page = ({ handleClick }) => {
  return (
    <>
      <div className="banner">
        <img
          src="https://www.kosmebox.com/image/data/banner2021/banner-sale-cuoi-nam/1424x400KV-BOX.jpg"
          alt=""
        />
      </div>
      <HeaderHomeContent></HeaderHomeContent>
      <h1>ĐỒNG GIÁ 9K - 79K</h1>
      <section>
        {list.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
    </>
  );
};

export default Page;

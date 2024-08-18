import CurrencyImg from '/src/assets/images/image-currency.jpg';
import RestaurantImg from '/src/assets/images/image-restaurant.jpg';
import PlaneImg from '/src/assets/images/image-plane.jpg';
import { useState } from 'react';
const dataBlog = [
  {
    id: 1,
    img:CurrencyImg,
    title: "Receive money in any currency with no fees",
    content:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ...",
  },
  {
    id: 2,
    img:RestaurantImg,
    title: "Treat yourself without worrying about money",
    content:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
  },
  {
    id: 3,
    img: PlaneImg,
    title: "Take your Easybank card wherever you go",
    content:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ...",
  },
];
export default function Blog() {
  return (
    <section id='blog'>
      <div className="container mx-auto">
        <div className="flex justify-center flex-col ">
          <div className="flex justify-center">
            <h2 className="text-white flex gap-2 text-[40px]  font-medium">
              Latest <p className="text-[#2E8B57]">blog</p>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center px-36">
            {dataBlog.map((item) => (
              <BlogBox
                key={item.id}
                img={item.img}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
        <div className="mx-auto mt-12 w-[1200px] rounded-md border-b-[1px] border-solid border-zinc-400">
          <span className=""></span>
        </div>
      </div>
    </section>
  );
}
function BlogBox({ img, title, content }) {
  
  return (
    <div className="w-[367px] mt-6 bg-white rounded-md ">
      <div className="">
        <img className="rounded-t-md h-[250px] w-full" src={img} />
      </div>
      <div className=" p-4">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="px-4">
        <p className="">{content}</p>
      </div>
      <div className="p-4 pb-8">
      <a className="text-[#2E8B57] font-medium hover:underline  transition-all duration-200 " href="">
        {" "}
        Learn More
      </a>
      </div>
    </div>
  );
}
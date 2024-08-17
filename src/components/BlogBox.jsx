export default function BlogBox({ img, title, content }) {
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

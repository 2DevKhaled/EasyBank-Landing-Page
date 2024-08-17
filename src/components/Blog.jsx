const dataBlog = [
  {
    id: 1,
    img: "/src/assets/images/image-currency.jpg",
    title: "Receive money in any currency with no fees",
    content:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ...",
  },
  {
    id: 2,
    img: "/src/assets/images/image-restaurant.jpg",
    title: "Treat yourself without worrying about money",
    content:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
  },
  {
    id: 3,
    img: "/src/assets/images/image-plane.jpg",
    title: "Take your Easybank card wherever you go",
    content:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ...",
  },
];
import BlogBox from "./BlogBox";
export default function Blog() {
  return (
    <section>
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

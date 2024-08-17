export default function About() {
  return (
    <section className="py-[100px]" id="about">
      <div className="container mx-auto h-[500px]">
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-5xl text-white font-semibold">
            Why our clients trust us
          </h2>
          <p className="text-center text-zinc-500 mt-3">
            Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor
            sed. Suspendisse lobortis vitae quis vehicula <br/> pellentesque sit id.
            Urna posuere consequat velit vulputate faucibus pretium arcu
            accumsan sit. Vel venenatis sapien.
          </p>
          <div className="flex pt-[50px] gap-7 ">
            <img src="/src/assets/images/Img layout left.png"/>
            <ul className="p-[30px] text-base text-white">
                <li className="flex gap-5 pt-[20px] ">
                    <img src="/src/assets/icons/check.svg"/>
                    <p className=" mt-[20px]">Lorem ipsum dolor sit amet consectetur.<br/> Elementum nisl duis tortor sed.</p>
                </li>
                <li className="flex gap-5 ">
                    <img src="/src/assets/icons/check.svg"/>
                    <p className="mt-[20px]">Lorem ipsum dolor sit amet consectetur.<br/> Elementum nisl duis tortor sed.</p>
                </li>
                <li className="flex gap-5 ">
                    <img src="/src/assets/icons/check.svg"/>
                    <p className=" mt-[20px]">Lorem ipsum dolor sit amet consectetur.<br/> Elementum nisl duis tortor sed.</p>
                </li>
                <li className="flex gap-5 ">
                    <img src="/src/assets/icons/check.svg"/>
                    <p className=" mt-[20px]">Lorem ipsum dolor sit amet consectetur.<br/> Elementum nisl duis tortor sed.</p>
                </li>
            </ul>
          </div>
          <div className="mx-auto mt-12 w-[1200px] rounded-md border-b-[1px] border-solid border-zinc-400">
        <span className=""></span>
      </div>
        </div>
      </div>
    </section>
  );
}

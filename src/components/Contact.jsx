export default function Contact() {
  return (
    <section>
      <div className="container ">
        <div className=" relative">
          <div className="flex justify-around absolute left-[50%] translate-x-[-50%] top-[-10px] mx-auto max-w-full w-[1160px] items-center h-[140px] bg-[#1F945E] rounded-md p-[20px]">
            <div className=" text-white">
              <h2 className="text-2xl font-normal pb-4">
                Need more information?
              </h2>
              <p>
                Write your concern to us and our specialist will get back to
                you.
              </p>
            </div>
            <button className="w-[140px] h-[50px] bg-black p-[10px]  text-white rounded-lg">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import ButtonCTA from "./ButtonCTA";
import HeroImg from '/src/assets/images/Group 1771.svg';
export default function Landing() {
  return (
    <section className="py-[150px] " id="home">
      <div className="container mx-auto block md:flex justify-between">
        <div className="flex flex-col pl-[80px] ">
          <div className=" text-white font-medium text-[65px]  leading-normal mt-10">
            <h1>
              Next generation <br />
              digital banking{" "}
            </h1>
          </div>
          <div className="text-gray-300 ">
            <p>
              Take your financial life online. Your Easybank <br /> account will
              be a one-stop-shop for spending, saving, <br /> budgeting,
              investing, and much more.
            </p>
          </div>
          <div className="mt-[15px]">
            <ButtonCTA>Request Invite</ButtonCTA>
          </div>
        </div>
        <div className="justify-center mt-5 md:mt-0 hidden md:flex">
          <img
            className="w-[650px] h-[500px]"
            src={HeroImg}
          />
        </div>
      </div>
    </section>
  );
}

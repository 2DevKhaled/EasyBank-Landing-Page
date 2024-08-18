const faqData = [
  {
    key: 1,
    question: "How do I open an account?",
    answer:
      "Provide information on the types of accounts available (e.g., savings, checking, CDs) and the documentation required for account opening.",
  },
  {
    key: 2,
    question: "What are the requirements for online banking?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate ratione, et maxime maiores itaque! Non ullam eaque libero repellendus.",
  },
  {
    key: 3,
    question: "How can I reset my online banking password?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate ratione, et maxime maiores itaque! Non ullam eaque libero repellendus.",
  },
];
import imgSide from '/src/assets/images/annie-spratt-vGgn0xLdy8s-unsplash (1).jpg'
import AccordingBox from "./AccordingBox ";
export default function Faq() {
  return (
    <section className="py-[100px]" id='faq'>
      <div className="container mx-auto">
        <div className="flex justify-center gap-[150px] ">
          <div className="w-[400px] h-[500px]">
            <img
              className="w-full h-full"
              src={imgSide}
            />
          </div>
          <div>
            <h1 className="text-4xl text-white font-medium">
              Frequently asked questions
            </h1>
            <div className="pt-[20px] flex flex-col ">
                {faqData.map((item) => (
                    <AccordingBox key={item.key} que={item.question} answer={item.answer}/>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

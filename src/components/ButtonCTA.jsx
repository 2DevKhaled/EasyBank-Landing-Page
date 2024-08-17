export default function ButtonCTA(props) {
  return (
    <button className="w-[162px] h-[49px] rounded-md text-white font-normal bg-[#2E8B57] hover:bg-[#267046] transition-all duration-200">
      {props.children}
    </button>
  );
}

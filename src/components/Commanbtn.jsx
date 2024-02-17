const Commanbtn = (props) => {
  return (
    <button
      className={` rounded-[12px] font-bold text-lg leading-[21.6px] px-[32px] py-[18px] text-black bg-[#02CDCF] font-recharge relative isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 after: ${props.cstm}`}
    >
      {props.text}
    </button>
  );
};

export default Commanbtn

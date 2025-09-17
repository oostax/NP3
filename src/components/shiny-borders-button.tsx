import React from 'react';

type RealismButtonProps = {
  text: string;
  onClick?: () => void;
}

const RealismButton: React.FC<RealismButtonProps> = ({ text, onClick }) => {
  return (
    <button 
      className="group relative p-[2px] rounded-[15px] text-[1.1rem] border-none cursor-pointer bg-[radial-gradient(circle_75px_at_80%_-10%,_#ffffff,_#181b1b)] transition-all"
      onClick={onClick}
    >
      {/* Glow behind button */}
      <div className="absolute top-0 right-0 w-[47%] h-[42%] rounded-[75px] shadow-[0_0_13px_#ffffff30] group-hover:shadow-[0_0_22px_#ffffff50] transition-all duration-300 ease-out -z-10" />



      {/* Inner content */}
      <div className="relative px-[22px] py-[11px] group-hover:scale-110 rounded-[11px] text-white bg-[radial-gradient(circle_55px_at_80%_-50%,_#777777,_#0f1111)] z-10 transition-all duration-300 font-montserrat">
        {text}

        {/* Inner glow layer */}
        <div className="absolute inset-0 rounded-[12px] bg-[radial-gradient(circle_60px_at_0%_100%,_#ffffff1a,_#ffffff11,_transparent)] z-[-1]" />
      </div>
    </button>
  );
};

export default RealismButton;


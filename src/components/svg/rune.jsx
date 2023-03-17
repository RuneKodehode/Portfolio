import Doodle from "../../doodle";
export const Rune = () => {
  return (
    <div
      className="flex flex-col gap-0 self-center justify-self-center w-100  row-start-1 text-center col-start-2 font-bold  sm:text-5xl text-2xl"
      id="portfolio"
    >
      <h1 className="self-center justify-self-center text-center">Portfolio</h1>
      <h1 className="">Rune</h1>
      <Doodle
        rule={`@grid: 10;
          @size:  2px 2px;
          background-color: orangered;
          box-shadow: 0px 0px 8px red;
          @place: @plot(
        
          
            rotate: 90;
          );
            
            animation: m 8s alternate-reverse infinite;
            transform: translateY(calc(@sin(@i / 4.1) * π * 5px));
            animation-delay: calc(
             -1s/@I * @i * @sin(@i)
             );
             @keyframes m {
               28%, 40%, 100% { scale: 1; opacity: 1}
              20%, 10%, 80% { scale: 0; opacity: 0;}
              `}
      ></Doodle>{" "}
    </div>
  );
};

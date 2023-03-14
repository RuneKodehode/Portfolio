import Doodle from "../../doodle";
export const Rune = () => {
  return (
    <div
      className="flex flex-col gap-0 self-center justify-self-center w-100  row-start-1 text-center col-start-2 font-bold text-white sm:text-5xl text-2xl"
      id="portfolio"
    >
      <h1 className="self-center justify-self-center text-center">Portfolio</h1>
      <div id="doodle" className="min-w-full">
        <Doodle
          rule={`@grid: 25;
          @size:  1px 1px;
          background-color: white;
          @place: @plot(
            r: sin(-t/2);
            move: 0 -.1;
            rotate: 90;
          );
            
            animation: m 3s alternate-reverse infinite;
            transform: translateY(calc(@sin(@i / 1) * π * 10px));
            animation-delay: calc(
             -1s/@I * @i * @sin(@i)
             );
             @keyframes m {
               15%, 70%, 90% { scale: 1; opacity: 1}
              20%, 10%, 80% { scale: 0; opacity: 0;}
              `}
        ></Doodle>{" "}
      </div>
      <h1 className="">Rune</h1>
    </div>
  );
};

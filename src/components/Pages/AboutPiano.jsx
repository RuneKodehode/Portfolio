export const AboutPiano = () => {
  return (
    <div className=" text-white sm:text-2xl space-y-5 w-11/12 sm:w-11/12 self-start sm:mt-32 mt-16 ml-auto mr-auto justify-self-center text-left">
      <p className="text-center mb-20">piano</p>
      <p>
        This was originally a drumkit I made, but changed it over to a piano as
        the sounds from the drumkit was awful to play around with.{" "}
      </p>
      <p>
        on the coding part of this I tried to make the javascript as short as
        possible, where I only needed to add the animation, audioelement and
        eventlistener on keydown on each individual key through javascript.
      </p>
      <p>Only works on keyboard for now. </p>
    </div>
  );
};

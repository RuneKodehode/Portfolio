export const AboutPiano = () => {
  return (
    <div className=" customblur sm:text-3xl space-y-5 text-center sm:w-11/12  min-h-full self-center justify-self-center w-screen">
      <p className="pt-4">
        {" "}
        <span style={{ color: "orangered" }}>Piano</span>
      </p>
      <p className="px-3">
        This was originally a drumkit I made, but changed it over to a piano as
        the sounds from the drumkit was awful to play around with.{" "}
      </p>
      <p className="px-3">
        on the coding part of this I tried to make the javascript as short as
        possible, where I only needed to add the animation, audioelement and
        eventlistener on keydown on each individual key through javascript.
      </p>
    </div>
  );
};

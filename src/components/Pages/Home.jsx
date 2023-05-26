export const Home = () => {
  return (
    <div className=" sm:text-xl flex space-y-3 text-center h-screen w-screen  self-center justify-self-center text-white bg-black bg-opacity-70">
      <div className=" self-center mx-auto h-1/2">
        <p className="px-3 pt-4">
          Hi, my name is <span style={{ color: "orangered" }}> Rune</span>.
        </p>
        <p className="p-3">
          I'm 33 years old, from Norway and I'm currently participating in a
          front-end developer course hosted by Jobloop in Stavanger.
        </p>
        <p className="p-3">
          Currently I'm well versed in{" "}
          <span style={{ color: "orangered" }}> HTML</span>,{" "}
          <span style={{ color: "orangered" }}>CSS</span>,{" "}
          <span style={{ color: "orangered" }}>Javascript</span>,{" "}
          <span style={{ color: "orangered" }}>Figma</span> and
          <span style={{ color: "orangered" }}> React.</span>
        </p>
        <p className="p-3">
          My goal is to become a full-stack developer at some point.{" "}
        </p>
        <p className="p-3">
          About me, I've lived in{" "}
          <span style={{ color: "orangered" }}> Stavanger</span> for about 10
          years, and my hobbies include reading books, watching football,{" "}
          <span style={{ color: "red" }}> D&D</span> and PC-games.
        </p>
      </div>
    </div>
  );
};

export const AboutProjTwo = () => {
  return (
    <div className=" customblur sm:text-3xl space-y-5 text-center sm:w-11/12  min-h-full self-center justify-self-center w-screen">
      <p>
        <span style={{ color: "orangered" }}>Pokedex</span>
      </p>

      <p className="px-3">
        This is a small pokedex for generation 1. <br />
        It uses the pokemon API to fetch text and images of the pokemon. <br />{" "}
        <br />
        The button design is simple and lets you go up or down through the API,
        or use a randomizer.
      </p>
    </div>
  );
};

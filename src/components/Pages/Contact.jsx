export const Contact = () => {
  return (
    <div className="flex content-center justify-center items-center align-center  h-screen w-screen">
      <div className="flex-col sm:text-3xl space-y-5 text-center">
        <p className="px-3 pt-4">
          {" "}
          Tlf: <span style={{ color: "orangered" }}>+47 91992120</span>
        </p>

        <p className="px-3">
          E-mail:{" "}
          <span style={{ color: "orangered" }}>RuneLaupsa@gmail.com</span>
        </p>

        <p className="px-3">CV can be provided upon request. </p>
      </div>
    </div>
  );
};

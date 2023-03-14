export const AboutCollatz = () => {
  return (
    <div className=" text-white sm:text-2xl space-y-5 w-11/12 sm:w-11/12 self-start sm:mt-32 mt-16 ml-auto mr-auto justify-self-center text-left">
      <h2 className="text-center">
        {" "}
        <span style={{ color: "orangered" }}>Collatz</span>
      </h2>

      <p>You pick any positive whole number you want.</p>
      <p>
        Let's say you start with 6. If the number is even , then divide it by 2.
        So 6 divided by 2 is 3.
      </p>
      <p> If the number is odd, then multiply it by 3 and add 1.</p>
      <p>So 3 times 3 plus 1 is 10.</p>
      <p>
        {" "}
        Keep repeating steps 2 and 3 with the new number you get. So for 10, you
        divide by 2 to get 5, and then multiply by 3 and add 1 to get 16.
      </p>
    </div>
  );
};

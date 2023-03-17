export const AboutCollatz = () => {
  return (
    <div className=" customblur sm:text-3xl space-y-5 text-center sm:w-11/12  min-h-full self-center justify-self-center w-screen">
      <p className="pt-4">
        {" "}
        <span style={{ color: "orangered" }}>Collatz</span>
      </p>

      <p>You pick any positive whole number you want.</p>
      <p className="px-3">
        Let's say you start with 6. If the number is even , then divide it by 2.
        So 6 divided by 2 is 3.
      </p>
      <p className="px-3">
        {" "}
        If the number is odd, then multiply it by 3 and add 1.
      </p>
      <p>So 3 times 3 plus 1 is 10.</p>
      <p className="px-3">
        {" "}
        Keep repeating steps 2 and 3 with the new number you get. So for 10, you
        divide by 2 to get 5, and then multiply by 3 and add 1 to get 16.
      </p>
    </div>
  );
};

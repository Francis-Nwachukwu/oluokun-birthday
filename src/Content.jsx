import birthday from "./assets/birthday.png";
import React, { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const Content = () => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClickButton = () => {
    setShowConfetti(true);
  };
  return (
    <div className="flex flex-col justify-center items-center my-12 max-md:my-8">
      <div className="w-3/5 max-md:w-4/5">
        <div className="flex flex-col items-center">
          <p className="text-black text-3xl max-md:text-2xl font-mono text-center font-bold">
            {" "}
            Happy Birthday Jessica Oluokun
          </p>
          <img src={birthday} alt="birthday" width={300} height={300} />
          <button
            className="button rounded-md text-black font-medium bg-orange-400 hover:bg-orange-500 h-[60px] m-5 py-2 px-4"
            onClick={handleClickButton}
          >
            Click here for a surprise! 🎉
          </button>
        </div>
        {showConfetti && <Confetti width={width} height={height} />}
        <div className="mt-6">
          <p className="font-mono">
            Happy Birthday once again, my love!{" "}
            <span className="text-red-600 text-3xl">❤️</span> Congratulations on
            becoming a finalist and being appointed as Social Sec — what an
            amazing accomplishment! I hope this new age brings you immense joy,
            peace, and, above all, the fulfillment of your heart’s deepest
            desires. <br />
            <br /> I’ve truly cherished the unique dynamics of our friendship,
            and I look forward to it only getting better with time (try dey
            behave yourself, we no be mates). <br />
            <br />I pray that God grants you a long and fulfilling life,
            connects you with incredibly important people, and keeps all your
            loved ones safe. <br />
            <br /> Bye for now, my dear — until we celebrate again next year!{" "}
            <br />
            <br /> P.S. Rest assured, your gift is on the way. 🎁
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;

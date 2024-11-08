import { useEffect, useState } from "react";
import LastGamesList from "../../components/LastGamesList/LastGamesList";
import MainLayout from "../../components/MainLayout/MainLayout";
// interface INoty {
//   mess: number | null;
//   btn: string | null;
//   type: string | null;
// }
// interface IButton {
//   min: number | null;
//   center: [null, null];
//   max: null;
// }

function DicePage() {
  const [chance, setChance] = useState("80.00");
  const [bet, setBet] = useState("10.00");
  // const [diceResult, setDiceResult] = useState(0);
  // const [isSounds, setIsSounds] = useState(1);
  // const [volume, setVolume] = useState(100);
  // const [audiosuc] = useState(new Audio("/suc_dice.mp3"));
  // const [audiofail] = useState(new Audio("/fail_dice.mp3"));
  // const [noty, setNoty] = useState<INoty>({
  //   mess: null,
  //   btn: null,
  //   type: null,
  // });
  // const [buttons, setButtons] = useState<IButton>({
  //   min: null,
  //   center: [null, null],
  //   max: null,
  // });
  // // const [isWaiting, setIsWaiting] = useState(false);

  // useEffect(() => {
  //   updateResult();
  //   // Assuming socket connection logic is handled elsewhere
  //   return () => {
  //     // Handle disconnection logic here
  //   };
  // }, [chance, bet]);

  // const toggleSounds = () => {
  //   setIsSounds((prev) => {
  //     const newSoundState = prev === 1 ? 0 : 1;
  //     if (newSoundState === 0) {
  //       setVolume(0);
  //     } else {
  //       setVolume(100);
  //       changeVolume();
  //     }
  //     return newSoundState;
  //   });
  // };

  // const changeVolume = () => {
  //   volume = volume / 100;
  //   if (volume > 0) {
  //     setIsSounds(1);
  //   }
  // };

  // const updateResult = () => {
  //   const result = (100 / Number(chance)) * Number(bet);
  //   const min = Math.floor((Number(chance) / 100) * 999999);
  //   const max = 999999 - min;
  //   const t = min / 2;
  //   setButtons({
  //     min,
  //     max,
  //     center: [Math.floor(5e5 - t), Math.floor(5e5 + t)],
  //   });
  //   setDiceResult(result);
  // };

  // const play = (type) => {
  //   // Assuming user authentication logic is handled elsewhere
  //   if (!isWaiting) {
  //     setIsWaiting(true);
  //     setTimeout(() => setIsWaiting(false), 100);
  //     setNoty({ mess: null, btn: null, type: null });

  //     // Replace with actual API call
  //     // Example: axios.post('/dice/bet', { amount: bet, chance, type })
  //     // Handle the response accordingly
  //   }
  // };

  const typeBet = (type: string) => {
    switch (type) {
      case "min":
        setBet("1.00");
        break;
      case "max":
        // Assuming user balance is handled elsewhere
        setBet("100.00"); // Replace with user balance
        break;
      case "/2":
        setBet((parseFloat(bet) / 2).toFixed(2));
        break;
      case "x2":
        setBet((parseFloat(bet) * 2).toFixed(2));
        break;
      case "default":
        setBet(parseFloat(bet).toFixed(2));
        break;
      default:
        break;
    }
  };

  const typeChance = (type: string) => {
    switch (type) {
      case "min":
        setChance("1.00");
        break;
      case "max":
        setChance("95.00");
        break;
      case "/2":
        setChance((parseFloat(chance) / 2).toFixed(2));
        break;
      case "x2":
        setChance((parseFloat(chance) * 2).toFixed(2));
        break;
      case "default":
        setChance(parseFloat(chance).toFixed(2));
        break;
      default:
        break;
    }
  };
  // const rollDice = () => {
  //   if (isWaiting) return;

  //   setIsWaiting(true);
  //   setTimeout(() => setIsWaiting(false), 1000); // Имитация ожидания

  //   const randomValue = Math.floor(Math.random() * 6) + 1; // Случайное число от 1 до 6
  //   setDiceResult(randomValue);

  //   // Логика обработки выигрыша или проигрыша
  //   // Например, если randomValue больше значения, на которое вы ставите
  //   const winCondition = randomValue > Number(chance) / 10;
  //   if (winCondition) {
  //     audiosuc.play();
  //     setNoty({ mess: "Вы выиграли!", btn: null, type: "success" });
  //   } else {
  //     audiofail.play();
  //     setNoty({ mess: "Вы проиграли!", btn: null, type: "error" });
  //   }
  // };

  return (
    <div>
      <MainLayout
        title="Dice"
        pageImgUrl="./public/assets/icons/dice_square.svg"
      >
        <div>
          <div className="flex items-center gap-[16px] mb-[24px] justify-center mt-[30px]">
            <span className="md:w-[100px] md:h-[120px] ssm:w-[62.07px] ssm:h-[74.48px] flex items-center justify-center ssm:text-[32px] md:text-7xl font-bold leading-none text-center text-[#252A42] dark:text-white border rounded-3xl border-white dark:border-gray-800 border-opacity-60 bg-white dark:bg-gradient-to-b from-[#171E32] to-[#1D2641]">
              0
            </span>
            <span className="md:w-[100px] md:h-[120px] ssm:w-[62.07px] ssm:h-[74.48px] flex items-center justify-center ssm:text-[32px] md:text-7xl font-bold leading-none text-center text-[#252A42] dark:text-white border rounded-3xl border-white dark:border-gray-800 border-opacity-60 bg-white dark:bg-gradient-to-b from-[#171E32] to-[#1D2641]">
              0
            </span>
            <span className="md:w-[100px] md:h-[120px] ssm:w-[62.07px] ssm:h-[74.48px] flex items-center justify-center ssm:text-[32px] md:text-7xl font-bold leading-none text-center text-[#252A42] dark:text-white border rounded-3xl border-white dark:border-gray-800  border-opacity-60 bg-white dark:bg-gradient-to-b from-[#171E32] to-[#1D2641]">
              0
            </span>
            <span className="md:w-[100px] md:h-[120px] ssm:w-[62.07px] ssm:h-[74.48px] flex items-center justify-center ssm:text-[32px] md:text-7xl font-bold leading-none text-center text-[#252A42] dark:text-white border rounded-3xl border-white dark:border-gray-800 border-opacity-60 bg-white dark:bg-gradient-to-b from-[#171E32] to-[#1D2641]">
              0
            </span>
            <span className="md:w-[100px] md:h-[120px] ssm:w-[62.07px] ssm:h-[74.48px] flex items-center justify-center ssm:text-[32px] md:text-7xl font-bold leading-none text-center text-[#252A42] dark:text-white border rounded-3xl border-white dark:border-gray-800 border-opacity-60 bg-white dark:bg-gradient-to-b from-[#171E32] to-[#1D2641]">
              0
            </span>
          </div>
          <p className="text-sm font-semibold leading-none text-center text-[#7F89C1]">
            Возможный выигрыш
          </p>
          <div className="ssm:w-full md:w-[600px] ssm:flex-col gap-2 flex md:flex-row items-center mx-auto ssm:bg-none md:bg-white md:dark:bg-[#252A42] ssm:p-0 md:p-[20px] rounded-2xl mt-[20px]">
            <div className="relative ssm:w-full md:w-1/2 ssm:bg-white ssm:dark:bg-[#252A42] ssm:p-[15px] md:p-0 md:bg-none lg:border-r-[1px] lg:border-gray-700 ssm:border ssm:border-[#383E5C73] md:border-none rounded-[14px]">
              <h4 className="mb-[16px] text-xs font-semibold text-[#7F89C1]">
                Ставка
              </h4>
              <div className="flex items-center gap-[8px]">
                <img
                  className="w-[24px] h-[24px]"
                  src="../../public/assets/icons/coins.svg"
                  alt=""
                />
                <input
                  type="number"
                  value={bet}
                  onChange={(e) => setBet(e.target.value)}
                  className="text-lg font-bold text-[#252A42] dark:text-white bg-transparent outline-none"
                />
              </div>
              <div className="ssm:grid ssm:grid-cols-2 md:flex gap-[8px] mt-[8px] ssm:absolute md:static right-[15px] top-[5px]">
                <button
                  onClick={() => typeBet("x2")}
                  className="w-[59px] h-[28px] bg-[#E0E3F4] dark:bg-[#303652] rounded-[8px] text-xs font-semibold text-[#7F89C1]"
                >
                  X2
                </button>
                <button
                  onClick={() => typeBet("/2")}
                  className="w-[59px] h-[28px] bg-[#E0E3F4] dark:bg-[#303652] rounded-[8px] text-xs font-semibold text-[#7F89C1]"
                >
                  1/2
                </button>
                <button
                  onClick={() => typeBet("min")}
                  className="w-[59px] h-[28px] bg-[#E0E3F4] dark:bg-[#303652] rounded-[8px] text-xs font-semibold text-[#7F89C1]"
                >
                  Min
                </button>
                <button
                  onClick={() => typeBet("max")}
                  className="w-[59px] h-[28px] bg-[#E0E3F4] dark:bg-[#303652] rounded-[8px] text-xs font-semibold text-[#7F89C1]"
                >
                  Max
                </button>
              </div>
            </div>
            <div className="relative ssm:w-full md:w-1/2 pl-[20px] ssm:bg-white ssm:dark:bg-[#252A42] ssm:p-[15px] md:p-0 md:bg-none ssm:border ssm:border-[#383E5C73] md:border-none rounded-[14px]">
              <h4 className="mb-[16px] text-xs font-semibold text-[#7F89C1]">
                Шанс
              </h4>
              <div className="flex items-center gap-[8px]">
                <img
                  className="w-[24px] h-[24px]"
                  src="../../public/assets/icons/procent.svg"
                  alt=""
                />
                <input
                  type="number"
                  value={chance}
                  onChange={(e) => setChance(e.target.value)}
                  className="text-lg font-bold text-[#252A42] dark:text-white bg-transparent outline-none"
                />
              </div>
              <div className="ssm:grid ssm:grid-cols-2 md:flex gap-[8px] mt-[8px] ssm:absolute md:static right-[15px] top-[5px]">
                <button
                  onClick={() => typeChance("x2")}
                  className="w-[59px] h-[28px] bg-[#E0E3F4] dark:bg-[#303652] rounded-[8px] text-xs font-semibold text-[#7F89C1]"
                >
                  X2
                </button>
                <button
                  onClick={() => typeChance("/2")}
                  className="w-[59px] h-[28px] bg-[#E0E3F4] dark:bg-[#303652] rounded-[8px] text-xs font-semibold text-[#7F89C1]"
                >
                  1/2
                </button>
                <button
                  onClick={() => typeChance("min")}
                  className="w-[59px] h-[28px] bg-[#E0E3F4] dark:bg-[#303652] rounded-[8px] text-xs font-semibold text-[#7F89C1]"
                >
                  Min
                </button>
                <button
                  onClick={() => typeChance("max")}
                  className="w-[59px] h-[28px] bg-[#E0E3F4] dark:bg-[#303652] rounded-[8px] text-xs font-semibold text-[#7F89C1]"
                >
                  Max
                </button>
              </div>
            </div>
          </div>
          <div className="flex ssm:flex-col lg:flex-row items-center justify-center gap-[20px] mt-[19px]">
            <button className="flex gap-[8px] ssm:w-full md:w-auto items-center justify-center px-20 py-3 rounded-2xl less_btn text-sm font-bold leading-none text-white capitalize transition-colors">
              <img src="../../public/assets/icons/more_less.svg" alt="" />
              Меньше
            </button>
            <button className="flex gap-[8px] ssm:w-full md:w-auto  items-center justify-center px-20 py-3 rounded-2xl more_btn text-sm font-bold leading-none text-white capitalize transition-colorss">
              Больше
              <img src="../../public/assets/icons/more_less.svg" alt="" />
            </button>
          </div>
        </div>
      </MainLayout>
      <LastGamesList />
    </div>
  );
}

export default DicePage;

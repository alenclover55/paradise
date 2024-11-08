import { useSelector } from "react-redux";
import DepositDidntArrived from "../DepositDidntArrived";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import WalletHistoryModal from "../WalletHistoryModal/WalletHistoryModal";
import WalletModal from "../WalletModal/WalletModal";
import { RootState } from "../../redux/store";

function ModalsLayout() {
  const modalState = useSelector((state: RootState) => state.modalsReducer);
  return (
    <div>
      {modalState.key === "deposit" && modalState.open && (
        <DepositDidntArrived />
      )}
      {modalState.key === "register" && modalState.open && <RegisterModal />}
      {modalState.key === "login" && modalState.open && <LoginModal />}
      {modalState.key === "wallet" && modalState.open && <WalletModal />}
      {modalState.key === "walletHistory" && modalState.open && (
        <WalletHistoryModal />
      )}
    </div>
  );
}

export default ModalsLayout;

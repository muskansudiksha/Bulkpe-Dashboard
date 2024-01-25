import React from "react";
import AccountSummary from "./main_components/AccountSummary";
import FixedDeposits from "./main_components/FixedDeposits";
import BottomThreeButtons from "./main_components/BottomThreeButtons";
import RecentContacts from "./main_components/RecentContacts";
import TransactionsLists from "./main_components/TransactionsLists";
import SuperSavings from "./main_components/SuperSavings";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <AccountSummary />
      <BottomThreeButtons />
      <FixedDeposits />
      <RecentContacts />
      <SuperSavings />
      <TransactionsLists />
    </div>
  );
}

export default Main;

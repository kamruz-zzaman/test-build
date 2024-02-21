import Spending from "@/app/shared/dashboard/spending";
import Exchange from "@/app/shared/dashboard/exchange";
import CashFlow from "@/app/shared/dashboard/cash-flow";
import FinancialStats from "@/app/shared/dashboard/transaction-states";
import TotalStatistics from "@/app/shared/dashboard/total-statistics";

export default function FinancialDashboard() {
  return (
    <div className="grid grid-cols-6 gap-6 @container">
      <FinancialStats className="col-span-full" />
      <TotalStatistics className="col-span-full @[90rem]:col-span-4" />
      <CashFlow className="col-span-full" />
      <Spending className="col-span-full @[59rem]:col-span-3 @[90rem]:col-span-2" />
      <Exchange className="col-span-full  @[59rem]:col-span-3 @[90rem]:col-span-2" />
    </div>
  );
}

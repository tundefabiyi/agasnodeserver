
export * from "./BalanceSheet";
export * from "./FinancialAggregateQuery";
export * from "./FinancialPerformance";
export * from "./CashFlowStatement";
export * from "./GPFSNoteQuery";
export * from "./StatementOfChangesInNetAssets";

export interface IAGASResponse
{
    getResponse(param:any):any;
}
export enum AGASRequestType {
    FinancialAggregateQuery = 1,
    BalanceSheet = 2,
    FinancialPerformance = 3,
    CashFlowStatement = 4,
    StatementOfChangesInNetAssets = 5
}
export default (state, action) => {
    switch (action.type){
        case "ADD_INCOME":
            return {
                ...state,
                incomeTransactions:[action.payload, ...state.incomeTransactions]
            };
        case "ADD_EXPENSE":
            return {
                ...state,
                expenseTransactions: [action.payload, ...state.expenseTransactions]
            }
        case "DELETE_TRANSACTION":
            return {
                incomeTransactions: state.incomeTransactions.filter(incomeTransaction => 
                    incomeTransaction.id !== action.payload),
                expenseTransactions: state.expenseTransactions.filter(expenseTransaction => 
                    expenseTransaction.id !== action.payload)
            }
        default:
            return state

    }
}
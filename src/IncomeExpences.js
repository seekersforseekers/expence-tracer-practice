import React from 'react'

export const IncomeExpences = () => {
    return(
        <div class="inc-exp-container">
            <div>
            <h4>Income</h4>
            <p className="money plus">+$0.00</p>
            </div>
            <div>
                <h4>Expence</h4>
                <p  className="money sminus">-$0.00 </p>
            </div>
            </div>
    );
}
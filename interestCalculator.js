let data = [
    {
        principal: 2500,
        time: 1.8
    },

    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    }
];

function interestCalculator(arrData) {
    let interestData = [];
    for (let datum of data) {
        let rate = 0;

        //If the principal is greater than or equal to 2500 and the time is greater than 1 and less than 3, then rate = 3       
        if((datum.principal >= 2500) && (datum.time > 1 && datum.time< 3)) {
            rate = 3;
        } 

        // If the principal is greater than or equal to 2500 and the time is greater than or equal to 3, then rate = 4
        else if ((datum.principal >= 2500) && (datum.time >= 3)){
            rate = 4;
        }

        // If the principal is less than 2500 or the time is less than or equal to 1, then rate = 2
        else if ((datum.principal < 2500) || (datum.time <= 1)) {
            rate = 2;
        }
        else {
            rate = 1;
        }

        interest = (datum.principal * rate * datum.time) / 100
        interestData.push({principal: datum.principal, time: datum.time, rate: rate, interest: interest});
        
        
    }

    console.log(interestData)

    return interestData;
}

interestCalculator(data);
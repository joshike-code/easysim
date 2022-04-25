const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

        datasets: [
            {
                label: 'Expenditure',
                data: [29, 33, 49, 59, 57, 36, 33, 39, 48, 48, 61, 50],
                borderColor: '#F542A0',
                borderWidth: 2
            },
            {
                label: 'Income',
                data: [31, 41, 22, 26, 46, 32, 50, 30, 18, 24, 36, 21],
                borderColor: '#1164F5',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})
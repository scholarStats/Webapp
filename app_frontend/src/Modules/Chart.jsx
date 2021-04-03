import ChartJS from 'chart.js';

class Chart {
    createChartDoughnut = () => {
        let ctx = document.getElementById("chartDoughnut");
        new ChartJS(ctx, {
            labels: ['Grafico'],
            type: 'doughnut',
            data: {
                datasets: [{
                    label: 'Grafico a torta',
                    data: [2, 64, 3, 2],
                    backgroundColor: "rgba(255, 209, 0, 1)",
                    borderColor: 'rgba(255,255,255, 1)',
                    borderWidth: 1.5
                }],
            },
            options: {
                animation: {
                    duration: 3000,
                },
                legend: {
                    labels: {
                        fontColor: "white",
                        fontSize: 18
                    }
                },
                scales: {
                    xAxes: [{
                        display: false,
                        ticks: {
                            fontColor: "white",
                            stepSize: 1,
                            beginAtZero: true
                        },
                    }],
                    yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            fontColor: "white",
                            stepSize: 1,
                            beginAtZero: true
                        },
                        gridLines: {
                            drawBorder: false,
                        },
                    }]
                },
            }
        })
    }


    createChartLine = () => {
        let ctx = document.getElementById("chartLine");
        new ChartJS(ctx, {
            type: 'line',
            label: "Media generale mese",
            data: {
                labels: ['Set', 'Ott', 'Nov', 'Dic', 'Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu'],
                datasets: [{
                    label: 'Totale voti',
                    data: [8.7, 8.9, 7.5, 7, 8, 8.2, 6, 6.2, 6.9, 6.1],
                    backgroundColor: 'rgba(255,0,200, 0)',
                    borderColor: 'rgba(255,255,255, 1)',
                    borderWidth: 1.5
                }]
            },
            options: {
                legend: {
                    labels: {
                        fontColor: "white",
                        fontSize: 18
                    }
                },
                animation: {
                    duration: 3000,
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "white",
                            beginAtZero: true,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: "white",
                            beginAtZero: true,
                        }
                    }]
                }
            }
        })
    }


    createChartBar = () => {
        let ctx = document.getElementById("chartBar");
        new ChartJS(ctx, {
            type: 'bar',
            data: {
                labels: ['info', 'srobot', 'chimICA', 'elettro', 'meccanica', 'logistica', 'biotecnologie'],
                datasets: [{
                    label: 'Iscritti per specializzazione',
                    data: [12, 19, 3, 5, 2, 3, 8, 2, 9],
                    backgroundColor: 'rgba(0,213,255, 0)',
                    borderColor: 'rgba(255,255,255, 1)',
                    borderWidth: 1.5
                }]
            },
            options: {
                animation: {
                    duration: 3000,
                },
                legend: {
                    labels: {
                        fontColor: "white",
                        fontSize: 18
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "white",
                            beginAtZero: true,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: "white",
                            beginAtZero: true,
                        }
                    }]
                }
            }
        })
    }
}

export default new Chart();
import ChartJS from 'chart.js';

class Chart {
    createChartDoughnut = (arr) => {
        let ctx = document.getElementById("chartDoughnut");
        new ChartJS(ctx, {
            labels: ['Grafico'],
            type: 'doughnut',
            data: {
                labels: ['Sufficenti', 'Non sufficenti'],
                datasets: [{
                    label: 'Grafico a torta',
                    data: [arr.mar_positiveCount, arr.mar_negativeCount],
                    backgroundColor: [ 'rgb(255, 0, 106)' , 'rgb(255, 115, 0)'],
                    borderColor: 'rgba(255,255,255, 1)',
                    borderWidth: 1.5
                }],
            },
            options: {
                animation: {
                    duration: 3000,
                },
                legend: {
                    display: false,
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
                        },
                        gridLines: {
                            drawBorder: false,
                        },
                    }]
                },
            }
        })
    }

    createChartLine = (arr) => {
        let ctx = document.getElementById("chartLine");
        new ChartJS(ctx, {
            type: 'line',
            label: "Media generale mese",
            data: {
                labels: ['Set', 'Ott', 'Nov', 'Dic', 'Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu'],
                datasets: [{
                    label: 'Totale voti',
                    data: [arr.avg_set, arr.avg_ott, arr.avg_nov, arr.avg_dic, arr.avg_gen, arr.avg_feb, arr.avg_mar, arr.avg_apr, arr.avg_mag, arr.avg_giu],
                    backgroundColor: 'rgba(255,0,200, 0)',
                    borderColor: '#ff006a',
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
                labels: ['info', 'srobot', 'chimica', 'elettro', 'meccanica', 'logistica', 'biotecnologie'],
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

    getBestMonth = (obj) => {
        let arr = Object.entries(obj);
        let best = ["month_name", -1];
        arr.forEach(month => {
            if(month[1] > best[1]) {
                best[0] = month[0];
                best[1] = month[1];
            }
        })
        return (best[0].split("_"))[1];
    }

    getWorstMonth = (obj) => {
        let arr = Object.entries(obj);
        let worst = ["month_name", 11];
        arr.forEach(month => {
            if(month[1] < worst[1]) {
                worst[0] = month[0];
                worst[1] = month[1];
            }
        })
        return (worst[0].split("_"))[1];
    }

    getAvg = (obj) => {
        let arr = Object.entries(obj);
        let sum = 0;
        arr.forEach(month => {
            sum = sum + month[1];
        });

        return(sum/arr.length);
    }

    getBestPeriod = (arr) => {
        let avgTri = ((arr.avg_set + arr.avg_ott + arr.avg_nov + arr.avg_dic)/4);
        let avgPent = ((arr.avg_gen + arr.avg_feb + arr.avg_mar + arr.avg_apr + arr.avg_mag + arr.avg_giu)/6);

        return avgTri > avgPent ? "TRIM" : "PENT";
    }

}

export default new Chart();
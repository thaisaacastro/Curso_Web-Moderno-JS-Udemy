const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function () {
  console.log('Executando Tarefa 1!', new Date().getSeconds())
})
 // 0 = Domingo / 1 = Segunda / 2 = Terça // */5 = 5 em 5 min


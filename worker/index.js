const CronJob = require('cron').CronJob;
new CronJob('* * * * * *', function() {
  console.log('nous allons voir ce message toutes les secondes'); 
}, null, true, 'America/Los_Angeles'); //FIXME: mettre le bon timeZone pour la France

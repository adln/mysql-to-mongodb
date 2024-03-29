'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Processus, app, auth, database) {
  var processus = require('../controllers/processus')(Processus);
  app.get('/processus/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/processus/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/processus/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.route('/api/connectmysql')
    .get(processus.createConnection, processus.connectMysql);

  app.route('/api/gettable')
    .get(processus.createConnection, processus.getTable);

  app.route('/api/fourth')
    .get(processus.fourth);

  app.route('/api/schemas')
    .post(processus.makeSchema);

  app.route('/api/finalSchema')
    .post(processus.finalSchema);

  app.route('/api/migration')
    .post(processus.createConnection, processus.migration);


  app.get('/processus/example/render', function(req, res, next) {
    Processus.render('index', {
      package: 'processus'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};

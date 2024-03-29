'use strict';

/* jshint -W098 */
angular.module('mean.processus').controller('AssociationsController', ['$scope', 'Global', 'Processus', '$state', '$rootScope', '$http',
  function($scope, Global, Processus, $state, $rootScope, $http) {
    $scope.global = Global;
    $scope.package = {
      name: 'processus'
    };
    $scope.tempTables = [{
      name: "Client",
      columns: [{
        name: "ID"
      }, {
        name: "Nom"
      }, {
        name: "Prenom"
      }]
    }, {
      name: "Commande",
      columns: [{
        name: "ID"
      }, {
        name: "Date"
      }]
    }, {
      name: "LigneCommande",
      columns: [{
        name: "ID"
      }, {
        name: "Id_commande"
      }, {
        name: "Prix"
      }]
    }, {
      name: "Facture",
      columns: [{
        name: "ID"
      }, {
        name: "Id_commande"
      }]
    }, {
      name: "Chambre",
      columns: [{
        name: "ID"
      }, {
        name: "Numero"
      }, {
        name: "Etage"
      }]
    }, {
      name: "Adresse",
      columns: [{
        name: "ID"
      }, {
        name: "Id_client"
      }, {
        name: "Addresse1"
      }, {
        name: "Addresse2"
      }, {
        name: "Addresse3"
      }]
    }];


    $scope.types = [{
      id: 1,
      label: "1 - 1"
    }, {
      id: 2,
      label: "1 - n"
    }];
    $scope.tables = [];
    $scope.init = function() {
      var tables = JSON.parse(localStorage.getItem('tables'));
      
      $scope.associations = JSON.parse(localStorage.getItem('associations')) || [];
      
      for (var i = 0, length = tables.length; i < length; i++) {
        $http.get('/api/getTable', {
            params: {
              table: tables[i],
              connection: localStorage.getItem('connection')
            }
          })
          .success(function(results) {
            $scope.tables.push(results);
          });
      }
    };

    $scope.removeAssociation = function(association) {
      $scope.associations.splice($scope.associations.indexOf(association), 1);
    };

    $scope.addAssociation = function() {
      var association = {
        first: angular.copy($scope.table1),
        type: $scope.type,
        second: angular.copy($scope.table2)
      };
      $scope.associations.push(association);
      $scope.table1 = {};
      $scope.table2 = {};
      $scope.type = {};
    };

    $scope.selectKey = function(col) {
      col.selected = !col.selected;
    };

    $scope.schemas = function() {
      localStorage.setItem('associations', JSON.stringify($scope.associations));
      
      $state.go('configuration-choix-des-schemas');
    };

  }
]);

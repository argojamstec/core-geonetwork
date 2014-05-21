(function() {
  goog.provide('inspire_mock_full_metadata_factory');

  var module = angular.module('inspire_metadata_factory', []);

  module.factory('inspireMetadataLoader', [ '$q', function($q) {
    return function(url, mdId) {
      var deferred = $q.defer();
      deferred.resolve(
        // This data is used as test data for SaveTest so run SaveTest when editing this file
        // START TEST DATA
        {
        roleOptions: ['pointOfContact', 'owner', 'custodian'],
        dateTypeOptions: ['creation', 'publication', 'revision'],
        hierarchyLevelOptions: ['attribute', 'attributeType', 'dataset'],
        topicCategoryOptions: ['transportation', 'imageryBaseMapsEarthCover_BaseMaps', 'location'],

        language: "eng",
        characterSet: "utf8",
        hierarchyLevel: "dataset",
        hierarchyLevelName: "",
        contact: [{
          id: '1', // id indicates this is a shared object
          name: 'Florent',
          surname: 'Gravin',
          email: 'florent.gravin@camptocamp.com',
          organization: {
            eng:"camptocamp SA"
          },
          role: 'owner',
          validated: false
        },{
          id: '2',
          name: 'Jesse',
          surname: 'Eichar',
          email: 'jesse.eichar@camptocamp.com',
          organization: {
            eng: "Camptocamp SA",
            ger: "Camptocamp AG"
          },
          role: 'pointOfContact',
          validated: true
        },{
          id: '',
          name: 'New',
          surname: 'User',
          email: 'new.user@camptocamp.com',
          organization: {
            eng: "Camptocamp SA",
            ger: "Camptocamp AG"
          },
          role: 'pointOfContact',
          validated: false
        }],
        otherLanguages: ['eng', 'ger'],
        identification: {
          type: 'data',
          title: {eng: 'Title',fre: 'Titre'},
          date: '2008-06-23',
          dateTagName: 'gco:Date',
          dateType: 'creation',
          citationIdentifier: "Citation Identifier",
          language: "ger",
          abstract: {fre: 'Abstract'},
          pointOfContact:  [{
            id: '2',
            name: 'Jesse',
            surname: 'Eichar',
            email: 'jesse.eichar@camptocamp.com',
            organization: {
              eng: "Camptocamp SA",
              ger: "Camptocamp AG"
            },
            role: 'pointOfContact',
            validated: true
          },{
            id: '1',
            name: 'Florent',
            surname: 'Gravin',
            email: 'florent.gravin@camptocamp.com',
            organization: {
              eng:"camptocamp SA"
            },
            role: 'owner',
            validated: false
          }],
          descriptiveKeywords: [
            {code: 'http://rdfdata.eionet.europa.eu/inspirethemes/themes/15', words: {eng: 'Buildings'}},
            {code: 'http://rdfdata.eionet.europa.eu/inspirethemes/themes/9', words: {eng: 'Hydrography', ger: 'Schutzgebiete'}}],
          topicCategory: ['transportation', 'imageryBaseMapsEarthCover_BaseMaps'],
          extents: [
            {
              description: {
                eng: 'Bern',
                ger: 'Bern'
              },
              geom: "kantone:2"
            },
            {
              description: {
                eng: 'Fribourg',
                ger: 'Fribourg'
              },
              geom: "gemeinden:2196"
            }
          ]
        }
      }
      // END TEST DATA
      );

      return deferred.promise;
    };
  }]);
})();

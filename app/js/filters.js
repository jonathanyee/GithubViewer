'use strict';

/* Filters */

angular.module('GithubViewer.filters', []).
  filter('filterLanguages', function() {
    return function(repositories, languages) {
        if (repositories === undefined || languages === undefined) {
            return;
        }
      var list = [];
      for (var i = 0; i < repositories.length; i++) {
        for (var j = 0; j < languages.length; j++) {
            if (languages[j].selected && repositories[i].language === languages[j].name) {
                list.push(repositories[i]);
            }
        }
      }
      return list;
    };
  });

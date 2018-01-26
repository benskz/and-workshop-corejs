/**
 *  AVAILABLE FILTERS:
 *  ["AVAILABLE_IMMEDIATELY", "FRESH_GRAD", "JUNIOR", "JAVASCRIPT", "PHP", "AWS", "REACT", "JAVA"]
 *
 *  "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" will override all the other filters if specified
 *
 *  if "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" are both specified as filter, "FRESH_GRAD" will be ignored
 *
 *
 *  Exercise: refactor this code
 *  - take care of naming variables
 *  - get rid of the 'for loops'
 *  - move it to modern JS!
 *  - oh, there are missing tests/scenario
 *
 *   happy refactory :)
 */

const optionsContainFilter = (options, filter) => {
  let hasFilter = false;
  options.forEach(option => {
    if (option.code === filter) hasFilter = true;
  });
  return hasFilter;
}

const resultHasFilters = (result, filters) => {
  let matchedFilters = filters.filter(filter => {
    return optionsContainFilter(result.options, filter);
  });
  return matchedFilters.length === filters.length;
}

function filter(results, filters) {
  if (filter.length === 0) return results;

  var out = [];
  var resultsLength = results.length;
  var filterLength = filters.length;
  var hasOptions;
  var availableImmediately = false;
  var freshGrad = false;

  if (filters.indexOf('AVAILABLE_IMMEDIATELY') !== -1) {
    availableImmediately = true;
  } else if (filters.indexOf('FRESH_GRAD') !== -1) {
    freshGrad = true;
  }

  for (var i = resultsLength; i--; ) {
    if (!results[i].options) results[i].options = [];
    // console.log(filters);
    hasFilter = resultHasFilters(results[i], filters);

    if (results[i].options) {
      for (var k = filterLength; k--; ) {
        // loop through filters

        for (var j = results[i].options.length; j--; ) {
          if (
            availableImmediately &&
            results[i].options[j].code === 'AVAILABLE_IMMEDIATELY'
          ) {
            hasFilter = true;
          } else if (
            freshGrad &&
            results[i].options[j].code === 'FRESH_GRAD'
          ) {
            hasFilter = true;
          }
        }
      }
    }

    if (hasFilter) {
      out.unshift(results[i]);
    }
  }

  return out;
}

module.exports = filter;

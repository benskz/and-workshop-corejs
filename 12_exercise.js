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

  const filteredResults = results.filter(function(result) {
    if (!result.options) result.options = [];
    // console.log(filters);
    hasFilter = resultHasFilters(result, filters);

    if (availableImmediately) {
      if (resultHasFilters(result, ['AVAILABLE_IMMEDIATELY'])) {
        return true;
      }
    } else if (freshGrad){
      if (resultHasFilters(result, ['FRESH_GRAD'])) {
        return true;
      }
    } else if (resultHasFilters(result, filters)) {
      return true;
    }
  });

  return filteredResults;
}

module.exports = filter;

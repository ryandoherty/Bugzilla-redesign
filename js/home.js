YAHOO.namespace('bugzilla');

YAHOO.bugzilla.checkForBugNumber() = function() {
    var search = YAHOO.util.Dom.get("quicksearch");
    if (search.value.match(/^\d+$/)) 
    {
      search.setAttribute("name", "id");
      document.forms['queryform'].setAttribute("action", "show_bug.cgi");
    }
};
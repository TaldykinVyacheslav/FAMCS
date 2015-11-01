angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("general.html",
    "<div id=\"general\" class=\"row\">\r" +
    "\n" +
    "  <div class=\"title row\">\r" +
    "\n" +
    "    <div class=\"col-sm-12\">\r" +
    "\n" +
    "      <h4>General information</h4>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-lg-12 time-info\">\r" +
    "\n" +
    "      <p class=\"last-time\" ng-hide=\"isRunning || isWaiting || !lastTime\">\r" +
    "\n" +
    "        Last sync in <u>{{lastTime}}</u>\r" +
    "\n" +
    "        <span ng-show=\"lastStatus === 'FINISHED'\" class=\"text-success\">(<i>success</i>)</span>\r" +
    "\n" +
    "        <span ng-show=\"lastStatus === 'ERROR_TERMINATED'\" class=\"text-danger\">(<i>error</i>)</span>\r" +
    "\n" +
    "      </p>\r" +
    "\n" +
    "      <p class=\"next-time\" ng-hide=\"isRunning || isWaiting\">Automatic sync is <i><u>{{autoSyncStatus}}</u></i></p>\r" +
    "\n" +
    "      <p class=\"processing\" ng-show=\"isRunning\">Synchronization is executing now</p>\r" +
    "\n" +
    "      <p class=\"processing\" ng-show=\"isWaiting\">Synchronization task is waiting for execution now</p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-lg-12\">\r" +
    "\n" +
    "      <button class=\"btn btn-default sync-now\" ng-click=\"sync()\" ng-disabled=\"isRunning || isWaiting || !settings.marketoCliendId\">\r" +
    "\n" +
    "        Sync now <span class=\"glyphicon glyphicon-play\" aria-hidden=\"true\"></span>\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <div class=\"row\" ng-hide=\"settings.marketoCliendId\">\r" +
    "\n" +
    "    <div class=\"col-lg-12\">\r" +
    "\n" +
    "      <h5 class=\"text-center text-danger\"><i>Please initialize settings to run sync.</i></h5>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <!-- Sync status info -->\r" +
    "\n" +
    "  <div class=\"row sync-status\" ng-show=\"isRunning\">\r" +
    "\n" +
    "    <div class=\"col-lg-12\">\r" +
    "\n" +
    "      <h5 class=\"text-center\">Sync status</h5>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <div class=\"row\" ng-show=\"syncStatus.syncPhase\">\r" +
    "\n" +
    "        <div class=\"col-sm-6 label-div\">\r" +
    "\n" +
    "          <label>Sync phase: </label>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-sm-6 value-div\">\r" +
    "\n" +
    "          <p>{{syncStatus.syncPhase}}</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"row\" ng-show=\"syncStatus.syncResource\">\r" +
    "\n" +
    "        <div class=\"col-sm-6 label-div\">\r" +
    "\n" +
    "          <label>Resource synchronized: </label>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-sm-6 value-div\">\r" +
    "\n" +
    "          <p>{{syncStatus.syncResource}}</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"row\" ng-show=\"syncStatus.syncResource\">\r" +
    "\n" +
    "        <div class=\"col-sm-6 label-div\">\r" +
    "\n" +
    "          <label>Total resources synchronized: </label>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-sm-6 value-div\">\r" +
    "\n" +
    "          <p>{{syncStatus.resourcesSynced}}</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );

  $templateCache.put("history-details.html",
    "<!--\r" +
    "\n" +
    "  ~ Marketo-Sage Connector (MSC)\r" +
    "\n" +
    "  ~ Copyright (c) 2015 Dual Lab sprl - All rights reserved\r" +
    "\n" +
    "  ~\r" +
    "\n" +
    "  ~ filename: history-details.html\r" +
    "\n" +
    "  -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div id=\"history\">\r" +
    "\n" +
    "  <div class=\"title row\">\r" +
    "\n" +
    "    <div class=\"col-sm-12\">\r" +
    "\n" +
    "      <h4>History details</h4>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-sm-12\">\r" +
    "\n" +
    "      <form class=\"form-horizontal\">\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "          <label class=\"col-sm-2 control-label\">Start:</label>\r" +
    "\n" +
    "          <div class=\"col-sm-10\">\r" +
    "\n" +
    "            <p class=\"form-control-static\">{{statisticsDetails.start}}</p>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "          <label class=\"col-sm-2 control-label\">End:</label>\r" +
    "\n" +
    "          <div class=\"col-sm-10\">\r" +
    "\n" +
    "            <p class=\"form-control-static\">{{statisticsDetails.end}}</p>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "          <label class=\"col-sm-2 control-label\">Duration:</label>\r" +
    "\n" +
    "          <div class=\"col-sm-10\">\r" +
    "\n" +
    "            <p class=\"form-control-static\">{{statisticsDetails.duration}}</p>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "          <label class=\"col-sm-2 control-label\">Duration:</label>\r" +
    "\n" +
    "          <div class=\"col-sm-10\">\r" +
    "\n" +
    "            <p class=\"form-control-static\">{{statisticsDetails.duration}}</p>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "          <label class=\"col-sm-2 control-label\">Resources [{{statisticsDetails.resouces.length}}]:</label>\r" +
    "\n" +
    "          <div class=\"col-sm-10\">\r" +
    "\n" +
    "            <table class=\"table table-bordered\">\r" +
    "\n" +
    "              <tr>\r" +
    "\n" +
    "                <th>ID</th>\r" +
    "\n" +
    "                <th>URL</th>\r" +
    "\n" +
    "              </tr>\r" +
    "\n" +
    "              <tr ng-repeat=\"resource in statisticsDetails.resouces\">\r" +
    "\n" +
    "                <td>{{resource.id}}</td>\r" +
    "\n" +
    "                <td>{{resource.url}}</td>\r" +
    "\n" +
    "              </tr>\r" +
    "\n" +
    "            </table>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put("history.html",
    "<!--\r" +
    "\n" +
    "  ~ Marketo-Sage Connector (MSC)\r" +
    "\n" +
    "  ~ Copyright (c) 2015 Dual Lab sprl - All rights reserved\r" +
    "\n" +
    "  ~\r" +
    "\n" +
    "  ~ filename: history.html\r" +
    "\n" +
    "  -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div id=\"history\">\r" +
    "\n" +
    "  <div class=\"title row\">\r" +
    "\n" +
    "    <div class=\"col-sm-12\">\r" +
    "\n" +
    "      <h4>History</h4>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-sm-12\">\r" +
    "\n" +
    "      <table class=\"table table-bordered\">\r" +
    "\n" +
    "        <tr>\r" +
    "\n" +
    "          <th class=\"type\">\r" +
    "\n" +
    "            <a href=\"#\" ng-click=\"updateReports(currentPage, 'type', !sortAsc)\">\r" +
    "\n" +
    "              Type\r" +
    "\n" +
    "              <span ng-show=\"sortType == 'type' && sortAsc\" class=\"glyphicon glyphicon-triangle-bottom\"></span>\r" +
    "\n" +
    "              <span ng-show=\"sortType == 'type' && !sortAsc\" class=\"glyphicon glyphicon-triangle-top\"></span>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "          </th>\r" +
    "\n" +
    "          <th class=\"start\">\r" +
    "\n" +
    "            <a href=\"#\" ng-click=\"updateReports(currentPage, 'startTime', !sortAsc)\">\r" +
    "\n" +
    "              Start\r" +
    "\n" +
    "              <span ng-show=\"sortType == 'startTime' && !sortAsc\" class=\"glyphicon glyphicon-triangle-bottom\"></span>\r" +
    "\n" +
    "              <span ng-show=\"sortType == 'startTime' && sortAsc\" class=\"glyphicon glyphicon-triangle-top\"></span>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "          </th>\r" +
    "\n" +
    "          <th class=\"end\">\r" +
    "\n" +
    "            <a href=\"#\" ng-click=\"updateReports(currentPage, 'endTime', !sortAsc)\">\r" +
    "\n" +
    "              End\r" +
    "\n" +
    "              <span ng-show=\"sortType == 'endTime' && !sortAsc\" class=\"glyphicon glyphicon-triangle-bottom\"></span>\r" +
    "\n" +
    "              <span ng-show=\"sortType == 'endTime' && sortAsc\" class=\"glyphicon glyphicon-triangle-top\"></span>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "          </th>\r" +
    "\n" +
    "          <th class=\"duration\">\r" +
    "\n" +
    "            <a href=\"#\">\r" +
    "\n" +
    "              Duration\r" +
    "\n" +
    "              <span ng-show=\"sortType == 'duration' && sortAsc\" class=\"glyphicon glyphicon-triangle-bottom\"></span>\r" +
    "\n" +
    "              <span ng-show=\"sortType == 'duration' && !sortAsc\" class=\"glyphicon glyphicon-triangle-top\"></span>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "          </th>\r" +
    "\n" +
    "          <th class=\"resources\">\r" +
    "\n" +
    "            <a href=\"#\" ng-click=\"updateReports(currentPage, 'resourcesInvolved', !sortAsc)\">\r" +
    "\n" +
    "              Resources involved\r" +
    "\n" +
    "              <span ng-show=\"sortType == 'resourcesInvolved' && sortAsc\" class=\"glyphicon glyphicon-triangle-bottom\"></span>\r" +
    "\n" +
    "              <span ng-show=\"sortType == 'resourcesInvolved' && !sortAsc\" class=\"glyphicon glyphicon-triangle-top\"></span>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "          </th>\r" +
    "\n" +
    "          <th class=\"resources\">\r" +
    "\n" +
    "            <a href=\"#\" ng-click=\"updateReports(currentPage, 'status', !sortAsc)\">\r" +
    "\n" +
    "              Status\r" +
    "\n" +
    "              <span ng-show=\"sortType == 'status' && sortAsc\" class=\"glyphicon glyphicon-triangle-bottom\"></span>\r" +
    "\n" +
    "              <span ng-show=\"sortType == 'status' && !sortAsc\" class=\"glyphicon glyphicon-triangle-top\"></span>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "          </th>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <tr ng-repeat=\"report in reports\">\r" +
    "\n" +
    "          <td><i>{{report.type}}</i></td>\r" +
    "\n" +
    "          <td>{{report.startTime}}</td>\r" +
    "\n" +
    "          <td>{{report.endTime}}</td>\r" +
    "\n" +
    "          <td>{{report.duration}}</td>\r" +
    "\n" +
    "          <td>{{report.resourcesInvolved}}</td>\r" +
    "\n" +
    "          <td>{{report.status}}</td>\r" +
    "\n" +
    "          <!--<td><a ng-href=\"history/{{report.id}}\">details</a></td>-->\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <tr ng-hide=\"reports.length\">\r" +
    "\n" +
    "          <td colspan=\"7\" class=\"text-center\"><i>History is empty</i></td>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "      </table>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <div class=\"row pagination-container\">\r" +
    "\n" +
    "    <div class=\"col-sm-12\">\r" +
    "\n" +
    "      <ul class=\"pager\">\r" +
    "\n" +
    "        <li class=\"first\">\r" +
    "\n" +
    "          <a href=\"#\" ng-click=\"updateReports(1)\" ng-disabled=\"currentPage === 1\">\r" +
    "\n" +
    "            <span aria-hidden=\"true\">&larr;</span> First\r" +
    "\n" +
    "          </a>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "        <li class=\"previous\">\r" +
    "\n" +
    "          <a href=\"#\" ng-click=\"updateReports(currentPage - 1)\" ng-disabled=\"currentPage === 1\">\r" +
    "\n" +
    "            <span aria-hidden=\"true\">&larr;</span> Previous\r" +
    "\n" +
    "          </a>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "        <li ng-repeat=\"pageLabel in pagesLabels\" ng-class=\"{'active': currentPage === pageLabel}\">\r" +
    "\n" +
    "          <a href=\"#\" ng-click=\"updateReports(pageLabel)\">\r" +
    "\n" +
    "            {{pageLabel}}\r" +
    "\n" +
    "          </a>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "        <li class=\"last\">\r" +
    "\n" +
    "          <a href=\"#\" ng-click=\"updateReports(pagesNumber)\" ng-disabled=\"currentPage >= pagesNumber\">\r" +
    "\n" +
    "            Last <span aria-hidden=\"true\">&rarr;</span>\r" +
    "\n" +
    "          </a>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "        <li class=\"next\">\r" +
    "\n" +
    "          <a href=\"#\" ng-click=\"updateReports(currentPage + 1)\" ng-disabled=\"currentPage >= pagesNumber\">\r" +
    "\n" +
    "            Next <span aria-hidden=\"true\">&rarr;</span>\r" +
    "\n" +
    "          </a>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "      </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put("login.html",
    "<div id=\"login\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <div class=\"login-header\">\r" +
    "\n" +
    "    <p class=\"project-name\">Marketo-Sage Connector</p>\r" +
    "\n" +
    "    <p class=\"form-name\">Administrator login</p>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <form ng-submit=\"login()\" novalidate=\"novalidate\">\r" +
    "\n" +
    "    <fieldset>\r" +
    "\n" +
    "      <div class=\"form-group\">\r" +
    "\n" +
    "        <label for=\"usernameInput\">Username</label>\r" +
    "\n" +
    "        <input id=\"usernameInput\" type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\" ng-model=\"credentials.username\" required/>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <div class=\"form-group\">\r" +
    "\n" +
    "        <label for=\"passwordInput\">Password</label>\r" +
    "\n" +
    "        <input id=\"passwordInput\" type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" ng-model=\"credentials.password\" required/>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <button type=\"submit\" class=\"btn btn-default submit pull-right login\" ng-click=\"login()\">Login</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </fieldset>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  </form>\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put("settings.html",
    "\r" +
    "\n" +
    "<!--\r" +
    "\n" +
    "  ~ Marketo-Sage Connector (MSC)\r" +
    "\n" +
    "  ~ Copyright (c) 2015 Dual Lab sprl - All rights reserved\r" +
    "\n" +
    "  ~\r" +
    "\n" +
    "  ~ filename: settings.html\r" +
    "\n" +
    "  -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div id=\"settings\">\r" +
    "\n" +
    "  <div class=\"title row\">\r" +
    "\n" +
    "    <div class=\"col-sm-12\">\r" +
    "\n" +
    "      <h4>Settings</h4>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <form name=\"settingsForm\" novalidate>\r" +
    "\n" +
    "    <div class=\"general-settings\">\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-lg-6 col-sm-12 col-lg-offset-3\">\r" +
    "\n" +
    "          <h5>Automatic sync</h5>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-lg-6 col-sm-12 col-lg-offset-3\">\r" +
    "\n" +
    "          <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"startTimeInput\" class=\"control-label\">Start time:</label>\r" +
    "\n" +
    "            <input type=\"time\" id=\"startTimeInput\" class=\"form-control\" ng-model=\"settings.schedule.startTime\" placeholder=\"HH:mm:ss\" ng-disabled=\"!settings.autoSyncEnabled\"/>\r" +
    "\n" +
    "            <button class=\"btn btn-default set-now-btn form-control\" ng-click=\"setNow()\" ng-disabled=\"!settings.autoSyncEnabled\">Set now</button>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-lg-6 col-sm-12 col-lg-offset-3\">\r" +
    "\n" +
    "          <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"intervalInput\" class=\"control-label\">Sync interval:</label>\r" +
    "\n" +
    "            <input type=\"number\" name=\"period\" id=\"intervalInput\" class=\"form-control\" ng-model=\"settings.schedule.period\" min=\"1\" ng-disabled=\"!settings.autoSyncEnabled\"/> <span>m</span>\r" +
    "\n" +
    "            <span ng-show=\"settingsForm.period.$invalid\" class=\"text-danger\"><i>Wrong period value!</i></span>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-lg-6 col-sm-12 col-lg-offset-3\">\r" +
    "\n" +
    "          <div class=\"form-group\">\r" +
    "\n" +
    "            <input type=\"checkbox\" id=\"autoSyncInput\" ng-model=\"settings.autoSyncEnabled\"/>\r" +
    "\n" +
    "            <label for=\"autoSyncInput\" class=\"control-label\">Enable automatic synchronization</label>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"marketo-settings\">\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-lg-6 col-sm-12 col-lg-offset-3\">\r" +
    "\n" +
    "          <h5>Marketo settings</h5>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-lg-6 col-sm-12 col-lg-offset-3\">\r" +
    "\n" +
    "          <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"marketoCliendIdInput\" class=\"control-label\">Client id:</label>\r" +
    "\n" +
    "            <input type=\"text\" id=\"marketoCliendIdInput\" class=\"form-control\" ng-model=\"settings.marketoCliendId\" required/>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "          <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"marketoClientSecretInput\" class=\"control-label\">Client secret:</label>\r" +
    "\n" +
    "            <input type=\"text\" id=\"marketoClientSecretInput\" class=\"form-control\" ng-model=\"settings.marketoClientSecret\" required/>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "          <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"marketoServerProtocolInput\" class=\"control-label\">Protocol:</label>\r" +
    "\n" +
    "            <input type=\"text\" id=\"marketoServerProtocolInput\" class=\"form-control\" ng-model=\"settings.marketoServerProtocol\" required/>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "          <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"marketoServerHostInput\" class=\"control-label\">Host:</label>\r" +
    "\n" +
    "            <input type=\"text\" id=\"marketoServerHostInput\" class=\"form-control\" ng-model=\"settings.marketoServerHost\" required/>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "          <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"marketoLeadsListIdInput\" class=\"control-label\">Leads list id:</label>\r" +
    "\n" +
    "            <input type=\"number\" id=\"marketoLeadsListIdInput\" class=\"form-control\" ng-model=\"settings.marketoLeadsListId\" required/>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"sage-settings\">\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-lg-6 col-sm-12 col-lg-offset-3\">\r" +
    "\n" +
    "          <h5>Sage settings</h5>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-lg-6 col-sm-12 col-lg-offset-3\">\r" +
    "\n" +
    "          <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"sageLoginInput\" class=\"control-label\">Login:</label>\r" +
    "\n" +
    "            <input type=\"text\" id=\"sageLoginInput\" class=\"form-control\" ng-model=\"settings.sageLogin\" required/>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "          <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"sagePasswordInput\" class=\"control-label\">Password:</label>\r" +
    "\n" +
    "            <input type=\"password\" id=\"sagePasswordInput\" class=\"form-control\" ng-model=\"settings.sagePassword\" required/>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "          <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"sageServerProtocolInput\" class=\"control-label\">Server protocol:</label>\r" +
    "\n" +
    "            <input type=\"text\" id=\"sageServerProtocolInput\" class=\"form-control\" ng-model=\"settings.sageServerProtocol\" required/>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "          <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"sageServerHostInput\" class=\"control-label\">Server host:</label>\r" +
    "\n" +
    "            <input type=\"text\" id=\"sageServerHostInput\" class=\"form-control\" ng-model=\"settings.sageServerHost\" required/>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "          <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"sageInstallNameInput\" class=\"control-label\">Install name:</label>\r" +
    "\n" +
    "            <input type=\"text\" id=\"sageInstallNameInput\" class=\"form-control\" ng-model=\"settings.sageInstallName\" required/>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "      <div class=\"col-lg-6 col-sm-12 col-lg-offset-3\">\r" +
    "\n" +
    "        <button type=\"cancel\" class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\r" +
    "\n" +
    "        <button type=\"submit\" class=\"btn btn-success\" ng-click=\"save()\" ng-disabled=\"settingsForm.$invalid\" title=\"{{settingsForm.$invalid ? 'please fill all fields correctly to save changes' : ''}}\">Save</button>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"row success-message\">\r" +
    "\n" +
    "      <div class=\"col-lg-6 col-sm-12 col-lg-offset-3\">\r" +
    "\n" +
    "        <p class=\"text-success\" ng-show=\"status === 'Saved'\"><i>All changes are saved.</i></p>\r" +
    "\n" +
    "        <p class=\"text-danger\" ng-show=\"status === 'Failed'\"><i>Changes are not saved, operation failed.</i></p>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  </form>\r" +
    "\n" +
    "</div>"
  );

}]);

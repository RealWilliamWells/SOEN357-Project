$('.sub-form-parent').append(
    "<link rel=\"stylesheet\" href=\"../../shared/sub-form/sub-form.css\">\n" +
    "<div class=\"service-name-text\">\n" +
    "                Service&nbspName\n" +
    "            </div>\n" +
    "            <div class=\"service-name-input-parent\">\n" +
    "                <input type=\"text\" class=\"service-name-input\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"start-of-cycle-text\">\n" +
    "                Start&nbspof&nbspCycle\n" +
    "            </div>\n" +
    "            <select id=\"start-of-cycle-dropdown-day\" class=\"start-of-cycle-options\">\n" +
    "                <option class=\"start-of-cycle-options\" value=\"Day-default\">Day</option>\n" +
    "            </select>\n" +
    "            <script>\n" +
    "               for (let i = 1; i<32; i++) {\n" +
    "                   $('#start-of-cycle-dropdown-day').append('<option class=\"start-of-cycle-options\" value=\"' + i + '\" >' + i + '</option>');" +
    "               }\n" +
    "             </script>" +
    "            <select id=\"start-of-cycle-dropdown-month\" class=\"start-of-cycle-options\">\n" +
    "                <option class=\"start-of-cycle-options\" value=\"month-default\">Month</option>\n" +
    "                <option class=\"start-of-cycle-options\" value=\"January\">January</option>\n" +
    "                <option class=\"start-of-cycle-options\" value=\"February\">February</option>\n" +
    "                <option class=\"start-of-cycle-options\" value=\"March\">March</option>\n" +
    "                <option class=\"start-of-cycle-options\" value=\"April\">April</option>\n" +
    "                <option class=\"start-of-cycle-options\" value=\"May\">May</option>\n" +
    "                <option class=\"start-of-cycle-options\" value=\"June\">June</option>\n" +
    "                <option class=\"start-of-cycle-options\" value=\"July\">July</option></option>\n" +
    "                <option class=\"start-of-cycle-options\" value=\"August\">August</option>\n" +
    "                <option class=\"start-of-cycle-options\" value=\"September\">September</option>\n" +
    "                <option class=\"start-of-cycle-options\" value=\"October\">October</option>\n" +
    "                <option class=\"start-of-cycle-options\" value=\"November\">November</option>\n" +
    "                <option class=\"start-of-cycle-options\" value=\"December\">December</option>\n" +
    "            </select>\n" +
    "            <select id=\"start-of-cycle-dropdown-year\" class=\"start-of-cycle-options\">\n" +
    "                <option class=\"start-of-cycle-options\" value=\"year-default\">Year</option>\n" +
    "            </select>\n" +
    "            <script>\n" +
    "               for (let i = 2022; i>1999; i--) {\n" +
    "                   $('#start-of-cycle-dropdown-year').append('<option class=\"start-of-cycle-options\" value=\"' + i + '\" >' + i + '</option>');" +
    "               }\n" +
    "             </script>" +
    "\n" +
    "            <div class=\"reminder-text\">\n" +
    "                Reminder\n" +
    "            </div>\n" +
    "            <select id=\"reminder-dropdown\" class=\"start-of-cycle-options\">\n" +
    "                <option class=\"start-of-cycle-options\" value=\"Day-default\">Select Time</option>\n" +
    "            </select>\n" +
    "            <script>\n" +
    "               for (let i = 1; i<61; i++) {\n" +
    "                   $('#reminder-dropdown').append('<option class=\"start-of-cycle-options\" value=\"' + i + ' Days\" >' + i + ' Days</option>');" +
    "               }\n" +
    "             </script>" +
    "\n" +
    "            <div class=\"price-text\">\n" +
    "                Price&nbsp($)\n" +
    "            </div>\n" +
    "            <div class=\"price-input-parent\">\n" +
    "                <input type=\"text\" class=\"price-input\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"recurrence-text\">\n" +
    "                Recurrence&nbspof&nbspSubscription\n" +
    "            </div>\n" +
    "            <select id=\"recurrence-dropdown\" class=\"start-of-cycle-options\">\n" +
    "                <option class=\"start-of-cycle-options\" value=\"Day-default\">Recurrence</option>\n" +
    "                <option class=\"start-of-cycle-options\" value=\"Weekly\">Weekly</option>\n" +
    "                <option class=\"start-of-cycle-options\" value=\"Monthly\">Monthly</option>\n" +
    "                <option class=\"start-of-cycle-options\" value=\"Yearly\">Yearly</option>\n" +
    "            </select>\n" +
    "\n" +
    "            <button class=\"add-sub-button\">\n" +
        "            <a href='../home/home.html'></a>\n" +
    "            </button>\n" +
    "\n" +
    "            <button class=\"cancel-button\">\n" +
    "            </button>\n" +
    "            <div class=\"cancel-text\">\n" +
    "                Cancel\n" +
    "            </div>"
);
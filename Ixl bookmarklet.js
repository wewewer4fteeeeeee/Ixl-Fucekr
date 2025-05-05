(function() {
    // Function to get the value of a specific cookie
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    // Function to set a new cookie with modified values
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Expire after `days` days
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    // Function to modify the 'report_global_options' cookie
    function modifyReportGlobalOptions() {
        // Get the 'report_global_options' cookie
        let reportGlobalOptions = getCookie('report_global_options');

        if (reportGlobalOptions) {
            console.log('Original Cookie:', reportGlobalOptions);

            // Modify the cookie's parameters
            reportGlobalOptions = reportGlobalOptions.replace(/low_grade=[^;]+/, 'low_grade=-1');
            reportGlobalOptions = reportGlobalOptions.replace(/high_grade=[^;]+/, 'high_grade=1');

            // Save the updated cookie back to the browser
            setCookie('report_global_options', reportGlobalOptions, 7); // 7 days expiry
            console.log('Updated Cookie:', reportGlobalOptions);

            // Custom message
            alert('Changed. Have fun being retarded - Exploding Car');
        } else {
            console.log('Cookie not found.');
            alert('Cookie "report_global_options" not found.');
        }
    }

    // Modify the cookie immediately when the script is loaded
    modifyReportGlobalOptions();
})();

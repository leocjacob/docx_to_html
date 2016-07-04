//Function to include search labels with URL for help module
$(document).ready(function(){
                    var source = [ { value: "help-ums-work.html",
                 label: "Product Overview"
               },
               { value: "faqs.html",
                 label: "Sending Alerts"
               },
               { value: "accessing-administration.html",
                 label: "Accessing administrator's functions"
               },
               { value: "adding-organization.html",
                 label: "Adding Organizations"
               },
               { value: "modifying-organization.html",
                 label: "Modifying Organizations"
               },
               { value: "setting-date-time.html",
                   label: "Setting date and time format"
               },
               { value: "assigning-role.html",
                   label: "Assigning Roles"
               },
               { value: "modifying-roles.html",
                   label: "Modifying Roles"
               },
               { value: "adding-users.html",
                   label: "Adding Users"
               },
               { value: "modifying-users.html",
                   label: "Modifying Users"
               },
               { value: "changing-password.html",
                   label: "Changing Password"
               },
               { value: "logging-required-settings.html",
                   label: "Logging in and Required Settings"
               },
               { value: "using-dashboard.html",
                   label: "Using the Dashboard"
               },
               { value: "Required-elements-Send-alerts.html",
                   label: "Configuring Required Elements to Send Alerts"
               },
               { value: "creating-recipients-groups.html",
                   label: "Creating Recipients' Groups"
               },
               { value: "adding-recipients.html",
                   label: "Adding Recipients to a Group"
               },
               { value: "setting-up-areas.html",
                   label: "Setting up Areas on the Map to Send Alerts"
               },
               { value: "message-send-alerts.html",
                   label: "Configuring Message to Send Alerts"
               },
               { value: "channels-send-alerts.html",
                   label: "Configuring Channels to Send Alerts"
               },
               { value: "alert-templates-sending-alerts.html",
                   label: "Creating Alert Templates and Sending Alerts"
               },
               { value: "monitoring-alerts.html",
                   label: "Monitoring Alerts"
               },
               { value: "generating-reports.html",
                   label: "Generating Reports"
               },
               { value: "troubleshooting.html",
                   label: "Troubleshooting"
               },
               { value: "glossary.html",
                   label: "Glossary"
               }
             ];

                $("input#autocomplete").autocomplete({
                    source: source,
                    select: function( event, ui ) { 
                        window.location.href = ui.item.value;
                    },
                    messages: {
                        noResults: '',
                        results: function() {}
                    }
                });
            });

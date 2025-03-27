// Helper functions for form validation
const validators = {
    email: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    },
    password: function (value) {
        return value && value.length >= 8;
    },
    required: function (value) {
        return !!value;
    }
};

// Function to create Account Settings form
function createAccountSettings() {
    return {
        id: "accountSettings",
        view: "form",
        scroll: true,
        elements: [
            { view: "template", template: "<h2>Account Settings</h2>", type: "header", height: 100 },
            {
                view: "text",
                id: "username",
                name: "username",
                label: "Username",
                required: true,
                invalidMessage: "Username is required",
                labelWidth: 150
            },
            {
                view: "text",
                id: "email",
                name: "email",
                label: "Email",
                required: true,
                validate: validators.email,
                invalidMessage: "Please enter a valid email address",
                labelWidth: 150
            },
            {
                view: "text",
                id: "currentPassword",
                name: "currentPassword",
                type: "password",
                label: "Current Password",
                labelWidth: 150
            },
            {
                view: "text",
                id: "newPassword",
                name: "newPassword",
                type: "password",
                label: "New Password",
                validate: validators.password,
                invalidMessage: "Password must be at least 8 characters",
                labelWidth: 150
            },
            {
                view: "text",
                id: "confirmPassword",
                name: "confirmPassword",
                type: "password",
                label: "Confirm Password",
                labelWidth: 150,
                validate: function (value) {
                    const newPassword = $$("newPassword").getValue();
                    return value === newPassword;
                },
                invalidMessage: "Passwords do not match"
            },
            {
                cols: [
                    {},
                    {
                        view: "button",
                        id: "saveAccountBtn",
                        value: "Save Changes",
                        css: "webix_primary",
                        width: 150,
                        click: function () {
                            const form = $$("accountSettings");
                            if (form.validate()) {
                                webix.message({
                                    type: "success",
                                    text: "Account settings saved successfully!"
                                });
                            }
                        }
                    }
                ]
            }
        ],
        rules: {
            username: validators.required,
            email: validators.email
        }
    };
}

// Function to create Notification Settings form
function createNotificationSettings() {
    return {
        id: "notificationsSettings",
        view: "form",
        scroll: true,
        elements: [
            { view: "template", template: "<h2>Notification Settings</h2>", type: "header", height: 100 },
            {
                view: "label",
                label: "Email Notifications"
            },
            {
                view: "checkbox",
                id: "emailUpdates",
                labelRight: "Receive product updates via email",
                labelWidth: 0
            },
            {
                view: "checkbox",
                id: "emailNews",
                labelRight: "Receive newsletter",
                labelWidth: 0
            },
            {
                view: "label",
                label: "Push Notifications"
            },
            {
                view: "checkbox",
                id: "pushMessages",
                labelRight: "New messages",
                labelWidth: 0
            },
            {
                view: "checkbox",
                id: "pushUpdates",
                labelRight: "System updates",
                labelWidth: 0
            },
            {
                view: "richselect",
                id: "notificationFrequency",
                label: "Notification Frequency",
                options: [
                    { id: "realtime", value: "Real-time" },
                    { id: "daily", value: "Daily digest" },
                    { id: "weekly", value: "Weekly digest" }
                ],
                labelWidth: 150
            },
            {
                cols: [
                    {},
                    {
                        view: "button",
                        id: "saveNotificationsBtn",
                        value: "Save Changes",
                        css: "webix_primary",
                        width: 150,
                        click: function () {
                            webix.message({
                                type: "success",
                                text: "Notification settings saved successfully!"
                            });
                        }
                    }
                ]
            }
        ]
    };
}

// Function to create Theme Settings form
function createThemeSettings() {
    return {
        id: "themesSettings",
        view: "form",
        scroll: true,
        elements: [
            { view: "template", template: "<h2>Theme Settings</h2>", type: "header", height: 100 },
            {
                view: "richselect",
                id: "themeColor",
                label: "Color Theme",
                options: [
                    { id: "light", value: "Light" },
                    { id: "dark", value: "Dark" },
                    { id: "blue", value: "Blue" },
                    { id: "contrast", value: "High Contrast" }
                ],
                labelWidth: 150,
                on: {
                    onChange: function (newValue) {
                        // In a real app, this would change the theme
                        if (newValue === "contrast") {
                            document.body.classList.add("high-contrast-mode");
                        } else {
                            document.body.classList.remove("high-contrast-mode");
                        }
                    }
                }
            },
            {
                view: "richselect",
                id: "fontSize",
                label: "Font Size",
                options: [
                    { id: "small", value: "Small" },
                    { id: "medium", value: "Medium" },
                    { id: "large", value: "Large" }
                ],
                labelWidth: 150
            },
            {
                view: "richselect",
                id: "fontFamily",
                label: "Font Family",
                options: [
                    { id: "system", value: "System Default" },
                    { id: "serif", value: "Serif" },
                    { id: "sans", value: "Sans-serif" },
                    { id: "mono", value: "Monospace" }
                ],
                labelWidth: 150
            },
            {
                view: "richselect",
                id: "layoutDensity",
                label: "Layout Density",
                options: [
                    { id: "compact", value: "Compact" },
                    { id: "normal", value: "Normal" },
                    { id: "comfortable", value: "Comfortable" }
                ],
                labelWidth: 150
            },
            {
                cols: [
                    {},
                    {
                        view: "button",
                        id: "saveThemeBtn",
                        value: "Save Changes",
                        css: "webix_primary",
                        width: 150,
                        click: function () {
                            webix.message({
                                type: "success",
                                text: "Theme settings saved successfully!"
                            });
                        }
                    }
                ]
            }
        ]
    };
}

// Function to create Privacy Settings form
function createPrivacySettings() {
    return {
        id: "privacySettings",
        view: "form",
        scroll: true,
        elements: [
            { view: "template", template: "<h2>Privacy Settings</h2>", type: "header", height: 100 },
            {
                view: "label",
                label: "Profile Visibility"
            },
            {
                view: "richselect",
                id: "profileVisibility",
                label: "Who can see my profile",
                options: [
                    { id: "public", value: "Public" },
                    { id: "contacts", value: "Contacts Only" },
                    { id: "private", value: "Private" }
                ],
                labelWidth: 180
            },
            {
                view: "label",
                label: "Data Sharing"
            },
            {
                view: "checkbox",
                id: "shareAnalytics",
                labelRight: "Share anonymous usage analytics",
                labelWidth: 0
            },
            {
                view: "checkbox",
                id: "shareDiagnostics",
                labelRight: "Share diagnostic information",
                labelWidth: 0
            },
            {
                view: "checkbox",
                id: "personalized",
                labelRight: "Allow personalized recommendations",
                labelWidth: 0
            },
            {
                view: "label",
                label: "Cookie Settings"
            },
            {
                view: "checkbox",
                id: "essentialCookies",
                labelRight: "Essential cookies (required)",
                labelWidth: 0,
                disabled: true,
                value: 1
            },
            {
                view: "checkbox",
                id: "functionalCookies",
                labelRight: "Functional cookies",
                labelWidth: 0
            },
            {
                view: "checkbox",
                id: "marketingCookies",
                labelRight: "Marketing cookies",
                labelWidth: 0
            },
            {
                cols: [
                    {},
                    {
                        view: "button",
                        id: "savePrivacyBtn",
                        value: "Save Changes",
                        css: "webix_primary",
                        width: 150,
                        click: function () {
                            webix.message({
                                type: "success",
                                text: "Privacy settings saved successfully!"
                            });
                        }
                    }
                ]
            }
        ]
    };
}

// Initialize Webix when the DOM is ready
webix.ready(function () {
    // Enable responsive features
    webix.ui.fullScreen();

    // Define the main layout structure
    const ui = webix.ui({
        container: "app-container",
        id: "preferences",
        type: "space",
        responsive: true,
        css: "app_layout",

        rows: [
            // Header
            {
                view: "toolbar",
                padding: 10,
                height: 60,
                hidden: webix.env.mobile, // Hide header in mobile view
                elements: [
                    { view: "label", label: "User Preferences", css: "app_header" },
                    { view: "icon", icon: "wxi-user", tooltip: "User Profile" },
                    {
                        view: "toggle",
                        id: "accessibilityToggle",
                        offLabel: "Standard Mode",
                        onLabel: "High Contrast",
                        width: 150,
                        on: {
                            onChange: function (newValue) {
                                if (newValue) {
                                    document.body.classList.add("high-contrast-mode");
                                } else {
                                    document.body.classList.remove("high-contrast-mode");
                                }
                            }
                        }
                    }
                ]
            },

            // Main content area
            {
                type: "space",
                padding: 0,
                responsive: "preferences",
                cols: [
                    // Sidebar with preference categories
                    {
                        view: "sidebar",
                        id: "sidebar",
                        width: 250,
                        minWidth: 120,
                        css: "app-sidebar",
                        data: [
                            { id: "account", icon: "wxi-user", value: "Account Settings" },
                            { id: "notifications", icon: "wxi-sync", value: "Notification Settings" },
                            { id: "themes", icon: "wxi-pencil", value: "Theme Settings" },
                            { id: "privacy", icon: "wxi-alert", value: "Privacy Settings" }
                        ],
                        on: {
                            onAfterSelect: function (id) {
                                $$(id + "Settings").show();
                            }
                        }
                    },

                    // Multiview for different settings sections
                    {
                        view: "multiview",
                        animate: false,
                        minWidth: 300,
                        cells: [
                            createAccountSettings(),
                            createNotificationSettings(),
                            createThemeSettings(),
                            createPrivacySettings()
                        ]
                    }
                ]
            }
        ]
    });

    // Select default view
    $$("sidebar").select("account");

    // Initial resize call to set up correct layout
    webix.ui.resize();

    // Add keyboard navigation support
    webix.UIManager.addHotKey("tab", function (view) {
        webix.UIManager.setFocus(webix.UIManager.getNext(view));
        return false;
    });
});

// Export functions and validators for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validators,
        createAccountSettings,
        createNotificationSettings,
        createThemeSettings,
        createPrivacySettings
    };
}

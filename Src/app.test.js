const { validators, createAccountSettings, createNotificationSettings, createThemeSettings, createPrivacySettings } = require('./app');

// Import the app.js file to run the code
require('./app');

describe('Validators', () => {
    describe('email validator', () => {
        test('valid email addresses', () => {
            expect(validators.email('test@example.com')).toBe(true);
            expect(validators.email('user.name+tag@example.co.uk')).toBe(true);
        });

        test('invalid email addresses', () => {
            expect(validators.email('invalid-email')).toBe(false);
            expect(validators.email('missing@domain')).toBe(false);
            expect(validators.email('@missinguser.com')).toBe(false);
        });
    });

    describe('password validator', () => {
        test('valid passwords', () => {
            expect(validators.password('12345678')).toBe(true);
            expect(validators.password('strongPassword123')).toBe(true);
        });

        test('invalid passwords', () => {
            expect(validators.password('1234567')).toBe(false);
            expect(validators.password('654645')).toBe(false);
        });
    });

    describe('required validator', () => {
        test('required field validation', () => {
            expect(validators.required('some value')).toBe(true);
            expect(validators.required('')).toBe(false);
            expect(validators.required(null)).toBe(false);
            expect(validators.required(undefined)).toBe(false);
        });
    });
});

describe('Settings Forms', () => {
    test('createAccountSettings returns correct form configuration', () => {
        const accountSettings = createAccountSettings();

        expect(accountSettings).toHaveProperty('id', 'accountSettings');
        expect(accountSettings).toHaveProperty('view', 'form');
        expect(accountSettings.elements).toBeInstanceOf(Array);

        // Check for specific form elements
        const elements = accountSettings.elements;
        expect(elements).toContainEqual(expect.objectContaining({
            view: 'text',
            id: 'username',
            name: 'username',
            required: true
        }));
        expect(elements).toContainEqual(expect.objectContaining({
            view: 'text',
            id: 'email',
            name: 'email',
            required: true
        }));
    });

    test('createNotificationSettings returns correct form configuration', () => {
        const notificationSettings = createNotificationSettings();

        expect(notificationSettings).toHaveProperty('id', 'notificationsSettings');
        expect(notificationSettings).toHaveProperty('view', 'form');

        const elements = notificationSettings.elements;
        expect(elements).toContainEqual(expect.objectContaining({
            view: 'checkbox',
            id: 'emailUpdates'
        }));
        expect(elements).toContainEqual(expect.objectContaining({
            view: 'richselect',
            id: 'notificationFrequency'
        }));
    });

    test('createThemeSettings returns correct form configuration', () => {
        const themeSettings = createThemeSettings();

        expect(themeSettings).toHaveProperty('id', 'themesSettings');
        expect(themeSettings).toHaveProperty('view', 'form');

        const elements = themeSettings.elements;
        expect(elements).toContainEqual(expect.objectContaining({
            view: 'richselect',
            id: 'themeColor'
        }));
        expect(elements).toContainEqual(expect.objectContaining({
            view: 'richselect',
            id: 'fontSize'
        }));
    });

    test('createPrivacySettings returns correct form configuration', () => {
        const privacySettings = createPrivacySettings();

        expect(privacySettings).toHaveProperty('id', 'privacySettings');
        expect(privacySettings).toHaveProperty('view', 'form');

        const elements = privacySettings.elements;
        expect(elements).toContainEqual(expect.objectContaining({
            view: 'richselect',
            id: 'profileVisibility'
        }));
        expect(elements).toContainEqual(expect.objectContaining({
            view: 'checkbox',
            id: 'shareAnalytics'
        }));
    });
});

describe('App Initialization', () => {
    test('webix.ready should be called', () => {
        expect(webix.ready).toHaveBeenCalled();
    });

    test('webix.ui.fullScreen should be called', () => {
        expect(webix.ui.fullScreen).toHaveBeenCalled();
    });
});
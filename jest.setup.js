// Mock the webix global object
global.webix = {
    ready: jest.fn((callback) => callback()),
    ui: jest.fn(),
    env: {
        mobile: false,
    },
    UIManager: {
        addHotKey: jest.fn(),
        setFocus: jest.fn(),
        getNext: jest.fn(),
    },
    message: jest.fn(),
};

// Mock the fullScreen and resize functions separately
global.webix.ui.fullScreen = jest.fn();
global.webix.ui.resize = jest.fn();

// Mock the $$ function
global.$$ = jest.fn((id) => ({
    select: jest.fn(),
    show: jest.fn(),
    getValue: jest.fn(),
}));

// Mock the document object
global.document = {
    body: {
        classList: {
            add: jest.fn(),
            remove: jest.fn()
        }
    }
};

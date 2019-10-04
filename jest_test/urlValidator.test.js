const validator = require('../src/client/js/urlValidator');

test("This URL is valid", () => {
    expect(validator('https://blog.udacity.com/2019/09/introducing-the-new-front-end-and-full-stack-web-developer-nanodegree-programs.html')).toBe(true);
});

test("This URL is not valid", () => {
    expect(validator('aabbccdd')).toBe(false);
});
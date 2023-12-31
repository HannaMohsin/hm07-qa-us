// eslint-disable-next-line no-undef
const config = require('../config');

test('Should return 200 status code', async () => {
    let actualStatusCode;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits?cardId=1`);
        actualStatusCode = response.status;
      } catch (error) {
        console.error(error);
      }

        expect(actualStatusCode).toBe(200);
});

/*body test */
test('Response should contain For picnic', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits?cardId=1`);
        actualResponseBody = await response.json();
        console.log(actualResponseBody);
    } catch (error) {
        console.error(error);
    }

      expect(actualResponseBody[0].name).toBe("For picnic");
});

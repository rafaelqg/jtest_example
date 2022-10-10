const {findAll} = require("./MySQLDataSource");

test('findAll', () => {
  findAll( (records) => {expect(records.length > 0 ).toBe(true)} );
});
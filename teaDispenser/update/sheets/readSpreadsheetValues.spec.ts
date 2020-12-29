import readSpreadsheetValues from './readSpreadsheetValues';

describe('readSpreadsheetValues', () => {
  it('works', async () => {
    const actual = await readSpreadsheetValues('1gL6-Pn5su4BWbxwHBAXaHOugk-XiY6DKj7qrLVpFwyg');

    expect(actual).toEqual({
      participants: [
        { columnIndex: 8, participantName: 'yz', items: [] },
        {
          columnIndex: 10,
          participantName: '参与者3',
          items: [
            { rowIndex: 4, price: 110000, amount: 1 },
            { rowIndex: 8, price: 5500000, amount: 2 },
            { rowIndex: 10, price: 6500000, amount: 3 },
            { rowIndex: 16, price: 2222222, amount: 4 },
          ],
        },
        {
          columnIndex: 12,
          participantName: '参与者4',
          items: [
            { rowIndex: 2, price: 149000, amount: 2 },
            { rowIndex: 5, price: 150000, amount: 30 },
            { rowIndex: 11, price: 80000000, amount: 10 },
            { rowIndex: 14, price: 19500, amount: 2 },
            { rowIndex: 15, price: 234999, amount: 4 },
            { rowIndex: 18, price: 9997777, amount: 10 },
          ],
        },
      ],
      spareItems: [
        { rowIndex: 2, price: 149000, amount: 1 },
        { rowIndex: 3, price: 650000, amount: 2 },
        { rowIndex: 4, price: 110000, amount: 2 },
        { rowIndex: 5, price: 150000, amount: 36 },
        { rowIndex: 6, price: 2000, amount: 5 },
        { rowIndex: 7, price: 13000, amount: 5 },
        { rowIndex: 8, price: 5500000, amount: 15 },
        { rowIndex: 9, price: 450000, amount: 5 },
        { rowIndex: 10, price: 6500000, amount: 7 },
        { rowIndex: 11, price: 80000000, amount: 32 },
        { rowIndex: 12, price: 19000, amount: 21 },
        { rowIndex: 13, price: 19000, amount: 3 },
        { rowIndex: 14, price: 19500, amount: 1 },
        { rowIndex: 15, price: 234999, amount: 4 },
        { rowIndex: 16, price: 2222222, amount: 11 },
        { rowIndex: 17, price: 1850000, amount: 1 },
        { rowIndex: 18, price: 9997777, amount: 4 },
      ],
    });
  });
});

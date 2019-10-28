import Account from './account.js';

const testAccount = new Account("Test Account", 0);

beforeEach(() => {
    testAccount.balance = 0;
});

test('test Account deposit', () => {
    expect(testAccount.accountDeposit(1)).toEqual(1);
    expect(testAccount.accountDeposit(10)).toEqual(11);
    expect(testAccount.accountDeposit(101)).toEqual(112);
});

test('test Account withdraw', () => {
    testAccount.balance = 25;
    expect(testAccount.accountWithdraw(0)).toEqual(25);
    expect(testAccount.accountWithdraw(5)).toEqual(20);
    expect(testAccount.accountWithdraw(17)).toEqual(3);
});

test('test Account balance', () => {
    expect(testAccount.accountBalance()).toEqual(0);
    testAccount.balance = 15;
    expect(testAccount.accountBalance()).toEqual(15);
    testAccount.balance = -7;
    expect(testAccount.accountBalance()).toEqual(-7);
});

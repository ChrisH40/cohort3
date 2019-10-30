import { Account, AccountController } from './account.js';

const testAccount = new Account("Test Account", 0);


beforeEach(() => {
    testAccount.startingBalance = 0;
});

test('test Account deposit', () => {
    expect(testAccount.accountDeposit(1)).toEqual(1);
    expect(testAccount.accountDeposit(10)).toEqual(11);
    expect(testAccount.accountDeposit(101)).toEqual(112);
});

test('test Account withdraw', () => {
    testAccount.startingBalance = 25;
    expect(testAccount.accountWithdraw(0)).toEqual(25);
    expect(testAccount.accountWithdraw(5)).toEqual(20);
    expect(testAccount.accountWithdraw(17)).toEqual(3);
});

test('test Account balance', () => {
    expect(testAccount.accountBalance()).toEqual(0);
    testAccount.startingBalance = 15;
    expect(testAccount.accountBalance()).toEqual(15);
    testAccount.startingBalance = -7;
    expect(testAccount.accountBalance()).toEqual(-7);
});

test('test Account Controller add new account', () => {
    const testAccountController = new AccountController("Sarah");
    expect(testAccountController).toEqual({ "listArray": [], "listName": "Sarah" });
    testAccountController.addAccount("checking", 50);
    expect(testAccountController.listArray).toEqual([{ "accountName": "checking", "startingBalance": 50 }]);
    testAccountController.addAccount("checking", 50);
    expect(testAccountController.listArray).toEqual(
        [{ "accountName": "checking", "startingBalance": 50 },
        { "accountName": "checking", "startingBalance": 50 }]);
});

test('test totalBalances of accounts', () => {
    const testAccountController = new AccountController("Sarah");
    testAccountController.addAccount("checking", 50);
    testAccountController.addAccount("checking", 50);
    testAccountController.addAccount("checking", 50);
    testAccountController.addAccount("checking", 50);
    expect(testAccountController.totalBalances()).toBe(200);
});

test('test lowestBalance of accounts', () => {
    const testAccountController = new AccountController("Sarah");
    testAccountController.addAccount("checking", 6);
    testAccountController.addAccount("savings", 50);
    testAccountController.addAccount("new car", 100);
    testAccountController.addAccount("luxories", 54);
    expect(testAccountController.lowestBalance()).toBe("checking");
});

test('test highestBalance of accounts', () => {
    const testAccountController = new AccountController("Sarah");
    testAccountController.addAccount("checking", 6);
    testAccountController.addAccount("savings", 50);
    testAccountController.addAccount("new car", 100);
    testAccountController.addAccount("luxories", 54);
    expect(testAccountController.highestBalance()).toBe("new car");
});

test('test deleteAccount', () => {
    const testAccountController = new AccountController("Sarah");
    testAccountController.addAccount("checking", 51);
    testAccountController.addAccount("savings", 50);
    testAccountController.addAccount("new car", 53);
    testAccountController.addAccount("luxories", 54);
    expect(testAccountController.deleteAccount("savings"))
        .toEqual(
            [
                { "accountName": "checking", "startingBalance": 51 },
                { "accountName": "new car", "startingBalance": 53 },
                { "accountName": "luxories", "startingBalance": 54 }
            ]
        );
});

test('test highestBalance of accounts', () => {
    const testAccountController = new AccountController("Sarah");
    testAccountController.addAccount("checking", 6);
    testAccountController.addAccount("savings", 50);
    testAccountController.addAccount("new car", 100);
    testAccountController.addAccount("luxories", 54);
    expect(testAccountController.findAccount("savings")).toBe(1);
});

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
    testAccountController.addAccount("checking", 50, 1);
    expect(testAccountController.listArray).toEqual([{ "accountName": "checking", "startingBalance": 50, "accountID": 1 }]);
    testAccountController.addAccount("checking", 50, 2);
    expect(testAccountController.listArray).toEqual(
        [{ "accountName": "checking", "startingBalance": 50, "accountID": 1 },
        { "accountName": "checking", "startingBalance": 50, "accountID": 2 }]);
});

test('test totalBalances of accounts', () => {
    const testAccountController = new AccountController("Sarah");
    testAccountController.addAccount("checking", 50, 1);
    testAccountController.addAccount("checking", 50, 2);
    testAccountController.addAccount("checking", 50, 3);
    testAccountController.addAccount("checking", 50, 4);
    expect(testAccountController.totalBalances()).toBe(200);
});

test('test lowestBalance name of accounts', () => {
    const testAccountController = new AccountController("Sarah");
    testAccountController.addAccount("checking", 6, 1);
    testAccountController.addAccount("savings", 50, 2);
    testAccountController.addAccount("new car", 100, 3);
    testAccountController.addAccount("luxories", 54, 4);
    expect(testAccountController.lowestBalance()).toBe("checking");
});

test('test lowestBalance number of accounts', () => {
    const testAccountController = new AccountController("Sarah");
    testAccountController.addAccount("checking", 6, 1);
    testAccountController.addAccount("savings", 50, 2);
    testAccountController.addAccount("new car", 100, 3);
    testAccountController.addAccount("luxories", 54, 4);
    expect(testAccountController.lowestBalanceNumber()).toBe("$6.00");
});

test('test highestBalance name of accounts', () => {
    const testAccountController = new AccountController("Sarah");
    testAccountController.addAccount("checking", 6, 1);
    testAccountController.addAccount("savings", 50, 2);
    testAccountController.addAccount("new car", 100, 3);
    testAccountController.addAccount("luxories", 54, 4);
    expect(testAccountController.highestBalance()).toBe("new car");
});

test('test highestBalance number of accounts', () => {
    const testAccountController = new AccountController("Sarah");
    testAccountController.addAccount("checking", 6, 1);
    testAccountController.addAccount("savings", 50, 2);
    testAccountController.addAccount("new car", 100, 3);
    testAccountController.addAccount("luxories", 54, 4);
    expect(testAccountController.highestBalanceNumber()).toBe("$100.00");
});

test('test deleteAccount', () => {
    const testAccountController = new AccountController("Sarah");
    testAccountController.addAccount("checking", 51, 1);
    testAccountController.addAccount("savings", 50, 2);
    testAccountController.addAccount("new car", 53, 3);
    testAccountController.addAccount("luxories", 54, 4);
    expect(testAccountController.deleteAccount(2))
        .toEqual(
            [
                { "accountName": "checking", "startingBalance": 51, "accountID": 1 },
                { "accountName": "new car", "startingBalance": 53, "accountID": 3 },
                { "accountName": "luxories", "startingBalance": 54, "accountID": 4 }
            ]
        );
});

test('test findAccount name to array index', () => {
    const testAccountController = new AccountController("Sarah");
    testAccountController.addAccount("checking", 6, 1);
    testAccountController.addAccount("savings", 50, 2);
    testAccountController.addAccount("new car", 100, 3);
    testAccountController.addAccount("luxories", 54, 4);
    expect(testAccountController.findAccount(2)).toBe(1);
});

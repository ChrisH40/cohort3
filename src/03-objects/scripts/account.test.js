import { Account, AccountController } from './account.js';

test('test Account deposit withdraw balance', () => {
    const testAccount = new Account("Test Account", 0);
    expect(testAccount.accountDeposit(1)).toEqual(1);
    expect(testAccount.accountBalance()).toEqual(1);
    expect(testAccount.accountDeposit(10)).toEqual(11);
    expect(testAccount.accountBalance()).toEqual(11);
    expect(testAccount.accountDeposit(101)).toEqual(112);
    expect(testAccount.accountBalance()).toEqual(112);
    expect(testAccount.accountWithdraw(12)).toEqual(100);
    expect(testAccount.accountBalance()).toEqual(100);
    expect(testAccount.accountWithdraw(5)).toEqual(95);
    expect(testAccount.accountBalance()).toEqual(95);
    expect(testAccount.accountWithdraw(17)).toEqual(78);
    expect(testAccount.accountBalance()).toEqual(78);
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

test('test totalBalances lowestBalance name and number highestBalance name and number of accounts', () => {
    const testAccountController = new AccountController("Sarah");
    expect(testAccountController.totalBalances()).toBe(0);
    testAccountController.addAccount("checking", 50, 1);
    expect(testAccountController.totalBalances()).toBe(50);
    testAccountController.addAccount("savings", 100, 2);
    expect(testAccountController.lowestBalance()).toBe("checking");
    expect(testAccountController.lowestBalanceNumber()).toBe("$50.00");
    expect(testAccountController.highestBalance()).toBe("savings");
    expect(testAccountController.highestBalanceNumber()).toBe("$100.00");
    testAccountController.addAccount("cat food", 7, 3);
    testAccountController.addAccount("new boat", 128, 4);
    expect(testAccountController.totalBalances()).toBe(285);
    expect(testAccountController.lowestBalance()).toBe("cat food");
    expect(testAccountController.lowestBalanceNumber()).toBe("$7.00");
    expect(testAccountController.highestBalance()).toBe("new boat");
    expect(testAccountController.highestBalanceNumber()).toBe("$128.00");
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

test('test findAccount key to array index', () => {
    const testAccountController = new AccountController("Sarah");
    testAccountController.addAccount("checking", 6, 1);
    testAccountController.addAccount("savings", 50, 2);
    testAccountController.addAccount("new car", 100, 3);
    testAccountController.addAccount("luxories", 54, 4);
    expect(testAccountController.findAccount(2)).toBe(1);
});

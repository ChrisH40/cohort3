import { Account, AccountController } from './account.js';

test('test Account deposit withdraw balance', () => {
    const testAccount = new Account(1, "Test Account", 0);
    expect(testAccount.accountDeposit(1)).toEqual(1);
    expect(testAccount.accountBalance(testAccount)).toEqual(1);
    expect(testAccount.accountDeposit(10)).toEqual(11);
    expect(testAccount.accountBalance(testAccount)).toEqual(11);
    expect(testAccount.accountDeposit(101)).toEqual(112);
    expect(testAccount.accountBalance(testAccount)).toEqual(112);
    expect(testAccount.accountWithdraw(12)).toEqual(100);
    expect(testAccount.accountBalance(testAccount)).toEqual(100);
    expect(testAccount.accountWithdraw(5)).toEqual(95);
    expect(testAccount.accountBalance(testAccount)).toEqual(95);
    expect(testAccount.accountWithdraw(17)).toEqual(78);
    expect(testAccount.accountBalance(testAccount)).toEqual(78);
});

test('test Account Controller add new account', () => {
    const testAccountController = new AccountController("Sarah");
    expect(testAccountController).toEqual({ "listArray": [], "listName": "Sarah", "counter": 0 });
    testAccountController.addAccount("checking", 50);
    expect(testAccountController.listArray).toEqual([{ "accountName": "checking", "key": 1, "startingBalance": 50 }]);
    testAccountController.addAccount("checking", 50);
    expect(testAccountController.listArray).toEqual(
        [{ "key": 1, "accountName": "checking", "startingBalance": 50 },
        { "key": 2, "accountName": "checking", "startingBalance": 50 }]);
});

test('test totalBalances lowestBalance name and number highestBalance name and number of accounts', () => {
    const testAccountController = new AccountController("Sarah");
    expect(testAccountController.totalBalances(testAccountController.listArray)).toBe("$0.00");
    testAccountController.addAccount("checking", 50);
    expect(testAccountController.totalBalances(testAccountController.listArray)).toBe("$50.00");
    testAccountController.addAccount("savings", 100);
    expect(testAccountController.lowestBalance(testAccountController.listArray)).toBe("checking");
    expect(testAccountController.lowestBalanceNumber(testAccountController.listArray)).toBe("$50.00");
    expect(testAccountController.highestBalance(testAccountController.listArray)).toBe("savings");
    expect(testAccountController.highestBalanceNumber(testAccountController.listArray)).toBe("$100.00");
    testAccountController.addAccount("cat food", 7);
    testAccountController.addAccount("new boat", 128);
    expect(testAccountController.totalBalances(testAccountController.listArray)).toBe("$285.00");
    expect(testAccountController.lowestBalance(testAccountController.listArray)).toBe("cat food");
    expect(testAccountController.lowestBalanceNumber(testAccountController.listArray)).toBe("$7.00");
    expect(testAccountController.highestBalance(testAccountController.listArray)).toBe("new boat");
    expect(testAccountController.highestBalanceNumber(testAccountController.listArray)).toBe("$128.00");
});

test('test deleteAccount', () => {
    const testAccountController = new AccountController("Sarah");
    testAccountController.addAccount("checking", 51);
    testAccountController.addAccount("savings", 50);
    testAccountController.addAccount("new car", 53);
    testAccountController.addAccount("luxuries", 54);
    expect(testAccountController.deleteAccount(testAccountController.listArray, 2))
        .toEqual([
            
            { "accountName": "checking", "key": 1, "startingBalance": 51 },
            { "accountName": "new car", "key": 3, "startingBalance": 53 },
            { "accountName": "luxuries", "key": 4, "startingBalance": 54 }
        ]
        );
});

test('test findAccount key to array index', () => {
    const testAccountController = new AccountController("Sarah");
    testAccountController.addAccount("checking", 6);
    testAccountController.addAccount("savings", 50);
    testAccountController.addAccount("new car", 100);
    testAccountController.addAccount("luxories", 54);
    expect(testAccountController.findAccount(testAccountController.listArray, 2)).toBe(1);
});

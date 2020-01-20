
tax_brackets = [
    {
        "lowest_income": 0.00,
        "greatest_income": 47630.00,
        "line2": 0.00,
        "line4": 0.15,
        "line6": 0.00,
    },
    {
        "lowest_income": 47630.01,
        "greatest_income": 95259.00,
        "line2": 47630.00,
        "line4": 0.205,
        "line6": 7144.50,
    },
    {
        "lowest_income": 95259.01,
        "greatest_income": 147667.00,
        "line2": 95259.00,
        "line4": 0.26,
        "line6": 16908.445,
    },
    {
        "lowest_income": 147667.01,
        "greatest_income": 210371.00,
        "line2": 147667.00,
        "line4": 0.29,
        "line6": 30534.525,
    },
    {
        "lowest_income": 210371.01,
        "line2": 210371.00,
        "line4": 0.33,
        "line6": 48718.685,
    }
]


def bracket_establisher(income):
    if type(income) != float and type(income) != int or income < 0:
        return f"{income} is not a valid number! Please re-enter."
    else:
        income = float(income)
        if income > tax_brackets[0]['lowest_income'] and income <= tax_brackets[0]['greatest_income']:
            return tax_owing_calc(income, tax_brackets[0]['line2'], tax_brackets[0]['line4'], tax_brackets[0]['line6'])
        if income >= tax_brackets[1]['lowest_income'] and income <= tax_brackets[1]['greatest_income']:
            return tax_owing_calc(income, tax_brackets[1]['line2'], tax_brackets[1]['line4'], tax_brackets[1]['line6'])
        if income >= tax_brackets[2]['lowest_income'] and income <= tax_brackets[2]['greatest_income']:
            return tax_owing_calc(income, tax_brackets[2]['line2'], tax_brackets[2]['line4'], tax_brackets[2]['line6'])
        if income >= tax_brackets[3]['lowest_income'] and income <= tax_brackets[3]['greatest_income']:
            return tax_owing_calc(income, tax_brackets[3]['line2'], tax_brackets[3]['line4'], tax_brackets[3]['line6'])
        if income >= tax_brackets[4]['lowest_income']:
            return tax_owing_calc(income, tax_brackets[4]['line2'], tax_brackets[4]['line4'], tax_brackets[4]['line6'])


def tax_owing_calc(income, base, rate, tax):
    tax_owing = (((income - base) * rate)) + tax
    return f"Your tax owing is ${tax_owing: .2f}."

# --- Exercises (done a long time ago...) originally from 'cohort3/src/javascript/syntax.js' and done in JavaScript ---

def xNumber(num):
    if type(num) == float or type(num) == int:
        return f"{num} is a number."
    else:
        return f"{num} is not a number."

def xString(string):
    if type(string) == str:
        return f"{string} is a string."
    else:
        return f"{string} is not a string."

def xBoolean(val1, val2):
    return val1 == val2

def xArray(num):
    my_array = ["one", "two", ["three", "four", ["five", "six"]]]
    if num == 1:
        return my_array[0]
    if num == 2:
        return my_array[1]
    if num == 3:
        return my_array[2][0]
    if num == 4:
        return my_array[2][1]
    if num == 5:
        return my_array[2][2][0]
    if num == 6:
        return my_array[2][2][1]
    else:
        return "Please enter a number between 1 and 6"

def objectDictionary(name):
    fellowship = {
        "frodo": "the ringbearer",
        "sam": "loyal friend",
        "pippin": "fool of a took",
        "merry": "buckleberry ferry!",
        "aragorn": "strider",
        "boromir": "taken by the ring",
        "gandalf": "fallen into shadow",
        "gimli": "son of gloin",
        "legolas": "something draws near.. i can feel it"
    }
    name = name.lower()
    if name in fellowship:
        return fellowship[name]
    else:
        return "Enter the first name of a member of the fellowship!"

def xUndefined():
    return None

def sampleIfElse(num):
    if type(num) == int or type(num) == float:
        if num > 0:
            return f"{num} is greater than 0."
        if num < 0:
            return f"{num} is less than 0."
        if num == 0:
            return f"{num} is equal to 0."
    else:
        return "Please enter a number."
        
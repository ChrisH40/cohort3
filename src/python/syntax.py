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


def xList(num):
    my_list = ["one", "two", ["three", "four", ["five", "six"]]]
    if num == 1:
        return my_list[0]
    if num == 2:
        return my_list[1]
    if num == 3:
        return my_list[2][0]
    if num == 4:
        return my_list[2][1]
    if num == 5:
        return my_list[2][2][0]
    if num == 6:
        return my_list[2][2][1]
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
    if type(num) != int or type(num) != float:
        return "Please enter a number."
    if num > 0:
        return f"{num} is greater than 0."
    if num < 0:
        return f"{num} is less than 0."
    else:
        return f"{num} is equal to 0."


def functionParameters(para1, para2):
    if para1 != (int or float) or para2 != (int or float):
        return "Please enter a number!"
    else:
        return para1 + para2


def functionReturns(person, place, thing):
    return f"Hello, my name is {person} and I am going to {place} to get a {thing}."

# When we started taking this course they said at some point we'd look back at some of our first code and wonder what we were thinking.
# It was right about here that I really started to experience this feeling...


def listAddToFront(add):
    another_array = ["2nd item", "3rd item", "4th item"]
    another_array.insert(0, add)
    if another_array[1] == "2nd item":
        return "Item added to front of array."
    else:
        return "This somehow didn't work..."


def listAddToEnd(add):
    yet_another_array = [1, 2, 3, 4]
    yet_another_array.append(add)
    if add == yet_another_array[4]:
        return "Item added to end of array! Hooray!"
    else:
        return "This also somehow didn't work..."


def listUpdateValues(value):
    update_value_array = [1, 2, 3, 4, 5]
    update_value_array[4] = value
    return update_value_array[4]


def loopsFor(xlist):
    for num in xlist:
        if num != (int or float):
            return "Enter a list of numbers!"
        else:
            list_times_two = [num * 2 for num in xlist]
            return list_times_two


def loopsForIn():
    hobbit = {
        "name": "bilbo baggins ",
        "neededtransitionalfiller": "lives in the ",
        "residence": "shire ",
        "neededitagain": "and is ",
        "age": 111,
        "andonemoretime": " years old."
    }
    baggins = ""
    for value in hobbit.values():
        baggins += str(value)
    return baggins


def loopsWhile(num):
    if type(num) != (int or float):
        return "Enter a number!"
    elif num < 0:
        x = 0
        while x < 10:
            x += 1
        return x
    elif num == 0:
        return 0
    elif num > 0:
        x = 100
        while x > 90:
            x -= 1
        return x


def loopsDoWhile():
    num = 0
    while num < 4:
        num += 1
    return num


def loopsForEach():
    my_list = [1, 2, 3, 4, 5]
    my_next_list = []
    for x in my_list:
        def forEach(x):
            my_next_list.append(x * 2)
        forEach(x)
    return my_next_list


def dictionaryDeclare(val1, val2):
    new_dictionary = {"first": val1, "second": val2}
    return f"The first value in your new object is {new_dictionary['first']}, and the second value is {new_dictionary['second']}"


def dictionaryLookupKeyRetriveValue(num):
    number_text = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten"
    }
    if (type(num) != (int or float)) or (num < 1 or num > 10):
        return "Enter a number between 1 and 10!"
    else:
        return number_text[num]

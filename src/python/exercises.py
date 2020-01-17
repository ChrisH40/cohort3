# --- Exercises from "UDEMY – REST APIs with Flask and Python" Course --- 

# --- Coding Exerise 7: @classmethod and @staticmethod ---
# 1. The franchise method, which takes in a store as argument. It should return a new store object, with a name equal to the argument + " = franchise".

# 2. The store_details method, which also takes in a store as argument. It should return a string representing the argument.

class Store:
    def __init__(self, name):
        self.name = name
        self.items = []

    def add_item(self, name, price):
        self.items.append({
            'name': name,
            'price': price
        })

    def stock_price(self):
        total = 0
        for item in self.items:
            total += item['price']
        return total

    @classmethod
    def franchise(cls, store):
        new_store = cls(store.name + " - franchise")
        return new_store

    @staticmethod
    def store_details(store):
        return "{}, total stock price: {}".format(store.name, int(store.stock_price()))


# --- Coding Exerise 6: Classes and objects ---
# 1. The __init__ method, which should take an argument, name. It should initialize self.name to be the argument, and self.items to be an empty list.

# 2. The add_item method, which should append a dictionary representing an item to the store's items property. The dictionary should have keys name and price.

# 3. The stock_price method, which should add up each item price inside self.items to come up with a total, and return that.

class StoreTwo:
    def __init__(self, name):
        self.name = name
        self.items = []
    
    def add_item(self, name, price):
        item = {"name": name, "price": price}
        self.items.append(item)

    def stock_price(self):
        return sum([item["price"] for item in self.items])


# --- Coding Exerise 5: Dictionaries and students ---
# This coding exercise has three parts. See them outlined in detail in the coding exercise as comments.
# Create a variable called student, with a dictionary.
# The dictionary must contain three keys: 'name', 'school', and 'grades'.
# The values for each must be 'Jose', 'Computing', and a tuple with the values 66, 77, and 88.
student = {"name": "Jose", "school": "Computing", "grades": (66, 77, 88)}

# Assume the argument, data, is a dictionary.
# Modify the grades variable so it accesses the 'grades' key of the data dictionary.
def average_grade(data):
    grades =   data["grades"]
    return sum(grades) / len(grades)

# Implement the function below
# Given a list of students (a list of dictionaries), calculate the average grade received on an exam, for the entire class
# You must add all the grades of all the students together
# You must also count how many grades there are in total in the entire list
def average_grade_all_students(student_list):
    total = 0
    count = 0
    for student in student_list:
        total += sum(student["grades"])
        count += len(student["grades"])

    return total / count


# --- Coding Exerise 4: Functions ---
# 1. Complete the function return_42, by making it return 42.

def return_42():
   return int(42)

# 2. Create a function, which must be called my_function, which takes two arguments and returns the result of the two arguments multiplied together.

def my_function(num1, num2):
    return (num1 * num2)


# --- Coding Exerise 3: Lists, tuples and sets ---
# 1. Modify the code so that th evens list contains only the even numbers of the numbers list. You do not need to print anything.

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

evens = []
for number in numbers:
    if (number % 2) == 0:
        evens.append(number)

# 2. For part 2, add a clause to the if statement such that if the user's input is "q", your program prints "Quit".

user_input = input("Enter your choice: ")
if user_input == "a":
        print("Add")
elif user_input == "q":
        print("Quit")


# --- Coding Exerise 2: Lists, tuples and sets ---
# 1. Create a list, called my_list, with three numbers. The total of the numbers added together should be 100.

my_list = [10, 30, 60]

print(sum(my_list))

# 2. Create a tuple, called my_tuple, with a single value in it.

my_tuple = 15,

# 3. Modify the variable set2 so that set1.intersection(set2) returns {5, 77, 9, 12}

set1 = {14, 5, 9, 31, 12, 77, 67, 8}
set2 = {5, 77, 9, 12}

print(set1.intersection(set2))



# --- Coding Exerise 1: Variables ---
# 1. Create two variables, var1 and var2, both with the same value. It can be anything you want.

var1 = "hello world"
var2 = "hello world"

# 2. Create two variables, num1 and num2, that multiply together to give 16.

num1 = 4
num2 = 4

print(num1 * num2)

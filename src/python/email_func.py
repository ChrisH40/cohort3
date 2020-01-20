
def email(fname, lname):
    if type(fname) != str or type(lname) != str:
        return "Please enter your first and last name."
    else:
        return f"{fname}.{lname}@evolveu.ca"
import pytest
import email_func

def test_email():
    assert email_func.email_func(1, 2) == "Please enter your first and last name."
    assert email_func.email_func(1, "lastname") == "Please enter your first and last name."
    assert email_func.email_func("firstname", 2) == "Please enter your first and last name."
    assert email_func.email_func("larry", "shumlich") == "larry.shumlich@evolveu.ca"
    assert email_func.email_func("heiko", "peters") == "heiko.peters@evolveu.ca" 
    assert email_func.email_func("chew", "bacca") == "chew.bacca@evolveu.ca"
    

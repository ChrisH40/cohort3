import pytest
import email_func

def test_email():
    assert email_func.email(1, 2) == "Please enter your first and last name."
    assert email_func.email(1, "lastname") == "Please enter your first and last name."
    assert email_func.email("firstname", 2) == "Please enter your first and last name."
    assert email_func.email("larry", "shumlich") == "larry.shumlich@evolveu.ca"
    assert email_func.email("heiko", "peters") == "heiko.peters@evolveu.ca" 
    assert email_func.email("chew", "bacca") == "chew.bacca@evolveu.ca"
    

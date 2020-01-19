import pytest
import syntax

# --- Some example tests for syntax.py ---

class TestClass:
    @pytest.fixture(autouse=True) # --- don't necessarily need this --- 
    def setup(self):
        print("\nSetup Example")
        yield
        print("\nTeardown Example")

    def test_xNumber(self, setup): # --- setup overridden with autouse above ---
        assert syntax.xNumber(3) == "3 is a number." 
        assert syntax.xNumber("test") == "test is not a number."

    @pytest.mark.usefixtures("setup") # --- overridden with autouse above ---
    def test_xString(self):
        assert syntax.xString("test") == "test is a string." 
        assert syntax.xString(3) == "3 is not a string."

    def test_xBoolean(self):
        assert syntax.xBoolean(2, 2) == True
        assert syntax.xBoolean(3, 2) == False
        assert syntax.xBoolean("hello world", "hello world") == True
        assert syntax.xBoolean("hello world", "goodbye world") == False

    def test_xList(self):
        assert syntax.xList(1) == "one"
        assert syntax.xList(2) == "two"
        assert syntax.xList(3) == "three"
        assert syntax.xList(4) == "four"
        assert syntax.xList(5) == "five"
        assert syntax.xList(6) == "six"
import pytest
import cantax


def test_bracket_establisher():
    assert cantax.bracket_establisher(
        "test") == "test is not a valid number! Please re-enter."
    assert cantax.bracket_establisher(
        -1) == "-1 is not a valid number! Please re-enter."
    assert cantax.bracket_establisher(
        False) == "False is not a valid number! Please re-enter."
    assert cantax.bracket_establisher(
        {}) == "{} is not a valid number! Please re-enter."
    assert cantax.bracket_establisher(
        1) == "Your tax owing is $ 0.15."
    assert cantax.bracket_establisher(
        20000.25) == "Your tax owing is $ 3000.04."
    assert cantax.bracket_establisher(
        47630.00) == "Your tax owing is $ 7144.50."
    assert cantax.bracket_establisher(
        47630.01) == "Your tax owing is $ 7144.50."
    assert cantax.bracket_establisher(
        95259) == "Your tax owing is $ 16908.44."
    assert cantax.bracket_establisher(
        95259.01) == "Your tax owing is $ 16908.45."
    assert cantax.bracket_establisher(
        125000.25) == "Your tax owing is $ 24641.17."
    assert cantax.bracket_establisher(
        147667) == "Your tax owing is $ 30534.53."
    assert cantax.bracket_establisher(
        147667.01) == "Your tax owing is $ 30534.53."
    assert cantax.bracket_establisher(
        185000.25) == "Your tax owing is $ 41361.17."
    assert cantax.bracket_establisher(
        210371) == "Your tax owing is $ 48718.68."
    assert cantax.bracket_establisher(
        210371.01) == "Your tax owing is $ 48718.69."
    assert cantax.bracket_establisher(
        250000) == "Your tax owing is $ 61796.25."

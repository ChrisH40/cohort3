import pytest
import os
import dir_reader

# TBC - Create a temporary/mock dir for testing.


def test_DirReader():
    reader = dir_reader.DirReader("/code/cohort3/src/01-getting-started/")
    assert reader.name == "/code/cohort3/src/01-getting-started/"
    assert reader.files_sizes(
        ) == {'index.css': 1.56, 'index.html': 10.61, 'background.jpg': 92.11, 'functions.js': 1.99, 
            'functions.test.js': 2.68, 'main.js': 6.99, 'play.test.js': 0.09, 'taxcalculator.js': 0.33, 'taxcalculator.test.js': 1.26}
    assert reader.summary(
        ) == "Directory /code/cohort3/src/01-getting-started/ Summary: \n- 9 files \n- 117.62 KB total size"

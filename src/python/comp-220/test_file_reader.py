import pytest
import file_reader

# TBC - Create a temporary/mock file for testing, instead of "dummy-syntax.js".


def test_FileReader():
    reader = file_reader.FileReader(
        "/code/cohort3/src/python/comp-220/dummy-syntax.js")
    assert reader.line_count() == 14
    assert reader.word_count('else') == 3
    assert reader.char_count() == 307
    assert reader.file_summary(
        "else") == "File /code/cohort3/src/python/comp-220/dummy-syntax.js has: \n- 14 lines \n- 307 characters (incl. spaces) \n- 3 instances of the word 'else'"
    reader = file_reader.FileReader("/code/cohort3/src/javascript/syntax.js")
    assert reader.line_count() == 247
    assert reader.word_count('else') == 10
    assert reader.char_count() == 7626
    assert reader.file_summary(
        "else") == "File /code/cohort3/src/javascript/syntax.js has: \n- 247 lines \n- 7626 characters (incl. spaces) \n- 10 instances of the word 'else'"

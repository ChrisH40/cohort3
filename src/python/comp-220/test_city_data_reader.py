import pytest
import city_data_reader


def test_CityDataReader():
      report = city_data_reader.city_data_reader("/code/cohort3/src/python/comp-220/Census_by_Community_2018.csv")
      with open(report.name, "r") as test_report:
            text = test_report.readlines()
            assert len(text) == 35
            assert text[2] == 'File: /code/cohort3/src/python/comp-220/Census_by_Community_2018.csv\n'
            assert text[10] == 'Residential                    1263734\n'
            assert text[19] == 'CENTRE                         199977\n'
            assert text[32] == 'CLASS / SECTOR Lines           12\n'
      test_report.close()


      
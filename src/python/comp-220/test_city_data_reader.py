import pytest
import city_data_reader


def test_city_data_reader():
      data = city_data_reader.city_data_reader("/code/cohort3/src/python/comp-220/Census_by_Community_2018.csv")
      assert data[0] == {'Residential': 1263734, 'Industrial': 922, 'Major Park': 0, 'Residual Sub Area': 0}
      assert data[1] == {'CENTRE': 199977, 'SOUTH': 227345, 'NORTHEAST': 185534, 'NORTHWEST': 174126, 'NORTH': 160502, 'SOUTHEAST': 135009, 'EAST': 57666, 'WEST': 124497}


def test_city_report_generator():
      data = [
            {'Residential': 1263734, 'Industrial': 922, 'Major Park': 0, 'Residual Sub Area': 0},
            {'CENTRE': 199977, 'SOUTH': 227345, 'NORTHEAST': 185534, 'NORTHWEST': 174126, 'NORTH': 160502, 'SOUTHEAST': 135009, 'EAST': 57666, 'WEST': 124497}
      ]
      report = city_data_reader.city_report_generator(data, "/code/cohort3/src/python/comp-220/Census_by_Community_2018.csv")
      with open(report.name, "r") as test_report:
            text = test_report.readlines()
            assert len(text) == 35
            assert text[2] == 'File: /code/cohort3/src/python/comp-220/Census_by_Community_2018.csv\n'
            assert text[10] == 'Residential                    1263734\n'
            assert text[19] == 'CENTRE                         199977\n'
            assert text[32] == 'CLASS / SECTOR Lines           12\n'
      test_report.close()


      
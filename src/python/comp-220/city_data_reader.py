import csv


def city_data_reader(file):
    with open(file, "r") as csvfile:
        datareader = csv.reader(csvfile)
        header = next(datareader)
        CLASS = header.index('CLASS')
        SECTOR = header.index('SECTOR')
        RES_CNT = header.index('RES_CNT')
        class_totals = dict()
        sect_totals = dict()
        data = []
        for row in datareader:
            class_totals[row[CLASS]] = class_totals.get(row[CLASS], 0) + int(row[RES_CNT])
            sect_totals[row[SECTOR]] = sect_totals.get(row[SECTOR], 0) + int(row[RES_CNT])
        data.append(class_totals)
        data.append(sect_totals)
    csvfile.close()
    city_report_generator(data, file)
    return data


def city_report_generator(data, file):
    with open('report.txt', 'w') as report:
        total_report_rows = 0
        report.write("*** CITY DATA READER ***\n")
        report.write(f"\nFile: {file}\n")
        report.write("\n====================\n")
        report.write("\nReport:\n")
        report.write('{:30} {}'.format("\nCLASS", "RES_CNT Total\n\n"))
        for key, value in data[0].items():
            report.write('{:30} {}'.format(f"{key}", f"{value}\n"))
            total_report_rows += 1
        report.write("\n-----\n")
        report.write('{:30} {}'.format("\nSECTOR", "RES_CNT Total\n\n"))
        for key, value in data[1].items():
            report.write('{:30} {}'.format(f"{key}", f"{value}\n"))
            total_report_rows += 1
        report.write("\n-----\n")
        report.write('{:30} {}'.format("\nREPORT", "Total\n\n"))
        report.write('{:30} {}'.format("CLASS / SECTOR Lines", f"{total_report_rows}\n"))
        report.write("\n====================\n")
    report.close()
    return report


city_data_reader("/code/cohort3/src/python/comp-220/Census_by_Community_2018.csv")

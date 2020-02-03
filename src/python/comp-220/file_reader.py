
class FileReader:

    def __init__(self, file):
        self.xfile_name = file
        self.xfile = open(file, 'r').readlines()

    def line_count(self):
        lines = len(self.xfile)
        return lines

    # TBC - count number of instances of else statement syntax vs. "else" words.
    def word_count(self, word):
        words = 0
        for line in self.xfile:
            words += line.count(word)
        return words

    def char_count(self):
        chars = 0
        for line in self.xfile:
            chars += len(line)
        return chars

    def file_summary(self, word):
        name = self.xfile_name
        lines = self.line_count()
        chars = self.char_count()
        words = self.word_count(word)
        return f"File {name} has: \n- {lines} lines \n- {chars} characters \n- {words} instances of the word '{word}'"

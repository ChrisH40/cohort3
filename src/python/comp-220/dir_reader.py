import os


class DirReader:

    def __init__(self, xdir):
        self.name = xdir
        self.contents = self.files_sizes()

    # TBC - organize "files_sizes" to display proper file structure (ie - objects within objects for sub-directories)
    def files_sizes(self):
        files_sizes = dict()
        for (root, directory, files) in os.walk(self.name, topdown=True, followlinks=False):
            for f in files:
                fp = os.path.join(root, f)
                size = os.path.getsize(fp)
                files_sizes[f] = round((size / 1024), 2)
        self.contents = files_sizes
        return files_sizes

    def summary(self):
        files_sizes = self.contents
        count = len(files_sizes)
        total = 0
        for xfile in files_sizes:
            total += files_sizes[xfile]
        summary = f'Directory {self.name} Summary: \n- {count} files \n- {total} KB total size'
        print(summary)
        return summary
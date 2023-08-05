from tkinter import *


class DetailsInput:
    def __init__(self, api_token='', api_secret=''):
        self.top = Tk()
        self.top.title('Collection Download')
        self.top.geometry("300x220+500+500")
        self._api_token = StringVar()
        self._api_secret = StringVar()
        self._collection = StringVar()
        self._recursive = IntVar()
        self.create_ui_components(api_token, api_secret)
        self.top.mainloop()

    def create_ui_components(self, api_token, api_secret):
        L1 = Label(self.top, text="API Token")
        L1.pack()
        E1 = Entry(self.top, bd=5, textvariable=self._api_token)
        E1.insert(END, api_token)
        E1.pack()
        L2 = Label(self.top, text="API Secret")
        L2.pack()
        E2 = Entry(self.top, bd=5, textvariable=self._api_secret)
        E2.insert(END, api_secret)
        E2.pack()
        L3 = Label(self.top, text="Dataset ID OR Collection ID")
        L3.pack()
        E3 = Entry(self.top, bd=5, textvariable=self._collection)
        E3.insert(END, 'N:collection:0eed07e7-d147-4a2c-9411-1ea8f9ceffa5')
        E3.pack()
        E4 = Checkbutton(self.top, bd=5, text="Download all files recursively", variable=self._recursive)
        E4.select()
        E4.pack()
        B = Button(self.top, text='Retrieve all files', command=self.finish)
        B.pack()

    def finish(self):
        self.api_token   = self._api_token.get()
        self.api_secret  = self._api_secret.get()
        self.collection  = self._collection.get()
        self.recursive = self._recursive.get()
        self.top.destroy()

    def values(self):
        return self.api_token, self.api_secret, self.collection, self.recursive


import tkinter as tk

LARGE_FONT = ("sans-serif", 12)

class StartPage(tk.Frame):
    def __init__(self, parent, controller):

        tk.Frame.__init__(self, parent)
        label = tk.Label(self, text="This is the start page", font=LARGE_FONT)
        label.pack(pady=10,padx=10)
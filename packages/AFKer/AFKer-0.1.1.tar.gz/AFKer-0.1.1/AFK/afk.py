import time
import keyboard
import random
from sys import exit
from signal import signal, SIGINT
import csv
import pyautogui

numIntervals = 0
intervalLength = 0

def yn_checker(char):
    char = char.lower()
    if char == 'y' or char == 'n':
        return True
    return False


# handle ctrl-C
def handler(signal_recieved, frame):
    if (intervalLength == 0):
        print("Goodbye!")
        exit()

    print("You were AFK for about", numIntervals, "intervals of", intervalLength, "seconds!")
    exit()

signal(SIGINT, handler)

def move(intervals):
    intervals = int(intervals)
    global numIntervals
    time.sleep(intervals)
    keyboard.press('w')
    time.sleep(0.2)
    keyboard.release('w')
    keyboard.press('s')
    time.sleep(0.2)
    keyboard.release('s')
    numIntervals += 1

def respawnGame(x, y):
    pyautogui.moveTo(x, y)
    pyautogui.click()

def afk(interval=None, x=None, y=None, profile=None):
    global intervalLength
    intervalLength = interval

    # called w/out with profile
    if profile is None:
        if x is None or y is None:
            while True:
                move(interval)
        else:
            while True:
                move(interval)
                if numIntervals % interval == 0:
                    respawnGame(x,y)

    # called with profile
    else:
        csvfile = open('profile.csv', 'r', newline='')
        data = csv.reader(csvfile)
        for row in data:
            if row[0] == profile:
                interval = int(row[1])
                intervalLength = interval
                x = int(row[2])
                y = int(row[3])
                break
        if x == 0 and y == 0:
            while True:
                move(interval)
        else:
            while True:
                move(interval)
                if numIntervals % interval == 0:
                    respawnGame(x,y)

if __name__ == "__main__":
    # set up a new profile
    newProf = input("Would you like to create a new game profile?(y/n): ")
    while yn_checker(newProf) == False:
        newProf = input("Would you like to create a new game profile?(y/n): ")

    if (newProf.lower() == 'y'):
        profName = input("Name your profile: ")

        intervals = input("How long would you like to wait between movments in seconds?: ")
        while intervals.isnumeric() == False:
            intervals = input("Please input an integer: ")

        respawn = input("Would you like to check for a respawn button?(y/n): ")
        while yn_checker(respawn) == False:
            respawn = input("Would you like to check for a respawn button?(y/n): ")

        y = 0
        x = 0
        if (respawn.lower() == 'y'):
            print("If (0,0) is the top left corner of your screen, about where do you think the button is?")
            x = input("x coord: ")
            while x.isnumeric() == False:
                x = input("Please input an integer: ")
            y = input("y coord: ")
            while y.isnumeric() == False:
                y = input("Please input an integer: ")
            x = int(x)
            y = int(y)
            pyautogui.moveTo(x,y,duration=1)
            good = input("Is this correct?(y/n): ")
            while yn_checker(good) == False:
                good = input("Is this correct?(y/n): ")

            while (good.lower() != 'y'):
                x = input("x coord: ")
                while x.isnumeric() == False:
                    x = input("Please input an integer: ")
                y = input("y coord: ")
                while y.isnumeric() == False:
                    y = input("Please input an integer: ")
                x = int(x)
                y = int(y)
                pyautogui.moveTo(x,y,duration=1)
                good = input("Is this correct?(y/n): ")
                while yn_checker(good) == False:
                    good = input("Is this correct?(y/n): ")

        data = {}
        data = [profName,intervals,x,y]
        csvfile = open('profile.csv', 'a', newline='')
        writer = csv.writer(csvfile)
        writer.writerow(data)
        print("When you're back, press ctrl+C to quit.")
        intervals = int(intervals)
        afk(interval=intervals, x=x, y=y)

    else:
        loadProf = input("Would you like to load a profile?(y/n): ")
        while yn_checker(loadProf) == False:
            loadProf = input("Would you like to load a profile?(y/n): ")
        if loadProf.lower() == 'y':
            profName = input("What is the name of your profile? (case sensitive): ")
            print("When you're back, press ctrl+C to quit.")
            afk(profile=profName)

        intervals = input("How long would you like the intervals between movments to be in seconds?: ")
        while intervals.isnumeric() == False:
            intervals = input("Please enter an integer: ")

        respawn = input("Would you like to check for respawn?(y/n): ")
        while yn_checker(respawn) == False:
            respawn = input("Would you like to check for respawn?(y/n): ")

        ycoord = 0
        xcoord = 0
        if (respawn.lower() == 'y'):
            print("If (0,0) is the top left corner of your screen, about where do you think the button is?")
            xcoord = input("x coord: ")
            while xcoord.isnumeric() == False:
                xcoord = input("Please input an integer: ")
            ycoord = input("y coord: ")
            while ycoord.isnumeric() == False:
                ycoord = input("Please input an integer: ")

            xcoord = int(xcoord)
            ycoord = int(ycoord)
            pyautogui.moveTo(xcoord,ycoord,duration=1)
            good = input("Is this correct?(y/n): ")
            while yn_checker(good) == False:
                good = input("Is this correct?(y/n): ")
            while (good.lower() != 'y'):
                xcoord = input("x coord: ")
                while xcoord.isnumeric() == False:
                    xcoord = input("Please input an integer: ")
                ycoord = input("y coord: ")
                while ycoord.isnumeric() == False:
                    ycoord = input("Please input an integer: ")
                xcoord = int(xcoord)
                ycoord = int(ycoord)
                pyautogui.moveTo(xcoord,ycoord,duration=1)

                good = input("Is this correct?(y/n): ")
                while yn_checker(good) == False:
                    good = input("Is this correct?(y/n): ")
            print("When you're back, press ctrl+C to quit.")
            afk(interval=intervals, x=xcoord, y=ycoord)
        print("When you're back, press ctrl+C to quit.")
        afk(interval=intervals)



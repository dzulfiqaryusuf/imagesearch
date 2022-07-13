import pyautogui, time
word = 'test'
time.sleep(5)
for i in range(200):
  pyautogui.typewrite(word)
  pyautogui.press("enter")
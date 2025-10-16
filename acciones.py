import pyautogui as pa
import time as t

t.sleep(10)
pa.click()
t.sleep(10)
shot = pa.screenshot("remoto.jpg",region=(50,50,1000,900))
t.sleep(3)
pa.moveTo(90,120)
pa.click()
t.sleep(10)
pa.click()

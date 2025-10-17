import pyautogui as pa
import time as t
import os
total,tiempo=30,0
while tiempo<total:
    os.system("cls")
    print(f"Faltan {total-tiempo} min para la Accion")
    t.sleep(60)
    tiempo+=1

pa.click()
t.sleep(10)
shot = pa.screenshot("remoto2.jpg",region=(50,50,1000,900))
t.sleep(3)
print("mover a git")
pa.moveTo(90,120)
pa.click()
t.sleep(10)
pa.click()

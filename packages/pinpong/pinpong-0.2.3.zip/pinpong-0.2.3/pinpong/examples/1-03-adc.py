# -*- coding: utf-8 -*-

#实验效果：打印UNO板A0口模拟值
#接线：使用windows或linux电脑连接一块arduino主控板，主控板A0接一个旋钮模块
import time
from pinpong.pinpong import PinPong,Pin,ADC  #导入ADC类实现模拟输入

board = PinPong("uno")  #初始化，选择板型和端口号，不输入端口号则进行自动识别
#board = PinPong("uno","COM36")  #windows下指定端口初始化
#board = PinPong("uno","/dev/ttyACM0")   #linux下指定端口初始化

adc0 = ADC(board,Pin(board, Pin.A0)) #将Pin传入ADC中实现模拟输入

while True:
  v = adc0.read()  #读取A0口模拟信号数值
  print("A0=", v)
  time.sleep(0.5)

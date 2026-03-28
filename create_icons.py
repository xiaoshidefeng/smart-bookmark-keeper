#!/usr/bin/env python3

# 创建16x16图标
import os
from PIL import Image

# 创建16x16透明图标
icon16 = Image.new('RGBA', (16, 16), (0, 0, 0, 0))
icon16.save('icons/icon16.png')

# 创建48x48蓝色圆形图标
icon48 = Image.new('RGBA', (48, 48), (0, 0, 0, 0))
for x in range(48):
    for y in range(48):
        distance_squared = (x - 24) ** 2 + (y - 24) ** 2
        if distance_squared <= 20 ** 2:  # 半径为20像素的圆
            icon48.putpixel((x, y), (68, 138, 255, 255))  # 蓝色
icon48.save('icons/icon48.png')

# 创建128x128蓝色圆形图标
icon128 = Image.new('RGBA', (128, 128), (0, 0, 0, 0))
for x in range(128):
    for y in range(128):
        distance_squared = (x - 64) ** 2 + (y - 64) ** 2
        if distance_squared <= 50 ** 2:  # 半径为50像素的圆
            icon128.putpixel((x, y), (68, 138, 255, 255))  # 蓝色
icon128.save('icons/icon128.png')

print("Icons created successfully!")
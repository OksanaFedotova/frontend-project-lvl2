# Вычислитель отличий 

### Hexlet tests and linter status:
[![Actions Status](https://github.com/OksanaFedotova/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/OksanaFedotova/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/OksanaFedotova/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage)](https://codeclimate.com/github/OksanaFedotova/frontend-project-lvl2/test_coverage)
![workflow status](https://github.com/OksanaFedotova/frontend-project-lvl2/actions/workflows/linter.yml/badge.svg)

Сli приложение, сравнивающее два файла в формате json или yml. Вывод возможен в одном из трёх форматов: plain text, stylish и json.

### Инструкция по установке: 
```
# Клонировать
git clone https://github.com/OksanaFedotova/frontend-project-lvl2.git
# Установить приложение
make install
# Установить симлинк для приложения 
npm link
# Справка по утилите
gendiff -h
```
### Сравнение двух плоских файлов, формат - json, формат вывода - по умолчанию (stylish)
![asciicast](https://asciinema.org/a/xh96eVi8bnWaArxgNUOonH7X2.svg) https://asciinema.org/a/xh96eVi8bnWaArxgNUOonH7X2

### Сравнение двух файлов со вложенной структурой, формат - yml, формат вывода - по умолчанию (stylish)
![asciicast](https://asciinema.org/a/K4NhRrKwDeEjmKKfG60c2qYqy.svg) https://asciinema.org/a/K4NhRrKwDeEjmKKfG60c2qYqy

### Сравнение двух файлов со вложенной структурой, формат - json, формат вывода - plain
![asciicast](https://asciinema.org/a/rHiUtD8YUbNKvHLJSAhI5xbiA.svg) https://asciinema.org/a/rHiUtD8YUbNKvHLJSAhI5xbiA

### Сравнение двух файлов со вложенной структурой, формат - yml, формат вывода - json
![asciicast](https://asciinema.org/a/dAKXDUFRrBkh7AnGh6xNp2lLT.svg) https://asciinema.org/a/dAKXDUFRrBkh7AnGh6xNp2lLT

# LIMONADE.JS

## .convert_format(Number, format-(+String))
### format
 - **kilo ==> k -  (number/1000)**
 - **mega ==> m -  (number/1000000)**
 - **giga ==> g -  (number/1000000000)** 
```javascript
LEMONADE.convert_format("1233", "K-likes");
[1.233, 1.2, "likes"] 
```
## .transliteration_text(String)
```javascript
LEMONADE.transliteration_text("Привет");
"Privet"
```
## .validation_of(Number)
```javascript
LEMONADE.validation_of("101"); return 101
LEMONADE.validation_of(1000);  return 1000
LEMONADE.validation_of("1e1"); return 0 false
```

Copyright (c) 2017 Gerasimov Stepan (Lemonade)

# LIMONADEJS (beta)

Преобразует число от **1** до **9999999999** в число с приставкой **kilo mega giga** с дополнительной настройкой вывода

# LEMONADE.convert_format(Number, Types, Display)

```javascript
LEMONADE.convert_format("1233", "Mass", "K-likes");
return [1.233, 1.2, "likes"] // kilo (number/1000)

LEMONADE.convert_format("12333333", "Ma", "m-likes");
return [12.333333, 12.3, "likes"] // mega (number/1000000)

LEMONADE.convert_format("1000000001", "Ma", "g-likes");
[1.000000001, 1, "likes"] // giga (number/1000000000)
```
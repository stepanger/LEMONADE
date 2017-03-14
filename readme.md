# LIMONADEJS (beta)

```javascript
LEMONADE.convert_format("1233", "K-likes");
return [1.233, 1.2, "likes"] // kilo (number/1000)

LEMONADE.convert_format("12333333", m-likes");
return [12.333333, 12.3, "likes"] // mega (number/1000000)

LEMONADE.convert_format("1000000001", "g-likes");
return [1.000000001, 1, "likes"] // giga (number/1000000000)

LEMONADE.transliteration_text("Привет");
return "Privet"

```
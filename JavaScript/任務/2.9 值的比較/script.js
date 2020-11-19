/*
?   以下表達式的執行結果是？
*/

5 > 4                   // * = true     數字間比較大小，顯然得true。
"apple" > "pineapple"   // * = false    按詞典順序比較，得false。"a"比"p"小。
"2" > "12"              // * = true     與第2題同理，首位字符"2"大於"1"。
undefined == null       // * = true     null只與undefined互等。
undefined === null      // * = false    嚴格相等模式下，類型不同得false。
null == "\n0\n"         // * = false    與第4題同理，null只與undefined相等。
null === +"\n0\n"       // * = false    不同類型嚴格不相等。
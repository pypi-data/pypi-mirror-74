#### Chromedriver

You need to download chromedriver and include the ChromeDriver location in your PATH environment variable first.

#### Getting faceit friends

```
import faceit_friends as ff

ff.get_friends('name')  # returns all friends for 'name'
```

Return all similar friends for name's friends

```
ff.similar_friends('name')
```

Print similar names for name1's and name2's friends. There can be as many names as u want.

```
ff.similar_friends('name1', 'name2')
```


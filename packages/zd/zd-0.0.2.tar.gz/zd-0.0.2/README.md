# read

```
import zd

with zd.open(
  "./test.zd"
) as f:
  for i in f:
    print(i)
```

# write

```
import zd

with zd.open( "./test.zd", "w") as f:
  for i in range(10):
    f.write(i)
```

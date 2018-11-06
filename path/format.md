# 格式
root和dir不一起使用
```
path.format(pathObject)
    pathObject <Object>
    dir <string>
    root <string>
    base <string>
    name <string>
    ext <string>
    Returns: <string>
```

# 示例
```
> path.format({dir:'C:\\project',name:'test',ext:'.js'})
'C:\\project\\test.js'
```
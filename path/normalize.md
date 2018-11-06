# 格式
不同的系统其表示的路径也是不同的，因此，如果是跨系统的应用，我们需要对路径进行好格式化
```
path.normalize(path)
```
# 示例
```
> path.normalize('C:/path/test')
'C:\\path\\test'
```
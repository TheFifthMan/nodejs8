# 截取文件名
```
//参数
path： 文件路径
ext：后缀
return： 文件名/文件名+后缀

// 例子
> p.basename('C:\\file\\rm-dir.js')
'rm-dir.js'

> p.basename('C:\\file\\rm-dir.js','.js')
'rm-dir'
```
# 截取文件夹名

```
//参数
path <string>
Returns: <string>

//例子
> p.dirname('C:\\file')
'C:\\'
> p.dirname('C:\\file\\')
'C:\\'
> p.dirname('C:\\file\\rm-dir.js')
'C:\\file'
```
# 截取文件后缀
```
//参数
path <string>
Returns: <string>

//例子
> p.extname('C:\\file\\rm-dir.js')
'.js'
```
# 判断文件是否为绝对路径
```
> p.isAbsolute('C:\\file')
true
> p.isAbsolute('.')
false
```

# 路径拼接
```
> p.join('C:\\',"file")
'C:\\file'
```

# parse
```
> p.parse('C:\\file\\rm-dir.js')
{ root: 'C:\\',
  dir: 'C:\\file',
  base: 'rm-dir.js',
  ext: '.js',
  name: 'rm-dir' }
```
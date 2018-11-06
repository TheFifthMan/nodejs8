# 概述
最近做nodejs的学习，总结nodejs的一些基础概念如下。
# 文件系统
首先从文件系统入手，文件系统使用的是nodeAPI里面fs模块来完成。具体文档可见：[file system](https://nodejs.org/dist/latest-v8.x/docs/api/fs.html). 下面是自己写的一些代码实例
## 操作文件内容
1. [写入文件](file/write-file.md)
2. [追加内容写入文件](file/append-content.md)
3. [读取文件](file/read-file.md)

## 操作文件夹
1. [创建文件夹](file/create-dir.md)
2. [删除文件夹](file/delete-dir.md)
3. [确定文件夹是否存在](file/access-dir.md)

## 操作文件
1. [复制移动](file/copy-file.md)
2. [删除文件](file/delete-file.md)
3. [确定文件是否存在](file/access-dir.md)
4. [文件属性](file/state-file.md)
5. [重命名/剪切](file/rename.md)

# 路径
node表示系统路径的模块为path，这一点有点类似python，python也分出了一个os.path模块来管理系统的路径。
1. [basename](path/basename.md)
2. [系统分号](path/delimiter.md)
3. [文件夹名](path/dirname.md)
4. [后缀名](path/extname.md)
5. [路径格式化](path/format.md)
6. [路径拼接](path/join.md)
7. [格式化为系统合适的路径](path/normalize.md)
8. [parse](path/parse.md)
更多文档可见： [DOC](https://nodejs.org/dist/latest-v8.x/docs/api/path.html)

# 网络
这里主要总结一下agent部分，不涉及server部分。
1. [发送get请求]()
2. [发送post请求]()
3. [如何携带session]()
4. [如何上传文件]()

更多文档可见: [DOC](https://nodejs.org/dist/latest-v8.x/docs/api/http.html)

# OS模块
## os的基础信息

# Process模块

# Stream模块

# DNS模块

# 第三方模块
## supertest
## superagent
## request
## express

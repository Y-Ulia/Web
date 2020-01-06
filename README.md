# Web
前端笔记

```
1.处理浏览器自动带出密码list
/* https://revolution.screenstepslive.com/s/revolution/m/how-to/l/249-creating-a-password-field */
@font-face {
  font-family: 'password';
  src: url(./PasswordEntry.ttf);
}
input {
  font-family: 'password';
}
```

```
2.Element UI 控件el-input输入卡顿
<el-input @change="$forceUpdate()"></el-input>
```
```
3.paused before potential out-of-memory crash问题排查
数组引用，对象引用，dom节点太深，vue中可以使用$forceUpdate()进行处理更新视图
```

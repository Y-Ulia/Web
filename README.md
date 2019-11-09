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

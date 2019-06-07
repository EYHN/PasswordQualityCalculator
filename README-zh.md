# PasswordBenchmark

一个通过高级算法分析密码安全强度的 JavaScript 库。

[查看演示](https://eyhn.github.io/PasswordBenchmark/zh)

[English Ver.](./README.md)

## 如何使用

#### 在浏览器端

在 HTML 中添加 script 标签

```html
<script src="./PasswordBenchmark.js"></script>

<!-- [ 可选的 ] 大约 10000 个常用密码的列表, 86kb (gzip 32kb) -->
<script src="./MostPopularPasswords.js"></script>
```

调用 `PasswordBenchmark` 计算密码强度

```js
PasswordBenchmark('you password here');
// 返回计算出的密码强度
```

#### 在 Node.JS, Webpack...

从 npm 下载这个库

```shell
npm install --save password-benchmark
```

引入这个库并初始化常用密码列表

```js
import PasswordBenchmark from 'password-benchmark';

// [ 可选的 ] 大约 10000 个常用密码的列表, 86kb (gzip 32kb)
import MostPopularPasswords from 'password-benchmark/dist/MostPopularPasswords'

// 加载常用密码列表
PasswordBenchmark.PopularPasswords.load(MostPopularPasswords)
```

调用 `PasswordBenchmark` 计算密码强度

```js
PasswordBenchmark('you password here');
// 返回计算出的密码强度
```

## 算法来自于 KeePass

> KeePass 使用高级算法来估计密码的质量/强度。 它搜索模式，例如流行的密码（基于大约10000个最常见密码的内置列表;检测到大小写和L33t替换的变化），重复序列，数字（由多个数字组成），恒定差异序列等。覆盖整个密码的每个模式组合，计算成本（编码数据所需的比特数和模式标识符的顺序）。对于编码模式标识符，使用最佳静态熵编码器。 每个单个密码字符形成长度为1的模式，并使用依赖于字符空间的阻尼静态熵编码器进行编码。最小模式组合成本用作最终质量估计。
> 
> | 得分    | 强度    |
> |--------:|:-------|
> | 0-64    | 非常弱 |
> | 64-80 	| 弱     |
> | 80-112  | 中等   |
> | 112-128 | 强     |
> | ≥ 128   | 非常强 |
>
> https://keepass.info/help/kb/pw_quality_est.html
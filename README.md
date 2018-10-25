# @tsx-react-ui/mask

* 作者：maqing01
* 邮箱：475986855@qq.com

## 介绍

_The mask component of the react written in Typescript_

---

## 安装

组件使用 `npm` 进行管理，请使用以下命令进行组件安装：

```
npm i @tsx-react-ui/mask --save
```

- 安装cnpm `npm install -g cnpm --registry=https://registry.npm.taobao.org`


---

## 使用

### 样例文档

- 待开发

### 使用
配置实例：

```jsx
<Mask visible={this.state.visible} opacity={0.3} zIndex={9} onMaskClick={() => this.setState({ visible: false })}>
    <div>This is content</div>
</Mask>

```
### 配置参数

| Prop | Type | Default | Description |
| ---- |:----:|:-------:| :----------:|
| **`visible`** | `boolean` | `false` | 模态框是否可见 |
| **`opacity`** | `number` | `0.5` | 模态框透明度 |
| **`zIndex`** | `number` | `999` | 模态框堆叠顺序z-index |
| **`target`** | `function | undefined` | `undefined` | 返回传送目标元素 |
| **`className`** | `string` | `undefined` | 自定义样式名 |
| **`onMaskClick`** | `function` | `() => { }` | 自定义模态框点击事件 |

---

## 注意事项

- 组件注意事项

---

## Changelog

---

---
title: Vue 3 学习笔记
date: 2026-07-09
tags: [Vue, 学习笔记]
---

## Vue 3 核心特性

### Composition API

Vue 3 引入了 Composition API，提供了更灵活的代码组织方式。

```javascript
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)

function increment() {
  count.value++
}
```

### 响应式系统

Vue 3 使用 Proxy 替代了 Vue 2 的 Object.defineProperty，提供了更好的响应式体验。

### 组件通信

Vue 3 支持多种组件通信方式：

- Props / Emits
- Provide / Inject
- 事件总线
- Pinia (状态管理)

### 性能优化

Vue 3 在性能方面有了显著提升：

- 更快的虚拟 DOM
- 更小的打包体积
- 更好的 Tree-shaking 支持

## 学习资源

推荐一些学习 Vue 3 的好资源：

- [Vue 3 官方文档](https://vuejs.org/)
- [Vue Mastery](https://www.vuemastery.com/)
- [Vue.js Design Patterns and Best Practices](https://www.packtpub.com/product/vue-js-design-patterns-and-best-practices/9781800208426)

## Git 提交规范

- feat - 新功能 feature
- fix - 修复 bug
- docs - 文档注释
- style - 代码格式(不影响代码运行的变动)
- refactor - 重构、优化(既不增加新功能，也不是修复bug)
- perf - 性能优化
- test - 增加测试
- chore - 构建过程或辅助工具的变动
- revert - 回退
- build - 打包

## z-index

| topZ | child-z | position | dom                         |
| ---- | ------- | -------- | --------------------------- |
| body |         |          |                             |
| `1`  |         | relative | #inxii                      |
|      | `9`     | fixed    | pop-也可能是#inxii的孙元素  |
|      | `20`    | absolute | #gift-container             |
|      | `30`    | absolute | #red-envelope-rain          |
|      |         |          |                             |
| `2`  |         | fixed    | header                      |
| `9`  |         | relative | #yyeva_full_screen_position |
| `90` |         | absolute | PageProgress loading        |

## 入口

1. 主入口 /

2. 公众号个人中心 /me
3. 分享进入(新人用) /myWedding

## input

- inputmode="numeric" 整竖键盘
- inputmode="decimal" 小数键盘

### 配置初始化接口

- 新郎，新娘名， 作为网页title
- 主持人信息
- 工作人员信息
- 房间照片墙
- 默认房间照片墙（后台可配置）
- 红包雨总金额
- 红包雨总轮次
- 房间种类：是否买断（后台可配置）
- 房间开关：照片上屏（后台可配置）
- 房间开关：礼物上屏（后台可配置）
- 房间开关：红包雨（后台可配置）
- 房间开关：点歌（后台可配置）

```ts
const serarch = ref({
  page: 0,
  pageSize: 40,
})
const searchResult = ref({
  list: [] as any[],
  total: 0,
})

const refreshing = ref(false)
const moreLoading = ref(false)
const error = ref(false)
const finished = ref(false)

function toDetail(item: any) {
  console.log(error.value)
  return
  console.log(item)
  router.push({
    path: '/myWeddingDetail',
    query: {
      activityId: item.activityId,
    },
  })
}

async function onRefresh() {
  finished.value = false
  serarch.value.page = 1
  searchResult.value.list = []
  searchResult.value.total = 0
  await getList()
  refreshing.value = false
}

async function loadMore() {
  serarch.value.page += 1
  await getList()
  moreLoading.value = false
}

async function getList() {
  try {
    const res = await weddingApi.getWeddingByPage({
      page: serarch.value.page,
      pageSize: serarch.value.pageSize,
    })
    if (!res.isResultTrue) {
      error.value = true
      serarch.value.page -= 1
      return showToast(res.message)
    }
    const { total = 0, record = [] } = res.data
    searchResult.value.list.push(...record)
    searchResult.value.total = total
    finished.value = searchResult.value.list.length >= searchResult.value.total
  }
  catch (e: any) {
    error.value = true
    serarch.value.page -= 1
    showToast(e.message || '请求失败')
  }
}
```

```html
<van-pull-refresh
  v-model="refreshing"
  style="height: 100%; overflow: auto"
  pull-distance="80"
  style="height: 100%"
  @refresh="onRefresh"
>
  <van-list
    v-model:loading="moreLoading"
    v-model:error="error"
    :finished="finished"
    finished-text="没有更多了"
    error-text="请求失败，点击重新加载"
    @load="loadMore"
  >
    <div v-for="item in searchResult.list" :key="item.id" class="wedding-item" @click="toDetail(item)"></div>
  </van-list>
</van-pull-refresh>

```

# pnpm

安装公共依赖
```bash
pnpm install <pkg-name> -w
```

给子包安装依赖
```bash
pnpm i <pkg-name> -r --filter @test/web
```
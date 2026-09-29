# 本地预览

本网站沿用原来的 Academic Pages / Jekyll 模板。内容依据提供的 CV 填写；本地预览用于检查修改，提交并推送后由 GitHub Pages 更新线上网站。

## 打开网站

在 Finder 中双击本目录的 `Preview.command`。它会启动本地服务器并打开浏览器：

http://127.0.0.1:4000

预览时保留终端窗口；按 Control-C 可停止。若预览已启动，再次双击只会打开网页。

也可以在这个目录的终端中运行：

```bash
./Preview.command
```

如果遇到端口占用，请关闭先前运行的预览终端后重试；不要关闭不认识的服务。

## 编辑后查看

保存 Markdown、HTML 或 CSS 后，Jekyll 会重新生成网站，刷新浏览器即可查看。更改 `_config.yml` 后需要停止并重新启动预览。

## 文件位置

详细修改位置与示例见 `CONTENT_GUIDE.md`。

- `_pages/about.md`：首页简介和研究亮点。
- `_pages/research.md`：包含 NYBG 在研项目的科研经历。
- `_pages/interests.html` 与 `_data/interests.yml`：独立的研究兴趣页面，桌面端三个方向横向排列。
- `_pages/courses.html` 与 `_data/courses.json`：可展开课程、GPA、作业链接；`_data/skills.yml`：技能区与网页 CV 共用文案。
- `_data/manuscripts.yml`：两篇第一作者未发表稿件及其状态。
- `files/transcripts/`：按本人要求提供的原始成绩单 PDF，未作修改。
- `local/materials/素材说明.md`：照片与课程作业的目录、命名和说明模板。
- `_data/publications.yml`：论文信息，论文页和 CV 共用。
- `_pages/experience.md`：实习、暑校和技能。
- `_pages/cv.md`：网页简历，提供 PDF 简历下载。
- `files/CV_Keguang_Cheng.pdf`：由 Formatted 版 Word 转换的 PDF，供 CV 页面下载；Word 源文件仅保留在本地，不随网站上传。
- `_pages/personal.md`：About Me，介绍个人爱好和研究伙伴初一。
- `photo/`：原始照片，保留在本地，不直接进入网站或 Git；所选副本在 `images/interests/`、`images/personal/` 和 `images/fieldwork/`；头像是 `images/keguang-cheng-avatar.jpeg`。
- `_config.yml`：个人资料和正式网站设置。
- `_config_local.yml`：本地网址覆盖，不改变正式网站地址。
- `assets/css/profile.css`：小幅排版调整和打印样式。

## 本地环境

本机使用 Homebrew Ruby 3.3；Gem 依赖放在 `~/.cache/keguang-website/bundle`，不会被提交到仓库。生成的 `_site` 和 `Gemfile.lock` 沿用仓库的忽略规则。

`Preview.command`、`PREVIEW.md`、`CONTENT_GUIDE.md` 和模板示例内容已从网站输出中排除。本地预览不会部署或改变线上网站。本地 Word 简历、公开 PDF 与网页文案分别维护，后续编辑网页不会自动重写下载文件。

本地预览的 Sass 缓存写入 `/private/tmp/keguang-website-sass-cache`，避免 iCloud 缓存文件读取停滞；该目录可自动重新生成。

## 发布到 GitHub

正式网站：https://keguangcheng.github.io/

GitHub Pages 从本仓库的 `master` 分支根目录构建。请在 `keguangcheng-website` 目录操作，不要在旧的 `academicpages.github.io` 模板副本里执行。

本地预览确认无误后，在终端运行：

```bash
git status
git diff
git add -A
git commit -m "Update academic website"
git push origin master
```

`git add -A` 会包含本目录所有未被忽略的修改，请先确认 `git status` 中的文件属于本次更新。原始 `photo/`、`local/` 和生成的 `_site/` 不会提交。`_config_local.yml` 只在预览命令中加载，GitHub Pages 使用 `_config.yml` 中的正式网址。

推送后可在 GitHub 仓库的 Actions 页面查看 Pages 构建结果，再刷新正式网站。如果推送提示远端有新提交或分支分叉，先停下检查，不要使用强制推送。

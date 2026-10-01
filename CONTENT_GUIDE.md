# 网站文案修改指南

网站源文件位于 `keguangcheng-website` 仓库目录。

请编辑这个目录里的源文件。`academicpages.github.io` 是旧目录；`_site/` 是自动生成的网页，里面的修改会被覆盖。

## 每部分在哪里改

| 网页内容 | 源文件 | 修改位置 |
| --- | --- | --- |
| 首页简介、研究亮点、按钮 | `_pages/about.md` | 标题下的正文 |
| 研究兴趣的开头和点击图片提示 | `_pages/interests.html` | `<p>…</p>` 中的文字 |
| 研究兴趣的三个方向 | `_data/interests.yml` | `title` 标题、`description` 简介、`label` 链接文字；首页三个方向也由这里同步 |
| 兴趣图片弹窗：学名、地点、说明 | `_data/interests.yml` | `photo_label`、`photo_location`、`photo_description`；`photo_sources` 仅保留供编辑核对，网页不显示 |
| 科研项目配图、图注与页末参考文献 | `_data/research_figures.json`；图片在 `images/research/` | `caption` 简介、`credit` 图号/作者、参考文献字段；`crop_width`/`crop_height` 控制展示区域 |
| 科研经历，包括 NYBG | `_pages/research.md` | 各项目标题下的正文 |
| 已发表论文 | `_data/publications.yml` | 论文题目、作者、期刊及链接；论文页和网页 CV 共用 |
| 未发表稿件 | `_data/manuscripts.yml` | 题目、第一作者身份、进度说明；与网页 CV 共用；投稿后按实际状态更新 |
| NYU 课程名称与简短介绍 | `_data/courses.json` | `graduate` 中各门课的 `title`、`description` |
| NYU 学期、成绩、修读状态 | `_data/courses.json` | `term`、`grade`、`status`；成绩显示在折叠状态的学期旁，未结束课程保留 `In progress` |
| 本科三组课程表 | `_data/courses.json` | `undergraduate_groups` 中的分类标题、课程 `title` 和 `grade` |
| Courses & Skills 开头、两校总 GPA、成绩单说明 | `_pages/courses.html` | 对应 `<p>` 内文字 |
| 实践技能（课程页与网页 CV 共用） | `_data/skills.yml` | `title` 和 `description`；按文件顺序显示，HPC 第一 |
| 实习、暑校经历 | `_pages/experience.md` | 对应标题下的正文 |
| 实习和分子实验照片图注 | `_data/fieldwork_photos.yml` | `caption` 是显示的图注；`alt` 是无障碍图片说明；`src` 是图片路径 |
| 网页 CV | `_pages/cv.md` | 学历、科研、技能等正文；部分论文信息来自上述共用数据 |
| About Me：爱好和初一 | `_pages/personal.md` | 正文与 `<figcaption>` 图注 |
| 左侧名字、身份、位置、邮箱、头像 | `_config.yml` | `author:` 下的 `name`、`bio`、`location`、`email`、`avatar` |
| 顶部导航名称和链接 | `_data/navigation.yml` | `title` 和 `url` |

## 最常见的改法

### NYU 课程

打开 `_data/courses.json`，搜索课程名或 slug（如 `applied-genomics`），只改需要的字段：

```json
"title": "Applied Genomics",
"description": "这里替换成新的英文介绍。"
```

八门课程现在都放在 `graduate` 中，显示顺序与文件顺序一致。介绍使用一段简短的客观表述；`In progress` 只作为对应课程的状态显示，不再另分一栏。

JSON 必须保留英文双引号、逗号和括号。文字内出现英文双引号时需写成 `\"`，不要把中文引号用于字段外层。

### 普通正文

`.md` 文件中可直接改段落；`##` 是二级标题，`**文字**` 是加粗。保留文件最上方两行 `---` 之间的配置和 `{% … %}`、`{{ … }}` 模板代码。

`.html` 文件中主要改 `<p>这里</p>`、`<h2>这里</h2>`、`<dd>这里</dd>` 的文字，保留成对标签和链接路径。

`.yml` 文件保留缩进。`description: "文字"` 这类条目只替换引号里的内容即可。

## 照片和成绩单

- 原始照片继续放在 `photo/`，文件名可使用中文说明；单纯放入该文件夹不会自动显示在网页上。
- 已采用的网页副本：头像 `images/keguang-cheng-avatar.jpeg`；实习和分子实验 `images/fieldwork/`；兴趣配图 `images/interests/`；你和初一 `images/personal/`。
- 鸭蛋原视频为 `photo/鸭蛋.mov`；网页循环动图为 `images/personal/chuyi-egg-20260929.webp`，静态帧为 `chuyi-egg-20260929-poster.jpg`。About Me 中动图在左、鸭子照片在右，不显示暂停按钮；减少动态效果的系统设置下默认显示静态帧。
- 研究兴趣图片点击后在本页弹窗显示，支持 Close、Esc、点击遮罩关闭。每张照片的简介在 `_data/interests.yml`；弹窗不显示资料链接。
- 首页研究进展、科研经历、技能、稿件题目和网页 CV 已依据 `CV_Keguang_Cheng_PhD_Formatted.docx` 同步。
- 四段实习每段两张；分子实验合照放在 Courses & Skills 的实践技能后。点击照片可查看完整图片。
- 两份成绩单均保留原始 PDF 内容，仅更名为 `files/transcripts/Keguang_Cheng_NYU_Transcript.pdf` 和 `files/transcripts/Keguang_Cheng_BJFU_Transcript.pdf`。在线查看链接在 `_pages/courses.html`，页面不再显示下载按钮。
- CV 页面下载文件为 `files/CV_Keguang_Cheng.pdf`，由所提供的 Formatted 版 Word 转换而来；打印按钮已删除。网页与下载 PDF 分别维护，修改网页不会自动更新 PDF。Word 源文件仅在本地保留，不上传到仓库；本次备份位于 `local/publication-cleanup-backup/files/CV_Keguang_Cheng.docx`。
- 课程作业仍可放在 `local/materials/coursework/课程英文名/`；命名和说明模板见 `local/materials/素材说明.md`。选好公开的文件后再复制到 `files/coursework/` 并把链接填入课程的 `work` 列表。

## 保存后查看

双击 `Preview.command` 启动预览。修改正文或数据文件后，保存并等待生成结束，再刷新浏览器。修改 `_config.yml` 后，在运行预览的终端按 Control-C，然后重新双击 `Preview.command`。

这些修改只影响本地预览；发布到 GitHub 是后续单独的步骤。本指南不会作为网页发布。

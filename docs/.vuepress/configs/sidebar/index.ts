import { readdirSync, statSync, writeFileSync } from 'fs'
import path from 'path'
function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
// 此脚本用于vuepress生成菜单 支持不同路由对应不同目录（我这里只支持两层嵌套目录）
const travel = (dir) => {
  const sidebar = {}
  const handel = (dir) => {
    for (const file of readdirSync(dir)) {
      if (
        file !== '.vuepress' &&
        file !== 'README.md' &&
        file !== '_category_.json' &&
        file !== 'index.md'
      ) {
        const pathName = path.join(dir, file)
        const pathNameArr = pathName.split('\\') // 根据这个判断当前遍历到第几次了
        const len = pathNameArr.length
        if (pathNameArr.length === 2) {
          // 遍历第1层的时候 将文件夹作为pathNameSpace
          sidebar[`/${file}/`] = []
        } else if (pathNameArr.length === 3) {
          // 遍历第2层的时候 将文件夹作为折叠导航，文件则不导航
          if (statSync(pathName).isDirectory()) {
            sidebar[`/${pathNameArr.at(1)}/`].unshift({
              text: capitalizeFirstLetter(
                pathNameArr[len - 1].split('_').join(' ')
              ),
              link: (pathName.replace('docs', '') + '\\index.md')
                .split('\\')
                .join('/'),
              collapsible: true,
              children: [],
            })
          } else {
            sidebar[`/${pathNameArr.at(1)}/`].unshift({
              text: capitalizeFirstLetter(
                pathNameArr[len - 1].replace('.md', '').split('_').join(' ')
              ),
              link: pathName.replace('docs', '').split('\\').join('/'),
            })
          }
        } else if (pathNameArr.length === 4) {
          // 遍历第3层的时候 3层的文件夹就是你的markdown，不能再有目录 我这里只支持两层嵌套目录
          const current = sidebar[`/${pathNameArr.at(1)}/`].find((item) => {
            return item.text == pathNameArr[2].split('_').join(' ')
          })
          current.children.unshift({
            text: capitalizeFirstLetter(
              pathNameArr[len - 1].replace('.md', '').split('_').join(' ')
            ),
            link: pathName.replace('docs', '').split('\\').join('/'),
          })
        }

        if (statSync(pathName).isDirectory()) {
          handel(pathName)
        } else {
        }
      }
    }
  }
  handel(dir)
  return sidebar
}

const sidebar = travel('docs/')
writeFileSync(path.join(__dirname, './sidebar.json'), JSON.stringify(sidebar))
export default sidebar

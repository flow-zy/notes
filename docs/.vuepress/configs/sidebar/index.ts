import { readdirSync, lstatSync, writeFileSync, PathLike } from 'fs';
import path from 'path';
function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// 读取目录
const readDirectory = (dir: PathLike) => {
  const arr: { file: any; children?: any[] }[] = [];
  const files = readdirSync(dir);
  files.forEach((file) => {
    if (!['.vuepress'].includes(file)) {
      const fullPath = path.join(dir, file).replaceAll('\\', '/');
      const isDir = lstatSync(fullPath).isDirectory();
      if (isDir) {
        // 代表有子目录的
        if (readDirectory(fullPath).length > 0) {
          arr.push({
            file: fullPath,
            children: readDirectory(fullPath),
          });
        } else {
          arr.push({
            file: fullPath,
          });
        }
      }
    }
  });
  return arr;
};
type Side = {
  link: string;
  activeMatch?: string;
  children?: Side[];
  text?: string;
};
// 处理目录
const filterSide = (sideArr: any[]) => {
  const newSide: Side[] = [];
  sideArr.forEach((side, j) => {
    // 有子集
    if (side.hasOwnProperty('children')) {
      const children = side.children;
      const obj: Side = {
        link: side.file.replace('docs', ''),
        children: [],
      };
      children.forEach((child: { file: string }, i: string | number) => {
        const newObj: Side = {
          link: child.file.replace('docs', ''),
          children: [],
        };
        const totalTask = readdirSync(child.file).filter(
          (file) => file.indexOf('index') == -1
        );
        totalTask.forEach((task) => {
          const link =
            child.file.replace('docs', '') + '/' + task.replace('.md', '');
          newObj.children.push({
            link,
            activeMatch: `^${link}`,
            text: capitalizeFirstLetter(task.replace('.md', '')),
          });
        });
        obj.children.push(newObj);
        newSide.push(obj);
      });
    } else {
      newSide.push({
        link: side.file.replace('docs', ''),
        activeMatch: side.file.replace('docs', ''),
      });
    }
  });
  return newSide;
};
// 生成菜单有三级嵌套
const travel = (dir: string) => {
  const arr = filterSide(readDirectory(dir));
  const handle = (array: any[]) => {
    return array.map((item) => {
      if (item.children) {
        item.children = handle(item.children);
      } else {
        item.link = item.link.replace('/index', '');
        item.activeMatch = item.activeMatch.replace('/index', '');
      }
      return item;
    });
  };
  return handle(arr);
};

const sidebar = travel('docs/');
writeFileSync(path.join(__dirname, './index.json'), JSON.stringify(sidebar));
export default sidebar;

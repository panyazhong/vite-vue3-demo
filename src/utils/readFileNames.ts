interface FileType {
  [key: string]: string;
}

// 获取src/icons/svg 下面的 所有 .svg文件
const files: Record<string, FileType> = import.meta.globEager(
  '/src/icons/svg/*.svg'
);

const readFileNames = function (): any {
  // 因为通过 import.meta.globEager 返回的列表不能迭代所以直接使用 Object.keys 拿到 key 遍历
  let icons = <any>[];
  Object.keys(files).forEach((file: string) => {
    let name = file.split('/')[file.split('/').length - 1].split('.')[0];
    icons.push(name);
  });

  return icons;
};

export default readFileNames;

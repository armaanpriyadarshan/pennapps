const path = require("path");



const getStorageRootPath = () => {
  return path.join(__dirname, "../storage");
}

const getTempStoragePath = () => {
  return path.join(__dirname, "../storage/uploads");
}


const moveFileAfterCreation = async (fileName, newPath) => {
  const fullTempPath = path.join(getTempStoragePath(), fileName);
  const fullNewPath = path.join(getStorageRootPath(), newPath);
  await changeFilePath(fullTempPath, fullNewPath)
}

const getFile = async (filePath, rootPath=getStorageRootPath()) => {
  try {
    const fullFilePath = path.join(rootPath, filePath);
    const file = await fsPromises.readFile(fullFilePath);
    
    return file;
  } catch (err) {
    throw new Error(`Error getting file: ${err}`);
  }
}

const changeFilePath = async (fullOldPath, fullNewPath) => {
  try {
    // attempt to move file
    await fsPromises.rename(fullOldPath, fullNewPath);
  } catch (err) {
    // attempt to copy file to new path then delete original
    try {
      const readStream = fs.createReadStream(fullOldPath);
      const writeStream = fs.createWriteStream(fullNewPath);
      
      await pipeline(readStream, writeStream);

      await fsPromises.unlink(fullOldPath);
    } catch (err) {
      throw new Error(`Error moving file: ${err}`);
    }
  }
}

module.exports = {
  moveFileAfterCreation,
  getFile,
}
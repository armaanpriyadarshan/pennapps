const path = require("path");
const fileService = require("./fileService");

const renderTintedShells = async (shell, color) => {
  const icon = await fileService.getFile("/shells/icons/default_" + shell + ".png");
  const model = await fileService.getFile("/shells/models/default_" + shell + "_spin.gif");

  const icon_tinted = await tintMedia(color, icon);
  const model_tinted = await tintMedia(color, model);
  

}

const tintMedia = async (color, imageBuffer) => {
  try {
    const tintedImage = await sharp(imageBuffer).tint(color).toBuffer();
    return tintedImage;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  moveFileAfterCreation,
  getFile,
}
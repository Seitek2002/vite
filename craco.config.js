const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@src": resolvePath("./src"),
      "@components": resolvePath("./src/components"),
      "@modules": resolvePath("./src/components/Modules"),
      "@ui": resolvePath("./src/components/UI"),
      "@utils": resolvePath("./src/utils"),
      "@stores": resolvePath("./src/stores"),
      "@services": resolvePath("./src/services"),
    },
  },
};

// ============= WARNING ===============//
// Не забудьте скачать библиотеку для работоспособности alias (npm i @craco/craco);
// Более подробная инфа на сайте https://www.npmjs.com/package/@craco/craco

// При добавлении новых alias обязательно надо перезапустить проект
// Если при запуске проекта у вас ничего не работает проверьте в файле package.json поле scripts.start значение должно быть craco start
// Остальных полей это тоже касается "build": "craco build" || "test": "craco test"
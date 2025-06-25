export const generateUUID = (): string => {
  const hexDigits = 16;
  const variantMask = 0x3;
  const variantBase = 0x8;
  const template = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";

  return template.replace(/[xy]/g, (char) => {
    const randomValue = Math.floor(Math.random() * hexDigits);

    if (char === "x") {
      return randomValue.toString(hexDigits);
    }

    const variantValue = (randomValue & variantMask) | variantBase;

    return variantValue.toString(hexDigits);
  });
};

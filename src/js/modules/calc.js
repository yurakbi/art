const calc = (size, material, options, promocode, result) => {
    const sizesBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);
    
    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizesBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizesBlock.value == '' || materialBlock == '') {
            resultBlock.textContent = "Будь ласка виберіть розмір та матеріал картини";
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizesBlock.addEventListener('change',calcFunc);
    materialBlock.addEventListener('change',calcFunc);
    optionsBlock.addEventListener('change',calcFunc);
    promocodeBlock.addEventListener('input',calcFunc);
        

};

export default calc;
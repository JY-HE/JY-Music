/**
 * @desc 读出的音乐时长为 long 类型以毫秒数为单位，例如：将 234736 转化为分钟和秒应为 03:55 （包含四舍五入）
 * @param duration 音乐时长
 * @return
 */
export const formatTime = (duration: number | string) => {

    let time: number = Number(duration) / 1000;

    if (time < -1) return;

    if (time === 0) {
        return `00:00`;
    }

    let hour: string = Math.floor(time / 60 / 60).toString();

    hour = hour.padStart(2, '0');

    let minute: string = (Math.floor(time / 60) % 60).toString();

    minute = minute.padStart(2, '0');

    let second: string = (Math.floor(time) % 60).toString();

    second = second.padStart(2, '0');

    // return `${hour}:${minute}:${second}`;
    return `${minute}:${second}`;
};


/**
 * @desc 秒数转化为时分秒
 * @param {Number} duration 秒数
 * @return
 */
export const formatSeconds = (duration: number | string) => {

    let time: number = Number(duration);

    if (time < -1) return;

    if (time === 0) {
        return `00:00`;
    }

    let hour: string = Math.floor(time / 60 / 60 % 24).toString();

    hour = hour.padStart(2, '0');

    let minute: string = (Math.floor(time / 60) % 60).toString();

    minute = minute.padStart(2, '0');

    let second: string = (Math.floor(time) % 60).toString();

    second = second.padStart(2, '0');

    return `${minute}:${second}`;
};


/**
 * @desc 处理轮播图每次轮播的数量
 * @param {Number} num  轮播数量
 * @param {Array<any>} arr  目标数组
 * @return  {Array<any>} newArr
 */
export const handlerPlayList = (num: number, arr: Array<any>) => {
    const newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.splice(0, num));
    }
    return newArr;
};


/**
* @desc 数字格式化带单位。 如 100000 转为10万
* @param {Number | String} number 需要转换的数
* @param {Number} point 需要保留的小数位数
*/
export const tranNumber = (number: number | string, point: number) => {
    let num = Number(number);
    let unit = '';
    /**
     * 判断取哪个单位
     */
    if (num <= 10000) {
        // 如果小于10000则直接返回
        unit = ''
        return num;
    } else if (num > 10000 || num < 99999999) {
        unit = '万'
    } else if (num > 100000000) {
        unit = '亿'
    }
    /**
     * 大于一万则运行下方计算
     */
    let i = Math.floor(Math.log(num) / Math.log(10000))
    let sizes = ((num / Math.pow(10000, i))).toFixed(point)
    return `${sizes}${unit}`

};
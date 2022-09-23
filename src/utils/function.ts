/**
 * Android 音乐播放器应用里，读出的音乐时长为 long 类型以毫秒数为单位，例如：将 234736 转化为分钟和秒应为 03:55 （包含四舍五入）
 * @param duration 音乐时长
 * @return
 */
export const formatTime = (duration: number) => {
    if (duration < -1) return;

    let time: number = Number(duration) / 1000;

    let hour: string = Math.floor(time / 60 / 60).toString();

    hour = hour.padStart(2, '0');

    let minute: string = (Math.floor(time / 60) % 60).toString();

    minute = minute.padStart(2, '0');

    let second: string = (Math.floor(time) % 60).toString();

    second = second.padStart(2, '0');

    return `${hour}:${minute}:${second}`;
};
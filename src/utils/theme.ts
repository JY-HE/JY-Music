
/* @desc 设置主题样式 
 * @params style {string} 样式名称
 * @params color {string} 样式颜色
 */

const setThemeStyle = (style: string, color: string) => {
    const root = document.documentElement;
    root.style.setProperty(`--${style}`, color);
}

export default setThemeStyle
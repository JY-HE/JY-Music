

class Theme {

    /* @desc 设置默认主题
     * @params color {string} 样式颜色
    */
    setDefaultTheme(styleObj: any) {
        for (const key in styleObj) {
            if (Object.prototype.hasOwnProperty.call(styleObj, key)) {
                this.setStyleColor(key, styleObj[key])
            }
        }
    }

    /* @desc 设置主题颜色 
     * @params color {string} 样式颜色
    */
    setThemeColor(color: string) {
        const root = document.documentElement;
        root.style.setProperty('--theme-color', color);
    }

    /* @desc 设置某个样式颜色 
     * @params style {string} 样式名称
     * @params color {string} 样式颜色
    */
    setStyleColor(style: string, color: string) {
        const root = document.documentElement;
        root.style.setProperty(`--${style}`, color);
    }

}

const theme = new Theme()
export default theme
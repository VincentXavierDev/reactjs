Style inline
// Sử dụng {{}} để style: not recommended 
các thuộc tính kebab- case => camelCase
eg: <p style={{color: 'red'}}></p>
lợi ích: có thể thêm các câu điều kiện trực tiếp vào style
<p style={{color: cond ? 'blue:'red'}}></p>

vailla css: không có scope
Scoping CSS rule

đặt tên file css thêm .module
eg: Header.module.css
use: import classes from 'Header.module.css'
<p className={classes.paragraph}> //paragraph là 1 class: .paragraph{color: red} 

package: 
styled component: npm i styled-components

usage:
import {styled} from 'styled-components'
<>
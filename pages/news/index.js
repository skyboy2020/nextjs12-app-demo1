//Fragment标签可以在语法上需要标签、
//但目标结构中不需要标签的地方使用。真实Dom树不会生成该标签；
//Fragment只能传递key这一个属性。
import { Fragment  } from "react"
//用Link标签标记链接，可以避免刷新页面，保持应用页面状态，给用户更好的体验
import Link from 'next/link'

const index = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
            <Link href='/news/nextjs-is-a-great-framework'>
              <a>NextJS Is A Great Framework</a>
            </Link>
            </li>  
        <li>Something Else</li>  
      </ul>
    </Fragment>
  );
};

export default index;

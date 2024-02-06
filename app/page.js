import Button from "./_components/button"

export default function Home() {
  return(
   <div>
    <p>
      ぽてぽて
    </p>
    <ul>
      <li>とり天</li> 
      <li>唐揚げ</li>
      <li>温泉たまご</li>
      <li>プリン</li>
    </ul>

  
    <Button message="承認"/>

    <Button message="保留"/>
    <Button message="却下"/>
    <Button message="ぽてぽて"/>
    </div> 
  )
}
